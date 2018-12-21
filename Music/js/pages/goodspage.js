console.log("goodspage.js文件执行了，接下来准备加载配置文件");

//现在加载配置文件
require(["../conf/config"], function () { //找config文件
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
            //打开收起菜单
            $("#more").on("click",function(){
                if($(this).hasClass("select_Loadmore")){
                    $(".select_actorList").addClass("select_actorListHg");
                    $(this).addClass("pack_up").removeClass("select_Loadmore");
                }else {
                    $(".select_actorList").removeClass("select_actorListHg");
                    $(".pack_up").addClass("select_Loadmore").removeClass("pack_up");
                }
                
            });
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
            // 商品列表模板导入
            template.goods_list();
        })
    })
})