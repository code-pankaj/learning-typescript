"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var fs = require("fs");
var path = require("path");
var TodoApp = /** @class */ (function () {
    function TodoApp() {
        this.todos = [];
        this.nextId = 1;
        this.filePath = path.join(__dirname, 'todos.json');
        this.loadTodos();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    TodoApp.prototype.loadTodos = function () {
        try {
            if (fs.existsSync(this.filePath)) {
                var data = fs.readFileSync(this.filePath, 'utf8');
                this.todos = JSON.parse(data);
                // Find the next available ID
                if (this.todos.length > 0) {
                    this.nextId = Math.max.apply(Math, this.todos.map(function (t) { return t.id; })) + 1;
                }
            }
        }
        catch (error) {
            console.error('Error loading todos:', error);
            this.todos = [];
        }
    };
    TodoApp.prototype.saveTodos = function () {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(this.todos, null, 2));
        }
        catch (error) {
            console.error('Error saving todos:', error);
        }
    };
    TodoApp.prototype.showMenu = function () {
        var _this = this;
        console.clear();
        console.log('===== TODO APP =====');
        console.log('1. List all todos');
        console.log('2. Add a new todo');
        console.log('3. Mark todo as completed');
        console.log('4. Delete a todo');
        console.log('5. Exit');
        this.rl.question('Select an option: ', function (answer) {
            switch (answer.trim()) {
                case '1':
                    _this.listTodos();
                    break;
                case '2':
                    _this.addTodo();
                    break;
                case '3':
                    _this.completeTodo();
                    break;
                case '4':
                    _this.deleteTodo();
                    break;
                case '5':
                    _this.exit();
                    break;
                default:
                    console.log('Invalid option!');
                    _this.continuePrompt();
            }
        });
    };
    TodoApp.prototype.listTodos = function () {
        console.clear();
        console.log('===== TODO LIST =====');
        if (this.todos.length === 0) {
            console.log('No todos found!');
        }
        else {
            this.todos.forEach(function (todo) {
                console.log("".concat(todo.id, ". [").concat(todo.completed ? 'X' : ' ', "] ").concat(todo.task));
            });
        }
        this.continuePrompt();
    };
    TodoApp.prototype.addTodo = function () {
        var _this = this;
        console.clear();
        console.log('===== ADD TODO =====');
        this.rl.question('Enter task: ', function (task) {
            if (task.trim() !== '') {
                var newTodo = {
                    id: _this.nextId++,
                    task: task.trim(),
                    completed: false
                };
                _this.todos.push(newTodo);
                _this.saveTodos();
                console.log("Todo added: ".concat(newTodo.task));
            }
            else {
                console.log('Task cannot be empty!');
            }
            _this.continuePrompt();
        });
    };
    TodoApp.prototype.completeTodo = function () {
        var _this = this;
        console.clear();
        console.log('===== COMPLETE TODO =====');
        if (this.todos.length === 0) {
            console.log('No todos found!');
            this.continuePrompt();
            return;
        }
        this.todos.forEach(function (todo) {
            console.log("".concat(todo.id, ". [").concat(todo.completed ? 'X' : ' ', "] ").concat(todo.task));
        });
        this.rl.question('Enter the ID of the todo to mark as completed: ', function (input) {
            var id = parseInt(input.trim(), 10);
            if (isNaN(id)) {
                console.log('Invalid ID!');
                _this.continuePrompt();
                return;
            }
            var todoIndex = _this.todos.findIndex(function (t) { return t.id === id; });
            if (todoIndex === -1) {
                console.log("Todo with ID ".concat(id, " not found!"));
            }
            else {
                _this.todos[todoIndex].completed = true;
                _this.saveTodos();
                console.log("Todo \"".concat(_this.todos[todoIndex].task, "\" marked as completed!"));
            }
            _this.continuePrompt();
        });
    };
    TodoApp.prototype.deleteTodo = function () {
        var _this = this;
        console.clear();
        console.log('===== DELETE TODO =====');
        if (this.todos.length === 0) {
            console.log('No todos found!');
            this.continuePrompt();
            return;
        }
        this.todos.forEach(function (todo) {
            console.log("".concat(todo.id, ". [").concat(todo.completed ? 'X' : ' ', "] ").concat(todo.task));
        });
        this.rl.question('Enter the ID of the todo to delete: ', function (input) {
            var id = parseInt(input.trim(), 10);
            if (isNaN(id)) {
                console.log('Invalid ID!');
                _this.continuePrompt();
                return;
            }
            var todoIndex = _this.todos.findIndex(function (t) { return t.id === id; });
            if (todoIndex === -1) {
                console.log("Todo with ID ".concat(id, " not found!"));
            }
            else {
                var deleted = _this.todos.splice(todoIndex, 1)[0];
                _this.saveTodos();
                console.log("Todo \"".concat(deleted.task, "\" deleted!"));
            }
            _this.continuePrompt();
        });
    };
    TodoApp.prototype.continuePrompt = function () {
        var _this = this;
        this.rl.question('\nPress Enter to continue...', function () {
            _this.showMenu();
        });
    };
    TodoApp.prototype.exit = function () {
        console.log('Goodbye!');
        this.rl.close();
        process.exit(0);
    };
    TodoApp.prototype.start = function () {
        this.showMenu();
    };
    return TodoApp;
}());
// Start the application
var app = new TodoApp();
app.start();
