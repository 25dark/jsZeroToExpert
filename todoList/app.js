// add - add a todo
// list - list all todos
// delete - delete a specific todo
// quit - quit app
// Initialize an empty array to store the todo list items
let lists = [];

// Prompt the user to enter their first command
let input = prompt("Enter your commands");

// Continue processing commands until the user enters "quit"
while (input !== "quit") {
  // Check if the user wants to add a todo
  if (input === "add") {
    // Prompt the user to enter a todo item
    let addInput = prompt("Enter a todo");
    // Check if the user provided input
    if (addInput) {
      // Add the todo item to the lists array
      lists.push(addInput);
      // Log a message confirming the addition
      console.log("Todo added:", addInput);
    }
  }

  // Check if the user wants to list the todo items
  if (input === "list") {
    // Loop through the lists array and display each todo item
    for (let i = 0; i < lists.length; i++) {
      console.log(i + ": " + lists[i]);
    }
  }

  // Check if the user wants to delete a todo item
  if (input === "delete") {
    // Prompt the user to enter the index of the item to delete
    let deleteIndex = prompt("Enter the index of the item to delete");
    // Convert the input to an integer
    deleteIndex = parseInt(deleteIndex);
    // Check if the input is a valid index
    if (!isNaN(deleteIndex) && deleteIndex >= 0 && deleteIndex < lists.length) {
      // Use splice to remove the item from the lists array and store it in deletedItem
      let deletedItem = lists.splice(deleteIndex, 1);
      // Log a message confirming the deletion
      console.log("Deleted:", deletedItem);
    } else {
      // Log an error message for an invalid index
      console.log("Invalid index. No item deleted.");
    }
  }

  // Prompt the user to enter their next command
  input = prompt("Enter your commands");
}

// Display a message when the user quits the app
console.log("Ok, Quit the App");
// Display the final todo list
console.log("Final Todo List:", lists);
