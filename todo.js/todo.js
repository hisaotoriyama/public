var app = new Vue({
  el: '#app',
  data: {
　  todos: [],
　  newToDo: ""
  },
  methods: {
    addNewTodo: function(){
      const newToDo = {
        todo: this.newToDo,
        done: false
      }
      const allTodos = this.loadTodo()
      allTodos != null ? allTodos.push(newToDo) : allTodos = [newToDo]
      localStorage.setItem('todoList', JSON.stringify(allTodos));
      this.todos = allTodos
      this.newToDo = ""
    },
    deleteTodos: function(){
      alert("削除してよろしいですか")
      const selectedTodos = this.todos.filter(function(v) {return v["done"] === false})
      localStorage.setItem('todoList', JSON.stringify(selectedTodos));
      this.todos = this.loadTodo()
    },
    loadTodo: function(){
      const jsonAllTodos = localStorage.getItem('todoList');
      return JSON.parse(jsonAllTodos)
    }
  },
  created: function(){
    this.todos = this.loadTodo()
  },
})
