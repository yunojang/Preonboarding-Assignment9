import { BASE_URL } from "./api";

export async function fetchTodoList() {
  const response = await fetch(`${BASE_URL}/todo`);
  const todoList = await response.json();

  console.log(todoList);

  return todoList;
}
