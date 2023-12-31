<?php

use Illuminate\Support\Facades\File;
use Symfony\Component\Process\Process;

function copy_folder($source, $folder_id)
{
  $webapps_path = base_path() . $source;

  $source = $webapps_path . "/default_app";
  $destination = $webapps_path . "/webapp_" . $folder_id;


  File::copyDirectory($source, $destination);
}

function zip_folder($folder_id)
{
  $webapps_path = base_path() . "/storage/webapps";

  $source = $webapps_path . "/webapp_" . $folder_id;
  $destination = $webapps_path . "/zipped/webapp_" . $folder_id . ".zip";

  $webapp_folder = "webapp_" . $folder_id;
  $webapp_zip = "zipped/webapp_" . $folder_id . ".zip";

  $zip7_cm = "7z a -tzip " . $destination . " " . $source; // using 7zip for windows
  $zip_cm_2 = "cd " . $webapps_path . " && zip -r " . $webapp_zip . " " . $webapp_folder; // using zip for linux

  if ($webapps_path[0] === 'C') {
    $command = 'powershell.exe -Command "' . $zip7_cm . '"';
  } else {
    $command = $zip_cm_2;
  }

  $output = [];
  exec($command, $output);
}



function execute($cmd): string
{
  $process = Process::fromShellCommandline($cmd);

  $processOutput = '';

  $captureOutput = function ($type, $line) use (&$processOutput) {
    $processOutput .= $line;
  };

  $process->setTimeout(null)
    ->run($captureOutput);

  return $processOutput;
}
