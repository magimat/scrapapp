
<?php

    include 'config.php';

    //open connection to mysql db
    $connection = mysqli_connect("localhost", $mysqluser, $mysqlpwd, "scrap") or die("Error " . mysqli_error($connection));


    $poid = intval($_GET['poid']);

    //fetch table rows from mysql db
    $sql = "select o.*, i.nom, i.compagnie, i.recu from orders o, items i where o.item_id = i.id and po_id = $poid";
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