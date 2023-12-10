/*
https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

const foo = (arg1: string, arg2: number): void => {};

type MyParameters<T> = T extends (...args: infer U) => unknown ? U : never;

type FunctionParamsType = MyParameters<typeof foo>;
type Test = Expect<Equal<FunctionParamsType, [arg1: string, arg2: number]>>;
