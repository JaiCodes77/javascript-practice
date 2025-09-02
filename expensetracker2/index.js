const expenses = [{description : 'lunch', amount : 2000, category : 'food'},
    {description : 'mobile', amount : 10000, category : 'Electronics'},
    {description : 'shoes', amount : 2500, category : 'Clothing'}]; 

    const descInput = document.getElementById('descInp');
    const categoryInput = document.getElementById('categoryInp');
    const amountInput = document.getElementById('amountInp');
    const display = document.getElementById('display');
    const addExpBtn = document.getElementById('addExpBtn');
    const showtotal = document.getElementById('showtotal');

    function renderExpenses(){
        display.innerHTML = '';

        expenses.forEach((exp)=>{
            let divDesc = document.createElement('div');
            divDesc.classList.add('div');
            divDesc.innerHTML = `${exp.description}-${exp.category}`

            let divAmt = document.createElement('div');
            divAmt.classList.add('div');
            divAmt.innerHTML = `${exp.amount}`

             display.appendChild(divDesc)
            display.appendChild(divAmt) 

            let total = expenses.reduce((acc,exp)=>acc+Number(exp.amount),0)
            let displaytotal = document.createElement('div');
            displaytotal.innerHTML = `${total}`;

            showtotal.appendChild(displaytotal);
            
        })
    }  

    addExpBtn.addEventListener('click',()=>{
        let newExpense = {
            description : descInput.value,
            category : categoryInput.value,
            amount : amountInput.value
        }

        expenses.push(newExpense);
        renderExpenses();
    }) 



    renderExpenses(); 

