var dateInput=document.querySelector("#date-input");
var numInput=document.querySelector("#num-input");
var checkBtn=document.querySelector("#check-btn");
var outputDiv= document.querySelector("#output-div");
var image=document.querySelector("#image");

function calculateSum(dob){
    var bdate= dob.replaceAll("-","");
    var sum=0;
    for(var i=0;i<bdate.length;i++){
        sum=sum+Number(bdate.charAt(i))
    }
    return sum;
}

function compareValues(a,b){
if(a%b===0){
    outputDiv.innerText="Yay! Your birthday is lucky"
    image.innerHTML="<image src='images/two.png'>"
}
else{
    outputDiv.innerText="Oops! your birthdate is not lucky"
    image.innerHTML="<image src='images/sad.gif'>"
}
}


function checkIfBirthdayIsLucky(dob){
    var dob=dateInput.value;
    var sum= calculateSum(dob)
    compareValues(sum,numInput.value)
}

checkBtn.addEventListener("click", checkIfBirthdayIsLucky)















// function clickHandler(){
//     var userInput= dateInput.value ;
//     var reg=/[\W_]/g;
//     var newInput=userInput.replace(reg,"").split("")
//     console.log(newInput)
//     var sum=eval(newInput.join('+'))
//     console.log(sum)
//     console.group(numInput.value)
//     console.log(parseInt(sum)%parseInt(numInput));
//     if(parseInt(sum)%parseInt(numInput.value)===0){
//         console.log(sum%numInput.value)
//         outputDiv.innerText="Yay!! your birthdate is lucky";
//         image.innerHTML="<image src='images/two.png'>"
//     }
//     else{
//         outputDiv.innerText="Oops! your birthdate is not lucky"
//     }
// }


