document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault()
    
    let getData = document.getElementById('text');
    let getValue = getData.value;
    
    let getPass = document.getElementById('passcode');
    let passValue = getPass.value;

    if(getValue == "keramot@gmail.com" && passValue == 123)
        {window.location.href = 'dashboard.html';}
    else {
        alert("Your username or password is invalid");
    }

})