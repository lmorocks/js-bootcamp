let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}


//pass object by reference, no copies are created
let addExpense = function (account, amount){
    account.expenses = account.expenses + amount;
    console.log(account);
}

addExpense(myAccount, 2.50);
console.log(myAccount);

anotherAccount = myAccount //anotherAccount is another reference that pts to myAccount
anotherAccount.expenses = 2.50;

//challenge area
console.log("\n\nchallenge area...:\n\n")

//addIncome
let addIncome = function(account, income_amt) {
    account.income += income_amt;
}

//resetAccount
let resetAccount = function(account){
    account.expenses = 0;
    account.income = 0;
}
//getAccountSummary
let getAccountSummary = function (account) {
    let remaining = account.income - account.expenses;
    return `Account for ${account.name} has $${remaining}. $${account.income} in income, $${account.expenses} in expenses.`;
}
//Account for Andrew has $900. $1000 in income, $100 in expenses.

addIncome(myAccount, 100);
console.log(getAccountSummary(myAccount));
addExpense(myAccount, 20);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));