/*
https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type Push<T extends ReadonlyArray<unknown>, Add> = [...T, Add];

type Result = Push<[1, 2], '3'>;
type Test = Expect<Equal<Result, [1, 2, '3']>>;
