<?php
require_once __DIR__ . "/cores/config.php";

$FirstName = $_POST['firstName'];
$LastName = $_POST["lastName"];
$OtherName = $_POST["otherName"];
$Email = $_POST['email'];
$Phone  = $_POST["phone"];
$address  = $_POST["address"];
$lgArea = $_POST['lgArea'];
$state  = $_POST["state"];
$loanPurpose  = $_POST["loanPurpose"];
$loanDuration  = $_POST["loanDuration"];
$ammount  = $_POST["ammount"];
$bvn  = $_POST["bvn"];
$accountNumber = $_POST['accountNumber'];
$bank = $_POST['bank'];

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


if (is_uploaded_file($_FILES['signature']['tmp_name'])) 
{
    $signame = $_FILES['signature']['name'];
    //replace any non-alpha-numeric cracters in th file name
    $nameSignature = preg_replace("'/[^A-Za-z0-9 \.\-_]/'", '', $signame);
    $destSig = "files/$nameSignature";
    //Save the file
    $the_sigFile = $_FILES['signature']['tmp_name'];
    
    if ( move_uploaded_file( $the_sigFile, $destSig) ) 
    {
        $query = 'INSERT INTO `'. $table .'` (`id`, `firstName`, `lastName`, `otherName`, `email`, `phone`, 
        `address`, `lgArea`, `state`, `loanPurpose`, `loanDuration`, `amount`, `bvn`, `accountNumber`, `status`, `bank`, `signature`) VALUES 
        (NULL, \''.$FirstName.'\', \''.$LastName.'\', \''.$OtherName.'\', \''.$Email.'\', \''.$Phone.'\', 
        \''.$address.'\', \''.$lgArea.'\', \''.$state.'\', \''.$loanPurpose.'\', \''.$loanDuration.'\', 
        \''.$ammount.'\', \''.$bvn.'\', \''.$accountNumber.'\',"Pending", \''.$bank.'\', \''.$the_sigFile .'\' )';
        
        try {
            $res = $db->prepare($query);
            $res->execute();
            result('Submitted','Your application has been submitted, you will be reached back to you shortly' );        
        } catch (PDOException $e) {
            /* If there is an error an exception is thrown */
            result('Query error: ',$e->getMessage() );
            die();
        }
    }
    else{
        result('2', move_uploaded_file( $the_sigFile, $destSig));        
    }
}
else{
    result('2','please select to upload the file you\'d like to Submit');
}


// <?php
// require_once __DIR__ . "/cores/config.php";

// $FirstName = $_POST['firstName'];
// $LastName = $_POST["lastName"];
// $OtherName = $_POST["otherName"];
// $Email = $_POST['email'];
// $Phone  = $_POST["phone"];
// $address  = $_POST["address"];
// $lgArea = $_POST['lgArea'];
// $state  = $_POST["state"];
// $loanPurpose  = $_POST["loanPurpose"];
// $loanDuration  = $_POST["loanDuration"];
// $ammount  = $_POST["ammount"];
// $bvn  = $_POST["bvn"];
// $accountNumber = $_POST['accountNumber'];
// $bank = $_POST['bank'];

// $table = $_GET['tbl'];
// $query = 'INSERT INTO `'. $table .'` (`id`, `firstName`, `lastName`, `otherName`, `email`, `phone`, 
// `address`, `lgArea`, `state`, `loanPurpose`, `loanDuration`, `amount`, `bvn`, `accountNumber`, `status`, `bank`) VALUES 
// (NULL, \''.$FirstName.'\', \''.$LastName.'\', \''.$OtherName.'\', \''.$Email.'\', \''.$Phone.'\', 
// \''.$address.'\', \''.$lgArea.'\', \''.$state.'\', \''.$loanPurpose.'\', \''.$loanDuration.'\', 
// \''.$ammount.'\', \''.$bvn.'\', \''.$accountNumber.'\',"Pending", \''.$bank.'\')';

// function result($status, $responce){
//     $result[] = array(
//         'status'     => $status,
//         'responce' => $responce
//     );
//     header('Content-Type: application/json');
//     header('Access-Control-Allow-Origin: *');
//     header('Access-Control-Allow-Headers: *');
//     echo json_encode($result);
// }

// try {
//     $res = $db->prepare($query);
//     $res->execute();
//     result('Submitted','Your application has been submitted, you will be reached back to you shortly' );
// } catch (PDOException $e) {
//     /* If there is an error an exception is thrown */
//     result('Query error: ',$e->getMessage() );
//     die();
// }