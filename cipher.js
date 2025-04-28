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

function cipher(message, key, action) {
    return message;
  }
  
  module.exports = cipher;
// testing function, even though its empty right now 