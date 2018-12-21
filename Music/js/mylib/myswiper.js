console.log("这是轮播图模块！");
define(["jquery","swiper"],function($,swiper){
    //根据我们之前的设定，模块B需要使用Jquery
    //define函数中的第一个参数，用来表明，我们即将引用哪个模块。
    //由于之前我们已经定义过了jquery模块，所以这里可以直接使用
    //注意，你如果不写声明，这里是用不了jQuery的
    //你如果注意到第一个参数是一个数组，那就应该猜到，其实我们可以一次引用好多模块
    //jq变量就是jquery，你如果不习惯，把名字改回$就是了

    return {
        Swiper1: function(){
            var Swiper1 = new swiper ("#sliderBox", {
                direction: 'horizontal', //横向
                loop: true, // 轮回切换
                autoplay: { // 自动切换
                    delay: 3000, //停留时间
                    stopOnLastSlide: false,
                    disableOnInteraction: false, // 进行触碰或点击后不停止切换
                },
                // 如果需要分页器
                pagination: {
                el: '#pagination1',
                clickable :true,
                },
        
                // 如果需要前进后退按钮
                navigation: {
                prevEl: '.swiper_left',
                nextEl: '.swiper_right',
                },
                prevButton: '.swiper_left',
                nextButton: '.swiper_right',
            });
            // 划入停止切换
            $('#sliderBox').on("mouseenter",function(){
                Swiper1.autoplay.stop();
            });
            // 划出继续切换
            $('#sliderBox').on("mouseleave",function(){
                Swiper1.autoplay.start();
            });
        },
        Swiper2: function(){
            var Swiper2 = new swiper ("#fans_list", {
                direction: 'horizontal', //横向
                loop: false, // 轮回切换
                // 如果需要分页器
                pagination: {
                el: '#pagination2',
                clickable :true,
                type : 'custom',//自定义样式
                renderCustom: function (swiper, current, total) {
                    var paginationHtml = "";
                    for(var i= 0; i< total; i++) {
                        // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
                        if(i === (current -1)){
                            paginationHtml += '<span class="fans_page fans_page_active"></span>';
                        }else {
                            paginationHtml += '<span class="fans_page"></span>';
                        }
                    }
                    return paginationHtml;
                  }
                },
        
                // 如果需要前进后退按钮
                navigation: {
                nextEl: '#fans_right',
                prevEl: '#fans_left',
                },
                prevButton: '#fans_left',
                nextButton: '#fans_right',
                // 显示几个
                slidesPerView : 4,
                // 每组几个
                slidesPerGroup : 4,
                // 间隔距离
                spaceBetween : 20,
            });
        },
    }
});