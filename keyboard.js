const ol = document.querySelector("ol");
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var secretKey = alphabet[Math.floor(Math.random()* 25)];
console.log(secretKey);
for(let i = 0; i < secretKey; i++);
document.body.addEventListener("keyup", function(event){
    console.log(event.key);
    if(secretKey === event.key){
        ol.textContent = "SECRET KEY PRESSED: " + event.key;
    };
});
