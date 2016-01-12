
<?php

    include 'config.php';

    //open connection to mysql db
    $connection = mysqli_connect("localhost", $mysqluser, $mysqlpwd, "scrap") or die("Error " . mysqli_error($connection));


    $id = intval($_GET['id']);


    //fetch table rows from mysql db
    $sql = "select * from items where id = $id";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

    $row =mysqli_fetch_assoc($result);
    

    echo json_encode($row);

    //close the db connection
    mysqli_close($connection);
?>