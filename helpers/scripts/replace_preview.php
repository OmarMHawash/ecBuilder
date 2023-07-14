<?php

$path_to_file = '/Applications/XAMPP/xamppfiles/htdocs/ecBuilder/app/client/src/pages/Preview.tsx';
$file_contents = file_get_contents($path_to_file);
$rev_r = "/preview empty for now/i";

$rev_v = "not empty any more";

$file_contents = preg_replace($rev_r, $rev_v, $file_contents);

file_put_contents($path_to_file, $file_contents);
