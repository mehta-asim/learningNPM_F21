<?php
    require("connect.php");
    require("functions.php");

    //filter the incoming basic request and  all the appropriate function

    if (isset($_GET["id"])) {

        $id = $_GET["id"];
        $result = getOneProf($pdo, $id);
    } else {
        $result = getAllProfs($pdo);
    }

    echo json_encode($result);