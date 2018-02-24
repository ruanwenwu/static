/**
 * 用户名和密码登陆页面
 */
var validateClass = new frontValidate();

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
	
	if (!$("#info_response").is(":hidden")){
		$("#info_response").hide();
	}
});

//验证手机格式->验证密码格式->验证验证码->给出对应提示
function check_login(obj){
	//验证手机
	var phoneNum = $("#username").val();
	var passwd   = $("#pwd").val();
	var token    = $("input[name=__token__]").val();
	if(!validateClass.vPhone(phoneNum)){
		$("#info_username").text("请输入格式正确的手机号").show();
		return false;
	}
	
	if(!validateClass.vPass(passwd)){
		$("#info_pwd").text("请输入正确的密码").show();
		return false;
	}
	
	//提交验证，token,用户名,密码
	var url = $(obj).attr('act');
	$.post(url,{phone:phoneNum,password:passwd,__token__:token},function(response){
		if (!response.status){
			if (response.errorPoint == "phone"){
				$("#info_username").text(response.message).show();
			}else if (response.errorPoint == "password"){
				$("#info_pwd").text(response.message).show();
			}else{
				$("#info_response").text(response.message).show();
			}
		}else{
			location.href = backUrl;
			
		}
	},'json');
	
	
	return false;
}