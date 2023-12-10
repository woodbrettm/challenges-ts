/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type TestUnion = 'a' | 'b' | 'c';

// https://www.totaltypescript.com/tips/map-over-a-union-type
type MyExclude<T, Remove> = T extends Remove ? never : T;

type Result1 = MyExclude<TestUnion, 'a'>;
type Result2 = MyExclude<TestUnion, 'a' | 'b'>;

type Test1 = Expect<Equal<Result1, 'b' | 'c'>>;
type Test2 = Expect<Equal<Result2, 'c'>>;
