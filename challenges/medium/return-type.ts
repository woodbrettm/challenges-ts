/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

function fn(v: boolean) {
  if (v) return 1;
  return 2;
}

type MyReturnType<F> = F extends (...args: Array<never>) => infer U ? U : never;

type Result = MyReturnType<typeof fn>;
type Test = Expect<Equal<Result, 1 | 2>>;
