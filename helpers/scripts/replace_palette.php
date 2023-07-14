<?php

$path_to_file = '/Applications/XAMPP/xamppfiles/htdocs/ecBuilder/app/client/src/utils/defaults.ts';
$file_contents = file_get_contents($path_to_file);
$ecL1_r = "/ecL1:.*/i";
$ecL2_r = "/ecL2:.*/i";
$ecL3_r = "/ecL3:.*/i";
$ecL4_r = "/ecL4:.*/i";

$ecL1_v = "ecL1: '#d2d2d2',";
$ecL2_v = "ecL2: '#ffffff',";
$ecL3_v = "ecL3: '#000ddd',";
$ecL4_v = "ecL4: '#ababab'";


$file_contents = preg_replace($ecL1_r, $ecL1_v, $file_contents);
$file_contents = preg_replace($ecL2_r, $ecL2_v, $file_contents);
$file_contents = preg_replace($ecL3_r, $ecL3_v, $file_contents);
$file_contents = preg_replace($ecL4_r, $ecL4_v, $file_contents);


file_put_contents($path_to_file, $file_contents);
