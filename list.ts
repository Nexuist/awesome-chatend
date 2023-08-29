/**
 * List is used in TodoBot
 * It takes no parameters
*/

// Use Chatend Keystore to retrieve the todos and display them
import Chatend from "chatend";

interface TodoList {
  todos: {
    created_at: number; // UNIX timestamp todo was created
    item: string; // Todo item
  }[];
}

const keyName = Chatend.env.TODO_KEY_NAME;
const todoKey = await Chatend.get(keyName);
if (todoKey == 0) Chatend.done("There are no todos to list.");
const todos = (todoKey as TodoList).todos;

const todoString = todos.map((todo, i) => `${i + 1}. ${todo.item}`).join("\n");

Chatend.done(todoString, {
  todos
});