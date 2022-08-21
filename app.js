function getInputValue(inputId) {
      const input = document.getElementById(inputId);
      const inputString = input.value;
      const inputValue = parseInt(inputString);
      return inputValue;
  }
  document.getElementById('calculate-btn').addEventListener('click', function () {
      const foodValue = getInputValue('food-input');
      const rentValue = getInputValue('rent-input');
      const clotheValue = getInputValue('clothe-input');
      const totalExpense = foodValue + rentValue + clotheValue;
      const total = document.getElementById('total-expense');
      total.innerText = totalExpense;
      const totalIncome = getInputValue('income-input');
      const Balance = totalIncome - totalExpense;
      const totalBalance = document.getElementById('total-balance');
      totalBalance.innerText = Balance;
  })
  document.getElementById('save-btn').addEventListener('click', function () {
      const discountAmound = getInputValue('discount-input');
      // console.log(typeof discountAmound);
      const totalIncome = getInputValue('income-input');
      // console.log(typeof totalIncome);
      const totalDiscount = (totalIncome * (discountAmound / 100))
      // console.log(typeof totalDiscount);
      const saveAmound = document.getElementById('save-amount');
      saveAmound.innerText = totalDiscount;
      // console.log(saveAmound.innerText)
  
      const totalBalance = document.getElementById('total-balance');
      const Balance = totalBalance.innerText
      const remainingBalance = document.getElementById('remain-balance');
      remainingBalance.innerText = Balance - totalDiscount;
  
  
  
  })