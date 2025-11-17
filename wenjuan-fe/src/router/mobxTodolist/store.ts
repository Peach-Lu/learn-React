import { nanoid } from "nanoid"
import { makeObservable, observable, action, computed } from 'mobx'
//  Todo class
export class ObservableTodoStore {
  id = ''
  task = ''
  completed = false
  constructor(task: string) {
    // 手动设置监听
    makeObservable(this, {
      id: observable,
      task: observable,
      completed: observable,
      rename: action,
      toggleCompleted: action
    })
    this.id = nanoid(5)
    this.task = task
  }
  rename(newName: string) {
    this.task = newName
  }
  toggleCompleted() {
    this.completed = !this.completed
  }
}
// TodoList class

export class ObservableTodoListStore {
  todos: ObservableTodoStore[] = []
  constructor() {
    makeObservable(this, {
      todos: observable,
      completedTodoCount: computed,
      addTodo: action,
      removeTodo: action
    })
  }
  // get 获取已经完成的todos的数量  用于计算 不用于修改
  get completedTodoCount() {
    return this.todos.filter(t => t.completed).length
  }
  addTodo(task: string) {
    const newTodo = new ObservableTodoStore(task)
    this.todos.push(newTodo) // 声明式,像vue
  }
  removeTodo(id: string) {
    const index = this.todos.findIndex(item => item.id === id)
    this.todos.splice(index, 1)
  }
}

const store = new ObservableTodoListStore
export default store