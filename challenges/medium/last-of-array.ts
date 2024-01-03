/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type Last<T> = T extends [...unknown[], infer U] ? U : never;

type Tail1 = Last<['a', 'b', 'c']>; // expected to be 'c'
type Tail2 = Last<[3, 2, 1]>; // expected to be 1

type Test1 = Expect<Equal<Tail1, 'c'>>;
type Test2 = Expect<Equal<Tail2, 1>>;
