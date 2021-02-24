function datatype()
    {
      var x = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(email.value.match(x))
      {
        alert("Valid email address!");
        document.form1.text1.focus();
        return true;
      }
      else 
      {
        alert("opps!You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
      }
    }

function datatype()
     {
        var a = document.getElementById("mobilenumber").value;
        if(a==""){
	             document.getElementById("messages").innerHTML="*please enter number!";
                 return false;
                 }
           if(isNaN(a)){
           document.getElementById("messages").innerHTML="*Enter only numbers ";
           return false;
           }
           if(a.length<10){
           document.getElementById("messages").innerHTML="* number must must be of 10 digits";
           return false;
           } 
           if(a.length>10){
           document.getElementById("messages").innerHTML="*mobile number only be of 10 digits";
           return false;
           } 
           }
