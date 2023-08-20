
let total = 0;
function selectedCard(event) {
  const selectedProductList = document.getElementById("product-name");
  const name = selectedProductList.children.length + 1 + '. ' + event.childNodes[3].childNodes[3].innerText
  const li = document.createElement('li');
  li.innerHTML = name;
  selectedProductList.appendChild(li);

  /* total price */
  const price = event.childNodes[3].childNodes[5].childNodes[0].innerText;
  total = parseFloat(total) + parseFloat(price);
  const prices = document.getElementById("total-price")
  prices.innerText = total;

  // button
  const btn = document.getElementById("apply-btn");
  btn.removeAttribute('disabled')

  const button = document.getElementById("make-purchase");
  button.removeAttribute('disabled')

  /* condition and button enable */
  if (total <= 200) {
    btn.setAttribute('disabled', 'true');
    button.setAttribute('disabled', 'true');

  }

  document.getElementById('apply-btn').addEventListener('click', function () {
    // Discount
    const inputField = document.getElementById('input-value')
    const inputValue = inputField.value;
    // console.log(inputValue)
    if (inputValue === 'SELL200') {
      // const discount =   document.getElementById('discount') 
      const payDiscount = 20;
      const discountAmount = (payDiscount / 100) * total;
      const payDiscountFixed = parseFloat(discountAmount).toFixed(2)

      const discount = document.getElementById('discount')
      discount.innerText = payDiscountFixed;
      // console.log(payDiscountAmount)

      const totalPrice = total - payDiscountFixed;
      const totalPriceFixed = parseFloat(totalPrice).toFixed(2)
      const totalCalculate = document.getElementById('total-calculate');
      totalCalculate.innerText = totalPriceFixed;
    }

    else {
      alert("It's Wrong code! please try again")
    }

    document.getElementById('go-home').addEventListener('click', function(){   
      // event.target.style.display = "none";
      inputField.value = '';  
      selectedProductList.innerText='';
      // priceField.value = '';
      prices.innerText = '';
      discount.innerText = '';
      const totalCalculate = document.getElementById('total-calculate');
      totalCalculate.innerText = '';      
    })    

  })


}

// button

const button = document.getElementById("make-purchase");
button.style.backgroundColor = "gray-500"
button.disabled = true;

const btn = document.getElementById("apply-btn");
btn.style.backgroundColor = "gray-500"
btn.disabled = true;






