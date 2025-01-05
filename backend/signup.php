<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$name = $data['name'];
$email = $data['email'];
$password = password_hash($data['password'], PASSWORD_BCRYPT);

// Kiểm tra email đã tồn tại
$checkEmail = $conn->query("SELECT * FROM users WHERE email = '$email'");
if ($checkEmail->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "Email already exists"]);
} else {
    // Tạo tài khoản
    $insert = $conn->query("INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')");
    if ($insert) {
        echo json_encode(["status" => "success", "message" => "User registered successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
    }
}
$conn->close();
?>