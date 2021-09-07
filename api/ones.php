<?php
    require_once __DIR__."/cores/config.php";
    $sel = $_GET['s'];
    
    $query = 'SELECT * FROM projects WHERE id = '.$sel;
    $projects = array();

    try {
        $res = $db->prepare($query);
        $res->execute();
    } catch (PDOException $e) {
        /* If there is an error an exception is thrown */
        echo 'Query error: ' . $e->getMessage();
        die();
    }

    /* Iterate through the result rows */
    while ($row = $res->fetch(PDO::FETCH_ASSOC))
    {
        $projects = array(
            'author' => $row['Authors'],
            'title'  => $row['Title'],
            'year'   => $row['Year'],
            'file'   => $row['theFile'],
            'type'   => $row['Type']
        );
    }
    
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: http://localhost:3000');
    echo json_encode($projects);
?>