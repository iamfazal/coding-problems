function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let hasNumber=false,hasLowerCase=false,hasUpperCase=false,hasSpecialChar=false;
    const specialChars = "!@#$%^&*()-+";
    for(let c of password){
        if(c>= 'a' && c<='z') hasLowerCase=true;
        else if(c<= '9' && c>='0') hasNumber=true;
        else if(c>= 'A' && c<='Z') hasUpperCase=true;
        else if(specialChars.includes(c)) hasSpecialChar=true;
    }
    let totalMissing=0;
    if(!hasNumber) totalMissing++;
    if(!hasLowerCase) totalMissing++;
    if(!hasUpperCase) totalMissing++;
    if(!hasSpecialChar) totalMissing++;
    
    return Math.max(totalMissing, 6 - n);
}