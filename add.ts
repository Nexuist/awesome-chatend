/**
 * Add is used in TodoBot
 * It takes one parameter:
  * item: The todo item to add
*/

// Use Chatend Keystore to add an item to the todo list
import Chatend from "chatend";

interface TodoList {
  todos: {
    created_at: number; // UNIX timestamp for when the item was created
    item: string; // Todo item
  }[];
}

const { item } = await Chatend.input;
const keyName = Chatend.env.TODO_KEY_NAME;

let newTodos: TodoList = {
  todos: []
};
const existingTodos = await Chatend.get(keyName);
if (existingTodos != 0 && existingTodos != -1) {
  // If there are existing todos, add them to the new todo list
  newTodos = existingTodos as TodoList;
}

// Create the new todo list
newTodos.todos.push({
  created_at: +new Date(),
  item
});

// Save the new todo list
const attempt = await Chatend.set(keyName, newTodos);
if (attempt == -1) Chatend.done("There was an error saving the todo list", { attempt });

Chatend.done("Added item to todo list");