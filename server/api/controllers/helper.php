<?php
include '../_config/db.php';

function queryToSql($query) {
//  Query the sql database
  global $config;
  if ($config) {
    $result = $config->query($query);
    if(!$result)
      return $config->errno . ' : ' . $config->error;
    else
      return $result;

  }
  else
    echo 'Not connected to server';
}

function utf8_converter($array) {
  array_walk_recursive($array, function(&$item, $key){
    if(!mb_detect_encoding($item, 'utf-8', true)){
      $item = mb_convert_encoding($item, 'utf-8');
    }
    echo $item;
  });

  return $array;
}