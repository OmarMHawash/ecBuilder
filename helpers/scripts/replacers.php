<?php
$path_to_file = '/Applications/XAMPP/xamppfiles/htdocs/ecBuilder/app/client/src/pages/Preview.tsx';
$rev_r = "/preview empty for now/i";
$rev_v = "not empty any more";

function replace_in_file($file_path, $find_regex, $replace_with): bool
{
  $file_content = file_get_contents($file_path);
  $new_file_content = preg_replace($find_regex, $replace_with, $file_content);

  file_put_contents($file_path, $new_file_content);

  if ($file_content === $new_file_content) {
    return false;
  }
  return true;
}

function replace_palette($replace_values, $folder_id)
{
  $file_path = base_path() . '\storage\webapps\webapp_' . $folder_id . '\src\App.scss';
  $file_content = file_get_contents($file_path);

  $back = '/back_p:.*/i';
  $prim = '/prim_p:.*/i';
  $secd = '/secd_p:.*/i';
  $text = '/text_p:.*/i';
  $accn = '/accn_p:.*/i';

  $back_v = 'back_p: ' . $replace_values['background'] . ';';
  $prim_v = 'prim_p: ' . $replace_values['primary'] . ';';
  $secd_v = 'secd_p: ' . $replace_values['secondary'] . ';';
  $text_v = 'text_p: ' . $replace_values['text'] . ';';
  $accn_v = 'accn_p: ' . $replace_values['accent'] . ';';

  $new_file_content = preg_replace($back, $back_v, $file_content);
  $new_file_content = preg_replace($prim, $prim_v, $new_file_content);
  $new_file_content = preg_replace($secd, $secd_v, $new_file_content);
  $new_file_content = preg_replace($text, $text_v, $new_file_content);
  $new_file_content = preg_replace($accn, $accn_v, $new_file_content);

  file_put_contents($file_path, $new_file_content);

  if ($file_content === $new_file_content) {
    return false;
  }
  return true;
}
