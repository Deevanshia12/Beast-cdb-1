$('#age').click(function(){
    console.log('here');
        alert();
    });
function validate()
{

var regexp1=new RegExp("^(([\\d]{4}\\ ){2}[\\d]{4})|([\\d]{12})$");
if(regexp1.test(document.getElementById("age").value))
{
alert("Only numbers are allowed");
return false;
}
}

