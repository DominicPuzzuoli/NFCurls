<?php

require __DIR__.'/vendor/autoload.php';

use Kreait\Firebase\Factory;

$factory = (new Factory)
    ->withServiceAccount('nfcurls-firebase-adminsdk-m6gq5-38b9cf9a45')
    ->withDatabaseUri('https://nfcurls-default-rtdb.firebaseio.com/');

    $database = $factory->createDatabase();
    
?>