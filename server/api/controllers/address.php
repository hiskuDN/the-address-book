<?php

require('./api/_config/db.php');

function getAddress($id) {
  $query = "SELECT * FROM address WHERE id == {$id}";
  $result = queryToSql($query);

  while($row = $result -> fetch_assoc()) {
    echo $row;
  }
}

function getAllAddresses() {
//  Get all addresses from the database
  $query = "SELECT * FROM address";
  $result = queryToSql($query);
  $json_temp = new AddressModel();

  while($row = $result -> fetch_assoc()) {
    $json_temp -> $firstName = $row[0];
    $json_temp -> lastName = $row[1];
    $json_temp -> email = $row[3];
    $json_temp -> street = $row[4];
    $json_temp -> zipCode = $row[5];
    $json_temp -> city = $row[1];
  }

  echo $json_temp;
}

function getCities() {
//  Get all cities from the database
  $query = 'SELECT *  FROM cities';
  $result = queryToSql($query);
}

function createAddress($id, $first_name, $last_name, $email, $street, $zip_code, $city_id) {
//    TODO finish the query here
  $id = 0;
  $first_name = $_POST['firstName'];
  $last_name = $_POST['lastName'];
  $email_name = $_POST['email'];
  $street = $_POST['street'];
  $zip_code = $_POST['zipCode'];
  $city_id = $_POST['city'];

  $query = "INSERT into address (id, first_name, last_name, email, street, zip_code, city_id) 
    VALUES ({$id}, {$first_name}, {$last_name}, {$email_name} , {$street},{$zip_code},{$city_id})";
  $result = queryToSql($query);

  return queryToSql($query);
}

function editAddress() {
//  Edit an address
  return 'edit Address';

}

function deleteAddress($id) {
//  Delete an address
  return 'delete address';
}

function queryToSql($query) {
//  Query the sql database
  global $config;
  return $config -> query($query);
}

function Main() {
  switch ($_SERVER['REQUEST_METHOD'])
  {
    case 'GET':
      return getAllAddresses();
    case 'PUT':
      return editAddress();
    case 'POST':
      return createAddress();
    case 'DELETE':
      return deleteAddress();
  }
}