let feet = document.getElementById("feet"); //Reference From Input Box
let convert = document.getElementById("convert"); // Reference From Button
// To add Event and take input from input box
feet.addEventListener('input',function(){
     let f = parseInt(this.value);
    //  after the button clicked 
    convert.addEventListener('click',function(){
        let result = f * 30.48;
        // console.log(result)
        if(isNaN(f)){
            document.getElementById("output").innerHTML = "Please Enter a Valid Number !";
        } else if(f <= 0){
            document.getElementById("output").innerHTML = "Please Enter a Feet Value";
        } else {
            document.getElementById("output").innerHTML = result + " cm"
        }
    })
})


