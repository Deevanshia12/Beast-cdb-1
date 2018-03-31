$('#age').focusout(function(){
        var regexp1=new RegExp("^(([\\d]{4}\\ ){2}[\\d]{4})|([\\d]{12})$");
if(regexp1.test($('#age').val()))
{
   $("#feedback").css('display','block')


return false;
}else{
    $("#notfeedback").css('display','block')

}
    });


function myFunction() {
  var  myVar = setTimeout(Func, 300000);
}

function Func() {
  location.reload();
}



