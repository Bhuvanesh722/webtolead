let capthachecked = false;
function beforesubmit(event){
    if(capthachecked){
    let outputdate = document.querySelector(".outputDate")
    let inputdate = document.querySelector(".inputDate")
    console.log("inputdate.value",inputdate.value)

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN")
    outputdate.value = formattedDate
    }
    else{
        alert("Please Check the recaptcha box")
        event.preventDefault();
    }
}
function timestamp() { var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") 
        {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
            elems["ts"] = JSON.stringify(new Date().getTime());
            document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
         } } 
         setInterval(timestamp, 500); 

function capthchasuccess(){
    capthachecked = true;

}