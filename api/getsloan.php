<?php
require_once __DIR__ . "/cores/config.php";
$table = $_GET['tbl'];
$search = $_GET['s'];

$query = 'SELECT * FROM `' . $table . '` WHERE `id` = ' . $search;
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
        'id'  => $row['id'],
        'firstName'  => $row['firstName'],
        'lastName'   => $row['lastName'],
        'otherNames' => $row['otherName'],
        'email'   => $row['email'],
        'phone'   => $row['phone'],
        'address' => $row['address'],
        'lgArea'  => $row['lgArea'],
        'state'   => $row['state'],
        'loanPurpose'   => $row['loanPurpose'],
        'loanDuration'  => $row['loanDuration'],
        'amount'        => $row['amount'],
        'bvn'           => $row['bvn'],
        'accountNumber' => $row['accountNumber'],
        'status'        => $row['status'],
        'bank'          => $row['bank']
    );
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($lists);
