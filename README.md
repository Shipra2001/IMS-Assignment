# IMS-Assignment

Explanation:

Item Class:
Defines the structure of each inventory item with properties id, name, quantity, and price.

Add Item:
addItem(inventory, item) adds a new item to the inventory array.

Update Item:
updateItem(inventory, id, newDetails) finds an item by its id and updates its properties with newDetails using Object.assign.

Delete Item:
deleteItem(inventory, id) finds the index of an item by its id and removes it using splice.

Get Item:
getItem(inventory, id) returns the item with the specified id, or a message if not found.

Print Inventory:
printInventory(inventory) prints the inventory in a readable JSON format.

How to Use:
Initialize Inventory: Create the initial list of items.

Add Items: Use addItem() to add new items.

Update Items: Use updateItem() to modify item details.

Delete Items: Use deleteItem() to remove items.

Print Inventory: Use printInventory() to view the current inventory.

Get Specific Item: Use getItem() to retrieve a specific item by its ID.
