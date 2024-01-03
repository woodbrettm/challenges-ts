/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type TuplePrimitives = readonly [string | number | boolean];
type Concat<T extends TuplePrimitives, K extends TuplePrimitives> = [...T, ...K];

type Result = Concat<[1], [2]>;
type Test = Expect<Equal<Result, [1, 2]>>;

/*

TODO:

This meets the requirements of the challenge, however
a: How to possibly handle unlimited generic args? Maybe generic arg should be an array, containing arrays to combine.
b How to handle nested arrays?

*/
