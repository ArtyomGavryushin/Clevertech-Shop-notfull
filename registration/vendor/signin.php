<?php
	session_start();
	require_once 'connect.php';

	$login = $_POST['login'];
	$password = md5($_POST['password']);

	$check_user = mysqli_query($connect, "SELECT * FROM `user_info` WHERE `login` = '$login' and `password` = '$password'");

	if(mysqli_num_rows($check_user) > 0){

		$user = mysqli_fetch_assoc($check_user);

		$_SESSION['user'] = [
			"id" => $user['id'],
			"login" => $user['login'],
			"email" => $user['email'],
			"tel" => $user['phone_number']
		];

		header('Location: ../profile.php');
	}else{
		$_SESSION['message'] = 'Wrong login or password';
		header('Location: ../index.php');
	}


?>