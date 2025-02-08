/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};
    
    transactions.forEach(transaction => {
        if (categoryMap[transaction.category]) {
            categoryMap[transaction.category] += transaction.price;
        } else {
            categoryMap[transaction.category] = transaction.price;
        }
    });
    
    return Object.keys(categoryMap).map(category => ({
        category: category,
        totalSpent: categoryMap[category]
    }));
}

module.exports = calculateTotalSpentByCategory;
