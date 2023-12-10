/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

// Only Handles 1 Deep
type MyAwaited<T> = T extends Promise<infer U> ? U : T;

type Result = MyAwaited<Promise<string>>;
type Result2 = MyAwaited<number>;

type Test = Expect<Equal<Result, string>>;
type Test2 = Expect<Equal<Result2, number>>;

// Recursive Await Type
type MyAwaitedDeep<T> = T extends Promise<infer U> ? MyAwaitedDeep<U> : T;

type Result3 = MyAwaitedDeep<Promise<string>>;
type Result4 = MyAwaitedDeep<number>;
type Result5 = MyAwaitedDeep<Promise<Promise<Promise<string>>>>;

type Test3 = Expect<Equal<Result3, string>>;
type Test4 = Expect<Equal<Result4, number>>;
type Test5 = Expect<Equal<Result5, string>>;
