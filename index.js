let CC, YY, MM, DD, d, dayValue;
let femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
let dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
let maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];

function validate() {
    var genders = document.getElementsByName("gender");
    if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.myForm.year.value <=1900) {
       alert( "Enter your correct year of birth!" );
       document.myForm.year.focus() ;
       return false;
    }
    else if( document.myForm.month.value == "" || isNaN( document.myForm.month.value ) || 
    document.myForm.month.value.length != 2 || document.myForm.month.value > 12  || document.myForm.month.value <= 0){
       alert( "Enter your correct year of birth! between 1 and 12" );
       document.myForm.month.focus() ;
       return false;
    }
    else if( document.myForm.date.value == "" || isNaN( document.myForm.month.value ) || 
    document.myForm.month.value.length != 2|| document.myForm.date.value > 31 || document.myForm.date.value <= 0) {
       alert( "Enter your correct day of birth!!" );
       document.myForm.day.focus() ;
       return false;
    }
    else if(genders[0].checked==false && genders[1].checked==false ) {
        alert("You must select male or female");
        return false;
    }   
    else{
      return true ;
    }
  
}
