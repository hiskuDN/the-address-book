<?php
include './helper.php';

function getXML() {
  $query = "SELECT * FROM address";
  $result = queryToSql($query);
  $addresses = new DOMDocument('1.0');

  $root = $addresses -> createElement('addresses');

  if($result != null) {
    while ($row = $result->fetch_assoc()) {
      $address = $addresses -> createElement('address');

      $id = $addresses -> createElement('id', $row['id']);
      $address->appendChild($id);

      $first_name = $addresses -> createElement('first_name', $row['first_name']);
      $address->appendChild($first_name);

      $last_name = $addresses -> createElement('last_name', $row['last_name']);
      $address->appendChild($last_name);

      $email = $addresses -> createElement('email', $row['email']);
      $address->appendChild($email);

      $street = $addresses -> createElement('street', $row['street']);
      $address->appendChild($street);

      $zip= $addresses -> createElement('zip_code', $row['zip_code']);
      $address->appendChild($zip);

      $city = $addresses -> createElement('city_id', $row['city_id']);
      $address->appendChild($city);

      $root->appendChild($address);
    }
  }
  $addresses->appendChild($root);

  $addresses->save('saveXML.xml') or die('Error');

  header('Content-type: application/json');
  header('Content-Disposition: attachment; filename="savedJSON.xml"');
  readfile('saveXML.xml');
}

switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
    return getXML();
}