//Title Change
let beginTitle = document.getElementById("title").innerHTML = "<H2>Select option to begin</H2>"
    
document.querySelector('#choice').addEventListener("change",function(){
    if(this.value==1){
        document.getElementById("title").innerHTML = "<H2>Convert Farenheit to Celsius</H2>"
        document.getElementById("inputLetter").innerHTML = "&deg;F"
        document.getElementById("outputLetter").innerHTML = "&deg;C"
    }else if(this.value==2){
        document.getElementById("title").innerHTML = "<H2>Convert Celsius to Farenheit</H2>"
        document.getElementById("inputLetter").innerHTML = "&deg;C"
        document.getElementById("outputLetter").innerHTML = "&deg;F"
    }else{
        document.getElementById("title").innerHTML = "<H2>Select option to begin</H2>"
        document.getElementById("inputLetter").innerHTML = "?"
        document.getElementById("outputLetter").innerHTML = "?"    
    };
    
});

// ----- TEACHER!!!  HOW DO I QUERY MULTIPLE SELECTORS AND HAVE IT WORK???? HELP PLEASE!!

/* Tried 

--- document.querySelector('#inputDegree, #choice').addEventListener("change",function(){ --- 

but it only worked for #choice. I don't want 2 seperate functions, just 2 listeners that will run 1 function.*/
document.querySelector('#inputDegree').addEventListener("change",function(){
    let choice = document.getElementById("choice").value
    let inputTemp = document.getElementById("inputDegree").value
    if(choice == 1){
        let outputLongForm = (inputTemp -32) * 5/9;
        let outputDegree = outputLongForm.toFixed(1);
        document.getElementById("outputDegree").innerHTML = outputDegree;
    }else if(choice == 2){
        let outputLongForm = (inputTemp * 9/5) +32;
        let outputDegree = outputLongForm.toFixed(1);
        document.getElementById("outputDegree").innerHTML = outputDegree;
    }
});
document.querySelector('#choice').addEventListener("change",function(){
    let choice = document.getElementById("choice").value
    let inputTemp = document.getElementById("inputDegree").value
    if(choice == 1){
        let outputLongForm = (inputTemp -32) * 5/9;
        let outputDegree = outputLongForm.toFixed(1);
        document.getElementById("outputDegree").innerHTML = outputDegree;
    }else if(choice == 2){
        let outputLongForm = (inputTemp * 9/5) +32;
        let outputDegree = outputLongForm.toFixed(1);
        document.getElementById("outputDegree").innerHTML = outputDegree;
    }
});