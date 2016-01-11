<?php
    include 'config.php';

    //open connection to mysql db
    $connection = mysqli_connect("localhost", $mysqluser, $mysqlpwd, "scrap") or die("Error " . mysqli_error($connection));

    $id = intval($_GET['id']);
    $nom = $_GET['nom'];
    $compagnie = $_GET['compagnie'];
    $prix = floatval($_GET['prix']);
    $actif = $_GET['actif'];


	mysqli_query($connection,"update items set nom = '$nom', prix = $prix, actif = '$actif', compagnie = '$compagnie' where id = $id");


    mysqli_close($connection);
?>