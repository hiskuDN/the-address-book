<?php
include '../models/AddressModel.php';
include './helper.php';

function getJSON() {
//  Get all addresses from the database
  $query = "SELECT * FROM address";
  $result = queryToSql($query);
  $data_temp = array();

  if($result != null) {
    while ($row = $result->fetch_assoc()) {
      $temp = new AddressModel();
      $temp_str = array();
      $temp->id = $row['id'];
      $temp->firstName = $row['first_name'];
      $temp->lastName = $row['last_name'];
      $temp->email = $row['email'];
      $temp->street = $row['street'];
      $temp->zipCode = $row['zip_code'];
      $temp->city = $row['city_id'];
      array_push($data_temp, $temp);
    }
    file_put_contents("saveJSON.json",json_encode($data_temp));
  }

  header('Content-type: application/json');
  header('Content-Disposition: attachment; filename="savedJSON.json"');
  readfile('saveJSON.json');
}

switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
    return getJSON();
}