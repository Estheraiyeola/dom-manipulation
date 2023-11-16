function createRowElements(){
    return{
        shoppingCart: document.getElementsByTagName("tbody")[0],
        newRow: document.createElement("tr"),
        newItem: document.createElement("td"),
        itemPrice: document.createElement("td")
    }
}
function getUserElement(){
    item = document.getElementById("item");
    price = document.getElementById("price");
    return{
        item, price
    }
}

function addToCart(){
    let {item, price} = getUserElement();
    let shoppingCart = document.getElementsByTagName("tbody")[0];
    let rows = shoppingCart.getElementsByTagName("tr");
    for (let index = 0; index < rows.length; index++) {

        let row = rows[index];
        let cells = row.getElementsByTagName("td");

        let rowItem = cells[0].innerText;

        if(item.value === rowItem){
            let updatedPrice = price.value;
            cells[1].innerText = updatedPrice;

            item.value = "";
            price.value = "";
            return;
        }  
    }
    
    if(item.value !== "" && price.value !== ""){
        let { newRow, shoppingCart, newItem, itemPrice} = createRowElements();

        newItem.innerText = item.value;
        itemPrice.innerText = price.value

        newRow.appendChild(newItem);
        newRow.appendChild(itemPrice);
        

        shoppingCart.appendChild(newRow);

        item.value = "";
        price.value = "";


    }
    
}
function removeFromCart(){
    let {item, price} = getUserElement();
    let shoppingCart = document.getElementsByTagName("tbody")[0];
    let newRow = shoppingCart.getElementsByTagName("tr");

    for (let index = 0; index < newRow.length; index++) {

        let row = newRow[index];
        let cells = row.getElementsByTagName("td");

        let rowItem = cells[0].innerText;
        let rowPrice = cells[1].innerText;

        if(item.value === rowItem && price.value === rowPrice){
            row.parentNode.removeChild(row);
            break;
        }
        
        
    }
    item.value = ""
    price.value = ""
    
    
}