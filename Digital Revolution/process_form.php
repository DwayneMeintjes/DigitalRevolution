<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = ''; // Replace with your email address
$subject = 'New Contact Form Submission';
$body = "Name: $name\nEmail: $email\nMessage: $message";

// Send email
$mailSent = mail($to, $subject, $body);

if ($mailSent) {
  echo 'Thank you for your message!';
} else {
  echo 'Oops! Something went wrong.';
}
?>
