<?php
	$connect = mysqli_connect('localhost', 'root', '', 'clt-shop');
	if(!$connect){
   		die('Connection failed with DataBase');
  	}
?>