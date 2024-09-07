let input=document.getElementById("input1");

function reverseVal(str){
    return str.split("").reverse().join("")
}

function check(){
    let value=input.value
    let reverse=reverseVal(value)

    if(value===reverse){
        alert("PALINDROME!")
    }else{
        alert("Not a PALINDROME :(")
    }

    input.value=""
}