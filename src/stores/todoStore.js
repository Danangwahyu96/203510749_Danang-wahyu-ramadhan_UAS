import { defineStore } from 'pinia';
import axios from 'axios';

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [],
  }),
  actions: {
    async fetchTodos() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      this.todos = response.data;
    },
  },
});
