<?php
DEFINE('DB_HOST', 'localhost');
DEFINE('DB_USER', 'root');
DEFINE('DB_PASSWORD', '');
DEFINE('DB_NAME', 'addressbook');
DEFINE('DB_PORT', 3306);

$config = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);
//or die('Unable to connect to server' . mysqli_connect_error()
if (!$config) {
  echo mysqli_connect_errno();
  exit;
}
else {
  $config -> select_db(DB_NAME);
}
