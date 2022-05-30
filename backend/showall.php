<?php
    //Allows access past CORS
    header('Access-Control-Allow-Origin: http://localhost:3000');
    require "config.php";

    // statment gets all fields and passes as a json
    $statement = $db->prepare("SELECT * FROM recipe_tbl ORDER BY recipe_id");
    $statement->execute();
    $row = $statement->fetchAll(PDO::FETCH_ASSOC);    
    $jsonobj = json_encode($row);
    
    echo $jsonobj;

?>