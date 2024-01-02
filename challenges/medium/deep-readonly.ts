/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.md
*/

import { Expect, Alike } from '@type-challenges/utils';

type X = {
  x: {
    a: 1;
    b: {
      c: 'cool';
    };
  };
  y: 'hey';
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: {
      readonly c: 'cool';
    };
  };
  readonly y: 'hey';
};

type GeneralObject = Record<string | number | symbol, unknown>;

type DeepReadonly<T extends GeneralObject> = {
  readonly [K in keyof T]: T[K] extends GeneralObject ? DeepReadonly<T[K]> : T[K];
};

type Result = DeepReadonly<X>; // should be same as `Expected`
type Test = Expect<Alike<Result, Expected>>;
