<?php

	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);

define("IN_MYBB", 1);
require ('../forum/global.php'); 

$username = $mybb->user['username'];
$id = $_GET['id'];

header("Location: http://www.scrapbookartetpassion.com/scrapapp/app/#/orderForm?id=$id&username=$username");
die;


?>