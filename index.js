// Reverse text without reversing individual words

let str = 'The world is';

const reverseString = (str) => {
    let newStr = [];
    let string = "";
    let reverseStr = "";
    for (i = 0; i < str.length; i++) {
       if (str[i] == " ") {
           newStr.push(string);
           string = "";
       } else {
           string += str[i];
       }
     }
    if (string) {  
    newStr.push(string);
    } 
    for (i = newStr.length - 1; i >= 0; i--) {
         reverseStr += newStr[i] + " ";
    }
    return reverseStr;
    };
  console.log(`Original string: ${str}`);
  console.log( `Reversed string: ${reverseString(str)}`);

//Given a string and pattern containing wildcard character i.e *. 
// Match to any number of characters to check if the pattern
//  matches with the complete string or not

function isMatch(str,p) {
    const match =(i, j)=>{
        if(i >=str.length && j>= p.length){
        return true;
        }

        if(str[i] === p[j]){
            return match(i +1, j +1);
        } else if(p[j]=== '*'){
            for(let k = i; k < str.length; k++){
                if(match(k, j +1)){
                    return true;
                }
            }
        }
        return false;
    } 
       return match(0, 0)
}
 str = "xyxzzxy";
 p = "x***x";
if(isMatch(str, p) === true){
    console.log("String matches Pattern.");
}else{
    console.log("String does not match pattern.");
}
