<?php 

  $headers = 'Content-type: text/plain; charset="utf-8"';

  $username = $_POST['user_name'];
  $usermail = $_POST['user_mail'];
  $usermessage = $_POST['user_message'];

  $headers = 'MiME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset="utf-8"';

  $to = 'dasha.shurinova@yandex.ru';
  $subject = 'Заявка с сайта';
  $message = "
  <html>
  <table>
    <tr>
      <td>Имя</td>
      <td>$username</td>
    </tr>
    <tr>
      <td>Емайл</td>
      <td>$usermail</td>
    </tr>
    <tr>
      <td>Телефон</td>
      <td>$usermessage</td>
    </tr>
  </table>
  </html>
  "


  if (mail($to, $subject, $message, $headers)) 
  {echo ("The letter was sent sucsessfully");}
else {
echo ("Mistakes occured");
  }
  // mail($to, $subject, $message, $headers);
  // $to - кому
  // $subject - тема письма
  // $message - тело письма (содержимое)
  // $headers - спец заголовок, не трогаем

?>