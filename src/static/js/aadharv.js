$('#age').focusout(function(){
        var regexp1=new RegExp("^(([\\d]{4}\\ ){2}[\\d]{4})|([\\d]{12})$");
if(regexp1.test($('#age').val()))
{
     $("#notfeedback").css('hide','block')
   $("#feedback").css('display','block')


return false;
}else{
 $("#feedback").css('hide','block')
    $("#notfeedback").css('display','block')

}
    });


