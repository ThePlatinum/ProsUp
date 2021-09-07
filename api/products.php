<?php
    require_once __DIR__."/cores/config.php";
    $search = $_GET['sProduct'];
    
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
        $product[] = array(
            'Product'       => $row['productName'],
            'Description'   => $row['description'],
            'Available'     => $row['available'],
            'Price'         => $row['price'],
            'Image'         => $row['image'],
            'Preview'       => $row['previewFile'],
            'Template'      => $row['template'],
              	 
        );
    }
    
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    echo json_encode($product);
?>