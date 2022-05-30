<?php
    $dns ='mysql:host=localhost;dbname=recipe_app';
    $root = 'root';
    $pass = 'Pa11word';

    $db = new PDO($dns,$root,$pass,array(PDO::ATTR_PERSISTENT => true, PDO::MYSQL_ATTR_USE_BUFFERED_QUERY => true));
    //error catching mysql
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //allow buffering of muilti sqls queries
    $db->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
    
    $statment = "Use recipe_app";
    $db->exec($statment);
    if(!$db){
        echo "Error".$db->errorCode(). PHP_EOL;
    }


    $statment = "CREATE TABLE IF NOT EXISTS recipe_tbl( recipe_id INT(6) AUTO_INCREMENT NOT NULL
                                                        ,recipe_name VARCHAR (60),
                                                        recipe_cooktime VARCHAR (60),
                                                        recipe_ingredients VARCHAR (100),
                                                        PRIMARY KEY (recipe_id)
                                                        ) ";
    $db->exec($statment);

?>