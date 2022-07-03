<?php
require_once __DIR__ . "/cores/config.php";
$table = $_GET['tbl'];
$search = $_GET['s'];

$query = 'SELECT * FROM `' . $table . '` WHERE `caseId` = ' . $search;
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
        'firstName'  => $row['firstName'],
        'caseId'  => $row['caseId'],
        'lastName'   => $row['lastName'],
        'otherNames' => $row['otherNames'],
        'email'      => $row['email'],
        'phone'      => $row['phone'],
        'address'    => $row['address'],
        'accountNumber' => $row['accountNumber'],
        'cardNumber'    => $row['cardNumber'],
        'amount'        => $row['amount'],
        'date'          => $row['date'],
        'posUsed'       => $row['posUsed'],
        'theIssue'      => $row['theIssue'],
        'passport'      => $row['passport'],
        'signature'     => $row['signature'],
        'status'        => $row['status']
    );
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($lists);
