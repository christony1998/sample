
      function validate() {
         var emailID = document.myForm.mail.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter a valid email ID")
            document.myForm.mail.focus() ;
            return false;
         }
         return( true );
      }