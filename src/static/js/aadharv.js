$('#age').focusout(function(){
        var regexp1=new RegExp("^(([\\d]{4}\\ ){2}[\\d]{4})|([\\d]{12})$");
if(regexp1.test($('#age').val()))
{
     $("#notfeedback").css('display','none')
   $("#feedback").css('display','block')


return false;
}else{
 $("#feedback").css('display','none')
    $("#notfeedback").css('display','block')

}
    });
$('#age').focusin(function()
{
     $("#notfeedback").hide()
     $("#feedback").hide()

}
    );



