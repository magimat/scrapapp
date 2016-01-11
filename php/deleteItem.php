<?php
    include 'config.php';

    //open connection to mysql db
    $connection = mysqli_connect("localhost", $mysqluser, $mysqlpwd, "scrap") or die("Error " . mysqli_error($connection));

    $id = intval($_GET['id']);

	mysqli_query($connection,"delete from items where id = $id");

    mysqli_close($connection);
?>