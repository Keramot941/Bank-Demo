// depositBalance
document.getElementById('depositsubmit').addEventListener('click', function(){
    const depoin = document.getElementById('depoin');
    const depoinValue = depoin.value;
    const depoinInt = parseInt(depoinValue);
    

    const depositBalance = document.getElementById('depob');
    const depoResult = depositBalance.innerText;
    const deporInt = parseInt(depoResult);

    const depoTotal = depoinInt + deporInt;
    depositBalance.innerText = depoTotal;

    depoin.value = '';
// depositBalance end

    // deposit to total

    const totalBalance = document.getElementById('totalb')
    const totalResult = totalBalance.innerText;
    const totalInt = parseInt(totalResult);

    const total = depoinInt + totalInt;
    totalBalance.innerText = total;

    // deposit to total end

});

// Withdraw Blance
document.getElementById('withdrawsubmit').addEventListener('click', function(){
    const within = document.getElementById('within');
    const withinValue = within.value;
    const withinInt = parseInt(withinValue);
    console.log(withinInt);

    const withdrawBalance = document.getElementById('withdrab');
    const withResult = withdrawBalance.innerText;
    const withInt = parseInt(withResult);
    const withTotal = withinInt + withInt;
    
    // total to withdraw

    const totalBalance = document.getElementById('totalb')
    const totalResult = totalBalance.innerText;
    const totalInt = parseInt(totalResult);

    // const total = totalInt - withinInt;
    

    if(withinInt <= totalInt){
      let remainingBalance =  totalInt-withinInt;
      totalBalance.innerText  = remainingBalance;
      withdrawBalance.innerText = withTotal;

      within.value = '';
    }
    else{
        alert("Insufficient Balance")
    }

    // total to withdraw end

});
