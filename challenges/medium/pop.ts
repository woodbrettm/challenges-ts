/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type Pop<T> = T extends [...infer U, unknown] ? U : never;

type Res1 = Pop<['a', 'b', 'c', 'd']>;
type Res2 = Pop<[3, 2, 1]>;

type Test1 = Expect<Equal<Res1, ['a', 'b', 'c']>>;
type Test2 = Expect<Equal<Res2, [3, 2]>>;
