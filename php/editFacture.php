<?php
    include 'config.php';

    //open connection to mysql db
    $connection = mysqli_connect("localhost", $mysqluser, $mysqlpwd, "scrap") or die("Error " . mysqli_error($connection));

    $id = intval($_GET['id']);
    $recu = floatval($_GET['recu']);
    $balance = floatval($_GET['balance']);


	mysqli_query($connection,"update etat_compte set recu = $recu, balance = $balance where id = $id");


    mysqli_close($connection);
?>