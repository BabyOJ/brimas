function showNav(show,hide){
     nav= document.getElementById(show);
     navLine= document.getElementById(hide);
    nav.style.display='block';
    navLine.style.display='none';

}
function NewUser(){
let fullName = document.getElementById('fullname').value;
let PhoneNUmber = document.getElementById('phonenumber').value;
let email = document.getElementById('email').value;
let DOB = document.getElementById('dob').value;
let gender = document.getElementById('gender').value;
// let female = document.getElementById('female').value;
// let movie1 = document.getElementById('movie1').value;
// let movie2 = document.getElementById('movie2').value;
// let movie3 = document.getElementById('movie3').value;
// let movie4 = document.getElementById('movie4').value;
let password = document.getElementById('pass').value;
let load = document.getElementById('loader');
   if(fullName == ''&& PhoneNUmber == ''&& email == ''&& DOB == ''&& password == ''&&gender=='Gender'){
    document.getElementById('msg').innerHTML='invalid';
    document.documentElement.scrollTop=20;
   }else{
        let spce = fullName.indexOf(' ');
        if(spce=='-1'){
            document.getElementById('msg').innerHTML='invalid name';
            // alert(spce);
        }
        let mail = email.indexOf('@');
        let mal = email.indexOf('.com');
        if (mail=='-1'||mal=="-1"){
            document.getElementById('msg').innerHTML += '<br> invalid email  address';   
        }
        // let male = document.getElementById('male').innerHTML;
        // let female = document.getElementById('female').innerHTML;
        let msg = document.getElementById('msg');
         if(gender=='Gender'){
            msg.innerHTML = 'choose a gender';
         }
    }
       
       
}
