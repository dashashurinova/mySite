<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['user_name'])) {$phone = $_POST['user_name'];}
if (isset($_POST['user_mail'])) {$mail = $_POST['user_mail'];}
if (isset($_POST['user_message'])) {$message = $_POST['user_message'];}
 
/* Сюда впишите свою эл. почту */
$myaddres  = "dasha.shurinova@yandex.ru"; // кому отправляем
 
/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "Тема: Заказ обратного звонка!\nТелефон: $phone\nИмя: $name";
 
/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заказ'; //сабж
$email='Заказ обратного звонка'; // от кого
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
 
ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="refresh" content="3; url=http://f98315rl.beget.tech/contacts.html">
<title>Спасибо! Мы свяжемся с вами!</title>
<meta name="generator">
<script type="text/javascript">
setTimeout('location.replace("/contacts.html")', 2000);
/*Изменить текущий адрес страницы через 2 секунды (2000 миллисекунд)*/
</script> 
</head>
<body>
<h1>Спасибо! Мы свяжемся с вами!</h1>
</body>
</html>


