//correct script
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    let passwordLength = window.prompt("Enter length (between 8 and 128):")
    // conditional statement following prompt to validate. Break/return nothing function if too small or large
    if (passwordLength < 8 || passwordLength > 128) {
        return "please choose a character length between 8 and 128";
    }
    let includeSpecial = window.confirm("Include special characters?");
    let includeNumeric = window.confirm("Include numeric characters?");
    let includeLowercase = window.confirm("Include lowercase characters?");
    let includeUppercase = window.confirm("Include uppercase characters?");
    // conditional statement following prompt to validate. Break/return nothing function if they don't choose any characters
    if (includeSpecial == false && includeNumeric == false && includeLowercase == false && includeUppercase == false) {
        return "please choose to include special characters, numeric characters, lowercase characters and/or uppercase characters";
    }

    let characterOptions = []

    // build characterOption alphabets

    let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let special = ["!", "@", "#", "$", "%", "&", "(", ")", "*", "+", "/", "[", "]"];

    // if character type is chosen, concatenate from given alphabet

    if (includeSpecial) {
        characterOptions = characterOptions.concat(special);
    }

    if (includeUppercase) {
        characterOptions = characterOptions.concat(uppercase);
    }

    if (includeLowercase) {
        characterOptions = characterOptions.concat(lowercase);
    }

    if (includeNumeric) {
        characterOptions = characterOptions.concat(numeric);
    }

    // set up blank string for resulting password

    let res = "";

    // generate a random string the length of passwordLength

    for (i = 0; i < passwordLength; i++) { 
        let randomIndex = Math.floor(Math.random() * characterOptions.length) 
        res += characterOptions[randomIndex]
    }

    //final password is returned
    return res;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(res);