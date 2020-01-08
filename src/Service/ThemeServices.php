<?php
namespace Drupal\iq_barrio\Service;

class ThemeServices {
	public function set_pattern_theme($settings_arr, $definition_file) {
		$definition_content = "";

		if(file_exists($definition_file) && isset($settings_arr['color_grey1']) ) {

			$definition_content = file_get_contents($definition_file.'.txt');


			$definition_content = preg_replace_callback('/\{{(\w+)}}/', function($match) use ($settings_arr){
				$matched = $match[0];
				$name = $match[1];
				return isset($settings_arr[$name]) ? $settings_arr[$name] : $matched;
			}, $definition_content);


			\Drupal::logger('theme')->notice("final css: " . $definition_content);

			file_put_contents($definition_file, $definition_content);
		}
	}

}
