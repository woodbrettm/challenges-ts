/*
https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type Unshift<T extends ReadonlyArray<unknown>, Add> = [Add, ...T];

type Result = Unshift<[1, 2], 0>;
type Test = Expect<Equal<Result, [0, 1, 2]>>;
