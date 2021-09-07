
<?php
//Include required PHPMailer files
require 'includes/PHPMailer.php';
require 'includes/SMTP.php';
require 'includes/Exception.php';
//Define name spaces
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
//Create instance of PHPMailer
$mail = new PHPMailer();
//Set mailer to use smtp
$mail->isSMTP();
//Define smtp host
$mail->Host = "smtp.gmail.com";
//Enable smtp authentication
$mail->SMTPAuth = true;
//Set smtp encryption type (ssl/tls)
$mail->SMTPSecure = "tls";
//Port to connect smtp
$mail->Port = "587";
//Set gmail username
$mail->Username = "platinumemirate@gmail.com";
//Set gmail password
$mail->Password = "adedayo6192";
//Set sender email
$mail->setFrom('platinumemirate@gmail.com');
//Enable HTML
$mail->isHTML(true);
//Email subject
$mail->Subject = "ProsUp New Summission";

function result($status,$responce){
    $result[] = array(
        'status'     => $status,
        'responce' => $responce
    );
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');
    echo json_encode($result);
}

if (is_uploaded_file($_FILES['fupload']['tmp_name'])) 
{
    //First, Validate the file name
    if(empty($_FILES['fupload']['name']))
    {
        result('2','Please select the Document you\'d like to put up');
    }
    $name = $_FILES['fupload']['name'];
    //Too long file name?
    if(strlen ($name)>100)
    {
        result('2','Please use a shorter file name');
    }
    //set a limit to the file upload size
    if ($_FILES['fupload']['size'] > 1000000000) 
    {
        result('2','File size too big large');   
    }
    //replace any non-alpha-numeric cracters in th file name
    $name = preg_replace("'/[^A-Za-z0-9 \.\-_]/'", '', $name);
    //Save the file
    $dest = "uploads/$name";
    $the_file = $_FILES['fupload']['tmp_name'];
    if ( move_uploaded_file( $the_file, $dest) ) 
    {
    /*     // Prepare Email body
        $FirstName = $_POST['firstName'].' '.$_POST["lastName"].' '.$_POST["otherName"];
        $Email = $_POST['email'];
        $Type  = $_POST["type"];
        $Note  = $_POST["note"];
        $Message = "
            <h3>$FirstName </h3>
            <p>Email: $Email</br>
            <p>Type:  $Type</br></br>
            <p> $Note </p>
        ";
        //echo $Message ;
        $mail->Body = $Message;
        //Attachment
        $mail->addAttachment($dest);
        //Add recipient
        $mail->addAddress('platinumemirate@gmail.com');
        //Finally send email
        if ( $mail->send() ) {
            result('1','Sent Sucessfully!');  
        }
        else
        {
            result('2','Couldn\'t make submission how, Please try again in a short while');  
            //echo "Message could not be sent. Mailer Error: $mail->ErrorInfo";
        }
        //Closing smtp connection
        $mail->smtpClose(); */
    }
    else{
        result('2','Couldn\'t upload file, Please try again!');        
    }
}
else{
    result('2','please select to upload the file you\'d like to Submit');
}
?>
