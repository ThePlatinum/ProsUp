<?php
require_once __DIR__ . "/cores/config.php";

$FirstName = $_POST['firstName'];
$LastName = $_POST["lastName"];
$OtherName = $_POST["otherName"];
$Email = $_POST['email'];
$Phone  = $_POST["phone"];
$address  = $_POST["address"];
$accountNumber = $_POST['accountNumber'];
$cardNumber  = $_POST["cardNumber"];
$ammount  = $_POST["ammount"];
$date = $_POST['date'];
$posUsed  = $_POST["posUsed"];
$theIssue  = $_POST["theIssue"];

$table = $_GET['tbl'];

function result($status, $responce){
    $result[] = array(
        'status'     => $status,
        'responce' => $responce
    );
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    echo json_encode($result);
}

if (is_uploaded_file($_FILES['passport']['tmp_name'])) 
{

    $signame = $_FILES['signature']['name'];
    //replace any non-alpha-numeric cracters in th file name
    $nameSignature = preg_replace("'/[^A-Za-z0-9 \.\-_]/'", '', $signame);
    $destSig = "files/$nameSignature";
    //Save the file
    $the_sigFile = $_FILES['signature']['tmp_name'];

    $name = $_FILES['passport']['name'];
    //replace any non-alpha-numeric cracters in th file name
    $namePassport = preg_replace("'/[^A-Za-z0-9 \.\-_]/'", '', $name);
    $dest = "files/$namePassport";
    //Save the file
    $the_file = $_FILES['passport']['tmp_name'];
    
    if ( move_uploaded_file( $the_file, $dest) && move_uploaded_file( $the_sigFile, $destSig) ) 
    {
        $query = 'INSERT INTO `'. $table .'` (`caseId`, `firstName`, `lastName`, `otherNames`, `email`, `phone`, `address`, `accountNumber`, `cardNumber`, `amount`, `date`, `posUsed`, `theIssue`, `signature`, `passport`, `status`) VALUES (NULL, \''.$FirstName.'\', \''.$LastName.'\', \''.$OtherName.'\', \''.$Email.'\', \''.$Phone.'\', \''.$address.'\', \''.$accountNumber.'\', \''.$cardNumber.'\', \''.$ammount.'\', \''.$date.'\', \''.$posUsed.'\', \''.$theIssue.'\', \''.$nameSignature.'\', \''.$namePassport.'\', "New")';
        try {
            $res = $db->prepare($query);
            $res->execute();
        } catch (PDOException $e) {
            /* If there is an error an exception is thrown */
            result('Query error: ',$e->getMessage() );
            die();
        }
        result('1','Form submitted succesfully!'); 
    }
    else{
        result('2',move_uploaded_file( $the_file, $dest));        
    }
}
else{
    result('2','please select to upload the file you\'d like to Submit');
}