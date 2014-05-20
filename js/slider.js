var aktif=0, gosterim_adeti=5;
var dizi = new Array();
$(document).ready(function(){
var boyut = $("#kutucuk p").length;
        
for(var i=0; i<boyut; i++)
{
     dizi[i] = $("#kutucuk p:eq("+i+")").html();
}
        
$("#kutucuk").html("");
        
for(var i=0; i<gosterim_adeti; i++)
{
          $("#kutucuk").append("<p>"+dizi[i]+"</p>");
}
        
setInterval(degistir, 2000);
        
function degistir()
{
          aktif = (aktif + 1)%boyut;
          $("#kutucuk").html("");
          var ilk = aktif-1;
          if(ilk<0)ilk = ilk+boyut;
          $("#kutucuk").append("<p>"+dizi[ilk]+"</p>");
          for(var i=aktif; i<aktif + gosterim_adeti;i++)
          {
            $("#kutucuk").append("<p>"+dizi[(i%boyut)]+"</p>");
          }
          $("#kutucuk p:first").slideUp(500);
          $("#kutucuk p:last").css("height","0px").animate({height:"40px"},600);
          }
});
