$('#age').focusout(function(){
        var regexp1=new RegExp("^(([\\d]{4}\\ ){2}[\\d]{4})|([\\d]{12})$");
if(regexp1.test($('#age').val()))
{
   $("#feedback").css('display','inline');



}else{
    $("#notfeedback").css('display','none');

}
    });


function myFunction() {
  var  myVar = setTimeout(Func, 300000);
}

function Func() {
  location.reload();
}



