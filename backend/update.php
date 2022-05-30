<?php
    //Allows access past CORS
    header('Access-Control-Allow-Origin: http://localhost:3000');
    require "config.php";
    if(isset($_POST)){
        $id = $_POST["id"];
        $name=$_POST["name"];
        $cookingtime = $_POST["cookingtime"];
        $ingredients = $_POST["ingredients"];
    }else{
        $id = "";
        $name="";
        $cookingtime ="";
        $ingredients = "";
    }

    //Statement updates database
    $statement = $db->prepare("UPDATE `recipe_tbl` SET `recipe_name`='$name',`recipe_cooktime`='$cookingtime',`recipe_ingredients`='$ingredients' WHERE `recipe_id`=$id");
    $statement->execute();

?>