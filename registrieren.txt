<?php
   $server = 'localhost';
   $user = 'root';
   $psw = null;
   $dbName = 'TestDatenbank';
try {
   $conn = new PDO('mysql:host='.$server.';dbname='.$dbName.';charset=utf8', $user, $psw);
   $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

   // In Datenbank Schreiben
   $username = htmlspecialchars(stripslashes((trim($_POST["username"])))) ;
   $password =  password_hash(htmlspecialchars(stripslashes((trim($_POST["password"])))) ,PASSWORD_DEFAULT) ;
   $cash =     100;

   $sql = "INSERT INTO user (username,password,cash) VALUES (:username,:password,:cash) ";
   $sqlvars = array("username"  => $username,
   "password" => $password,
   "cash" => $cash);
   $Abfrage = $conn->prepare($sql);
   $Abfrage->execute($sqlvars);
echo "super";
}catch (PDOException $e) {
  print "Error!: " . $e->getMessage() ;
  exit;
}







