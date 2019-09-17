// CHALLENGE AREA 
// expense -> description, amount
// addExpenses -> description, amount
// getAccountSummary -> total up all expenses -> Andrew Mead has $1250 in expenses.
// income array
// addIncome method -> description, amount
// level 2: getAccountSummary: Andrew Mead has a balance of $10. $100 in income, $90 in expenses.

const account = {
    name: 'Andrew Mead',
    expenses: [], //{description: "sth", amount: 12}, {..}
    income: [], //{description: "", amount: 2}, {..}

    addExpense: function (desc, amt) {
        this.expenses.push({ description: desc, amount: amt });
    },

    addIncome: function (desc, amt) {
        this.income.push({ description: desc, amount: amt });
    },

    getAccountSummary: function () {
        let totalExpenses = 0;
        let totalIncome = 0;

        this.expenses.forEach(function (item, index) {
            totalExpenses += item.amount;
        })

        this.income.forEach(function (item, index) {
            totalIncome += item.amount;
        })

        const balance = totalIncome - totalExpenses;

        return `${this.name} has a balance of $${balance}. $${totalIncome} in income, $${totalExpenses} in expenses`
    }
}

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
console.log(account.getAccountSummary());

