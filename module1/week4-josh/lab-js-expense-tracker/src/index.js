// Entry
class Entry {
  constructor(date, amount, description) {
    this.description = description
    this.date = date
    this.amount = amount
  }

  getFormattedAmount() {
    return `${this.amount} €`
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description)
    this.type = "income"
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description)
    this.type = "expense"
    this.paid = paid
  }

  getFormattedAmount() {
    return `-${this.amount} €`
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = []
  }

  addEntry(entry) {
    this.entries.push(entry)
  }

  getCurrentBalance() {
    if (!this.entries.length) {
      return 0
    }
    let total = 0

    this.entries.forEach((entry) => {
      if (entry.type === "income") {
        total += entry.amount
      } else if (entry.type === "expense") {
        total -= entry.amount
      }
    })

    return total
  }

  getFormattedEntries() {
    const entriesStrings = []

    this.entries.forEach((entry) => {
      entriesStrings.push(
        `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`
      )
    })
    return entriesStrings
  }
}

const budget = new Budget()

const restaurantBill = new Expense("2020-07-07", 150, "we ate good", true)
const halfSalary = new Income("2020-07-07", 500, "nice")
const footballBet = new Income("2020-07-07", 1000, "i won the bet")
const clothes = new Expense("2020-07-07", 1000, "clothes are expensive", true)

budget.addEntry(restaurantBill)
budget.addEntry(halfSalary)
budget.addEntry(footballBet)
budget.addEntry(clothes)

console.log(budget.entries)

console.log(budget.getCurrentBalance())

console.log(budget.getFormattedEntries())
