<?php
include '../models/CitiesModel.php';
include './helper.php';

function getCities() {
//  Get all cities from the database
  $query = 'SELECT *  FROM cities';
  $result = queryToSql($query);
  $json_temp = array();

  if($result != null) {
    while ($row = $result->fetch_assoc()) {
      $temp = new CitiesModel();
      $temp->id = $row['id'];
      $temp->city = $row['city'];
      array_push($json_temp, $temp);
    }
    echo json_encode($json_temp);
  }
  else
    echo 'Not found';
}

switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
    return getCities();
  default:
    return null;
}