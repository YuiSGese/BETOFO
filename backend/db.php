<?php
$servername = "localhost"; 
$username = "root";        
$password = "";            
$dbname = "betofo_auth";   
$port = 8889;              

$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Kiểm tra kết nối
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>