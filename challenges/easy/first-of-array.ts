/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md
*/

type arr0 = [];
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type First<T extends [unknown, ...Array<unknown>]> = T[0];

// @ts-expect-error : Require array of min length 1
type head0 = First<arr0>;

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3

/*
 The above implementation requires a check to ensure the
 array has a min length of 1. The below solution simply returns
 never if zero length:
*/

// https://github.com/type-challenges/type-challenges/issues/18
type FirstUnstrict<T extends Array<unknown>> = T extends [infer U, ...Array<unknown>] ? U : never;
