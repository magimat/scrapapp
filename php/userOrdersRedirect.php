<?php
define("IN_MYBB", 1);
require ('../forum/global.php'); 

$username = $mybb->user['username'];

header("Location: http://www.scrapbookartetpassion.com/scrapapp/app/#/userOrders?user=$username");
die;


?>