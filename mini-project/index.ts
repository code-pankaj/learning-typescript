import * as readline from 'readline';
import * as fs from 'fs';
import * as path from 'path';

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

class TodoApp {
    private todos: Todo[] = [];
    private nextId: number = 1;
    private filePath: string;
    private rl: readline.Interface;

    constructor() {
        this.filePath = path.join(__dirname, 'todos.json');
        this.loadTodos();
        
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    private loadTodos(): void {
        try {
            if (fs.existsSync(this.filePath)) {
                const data = fs.readFileSync(this.filePath, 'utf8');
                this.todos = JSON.parse(data);
                // Find the next available ID
                if (this.todos.length > 0) {
                    this.nextId = Math.max(...this.todos.map(t => t.id)) + 1;
                }
            }
        } catch (error) {
            console.error('Error loading todos:', error);
            this.todos = [];
        }
    }

    private saveTodos(): void {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(this.todos, null, 2));
        } catch (error) {
            console.error('Error saving todos:', error);
        }
    }

    public showMenu(): void {
        console.clear();
        console.log('===== TODO APP =====');
        console.log('1. List all todos');
        console.log('2. Add a new todo');
        console.log('3. Mark todo as completed');
        console.log('4. Delete a todo');
        console.log('5. Exit');
        
        this.rl.question('Select an option: ', (answer) => {
            switch (answer.trim()) {
                case '1':
                    this.listTodos();
                    break;
                case '2':
                    this.addTodo();
                    break;
                case '3':
                    this.completeTodo();
                    break;
                case '4':
                    this.deleteTodo();
                    break;
                case '5':
                    this.exit();
                    break;
                default:
                    console.log('Invalid option!');
                    this.continuePrompt();
            }
        });
    }

    private listTodos(): void {
        console.clear();
        console.log('===== TODO LIST =====');
        
        if (this.todos.length === 0) {
            console.log('No todos found!');
        } else {
            this.todos.forEach(todo => {
                console.log(`${todo.id}. [${todo.completed ? 'X' : ' '}] ${todo.task}`);
            });
        }
        
        this.continuePrompt();
    }

    private addTodo(): void {
        console.clear();
        console.log('===== ADD TODO =====');
        
        this.rl.question('Enter task: ', (task) => {
            if (task.trim() !== '') {
                const newTodo: Todo = {
                    id: this.nextId++,
                    task: task.trim(),
                    completed: false
                };
                
                this.todos.push(newTodo);
                this.saveTodos();
                console.log(`Todo added: ${newTodo.task}`);
            } else {
                console.log('Task cannot be empty!');
            }
            
            this.continuePrompt();
        });
    }

    private completeTodo(): void {
        console.clear();
        console.log('===== COMPLETE TODO =====');
        
        if (this.todos.length === 0) {
            console.log('No todos found!');
            this.continuePrompt();
            return;
        }
        
        this.todos.forEach(todo => {
            console.log(`${todo.id}. [${todo.completed ? 'X' : ' '}] ${todo.task}`);
        });
        
        this.rl.question('Enter the ID of the todo to mark as completed: ', (input) => {
            const id = parseInt(input.trim(), 10);
            
            if (isNaN(id)) {
                console.log('Invalid ID!');
                this.continuePrompt();
                return;
            }
            
            const todoIndex = this.todos.findIndex(t => t.id === id);
            
            if (todoIndex === -1) {
                console.log(`Todo with ID ${id} not found!`);
            } else {
                this.todos[todoIndex].completed = true;
                this.saveTodos();
                console.log(`Todo "${this.todos[todoIndex].task}" marked as completed!`);
            }
            
            this.continuePrompt();
        });
    }

    private deleteTodo(): void {
        console.clear();
        console.log('===== DELETE TODO =====');
        
        if (this.todos.length === 0) {
            console.log('No todos found!');
            this.continuePrompt();
            return;
        }
        
        this.todos.forEach(todo => {
            console.log(`${todo.id}. [${todo.completed ? 'X' : ' '}] ${todo.task}`);
        });
        
        this.rl.question('Enter the ID of the todo to delete: ', (input) => {
            const id = parseInt(input.trim(), 10);
            
            if (isNaN(id)) {
                console.log('Invalid ID!');
                this.continuePrompt();
                return;
            }
            
            const todoIndex = this.todos.findIndex(t => t.id === id);
            
            if (todoIndex === -1) {
                console.log(`Todo with ID ${id} not found!`);
            } else {
                const deleted = this.todos.splice(todoIndex, 1)[0];
                this.saveTodos();
                console.log(`Todo "${deleted.task}" deleted!`);
            }
            
            this.continuePrompt();
        });
    }

    private continuePrompt(): void {
        this.rl.question('\nPress Enter to continue...', () => {
            this.showMenu();
        });
    }

    private exit(): void {
        console.log('Goodbye!');
        this.rl.close();
        process.exit(0);
    }

    public start(): void {
        this.showMenu();
    }
}

// Start the application
const app = new TodoApp();
app.start();