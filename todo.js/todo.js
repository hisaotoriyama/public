new Vue({
  el: '#app',
  data: {
    todos: [],
    newTodoItem: ""
  },
  methods: {
    addNewTodo: function() {
      const newTodo = {
        todo: this.newTodoItem,
        done: false
      }　　　
      if (this.newTodoItem == "") {
        alert("Todoが入力されていません");
        this.todos = this.loadTodo();
      } else {
        const allTodos = this.loadTodo();
        if (allTodos !== null) {
        　allTodos.push(newTodo);
        } else {
        　allTodos = [newTodo];
        }
        localStorage.setItem('todoList', JSON.stringify(allTodos));
        this.todos = allTodos;
        this.newTodoItem = "";
      }
    },
    deleteTodos: function() {
      const result = confirm("削除してよろしいですか");
      if (result) {
        const selectedTodos = this.todos.filter((v) => v["done"] === false);
        localStorage.setItem('todoList', JSON.stringify(selectedTodos));
      }
      this.todos = this.loadTodo();
    },
    loadTodo: function() {
      const jsonAllTodos = localStorage.getItem('todoList');
      return JSON.parse(jsonAllTodos);
    }
  },
  created: function() {
    this.todos = this.loadTodo();
  }
})
