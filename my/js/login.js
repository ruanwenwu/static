/**
 * 用户名和密码登陆页面
 */

//input失去焦点，如果输入内容为空，那么label要出来
$(".labelinput").blur(function(){
	if($(this).val() == ""){
		$(this).next().show();
	}
});

//input聚焦，如果内容为空，那么label隐藏
$(".labelinput").focus(function(){
	$(this).parent().next().hide();
	if($(this).val() == ""){
		$(this).next().hide();
	}
});

//验证手机格式->验证密码格式->验证验证码->给出对应提示
function check_login(){
	$(".error_tip").text("sdfsdf").show();
	return false;
}