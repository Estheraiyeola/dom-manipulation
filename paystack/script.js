let bankTag = document.getElementById('#select');
let accName = document.getElementById('acc-name');
const realApiKey = 'API-KEY';
const list = [];




function createBankOptions(){
    let url = 'https://api.paystack.co/bank';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('Authorization', `Bearer ${realApiKey}`);
    xhr.send();
    fetch(url).then((res) => {
        return res.json()
    }).then((res) => {
        res.data.forEach(element => {
            let optionTag = document.createElement('option');
            optionTag.innerHTML = element.name;
            bankTag.appendChild(optionTag);
            list.push(element)

        });

        return list;
    }).catch(error=> {
        console.log('Error Message =>', error)
    });
}
createBankOptions()

function verify(){
    event.preventDefault()
    let accNo = getAccountNumber();
    console.log(accNo);
    const selectedBankName = getBankName();
    console.log(list);
    const selectedBank = list.find(element =>
        element.name === selectedBankName
    );
    
    const bankCode = selectedBank.code;
    console.log(bankCode);
    let newUrl = `https://api.paystack.co/bank/resolve?account_number=${accNo}&bank_code=${bankCode}`

    fetch(newUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${realApiKey}`
        }
    }).then((res) => {
        return res.json()
    }).then((res) => {
        console.log(res)
        
        accName.style.display = 'block';
        if(res.status === true){
            accName.style.color = 'green';
            accName.innerHTML = res.data.account_name;
        }
        else{
            accName.style.color = 'red';
            accName.innerHTML = 'Account not found';
        }
        
        console.log(res.data.account_name);

    }).catch(error => {
        console.error('Error Message =>', error);

    }) 

}





function getAccountNumber(){
    return document.querySelector('#account-number').value;
}
function getBankName(){
    return document.getElementById('#select').value
}
