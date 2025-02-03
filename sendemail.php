<?php

// Define some constants
define( "RECIPIENT_NAME", "BevSense" );
define( "RECIPIENT_EMAIL", "wilharm@bevsense.com" );


// Read the form values
$success = false;
$senderName = isset( $_POST['name'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['name'] ) : "";
$senderEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
$senderMessage = isset( $_POST['message'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['message'] ) : "";

// If all values exist, send the email
if ( $senderEmail) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $senderEmail . "";
  $msgBody = "Name: ". $senderName ."\nEmail: ". $senderEmail . "\nMessage:". $senderMessage ."";
  $success = mail( $recipient, $headers, $msgBody );

  //Set Location After Successsfull Submission
  // header('Location: index.html?message=Successfull');
  if ($success) {
    // Set a cookie for 15 days (15 days * 24 hours * 60 minutes * 60 seconds)
    setcookie("form_submitted", "true", time() + (15 * 24 * 60 * 60), "/");

    // Redirect with success message
    header('Location: index.html?message=successfull');
    exit;
  } 
}
else{
	//Set Location After Unsuccesssfull Submission
  	header('Location: index.html?message=failed');
}

?>
