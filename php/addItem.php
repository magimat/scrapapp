<?php
    include 'config.php';


    //open connection to mysql db
    $connection = mysqli_connect("localhost", $mysqluser, $mysqlpwd, "scrap") or die("Error " . mysqli_error($connection));

    $nom = $_GET['nom'];
    $compagnie = $_GET['compagnie'];
    $prix = floatval($_GET['prix']);
    $actif = $_GET['actif'];
    $recu = $_GET['recu'];


	mysqli_query($connection,"INSERT INTO items(nom, prix, actif, compagnie, recu) VALUES ('$nom', $prix, '$actif', '$compagnie', '$recu')");




    mysqli_close($connection);
?>