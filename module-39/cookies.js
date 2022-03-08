const displayLocalStorage=()=>{
    const cart=getCart();
    for(const name in cart){
        showInput(name);
    }
}

const addInput=()=>{
    const inputText=document.getElementById('input-field');
    const inputValue=inputText.value;
    if(!inputValue){
        return;
    }
    // display ui
        showInput(inputValue);
    // add local storage
        addProductToCart(inputValue);

    inputText.value='';
}
const showInput=name=>{
    const ul=document.getElementById('showInput');
    const li=document.createElement('li');
    li.innerText=name;
    ul.appendChild(li)
}
const getCart=name=>{
    const cart=localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj=JSON.parse(cart);
    }
    else{
        cartObj={};
    }
    return cartObj;
}
const addProductToCart=name=>{
    const cart=getCart();
    if(cart[name]){
        cart[name]=cart[name]+1;
    }
    else{
        cart[name]=1;
    }
    const cartStringified=JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
//     console.log(cart)
}
const placeOrder=()=>{
    document.getElementById('showInput').textContent='';
    localStorage.removeItem('cart')
}
displayLocalStorage();