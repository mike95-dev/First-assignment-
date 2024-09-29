      //Process
         
      function evaluate_length(){
        let FIRSTNAME = document.getElementById("FIRSTNAME").value;
        let LASTNAME = document.getElementById("LASTNAME").value;
        let ZIPCODE = document.getElementById("ZIPCODE").value;
        //alert("FIRST NAME HERE" + FIRSTNAME + "LAST NAME HERE" + LASTNAME);
        let Full_Name = FIRSTNAME + " " + LASTNAME;
        let name_length = Full_Name.length -1;
        if(name_length >20){
            alert("your name is overe 20 characters")
            }
            else{
                alert(" your name is less than 20 characters")
            }
        
        // evaluate if our if statment something is true do something leave the if statement
        let ZIPCODE_length = ZIPCODE.length;
        if (ZIPCODE_length < 5){
            alert("zipcode is invalid. You Typed: " + ZIPCODE + " zipcode needs to be 5 characters long")
        }
           else{
            alert("zipcode is valid" + " " + ZIPCODE + " here's a secret message MORIOH CHO RADIO!!!")
        }
        document.getElementById("name").innerHTML = Full_Name.trim();
        alert("Your Name Lenght is:" + name_length);
    }