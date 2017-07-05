<?php
	
	
	if(isset($_POST['name'])){
		$to = "regpro2015@mail.ru";
		$subject = "Заявка с сайта (Регион проект)";
		$txt = "Имя - ".$_POST['name']."\r\nТелефон - ".$_POST['phone'];
		$headers = "From: Region Project" . "\r\n";
		
		mail($to,$subject,$txt,$headers);
	
	}
?>