<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="js/slider.js"></script>
<link rel='stylesheet' href='style.css' type='text/css' media='all' /><link>
<?php
function eksisozluk_yorumlarim($eksi_kullanici_adi) {
echo '
<h2>[ '.$eksi_kullanici_adi.' ]</h2><h3>  ekşisözlük\'te son yorum yaptığı 30 konu;</h3>
<div id="kutucuk">';
$adres="https://eksisozluk.com/biri/$eksi_kullanici_adi/son-entryleri";
$kaynakcek=file_get_contents($adres);
preg_match_all('#">(.*?) <span class="detail with-parentheses">#s', $kaynakcek, $veriler);
for($a=1; $a<=30; $a++){
echo '<p>'.$a.' - <a href="https://eksisozluk.com/'.$veriler[1][$a].'">'.$veriler[1][$a].'</a></p>'.'<br>
';
}
}
?>
</div>