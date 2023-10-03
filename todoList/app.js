// add - add a todo
// list - list all todos
// delete - delete a specific todo
// quit - quit app

let input = prompt("Enter a command");
let commands = ["add", "list", "delete", "quit"];
while (input === commands.length) {
  console.log(`command is ${input}`);
}
