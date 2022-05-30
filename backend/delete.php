<?php
    //Allows access past CORS
    header('Access-Control-Allow-Origin: http://localhost:3000');
    require "config.php";

    if(isset($_POST["id"])){
        $id = $_POST["id"];
    }else{
        $id = "";
    }
    
    //Statement for deleting element from table
    if($id != ""){
        $statement = $db->prepare("DELETE FROM recipe_tbl
        WHERE recipe_id=$id;");
        $statement->execute();
    }

?>