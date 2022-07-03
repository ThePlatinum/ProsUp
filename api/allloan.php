<?php
require_once __DIR__ . "/cores/config.php";
$table = $_GET['tbl'];

$query = 'SELECT * FROM ' . $table ;
$lists = array();

try {
    $res = $db->prepare($query);
    $res->execute();
} catch (PDOException $e) {
    /* If there is an error an exception is thrown */
    echo 'Query error: ' . $e->getMessage();
    die();
}

/* Iterate through the result rows */
while ($row = $res->fetch(PDO::FETCH_ASSOC)) {
    $lists[] = array(
        'id' => $row['id'],
        'firstName' => $row['firstName'],
        'lastName'  => $row['lastName'],
        'amount' => $row['amount'],
        'loanDuration' => $row['loanDuration'],
        'status'   => $row['status']
    );
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($lists);