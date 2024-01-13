/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type Fn = (age: number, name: string) => number;

// TODO: Research if there's a way to pass the name
// of the arg as well.
type AppendArgument<
  T extends (...args: never[]) => unknown,
  AppendArg,
>
= (
  T extends ((...args: infer Args) => infer ReturnValue)
    ? (...args: [...Args, x: AppendArg]) => ReturnValue
    : T
);

type Res = AppendArgument<Fn, boolean>;
type Test = Expect<Equal<Res, (age: number, name: string, x: boolean) => number>>;
