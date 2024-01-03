/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve) => {
  setTimeout(resolve, 100, 'foo');
});

declare function PromiseAll<T extends unknown[]>(
  promises: readonly [...T],
): Promise<{
  [K in keyof T]: Awaited<T[K]>;
}>;

// expected to be `Promise<[number, 42, string]>`
const Res = PromiseAll([promise1, promise2, promise3] as const);
type Result = typeof Res;
type Test = Expect<Equal<typeof Res, Promise<[number, 42, string]>>>;
