console.log("Hello");

var totalPrice = document.getElementById("totalPrice");
var totalAmt = document.getElementById("totalAmt");
var disCode = document.getElementById("disCode");

const decQuantity = (itmq, itemPr1) => {
    var itemval = document.getElementById(itmq);
    var itemPr1 = document.getElementById(itemPr1);
    
    // console.log(itemval.value);
    if (itemval.value <= 0) {
        itemval.value = 0;
        alert('Negative value not allowed');
    } else {
        itemval.value = parseInt(itemval.value) - 1;
        itemPr1.innerHTML = parseInt(itemPr1.innerHTML) - 15;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) - 15;
        totalAmt.innerHTML = parseInt(totalAmt.innerHTML) - 15;
    }
    
}
const incQuantity = (itmq, itemPr2) => {
    var itemval = document.getElementById(itmq);
    var itemPr2 = document.getElementById(itemPr2);
    
    // console.log(it.value);
    if (itemval.value >= 10) {
        itemval.value = 10;
        alert('Max 10 allowed');
    } else {
        itemval.value = parseInt(itemval.value) + 1;
        itemPr2.innerHTML = parseInt(itemPr2.innerHTML) + 15;
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML) + 15;
        totalAmt.innerHTML = parseInt(totalAmt.innerHTML) + 15;
    }

}

const discountCode = () => {
    let totalAmtcurr = parseInt(totalAmt.innerHTML);
    let errorthr = document.getElementById("errorthr");
    if(disCode.value === '123'){
        let newTotalAmt = totalAmtcurr - 15;
        totalAmt.innerHTML = newTotalAmt;
    } else{
        errorthr.innerHTML = "Try Again! Valid Code is 123"
    }
}