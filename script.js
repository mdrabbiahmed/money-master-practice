function getInputValue(inputId){
      const input = document.getElementById(inputId);
      const inputString = input.value;
      const inputValue = parseInt(inputString);
      return inputValue;
}
document.getElementById('calculate-btn').addEventListener('click',function(){
      const foodValue = getInputValue('food-input');
      const rentValue = getInputValue('rent-input');
      const clotheValue = getInputValue('clothe-input');

      const totalExpense = foodValue + rentValue + clotheValue;
      const total = document.getElementById('total-expenses');
      total.innerText = totalExpense;
      const totalIncome = getInputValue('income-input');
      const Balance = totalIncome - totalExpense;
      const totalBalance = document.getElementById('total-balance');
      totalBalance.innerText = Balance;

})

document.getElementById('save-btn').addEventListener('click', function(){
      const discountAmount = getInputValue('discount-input');
      const totalIncome = getInputValue('income-input');
      const totalDiscount = (totalIncome*(discountAmount/100));
      const SavingAmount = document.getElementById('save-amount');
      SavingAmount.innerText = totalDiscount;

      const totalBalance = document.getElementById('total-balance');
      const Balance = totalBalance.innerText;
      const remainingBalance = document.getElementById('remain-balance');
      remainingBalance.innerText = Balance - totalDiscount;
      

})


// function getInputValue(inputId){
//       const input = document.getElementById(inputId);
//       const inputString = input.value;
//       const inputValue = parseInt(inputString);
//       return inputValue;
      

// }
// document.getElementById('calculate-btn').addEventListener('click',function(){
//       const foodValue = getInputValue('food-input');
//       const rentValue = getInputValue('rent-input');
//       const clotheValue = getInputValue('clothe-input');

//       const totalExpense = foodValue + rentValue + clotheValue;
//       const total = document.getElementById('total-expenses');
//       total.innerText = totalExpense;
//       const totalIncome = getInputValue('income-input');
//       const Balance = totalIncome - totalExpense;
//       const totalBalance = document.getElementById('total-balance');
//       totalBalance.innerText = Balance;

// })

// document.getElementById('save-btn').addEventListener('click',function(){
//       const discountAmount = getInputValue('discount-input');
//       const totalIncome = getInputValue('income-input');
//       const totalDiscount = (totalIncome*(discountAmount/100));
//       const saveAmount = document.getElementById('save-amount');
//       saveAmount.innerText = totalDiscount;

//       const totalBalance = document.getElementById('total-balance');
//       const Balance = totalBalance.innerText;
//       const remainingBalance = document.getElementById('remain-balance');
//       remainingBalance.innerText = Balance - totalDiscount;

      
// })