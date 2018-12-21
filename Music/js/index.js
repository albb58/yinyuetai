console.log("index.js文件执行了，接下来准备加载配置文件");

//现在加载配置文件
require(["conf/config"], function () { //找config文件
    //引用config文件后，然后才能引用配置好的其他模块
    require(["jquery","template","login"], function ($,template,login) { //（【引用的各个模块】）
        $(function () {
            $("#input_sear").on("focus", function () {
                $(".shopSearch ").addClass("input_active");
                $("#shop_recommend").animate({top : 38},100).show();
            })
            $("#input_sear").on("blur", function () {
                $(".shopSearch ").removeClass("input_active");
                $("#shop_recommend").hide();
            })
            // 导航
            $(".navbox li").on("click",function(){
                $(this).addClass("active").siblings().removeClass("active");
            })
            // TOP榜
            $("#actor_title").on("click",function(){
                $(this).addClass("title_active").siblings().removeClass("title_active");
                $(".actor_chart").css("display","block");
                $(".goods_chart").css("display","none");
            })
            $("#goods_title").on("click",function(){
                $(this).addClass("title_active").siblings().removeClass("title_active");
                $(".goods_chart").css("display","block");
                $(".actor_chart").css("display","none");
            })
            // 大家喜欢
            $("#change").on("click",function(){
                if($(".li0").hasClass("show")){
                    $(".li1").addClass("show").end().find(".li0").removeClass("show");
                }else if($(".li1").hasClass("show")){
                    $(".li2").addClass("show").end().find(".li1").removeClass("show");
                }else if($(".li2").hasClass("show")){
                    $(".li3").addClass("show").end().find(".li2").removeClass("show");
                }else if($(".li3").hasClass("show")){
                    $(".li0").addClass("show").end().find(".li3").removeClass("show");
                }
            })
            // 专辑榜
            $("#ml").on("mouseenter",function(){
                $(this).addClass("albumSaleActive").siblings().removeClass("albumSaleActive");
                $(".mainland").css("display","block").end().find(".import").css("display","none");
            })
            $("#im").on("mouseenter",function(){
                $(this).addClass("albumSaleActive").siblings().removeClass("albumSaleActive");
                $(".import").css("display","block").end().find(".mainland").css("display","none");
            })
            // 回到顶部
            $(window).scroll(()=>{
                //滚动距离超过600，出现回到顶部按钮
                if($(this).scrollTop()>600){
                    $("#return_top").css("display","block");
                }else {
                    $("#return_top").css("display","none");
                }
            })
            //点击按钮，回到顶部
			$("#return_top").on("click",()=>{
				$("html,body").animate({scrollTop : 0},500);
            });
            // 登录模块
            login.logIn();
            // 搜索框模板导入
            template.search();
            // 艺人分类模板导入
            template.actor();
            // 轮播图模板导入
            template.banner();
            // 粉丝用品轮播图模板
            template.fansprop();
            // 福利商城模板
            template.fuli();
            // TOP榜单模板引入
            template.topGoods();
            template.topActor();
            // 新品首发模板导入
            template.newGoods();
            // 大家喜欢模板导入
            template.welike();
            // 专辑推荐 & 专辑榜模板导入
            template.albumfirst();
            template.album();
            template.mainland();
            template.Import();
            // 爆款周边
            template.near();
            // 活动专区
            template.special();
            // 热卖商品
            template.hot();
            // 华娱商品
            template.china();
        })
    })
})