<?php
DEFINE('DB_USER', 'root');
DEFINE('DB_PASSWORD', 'root');
DEFINE('DB_HOST', 'root');
DEFINE('DB_NAME', 'addressbook');

function getConfig() {
  return @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME
  or die('Unable to connect to server' . mysqli_connect_error()));
}