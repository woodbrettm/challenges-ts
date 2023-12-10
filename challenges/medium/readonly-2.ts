/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.md
*/

import { Expect, Alike } from '@type-challenges/utils';

type Todo = {
  title: 'Hey';
  description: 'foobar';
  completed: false;
};

type MyReadonly2<T, ReadonlyKeys extends keyof T> = {
  [K in Exclude<keyof T, ReadonlyKeys>]: T[K];
} & {
  readonly [K in keyof T as K extends ReadonlyKeys ? K : never]: T[K];
};

// https://github.com/type-challenges/type-challenges/issues/1721
type MyReadonly2Shorter<T, K extends keyof T = keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

type Result = MyReadonly2<Todo, 'title' | 'description'>;
type Test = Expect<
  Alike<Result, { readonly title: 'Hey'; readonly description: 'foobar'; completed: false }>
>;
