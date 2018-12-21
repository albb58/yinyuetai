console.log("模板模块被加载了！");
define(["jquery","template-web","myswiper",],function($,template,myswiper,){
    //根据我们之前的设定，模块B需要使用Jquery
    //define函数中的第一个参数，用来表明，我们即将引用哪个模块。
    //由于之前我们已经定义过了jquery模块，所以这里可以直接使用
    //注意，你如果不写声明，这里是用不了jQuery的
    //你如果注意到第一个参数是一个数组，那就应该猜到，其实我们可以一次引用好多模块
    //jq变量就是jquery，你如果不习惯，把名字改回$就是了

    return {
        // 搜索框模板
        search : function(){
            $("#shop_recommend>ul").load("/template/hotSearch.html",function(){
                //map用来做缓存，速度比较快
                let shopCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/shop.yinyuetai.com/search/keyword/relatedHot.json",
                    dataType : "json",
                    success : function(data){
                        // console.log(data);
                        //数据中HOT对象
                        var search = data.data.HOT;
                        // console.log(search);
                        // var a = search[0].name;
                        // console.log(a);
                        //引入模板
                        let temper = template("hot_shop", {
                            list : search
                        });
                        //放入缓存
                        search.forEach(shop=>{
                            shopCache.set( shop.id, shop );
                        });
                        $("#shop_recommend>ul").html(temper );
                    }
                }) 
            })
        },
        // 艺人分类模板
        actor : function(){
            $("#actorListBox").load("/template/actorListBox.html",function(){
                //map用来做缓存，速度比较快
                let actorCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/shop.yinyuetai.com/tag/list.json?tag_type=11&number=10",
                    dataType : "json",
                    success : function(data){
                        //数据中data对象
                        var country = data.data;
                        // console.log(country);
                        //引入模板
                        let temper = template("actorList", {
                            list : country
                        });
                        //放入缓存
                        country.forEach(actor=>{
                            actorCache.set( actor.id, actor );
                        });
                        $("#actorListBox").html(temper );
                    }
                }) 
            })
        },
        // 轮播图模板
        banner : function(){
            $("#sliderBox").load("/template/swiperBanner.html",function(){
                //map用来做缓存，速度比较快
                let sliderCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/shop.yinyuetai.com/shopRec/list.json?rec_id=7",
                    dataType : "json",
                    success : function(data){
                        //数据中data对象
                        var slider = data.data;
                        // console.log(slider);
                        //引入模板
                        let temper = template("swiperSlider", {
                            list : slider
                        });
                        //放入缓存
                        slider.forEach(banner=>{
                            sliderCache.set( banner.id, banner );
                        });
                        $("#sliderBox").html(temper );
                        //初始化swiper
                        myswiper.Swiper1();
                    }
                })
            })
        },
        // 粉丝用品轮播图模板
        fansprop : function(){
            $("#fans_list").load("/template/fansProps.html",function(){
                //map用来做缓存，速度比较快
                let fansCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/shop.yinyuetai.com/shopRec/list.json?rec_id=2&max_count=",
                    dataType : "json",
                    success : function(data){
                        //数据中data对象
                        var fan = data.data;
                        //引入模板
                        let temper = template("fans_prop", {
                            list : fan
                        });
                        //放入缓存
                        fan.forEach(fansBanner=>{
                            fansCache.set( fansBanner.id, fansBanner );
                        });
                        $("#fans_list").html(temper );
                        //初始化swiper
                        myswiper.Swiper2();
                    }
                })
            })
        },
        // 商城福利
        fuli : function(){
            $(".fuli").load("/template/shopfuli.html",function(){
                //map用来做缓存，速度比较快
                let fuliCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/shop.yinyuetai.com/shopRec/list.json?rec_id=22&max_count=1",
                    dataType : "json",
                    success : function(data){
                        //数据中data对象
                        var fuli = data.data;
                        //引入模板
                        let temper = template("fuli_shop", {
                            list : fuli
                        });
                        //放入缓存
                        fuli.forEach(img=>{
                            fuliCache.set( img.id, img );
                        });
                        $(".fuli").html(temper );
                    }
                })
            })
        },
        // TOP榜
        topGoods : function(){
            $(".goods_chart").load("/template/TOP.html",function(){
                //map用来做缓存，速度比较快
                let topCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/shop.yinyuetai.com/goods/listForGood.json?order_snum=true&max_count=8",
                    dataType : "json",
                    success : function(data){
                        var top = data.data;
                        var tempstr = template("top-goods", {
                            list : top
                        });
                        
                        //放入缓存
                        top.forEach(top=>{
                            topCache.set( top.id, top );
                        });
                        $(".goods_chart").html( tempstr );
                    }
                })
            })
        },
        topActor : function(){
            $(".actor_chart").load("/template/TOP.html",function(){
                //map用来做缓存，速度比较快
                let topCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/shop.yinyuetai.com/goods/listForArt.json",
                    dataType : "json",
                    success : function(data){
                        var top = data.data;
                        var tempstr = template("top-actor", {
                            list : top
                        });
                        
                        //放入缓存
                        top.forEach(top=>{
                            topCache.set( top.id, top );
                        });
                        $(".actor_chart").html( tempstr );
                    }
                })
            })
        },
        // 新品首发
        newGoods : function(){
            $(".goodsList_new").load("/template/newGoods.html",function(){
                //map用来做缓存，速度比较快
                let newCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/shop.yinyuetai.com/goods/publish.json?max_count=6",
                    dataType : "json",
                    success : function(data){
                        var New = data.data;
                        var tempstr = template("new-Goods", {
                            list : New
                        });
                        
                        //放入缓存
                        New.forEach(New=>{
                            newCache.set( New.id, New );
                        });
                        $(".goodsList_new").html( tempstr );
                    }
                })
            })
        },
        // 大家喜欢
        welike : function(){
            $(".like_goodsList").load("/template/weLike.html",function(){
                //map用来做缓存，速度比较快
                let likeCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/shop.yinyuetai.com/everybody/favorites.json",
                    dataType : "json",
                    success : function(data){
                        var like = data.data;
                        var tempstr = template("we_Like", {
                            list : like
                        });
                        
                        //放入缓存
                        like.forEach(like=>{
                            likeCache.set( like.id, like );
                        });
                        $(".like_goodsList").html( tempstr );
                    }
                })
            })
        },
        // 专辑推荐 & 专辑榜
        albumfirst : function(){
            $(".album_first").load("/template/album.html",function(){
                let firstCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/shop.yinyuetai.com/shopRec/list.json?rec_id=21&max_count=1",
                    dataType : "json",
                    success : function(data){
                        var firstalbum = data.data;
                        var tempstr = template("albumFirst",{
                            list : firstalbum
                        })
                        firstalbum.forEach(albumfi=>{
                            firstCache.set(albumfi.id,albumfi);
                        })
                        $(".album_first").html(tempstr);
                    }
                })
            })
        },
        album : function(){
            $(".albumList ul").load("/template/album.html",function(){
                let albumCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/shop.yinyuetai.com/shopRec/list.json?rec_id=3&max_count=6",
                    dataType : "json",
                    success : function(data){
                        var album = data.data;
                        var tempstr = template("album_box",{
                            list : album
                        })
                        album.forEach(album=>{
                            albumCache.set(album.id,album);
                        })
                        $(".albumList ul").html(tempstr);
                    }
                })
            })
        },
        mainland : function(){
            $(".mainland").load("/template/album.html",function(){
                let mlCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/vchart.yinyuetai.com/album/get-trend?type=ml",
                    dataType : "json",
                    success : function(data){
                        var album_mainland = data.albums;
                        var tempstr = template("album_mainland",{
                            list : album_mainland
                        })
                        album_mainland.forEach(mainland=>{
                            mlCache.set(mainland.id,mainland);
                        })
                        $(".mainland").html(tempstr).children("li").on("mouseenter",function(){
                            $(this).addClass("movein").siblings().removeClass("movein");
                        });
                    }
                })
            })
        },
        Import : function(){
            $(".import").load("/template/album.html",function(){
                let imCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/vchart.yinyuetai.com/album/get-trend?type=im",
                    dataType : "json",
                    success : function(data){
                        var album_import = data.albums;
                        var tempstr = template("album_import",{
                            list : album_import
                        })
                        album_import.forEach(Import=>{
                            imCache.set(Import.id,Import);
                        })
                        $(".import").html(tempstr).children("li").on("mouseenter",function(){
                            $(this).addClass("movein").siblings().removeClass("movein");
                        });
                    }
                })
            })
        },
        near : function(){
            $(".nearList").load("/template/grayBigbox.html",function(){
                let nearCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/shop.yinyuetai.com/shopRec/list.json?rec_id=4&max_count=10",
                    dataType : "json",
                    success : function(data){
                        var near = data.data;
                        var tempstr = template("near_Box",{
                            list : near
                        })
                        near.forEach(nearBox=>{
                            nearCache.set(nearBox.id,nearBox);
                        })
                        $(".nearList").html(tempstr);
                    }
                })
            })
        },
        special : function(){
            $(".specialList").load("/template/grayBigbox.html",function(){
                let speCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/shop.yinyuetai.com/shopRec/list.json?rec_id=13&max_count=4",
                    dataType : "json",
                    success : function(data){
                        var special = data.data;
                        var tempstr = template("special_Box",{
                            list : special
                        })
                        special.forEach(specialBox=>{
                            speCache.set(specialBox.id,specialBox);
                        })
                        $(".specialList").html(tempstr);
                    }
                })
            })
        },
        hot : function(){
            $(".hotList").load("/template/grayBigbox.html",function(){
                let hotCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/shop.yinyuetai.com/shopRec/list.json?rec_id=12&max_count=10",
                    dataType : "json",
                    success : function(data){
                        var hot = data.data;
                        var tempstr = template("hot_Box",{
                            list : hot
                        })
                        hot.forEach(hotgoods=>{
                            hotCache.set(hotgoods.id,hotgoods);
                        })
                        $(".hotList").html(tempstr);
                    }
                })
            })
        },
        china : function(){
            $(".chinaList").load("/template/grayBigbox.html",function(){
                let chCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/shop.yinyuetai.com/shopRec/list.json?rec_id=11&max_count=10",
                    dataType : "json",
                    success : function(data){
                        var china = data.data;
                        var tempstr = template("china_Box",{
                            list : china
                        })
                        china.forEach(chinaGoods=>{
                            chCache.set(chinaGoods.id,chinaGoods);
                        })
                        $(".chinaList").html(tempstr);
                    }
                })
            })
        },
        // 商品列表
        goods_list : function(){
            $(".goods-list").load("/template/pages/goods.html",function(){
                //map用来做缓存，速度比较快
                let goodsCache = new Map();
                $.ajax({
                    url : "http://localhost:8080/proxy/shop.yinyuetai.com/search/goods.json?bannerType=surrounding&upTime=desc&pageSize=40",
                    dataType : "json",
                    success : function(data){
                        //数据中data对象
                        var goods = data.data.goodsPage.list;
                        // console.log(slider);
                        //引入模板
                        let temper = template("goods", {
                            list : goods
                        });
                        //放入缓存
                        goods.forEach(goods=>{
                            goodsCache.set( goods.id, goods );
                        });
                        $(".goods-list").html(temper );
                    }
                })
            })
        },
    }
});