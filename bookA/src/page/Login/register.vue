<template>
	<div>
		<h1>注册账户</h1>
		<form action="http://127.0.0.1:3000/register" method="post">
		<label>用户名：</label><input type="text" name="userName" placeholder="请输入要注册的用户名">
		<label>密码：</label><input type="password" name="userPwd" placeholder="请输入密码">
		<label>请再次输入密码：</label><input type="password" name="userPwd1" placeholder="请再次输入密码">
		<input type="submit" name="" value="提交">
		<input type="reset" name="" value="重置">
		</form>
	</div>
</template>