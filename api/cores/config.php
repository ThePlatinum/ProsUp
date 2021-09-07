<?php

    /* database constant details */
    $db_user     = 'root';
    $db_password = '';
    $db_name     = 'prosup';

    /* PDO database connection */
    try
    {
        /* Actual connection */
        $db = new PDO('mysql:host=localhost;dbname='.$db_name.';charset=utf8',$db_user,$db_password);

        //set some db Attributes
        $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        $db->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //define('APP_NAME','prosup');
    }
    catch (PDOException $e)
    {
        /* If there is an error an exception is thrown */
        //pdo_exception($e);
        echo 'Connection failed<br>';
        echo 'Error number: ' . $e->getCode() . '<br>';
        echo 'Error message: ' . $e->getMessage() . '<br>';
        die();
    }
    //echo 'Successfully connected!<br>';

?>