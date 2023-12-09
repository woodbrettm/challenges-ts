/*
https://github.com/type-challenges/type-challenges/tree/main/questions/00004-easy-pick
*/

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

type MyPick<T, Keys extends keyof T> = {
  [K in Keys]: T[K];
};

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
