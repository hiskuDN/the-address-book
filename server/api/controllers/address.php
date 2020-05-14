<?php
include '../models/AddressModel.php';
include './helper.php';

function getAllAddresses() {
//  Get all addresses from the database
  $query = "SELECT * FROM address";
  $result = queryToSql($query);
  $json_temp = array();

  if($result != null) {
    while ($row = $result->fetch_assoc()) {
      $temp = new AddressModel();
      $temp->id = $row['id'];
      $temp->firstName = $row['first_name'];
      $temp->lastName = $row['last_name'];
      $temp->email = $row['email'];
      $temp->street = $row['street'];
      $temp->zipCode = $row['zip_code'];
      $temp->city = $row['city_id'];
      array_push($json_temp, $temp);
    }
    echo json_encode($json_temp);
  }
  else
    echo 'Not found';
}

function createAddress() {
//   Create Address
  $_POST = json_decode(file_get_contents("php://input"),true);

  $id = 0;
  $first_name = $_POST['firstName'];
  $last_name = $_POST['lastName'];
  $email_name = $_POST['email'];
  $street = $_POST['street'];
  $zip_code = $_POST['zipCode'];
  $city_id = $_POST['city'];

  $query = "INSERT into address (id, first_name, last_name, email, street, zip_code, city_id)
    VALUES ('{$id}', '{$first_name}', '{$last_name}', '{$email_name}' , '{$street}','{$zip_code}','{$city_id}')";
  $result = queryToSql($query);
  echo $result;
//  return queryToSql($query);
}

function editAddress() {
//  Edit an address
  $_POST = json_decode(file_get_contents("php://input"),true);

  $queryDelete = "DELETE FROM address where id= {$_POST['id']}";
  queryToSql($queryDelete);
  createAddress();
  return 'edit Address';
}


switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
    return getAllAddresses();
  case 'PUT':
    return editAddress();
  case 'POST':
    return createAddress();
}