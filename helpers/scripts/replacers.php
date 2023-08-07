<?php

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
  $file_path = base_path() . '/storage/webapps/webapp_' . $folder_id . '/src/App.scss';
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

function JSX_component($str): string
{
  $jsx = '<' . strtoupper($str[0]) . substr($str, 1) . ' />';
  return $jsx;
}

function JSX_import($str, $path): string
{
  $cap_str = strtoupper($str[0]) . substr($str, 1);
  $jsx_import = 'import ' . $cap_str . ' from ' . "'" . $path . '/' . $cap_str . '/' . $cap_str . "'" . ';';
  return $jsx_import;
}

function replace_home($imports, $components, $webapp_id)
{
  $import_r = '/import.*/i';
  $component_r = '/<components>/i';
  $file_path = base_path() . '/storage/webapps/webapp_' . $webapp_id . '/src/pages/Home.tsx';
  $file_content = file_get_contents($file_path);

  $new_file_content = preg_replace($import_r, $imports, $file_content);
  $new_file_content = preg_replace($component_r, $components, $new_file_content);

  file_put_contents($file_path, $new_file_content);

  if ($file_content === $new_file_content) {
    return false;
  }
  return true;
}
