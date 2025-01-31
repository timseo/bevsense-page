<?php

// Define some constants
define( "RECIPIENT_NAME", "camm" );
define( "RECIPIENT_EMAIL", "info@camm.org" );


// Read the form values
$success = false;
$senderName = isset( $_POST['name'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['name'] ) : "";
$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
$senderMessage = isset( $_POST['message'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['message'] ) : "";

// If all values exist, send the email
if ( $senderEmail) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $senderEmail . "";
  $msgBody = "Name: ". $senderName ." <br>Email: ". $senderEmail . " <br>Message:". $senderMessage ."";
  $success = mail( $recipient, $headers, $msgBody );

  //Set Location After Successsfull Submission
  header('Location: index.html?message=Successfull');
}

else{
	//Set Location After Unsuccesssfull Submission
  	header('Location: index.html?message=Failed');
}

?>
