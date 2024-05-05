<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$to = "ihudeosirumiji@gmail.com";
$body = "A new form submission was received:\nName: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";

mail($to, $subject, $body);

// Validate the form data
if (empty($name) || empty($email) || empty($message)) {
  // Display an error message
} else {
  // Send the message
  mail('ihudeosirumiji@gmail.com', $subject, $message, "From: $email");
}


?>

