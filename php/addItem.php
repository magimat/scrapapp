<?php
    include 'config.php';

    //open connection to mysql db
    $connection = mysqli_connect("localhost", $mysqluser, $mysqlpwd, "scrap") or die("Error " . mysqli_error($connection));

    $nom = $_GET['nom'];
    $compagnie = $_GET['compagnie'];
    $prix = intval($_GET['prix']);
    $quantite = intval($_GET['quantite']);


	mysqli_query($connection,"INSERT INTO items(nom, prix, quantite, compagnie) VALUES ('$nom', $prix, $quantite, '$compagnie')");




    mysqli_close($connection);
?>