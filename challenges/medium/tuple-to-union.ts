/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type Arr = ['1', '2', '3', ['4', '5', '6', ['7', '8']], ['9', '10']];

type TupleToUnion<T> = T extends (infer U)[] ? TupleToUnion<U> : T;

type Res = TupleToUnion<Arr>;
type Test = Expect<Equal<Res, '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'>>;
