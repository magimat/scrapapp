

<?php

    include 'config.php';

    //open connection to mysql db
    $connection = mysqli_connect("localhost", $mysqluser, $mysqlpwd, "scrap") or die("Error " . mysqli_error($connection));

    $poid = intval($_GET['poid']);
    $user = $_GET['user'];

    //fetch table rows from mysql db
    $sql = "SELECT * from etat_compte where poid = $poid and username = '$user'";

    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

    //create an array
    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
    echo json_encode($emparray);

    //close the db connection
    mysqli_close($connection);
?>