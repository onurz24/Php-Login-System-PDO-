<?php
   $server = 'localhost';
   $user = 'root';
   $psw = null;
   $dbName = 'TestDatenbank';
try {
   $conn = new PDO('mysql:host='.$server.';dbname='.$dbName.';charset=utf8', $user, $psw);
   $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    $username = htmlspecialchars(stripslashes(trim($_POST['username'])));
    $password = htmlspecialchars(stripslashes(trim($_POST['password'])));

    $statement = $conn->prepare("SELECT * FROM user WHERE username = :username");
    $result = $statement->execute(array('username' => $username
                                    ));
    $user = $statement->fetch();
    //Überprüfung des Passworts
    
    if ($user !== false && password_verify($password, $user['password'])) {
        $_SESSION['userid'] = $user['id'];
        die('Login erfolgreich. Weiter zu <a href="geheim.php">internen Bereich</a>');
    } else {
        $errorMessage = "Nutzername oder Passwort war ungültig<br>";
        echo $errorMessage;
    }

}catch (PDOException $e) {
    print "Error!: " . $e->getMessage() ;

    exit;
  }








