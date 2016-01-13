<?php
    include 'config.php';


    //open connection to mysql db
    $connection = mysqli_connect("localhost", $mysqluser, $mysqlpwd, "scrap") or die("Error " . mysqli_error($connection));

    $username = $_GET['username'];
    $id = intval($_GET['id']);
    $poid = intval($_GET['poid']);
    $quantite = intval($_GET['quantite']);
	$prixunit = floatval($_GET['prix']);
	$total = $prixunit * $quantite;



	mysqli_query($connection,"INSERT INTO `orders` (  `username` ,  `item_id` ,  `quantite` ,  `po_id` ,  `dt_order`, `total` )  VALUES ('$username', $id, $quantite, $poid, NOW(), $total)") or die(mysqli_error($connection));

    mysqli_close($connection);

?>