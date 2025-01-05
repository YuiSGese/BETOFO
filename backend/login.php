<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$password = $data['password'];

// Kiểm tra email
$result = $conn->query("SELECT * FROM users WHERE email = '$email'");
if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    // Kiểm tra mật khẩu
    if (password_verify($password, $user['password'])) {
        echo json_encode(["status" => "success", "message" => "Login successful"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Incorrect password"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "User not found"]);
}
$conn->close();
?>