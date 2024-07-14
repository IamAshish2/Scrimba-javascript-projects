const characters = ["A","B","C","D","E","F","G","H","I","J",
    "K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
    "Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
     "!","@","#","$","%","^","&","*","(",")","_","-","+","=",
     "{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const passLength = 8;
let random;


const generateBtn = document.getElementById('generate-pass-btn');
const passwordDisplay = document.getElementById('password');
const passwordDisplay2 = document.getElementById('password2');

generateBtn.addEventListener('click',() => {
    generatePassword();
    generatePassword2();
});


function generatePassword(){
    let password = '';

    for(let i=0;i<passLength;i++){
        random = Math.floor(Math.random() * characters.length);
        password += characters[random]
    }
    passwordDisplay.textContent = password;

}

function generatePassword2(){
    let password = '';

    for(let i=0;i<passLength;i++){
        random = Math.floor(Math.random() * characters.length);
        password += characters[random]
    }
    passwordDisplay2.textContent = password;

}