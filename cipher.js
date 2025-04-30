// === CIPHER FUNCTION ===
function cipher(message, key, action) {
    const originalMessage = message;
    let result = '';

    for (let i = 0; i < originalMessage.length; i++) {
        let char = originalMessage[i];
        let code = char.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            if (action === 'encode') {
                code = code + key;
            } else if (action === 'decode') {
                code = code - key;
            }
            if (code > 90) {
                code = code - 26;
            }
            if (code < 65) {
                code = code + 26;
            }
            result += String.fromCharCode(code);

        } else if (code >= 97 && code <= 122) {
            if (action === 'encode') {
                code = code + key;
            } else if (action === 'decode') {
                code = code - key;
            }
            if (code > 122) {
                code = code - 26;
            }
            if (code < 97) {
                code = code + 26;
            }
            result += String.fromCharCode(code);

        } else {
            result += char;
        }
    }

    return result;
}

// module.exports = cipher; // removed for browser!

// === 1. DOM ELEMENTS === 

const form = document.getElementById('cypherForm'); 
const messageInput = document.getElementById('message'); 
const keyInput = document.getElementById('key');
const actionSelect = document.getElementById('action');
const resultParagraph = document.getElementById('result'); 
const clearBtn = document.getElementById('clear');

// === 2. EVENT LISTENERS === 

form.addEventListener('submit', function(event) {
    event.preventDefault(); // stops the form from refreshing the page as default

const message = messageInput.value;
const key = parseInt(keyInput.value); // to make sure its a selected number 
const action = actionSelect.value; 

    if (!message || isNaN(key) || !action) {
        resultParagraph.textContent = "Please fill out all fields.";
        return;
    }

const result = cipher(message, key, action); 
resultParagraph.textContent = result;
}); 

clearBtn.addEventListener('click', function() {
    messageInput.value = '';
    keyInput.value = ''; 
    actionSelect.selectedIndex = 0; 
    resultParagraph.textContent = ''; 
}); 

/* NOTES BELOW // 

// remember a string is made up of individual characters 
// when we do upperMessage [i], we are accessing one character at a time by index 
// Hello - h = 0, e = 1, l = 2 etc 
// so let char = upperMessage [i] means - give me the letter at position i in the message 
// [i] means - look inside the string or array at position i / first loop would be 0, second 1 so h and e 
// in javascript, a string acts like an array of character when we use [i]
// hello [2] = the first l in hello 
// why let code = char.charcodeat(o) - beceause letters themselves cant be added or shifted directly 
// instead we need to work with numbers, so every character has a hidden number 
// char.charCodeAt gives us the ASCIi number for the character / we can add or subtract easier now 
// ASCII - american standard code for information intercharge 
// e.g A = 65 / Z = 90 and lowercase a = 97 AND loweercase z = 122 


/* understanding what is being built 
the ciphers functions job is to: 
- take a MESSAGE (string)
- take a KEY (number)
- take an ACTION (encode or decode)
- return the new message shifted by the key

for ecnoding -- shift forward
for decoding -- shift backward
*/



/* code in theory
    function cipher (message, key, action): 
        make message uppercase
        create empty result string 

            for each character in the message: 
                if character is a letter: 
                    get its char code 
            
            if action is "encode": 
                shift key forward
            else if action is "decode": 
                shift key backward

            if shifted goes past Z - wrap around
            if shift goes BEFORE A - wrap around 
            add new character to result 

        else: 
            add the non-letter character to the result 
    
    return the result
*/
