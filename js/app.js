
let total = 0;
function selectedCard(event) {
  const selectedProductList = document.getElementById("product-name");  
  const name = selectedProductList.children.length + 1 + '. ' + event.childNodes[3].childNodes[3].innerText
  const li = document.createElement('li');
  li.innerHTML = name;  
  selectedProductList.appendChild(li);


  const price = event.childNodes[3].childNodes[5].childNodes[0].innerText;
  total = parseFloat(total) + parseFloat(price);
  document.getElementById("total-price").innerText = total;


  const btn = document.getElementById("apply-btn"); 
  btn.removeAttribute('disabled')
  
  const button = document.getElementById("make-purchase"); 
  button.removeAttribute('disabled')
 

  if (total <= 200) {    
    btn.setAttribute('disabled', 'true');
    button.setAttribute('disabled', 'true');
   
  }


}
// button

const button = document.getElementById("make-purchase");
button.style.backgroundColor = "gray-500"
button.disabled = true;

const btn = document.getElementById("apply-btn");
btn.style.backgroundColor = "gray-500"
btn.disabled = true;





document.getElementById('apply-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-value')
    const inputValue = inputField.value;
    console.log(inputValue)
    if( inputValue === 'SELL200' ){
        alert("It's correct")

      const discount =   document.getElementById('discount')
      const totalPrice =  document.getElementById('total-price')
      const total = selectedCard(price);      

    }

    else{
      alert("It's Wrong code! please try again")
    }

})




