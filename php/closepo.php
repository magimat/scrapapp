<?php
    include 'config.php';

    //open connection to mysql db
    $connection = mysqli_connect("localhost", $mysqluser, $mysqlpwd, "scrap") or die("Error " . mysqli_error($connection));

    $id = intval($_GET['poid']);

echo '$id';
	mysqli_query($connection,"update po set dt_fin = NOW() where id = $id") or die(mysqli_error($connection));

    mysqli_query($connection,"INSERT INTO `po` (`dt_debut`)  VALUES (NOW())") or die(mysqli_error($connection));


    mysqli_close($connection);
?>