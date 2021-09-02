import { takeLatest } from "redux-saga/effects";
import { TodoTypes } from "../actions/types/todo";

function* loadTodo() {
  // fetch & load state
}

function* createTodo() {
  // post request & change state
}

function* deleteTodo() {}

function* checkTodo() {}

export function* todo() {
  yield takeLatest(TodoTypes.LOAD_TODO, loadTodo);
  yield takeLatest(TodoTypes.CREATE_TODO, createTodo);
  yield takeLatest(TodoTypes.DELETE_TODO, deleteTodo);
  yield takeLatest(TodoTypes.CHECK_TODO, checkTodo);
}
