/*let inputsub=document.querySelectorAll('.container .row100 .col button  ');
let section = document.getElementsByClassName('inputBox');

//let info=document.querySelector(".container .row100 .col button");


console.log(inputsub)
console.log(section)

inputsub.onclick=function()
{
    var info=document.querySelectorAll('.container .row100 .col button  ').value;
    
    
}


 inputsub.onclick=function sendEmail(prenom,nom,email,mobile,comment)
{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mo.aminerochdi@gmail.com",
        Password : "geniusman1",
        To : "mo.aminerochdi@gmail.com",
        From : "mo.aminerochdi@gmail.com",
        Subjet : `${nom} sent you a message `,
        Body : `Prenom : ${nom}<br/> Nom ${nom} <br/>  Email : ${email} <br/> Mobile : ${mobile} <br/> Comment ${comment} `, 
        
        
        
    }).then((comment) => alert("Mail sent successfully ! "))
    
    
}*/

/*let prenom=document.getElementById('prenom');

let nom=document.getElementById('nom');

console.log(prenom)
console.log(nom)


// scroll

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

*/
// alert


   

 var subm=document.querySelectorAll('input[type="submit"]');
  subm.onclick = function(){
  alert("envoyé avec succès");
  };

console.log(subm)
    
    



