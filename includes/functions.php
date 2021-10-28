<?php
    // include the connect file so that we cam access our DB
    // include("connect.php");

    // //store sql query in a variable
    // $query = "SELECT * FROM profs";

    // //this is the database result -> raw daya that SQL gives us
    // $runQuery = $pdo->query($query);

    //store each row of data in an empty array(gets processed in the while loop below)
    $result = array();

    function getOneProf($conn , $prof){

        $query = "SELECT * FROM profs WHERE id='".$prof."'";

        $runQuery = $conn->query($query);

        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
            }

        return $result;

    }

    function getAllProfs($conn){
        $query = "SELECT * FROM profs";

        // this is the database result -> rata data that sql gives us
        $runQuery = $conn->query($query);

        // process our DB result and make something we can use with AJAX
        while($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
            }

        return $result;
    }

    

    //process our DB result and make somthing we can use with AJAX
    

    //send the DB result back to our JS file as a JSON Object
    echo (json_encode($result));