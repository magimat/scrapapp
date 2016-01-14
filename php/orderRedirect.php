<?php
define("IN_MYBB", 1);
require ('../../global.php'); 

$username = $mybb->user['username'];
$id = $_GET['id'];

header("Location: http://www.scrapbookartetpassion.com/scrapapp/app/#/order?id=$id&username=$username");
die;


?>