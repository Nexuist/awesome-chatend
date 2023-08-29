/**
 * Complete is used in TodoBot
 * It takes one parameter:
  * item: The todo item to remove
*/

// Use Chatend Keystore to remove an item from the todo list
import Chatend from "chatend";

interface TodoList {
  todos: {
    created_at: number; // UNIX timestamp for when the item was created
    item: string; // Todo item
  }[];
}

const { item } = await Chatend.input;
const keyName = Chatend.env.TODO_KEY_NAME;

const existingTodos = await Chatend.get(keyName);
if (existingTodos == 0) {
  Chatend.done("There is no existing todo list");
}

const newTodos = {
  todos: (existingTodos as TodoList).todos.filter(todo => todo.item != item)
};

// Save the new todo list
const attempt = await Chatend.set(keyName, newTodos);
if (attempt == -1) Chatend.done("There was an error saving the todo list", { attempt });

Chatend.done("Removed item from todo list");