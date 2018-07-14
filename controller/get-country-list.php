<?php
include "config.class.php";
include "database.php";


$tb1 = "countries";

$strSQL = "SELECT * FROM $tb1 WHERE 1 ORDER BY country_name";
$result = select($conn, $strSQL);

if($result){
  echo json_encode($result);
}

disconnect($conn);
die();
?>
