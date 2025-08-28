const products = [
    {id : 1, name : 'laptop', category : 'Electronics', price : 50000},
    {id : 2, name : 'television', category : 'Electronics', price : 20000},
    {id : 3, name : 'shirt', category : 'Clothing', price : 1500},
    {id : 4, name : 'shoes', category : 'Clothing', price : 2500},
    {id : 5, name : 'mobile', category : 'Electronics', price : 60000}
];

function renderProducts(category){
const mainContent = document.getElementById('mainContent');
mainContent.innerHTML='';

const filtered = category === "All" ? products : products.filter(p=>p.category===category);

filtered.forEach(product=>{
    const card = document.createElement('div');
    card.className ='productCard';
    card.innerHTML = `
        <h3>${product.name}</h3>
        <p>Rs-${product.price}</p>
        <button class='addtocartBtn'>Add to Cart</button>
    ` 
    mainContent.appendChild(card);
}) 

addCartListeners()
}

const dropdown = document.getElementById('selectDropdown');
dropdown.addEventListener('change',(e)=>{
    renderProducts(e.target.value);
}) 

let count = 0;

function addCartListeners() {
  const buttons = document.getElementsByClassName('addtocartBtn');
  for (let btn of buttons) {
    btn.addEventListener('click', () => {
      count++;
      const counter = document.getElementById('counter');
      counter.textContent = `Products in the cart [${count}]`;
    });
  }
}

renderProducts('All');


