/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type Arr0 = [];
type Arr1 = ['a', 'b', 'c'];
type Arr2 = [3, 2, 1];

type First<T extends [unknown, ...Array<unknown>]> = T[0];

// @ts-expect-error : Require array of min length 1
type Head0 = First<Arr0>;

type Head1 = First<Arr1>; // expected to be 'a'
type Head2 = First<Arr2>; // expected to be 3

type Test1 = Expect<Equal<Head1, 'a'>>;
type Test2 = Expect<Equal<Head2, 3>>;

/*
 The above implementation requires a check to ensure the
 array has a min length of 1. The below solution simply returns
 never if zero length:
*/

// https://github.com/type-challenges/type-challenges/issues/18
type FirstUnstrict<T extends Array<unknown>> = T extends [infer U, ...Array<unknown>] ? U : never;
