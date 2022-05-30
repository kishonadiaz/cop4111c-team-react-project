<?php
    //Allows access past CORS
    header('Access-Control-Allow-Origin: http://localhost:3000');
    require "config.php";
    $name = "";
        $cooktime = "";
        $ingredients = "";
    if(isset($_POST)){
        $name = $_POST["name"];
        $cooktime = $_POST["cookingtime"];
        $ingredients = $_POST["ingredients"];
    }else{
        
    }

    //statement inserts values into table
    if($name !="" && $cooktime != "" && $ingredients !=""){
        $statement = $db->prepare("INSERT INTO `recipe_tbl`(`recipe_name`, `recipe_cooktime`, `recipe_ingredients`) VALUES ('$name','$cooktime','$ingredients')");
        $statement->execute();
    }

   
?>
