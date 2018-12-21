
let gulp = require("gulp"); //引入gulp模块
let minifyJS = require("gulp-babel-minify"); //引入js压缩模块
let minifyCSS = require("gulp-clean-css"); //引入css压缩模块
let connect = require("gulp-connect"); //引入服务器
let sass = require("gulp-sass"); //引入sass编译
let Proxy = require("gulp-connect-proxy"); //引入代理服务器

//定义一个任务
gulp.task("saber",()=>{
    //压缩js
    gulp.src("./Music/**/*.js")//读取文件
        .pipe(minifyJS())//编译压缩
        .pipe(gulp.dest("./NewMusic")); // 生成到指定目录
    
    //复制html
    gulp.src("./Music/**/*.html")//读取文件
        .pipe(gulp.dest("./NewMusic")); //生成到指定目录

    //复制json
    gulp.src("./Music/**/*.json") //读取文件
        .pipe(gulp.dest("./NewMusic"))//生成到指定目录
    
    //读取sass编译
    gulp.src("./Music/**/*.scss")//读取文件
        .pipe(sass({
            outputStyle : "expanded" //压缩格式
        }))
        .pipe(minifyCSS()) //压缩文件
        .pipe(gulp.dest("./NewMusic")); //生成到指定目录
});

//执行saber任务后，NewMusic文件夹里有文件了，在执行以下任务，进行实时更新
//html
gulp.task("readHTML",()=>{
    gulp.src("./Music/**/*.html")
        .pipe(gulp.dest("./NewMusic"))
        .pipe(connect.reload()); // 复制
});
//json
gulp.task("readJSON",()=>{
    gulp.src("./Music/**/*.json")
        .pipe(gulp.dest("./NewMusic"))
        .pipe(connect.reload()); // 复制
});
//css
gulp.task("readCSS",()=>{
    gulp.src("./Music/**/*.scss")
        .pipe(sass({
            outputStyle : "expanded"
        })).on("error",sass.logError)
        // .pipe(minifyCSS())
        .pipe(gulp.dest("./NewMusic"));
});
//js
gulp.task("readJS",()=>{
    gulp.src("./Music/**/*.js")
        .pipe(minifyJS())
        .pipe(gulp.dest("./NewMusic"));
});

gulp.task("serverSaber",()=>{
    //创建服务器
    connect.server({
        root : "NewMusic", // 服务器指定目录
        port :8080, // 端口
        livereload : true, //热部署（即时刷新）
        middleware : function(connect,opt){ //服务器代理
            opt.route = '/proxy';
            var proxy = new Proxy(opt);
            return [proxy];
        }
    });
  //监听所有文件的变化，执行相应的任务
  gulp.watch("./Music/**/*.html",["readHTML"]);
  gulp.watch("./Music/**/*.json",["readHTML","readJSON"]);
  gulp.watch("./Music/**/*.scss",["readHTML","readCSS"]);
  gulp.watch("./Music/**/*.js",["readHTML","readJS"]);
  console.log("开启热加载");

});

