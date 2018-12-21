console.log("这是登录模块！");
define(["jquery","jq-cookie"],function($,){
    //根据我们之前的设定，模块B需要使用Jquery
    //define函数中的第一个参数，用来表明，我们即将引用哪个模块。
    //由于之前我们已经定义过了jquery模块，所以这里可以直接使用
    //注意，你如果不写声明，这里是用不了jQuery的
    //你如果注意到第一个参数是一个数组，那就应该猜到，其实我们可以一次引用好多模块
    //jq变量就是jquery，你如果不习惯，把名字改回$就是了

    return {
        logIn: function(){
            $(".shop_loginBtn").on("click", function() {
                $("#back").css("display", "block");
            })
            // 点击关闭按钮，登录模块消失
            $("#close").on("click", function() {
                $("#back").css("display", "none")
            })
            $("#loginbar div").on("click", function() {
                $(this).addClass("login_active").siblings().removeClass("login_active");
            })
            $("#loginbar div:first").on("click", function() {
                $("#login_area").css("display", "block");
                $("#regsiter_area").css("display", "none");
            })
            $("#loginbar div:last").on("click", function() {
                $("#regsiter_area").css("display", "block");
                $("#login_area").css("display", "none");
            })
            // 注册账号密码判定
            $("#regsiter_active").on("blur",function(){
                let username =/^\d{11}$/.test($("#regsiter_active").val());
                if(username){
                    $(this).parent().addClass("has-success").removeClass("has-error");
                }else {
                    $(this).parent().addClass("has-error").removeClass("has-success");
                }
                if($.cookie($("#regsiter_active").val()) != null) {//判断用户名是否在cookie中已存在
                    $(this).parent().addClass("has-error").removeClass("has-success");
                }
                if($("#regsiter_active").val() == "") { //输入框内容为空，清除样式
                    $(this).parent().removeClass("has-error").removeClass("has-success");
                }
            })
            $("#regsiter_pass").on("blur",function(){
                let password =/^[A-Za-z0-9]{6,20}$/.test($("#regsiter_pass").val());
                if(password){
                    $(this).parent().addClass("has-success").removeClass("has-error");
                }else {
                    $(this).parent().addClass("has-error").removeClass("has-success");
                }
                if($("#regsiter_pass").val() == "") { //输入框内容为空，清除样式
                    $(this).parent().removeClass("has-error").removeClass("has-success");
                }
            })
            // 注册都正确，点击注册按钮，登录模块消失
            $("#regsiter").on("click",function(){
                //内容为空，点击注册提示内容不能为空
                if($("#regsiter_active").val() == "") { 
                    $("#regsiter_active").parent().addClass("has-error");
                }
                if($("#regsiter_pass").val() == "") {
                    $("#regsiter_pass").parent().addClass("has-error");
                }
                //账号密码都正确，可以点击注册
                if($("#regsiter_active").parent().hasClass("has-success")&& $("#regsiter_pass").parent().hasClass("has-success")){
                    $("#back").css("display", "none");
                    $.cookie($("#regsiter_active").val(),$("#regsiter_pass").val(),{expires : 7,path:"/"});
                }
            })
            // 登录账号判定
            // 登录账号都正确，点击登录按钮，登录模块消失
            $("#login").on("click",function(){
                if($.cookie($("#login_acc").val()) == null){//判断账号在cookie中是否存在
                    $("#login_acc").parent().addClass("has-error").removeClass("has-success");
                } else {
                    $("#login_acc").parent().addClass("has-success").removeClass("has-error");
                }
                if($.cookie($("#login_acc").val()) != $("#login_pass").val()){//判断cookie该key中的值是否和输入框中的值相等
                    $("#login_pass").parent().addClass("has-error").removeClass("has-success");
                } else {
                    $("#login_pass").parent().addClass("has-success").removeClass("has-error");
                }
                if($("#login_acc").parent().hasClass("has-success")&& $("#login_pass").parent().hasClass("has-success")){
                    $("#back").css("display","none");
                }
            })
            $("#login_acc").on("blur",function(){
                if($("#login_acc").val() == "") { //输入框内容为空，清除样式
                    $(this).parent().removeClass("has-error").removeClass("has-success");
                }
            })
            $("#login_pass").on("blur",function(){
                if($("#login_pass").val() == "") { //输入框内容为空，清除样式
                    $(this).parent().removeClass("has-error").removeClass("has-success");
                }
            })
        },
    }
});