console.log("配置文件被加载了！！！");

requirejs.config({
    baseUrl : "localhost:8080",
    paths : {
        "jquery" : "https://cdn.bootcss.com/jquery/2.2.1/jquery.min",
        "jq-cookie" : "/js/lib/jquery.cookie",
        "template-web" : "/js/lib/template-web",
        "swiper" : "https://cdn.bootcss.com/Swiper/4.2.0/js/swiper.min",
        "myswiper" : "/js/mylib/myswiper",
        "template" : "/js/mylib/template",
        "login" : "/js/mylib/login",
    }
})