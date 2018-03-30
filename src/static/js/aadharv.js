$('#age').focusout(function(){
        var regexp1=new RegExp("^(([\\d]{4}\\ ){2}[\\d]{4})|([\\d]{12})$");
if(regexp1.test($('#age').val()))
{

return false;
}else{
            $("#age").parent().after("<div class='validation' style='color:red;margin-bottom: 20px;'>Invalid Aadhaar</div>");
}
    });


