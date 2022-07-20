<?php

	session_start();
	require_once 'connect.php';

	$login = $_POST['login'];
	$password = $_POST['password'];
	$password_confirm = $_POST['password_confirm'];
	$email = $_POST['email'];
	$phone_number = $_POST['phone_num'];

	if($password === $password_confirm){
		$password = md5($password);

		mysqli_query($connect, "INSERT INTO `user_info` (`id`, `login`, `password`, `email`, `phone_number`) VALUES (NULL, '$login', '$password', '$email','$phone_number')");
	
		$_SESSION['message'] = 'Registration completed successfully';
		header('Location: ../index.php');
	}else{
		$_SESSION['message'] = 'Password mismatch';
		header('Location: ../register.php');
	}
?>