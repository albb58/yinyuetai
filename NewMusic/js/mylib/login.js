console.log("\u8FD9\u662F\u767B\u5F55\u6A21\u5757\uFF01"),define(["jquery","jq-cookie"],function(a){return{logIn:function(){a(".shop_loginBtn").on("click",function(){a("#back").css("display","block")}),a("#close").on("click",function(){a("#back").css("display","none")}),a("#loginbar div").on("click",function(){a(this).addClass("login_active").siblings().removeClass("login_active")}),a("#loginbar div:first").on("click",function(){a("#login_area").css("display","block"),a("#regsiter_area").css("display","none")}),a("#loginbar div:last").on("click",function(){a("#regsiter_area").css("display","block"),a("#login_area").css("display","none")}),a("#regsiter_active").on("blur",function(){let b=/^\d{11}$/.test(a("#regsiter_active").val());b?a(this).parent().addClass("has-success").removeClass("has-error"):a(this).parent().addClass("has-error").removeClass("has-success"),null!=a.cookie(a("#regsiter_active").val())&&a(this).parent().addClass("has-error").removeClass("has-success"),""==a("#regsiter_active").val()&&a(this).parent().removeClass("has-error").removeClass("has-success")}),a("#regsiter_pass").on("blur",function(){let b=/^[A-Za-z0-9]{6,20}$/.test(a("#regsiter_pass").val());b?a(this).parent().addClass("has-success").removeClass("has-error"):a(this).parent().addClass("has-error").removeClass("has-success"),""==a("#regsiter_pass").val()&&a(this).parent().removeClass("has-error").removeClass("has-success")}),a("#regsiter").on("click",function(){""==a("#regsiter_active").val()&&a("#regsiter_active").parent().addClass("has-error"),""==a("#regsiter_pass").val()&&a("#regsiter_pass").parent().addClass("has-error"),a("#regsiter_active").parent().hasClass("has-success")&&a("#regsiter_pass").parent().hasClass("has-success")&&(a("#back").css("display","none"),a.cookie(a("#regsiter_active").val(),a("#regsiter_pass").val(),{expires:7,path:"/"}))}),a("#login").on("click",function(){null==a.cookie(a("#login_acc").val())?a("#login_acc").parent().addClass("has-error").removeClass("has-success"):a("#login_acc").parent().addClass("has-success").removeClass("has-error"),a.cookie(a("#login_acc").val())==a("#login_pass").val()?a("#login_pass").parent().addClass("has-success").removeClass("has-error"):a("#login_pass").parent().addClass("has-error").removeClass("has-success"),a("#login_acc").parent().hasClass("has-success")&&a("#login_pass").parent().hasClass("has-success")&&a("#back").css("display","none")}),a("#login_acc").on("blur",function(){""==a("#login_acc").val()&&a(this).parent().removeClass("has-error").removeClass("has-success")}),a("#login_pass").on("blur",function(){""==a("#login_pass").val()&&a(this).parent().removeClass("has-error").removeClass("has-success")})}}});