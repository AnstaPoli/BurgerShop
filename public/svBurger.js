//3
const checkForm = () => {
    let firstName = document.getElementById('inpFirstName').value
    let checkFirstName = validationName(firstName);

    let lastName = document.getElementById('inpLastName').value
    let checkLastName = validationName(lastName);

    let mail = document.getElementById('inpMail').value
    let checkMail = validationMail(mail);

    let password = document.getElementById('inpPass').value
    let checkPass= validationPassword(password);

    let confirmPassword = document.getElementById('inpConfirmPass').value
    let checkConfirmPassword = validationConfirmPassword(password, confirmPassword);

    if ((checkFirstName) && (checkLastName) && (checkMail) && (checkPass) && (checkConfirmPassword)) {
        console.log(checkFirstName + ' ' +checkLastName+' '+checkMail + ' ' + checkPass) ;

        return true
    }
    else return false
}


//3.1.1  //3.1.2
const validationName = (checkName) => {
    if (checkName.length<2){
        return false
    }
    for (let i = 0; i < checkName.length; i++) {
        let checkLetter = checkName.charAt(i)
        if (checkLetter >= 'A' && checkLetter <= 'Z') {
           continue
        }
        else if (checkLetter >= 'a' && checkLetter <= 'z'){
            continue
        }
        else return false
    }
return true
}
//3.1.3
const validationMail = (checkMail) => {
    if (checkMail.indexOf("@") != -1) {
        if (checkMail.indexOf("gmail") != -1 || checkMail.indexOf("yahoo") != -1) {
            for (let i = 0; i < checkMail.indexOf("@"); i++) {
                let checkMailSign = checkMail.charAt(i);
                if (checkMailSign >= "a" && checkMailSign <= "z") {
            
                }
                else if (checkMailSign >= "A" && checkMailSign <= "Z") {
                   
                }
                else if(checkMailSign >= 0 && checkMailSign <= 9){
                    continue
                }
                else return false
            }
            return true
        }
        else return false
    }
    else return false
}

const validationPassword=(checkPassword)=>{
    if (checkPassword>='!'&&checkPassword<='/'){
        return true
    }
    else if(checkPassword>=':'&&checkPassword<='@'){
        return true
    }
    else if(checkPassword>=1 &&checkPassword<=9){
        return true
    }
    else return false
}

const validationConfirmPassword = (password, confirmPassword)=>{
    if(password == confirmPassword){
        return true;
    }
    return false
}