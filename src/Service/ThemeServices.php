<?php
namespace Drupal\iq_barrio\Service;

class ThemeServices {
	public function set_pattern_theme($settings_arr, $definition_file) {
		$definition_content = "";

		if(file_exists($definition_file)) {
			$handle = fopen($definition_file, "r+");
			$definition_content = fread($handle, filesize($definition_file));
			fclose($handle);





			foreach ($settings_arr as $setting_param => $setting_value) {

				\Drupal::logger('theme')->notice($setting_param . " | " . $setting_value);

				$definition_content = preg_replace('/(\\$'.$setting_param.':)(.*)(;.*)/', "$1".$setting_value."$3", $definition_content);
			}


			\Drupal::logger('theme')->notice("final css: " . $definition_content);

			file_put_contents($definition_file, $definition_content);
		}
	}

}
