<?php
    include 'config.php';


    //open connection to mysql db
    $connection = mysqli_connect("localhost", $mysqluser, $mysqlpwd, "scrap") or die("Error " . mysqli_error($connection));

    $username = $_GET['username'];
    $poid = intval($_GET['poid']);
    $total = floatval($_GET['total']);


	mysqli_query($connection,"INSERT INTO `etat_compte` (  `poid` ,  `username` ,  `total`, `balance`)  VALUES ($poid, '$username', $total, $total)") or die(mysqli_error($connection));


?>