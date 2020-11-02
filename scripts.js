/* Add your JavaScript to this file */
window.onload = function(){
    var fbtn = document.querySelector('form button');
    var msg = document.getElementsByClassName('message')[0];
    fbtn.onclick = function(element){
        element.preventDefault();
        var email = document.querySelector('input').value;
        if (email == ""){
            // console.log("Please enter a valid email address.");
            msg.innerHTML = "Please enter a valid email address.";
            // console.log(msg.value);
        }
        else{
            // console.log("Thank you! Your email address <" + email + "> has been added to our mailing list!");
            msg.innerHTML = "Thank you! Your email address " + email + " has been added to our mailing list!";
            // console.log(msg.value);
        }
        
    }
}