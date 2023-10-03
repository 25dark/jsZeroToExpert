// add - add a todo
// list - list all todos
// delete - delete a specific todo
// quit - quit app
let lists = [];

let input = prompt("Enter your commands");

while (input !== "quit") {
  if (input === "add") {
    let addInput = prompt("Enter a todo");
    if (addInput) {
      lists.push(addInput);
      console.log("Todo added:", addInput);
    }
  }
  if (input === "list") {
    for (let i = 0; i < lists.length; i++) {
      console.log(i + ": " + lists[i]);
    }
  }
  if (input === "delete") {
    let deleteIndex = prompt("Enter the index of the item to delete");
    deleteIndex = parseInt(deleteIndex); // Convert input to an integer
    if (!isNaN(deleteIndex) && deleteIndex >= 0 && deleteIndex < lists.length) {
      let deletedItem = lists.splice(deleteIndex, 1);
      console.log("Deleted:", deletedItem);
    } else {
      console.log("Invalid index. No item deleted.");
    }
  }
  input = prompt("Enter your commands");
}

console.log("Ok, Quit the App");
console.log("Final Todo List:", lists);
