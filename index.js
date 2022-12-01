// Reverse text without reversing individual words

let str = 'Technical Interview Preparation';
let polishedString = str.split(" ");
let reversedPolished = polishedString.reverse().join(' ')

  console.log(`Original string: ${str}`);
  console.log( `Reversed string: ${reversedPolished}`);

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
if(isMatch(str, p)){
    console.log("String matches Pattern.");
}else{
    console.log("String does not match pattern.");
}
