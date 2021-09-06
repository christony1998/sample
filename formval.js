
      function validate() {
      
         if( document.myForm.name.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm.name.focus() ;
            return false;
         }
         if( document.myForm.mail.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.mail.focus() ;
            return false;
         }
         if( document.myForm.comment.value == "" ) {
            alert( "Please provide your Message!" );
            document.myForm.comment.focus() ;
            return false;
         }
         return( true );
      }