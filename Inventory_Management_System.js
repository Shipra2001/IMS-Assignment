// Define the Item object
class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

// Initialize the inventory as an empty array
let inventory = [
    new Item(1, 'Apple', 10, 0.5),
    new Item(2, 'Banana', 20, 0.2)
];

// Function to add an item to the inventory
function addItem(inventory, item) {
    inventory.push(item);
}

// Function to update an item in the inventory
function updateItem(inventory, id, newDetails) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
    } else {
        console.log('Item not found');
    }
}

// Function to delete an item from the inventory
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    } else {
        console.log('Item not found');
    }
}

// Function to get an item by id
function getItem(inventory, id) {
    return inventory.find(item => item.id === id) || 'Item not found';
}

// Function to print the inventory
function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 2));
}

// Example usage:

console.log('Initial Inventory:');
printInventory(inventory);

console.log('Adding item:');
addItem(inventory, new Item(3, 'Orange', 15, 0.7));
printInventory(inventory);

console.log('Updating item:');
updateItem(inventory, 2, { quantity: 30 });
printInventory(inventory);

console.log('Deleting item:');
deleteItem(inventory, 2);
printInventory(inventory);

console.log('Getting item:');
console.log(getItem(inventory, 3));
