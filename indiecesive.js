// my first javascript app 
// we shall figure out where to start after these commercial breaks


let n = Number(prompt("Pick a number"));

// if n is not a number then
if (!Number.isNaN(n)){
    console.log("Your number is the square root of " + n * n);
}else if  (typeof n == String){
    console.log("string not a number")
}else{
    console.log('idk')
}


