<?php
define("IN_MYBB", 1);
require ('../../global.php'); 

$username = $mybb->user['username'];
$id = $_GET['id'];

header("Location: http://www.scrapbookartetpassion.com/forum/admin/store/order/index.html?id=$id&username=$username");
die;


?>