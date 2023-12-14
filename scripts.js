class MenuItem {                //Made MenuItem class with
    constructor(name) {         //constructor name
        this.name = name;
    }
}

class Menu {                    //Menu class with constructor
    constructor() {             //and array
        this.items = [];
    }

    addItem(item) {             //add item function and push
        this.items.push(item);
    }

    viewItems() {               //view items function with if 
        if (this.items.length === 0) {  //statement and message
            console.log("Menu is empty.");
            
        } else {                //else statement for each item
            console.log("Menu items:");
            this.items.forEach((item, index) => {
                console.log(`${index + 1}. ${item.name}`);
                
            })
        }
    }

    deleteItem(index) {         //delete item function
        if (index >= 0 && index < this.items.length) {
            const deleteItem = this.items.splice(index, 1);
            console.log(`Deleted item: ${deleteItem[0].name}`);
                        //if statement to splice at index
        } else {        //default else statement for invalid
            console.log("Invalid index. Item not deleted.");
            
        }
    }
}

// Example usage
const menu = new Menu();

// Add items
const item1 = new MenuItem("Option 1");
const item2 = new MenuItem("Option 2");
menu.addItem(item1);
menu.addItem(item2);

//View items
menu.viewItems();

//Delete an item (change the index as needed)
menu.deleteItem(0);

//View items after deletion
menu.viewItems();
