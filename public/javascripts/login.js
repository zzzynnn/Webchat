/**
 * Created by DELL on 2016/6/17.
 */

$(function() {


    $("#okname").click(function() {
        user = $.trim($("#u").val());
        loginpassword = $.trim($("#p").val());
        if (user.length == 0 && loginpassword.length == 0) {
            alert('账号密码不能为空');
            $("#u").focus();
            return false;
        }

        //if(!/^\w{5,20}$/.test(user)){
        //    alert('账号格式不正确');
        //    $("#u").focus();
        //    return false;
        //}

        if (user.length == 0) {
            alert('请输入账号！');
            $('#u').focus();
            return false;
        }
        if (loginpassword.length == 0) {
            alert('请输入密码！');
            $('#p').focus();
            return false;
        }
    });
});