var app = new Vue({
    el: '#app',
    data: {
    　todos: [],
    　newToDo:""
      },
    methods: {
        addNewTodo: function(){
            const newToDo = {
                todo: this.newToDo,
                done: false
            }
            alltodos = this.loadTodo()
            alltodos != null ? alltodos.push(newToDo) : alltodos = [newToDo]
            localStorage.setItem('todoList', JSON.stringify(alltodos));
            this.todos = alltodos
            this.newToDo = ""
        },
        deleteTodos: function(){
            alert("削除してよろしいですか")
            selectedtodos = this.todos.filter(function(v) {return v["done"] === false})
            localStorage.setItem('todoList', JSON.stringify(selectedtodos));
            this.todos = this.loadTodo()
        },
        loadTodo: function(){
            var JSONalltodos = localStorage.getItem('todoList');
            return JSON.parse(JSONalltodos)
        }
    },
    created:
    function(){
            this.todos = this.loadTodo()
        },

  })


