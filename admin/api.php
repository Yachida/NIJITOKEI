<?php
	switch($_GET['proc']) {
		case "getListImg":
			getListImg();
			break;
		case "getValidImg":
			getValidImg();
			break;
		case "putValidImg":
			putValidImg();
			break;
		default:
	}
	
	function getListImg() {
		$arr = array();
		if ($dir = opendir("../info/")) {
			while (($file = readdir($dir)) !== false) {
				if ($file != "." && $file != "..") {
					$arr[] = json_decode(file_get_contents("../info/".$file));
				}
			}
			closedir($dir);
		}
		putJson($arr);
	}
	function getValidImg() {
		$arr = json_decode(file_get_contents("../app.json"));
		putJson($arr->validImg);
	}
	
	function putValidImg() {
	}

	function putJson($data) {
		header('Content-type: application/json');
		echo json_encode($data);
	}

