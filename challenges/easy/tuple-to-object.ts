/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type ObjectKey = string | symbol;

type TupleToObject<T extends readonly ObjectKey[]> = {
  [K in T[number]]: K;
};

type Result = TupleToObject<typeof tuple>;

type Test = Expect<
  Equal<
    Result,
    { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }
  >
>;
