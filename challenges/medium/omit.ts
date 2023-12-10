/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md
*/

import { Expect, Alike } from '@type-challenges/utils';

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

type MyOmit<T, ToOmit extends keyof T> = {
  [K in keyof T as K extends ToOmit ? never : K]: T[K];
};

type TodoPreview = MyOmit<Todo, 'title' | 'description'>;
type Test = Expect<Alike<TodoPreview, { completed: boolean }>>;
