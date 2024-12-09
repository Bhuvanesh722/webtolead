function beforesubmit(){
    let outputdate = document.querySelector(".outputDate")
    let inputdate = document.querySelector(".inputDate")
    console.log("inputdate.value",inputdate.value)

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN")
    outputdate.value = formattedDate

}
