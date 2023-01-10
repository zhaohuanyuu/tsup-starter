interface Todo {
  title: string
  description: string
}

let a: Todo = {
  title: 'a',
  description: 'aaa'
}

let b: Todo = {
  title: 'b',
  description: 'bbb'
}

console.log(a == b)
