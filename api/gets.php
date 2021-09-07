<?php
    require_once __DIR__."/cores/config.php";
    $search = $_GET['s'];
    
    $query = 'SELECT * FROM projects WHERE Tags LIKE \'%'. $search .'%\' ORDER BY RAND() ';
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
        $projects[] = array(
            'id'     => $row['id'],
            'author' => $row['Authors'],
            'title'  => $row['Title'],
            'excerpt'=> $row['Excerpt'],
            'year'   => $row['Year']
        );
    }
    
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    echo json_encode($projects);
?>