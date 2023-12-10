/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

// Expects conversion to true/false done in runtime
type If<C extends boolean, T, F> = C extends true ? T : F;

type A = If<true, 'a', 'b'>; // expected to be 'a'
type B = If<false, 'a', 'b'>; // expected to be 'b'

type TestA = Expect<Equal<A, 'a'>>;
type testB = Expect<Equal<B, 'b'>>;

// Covers basic falsy values (though not NaN)
type BasicFalsy = null | undefined | false | '' | 0;

type LooseIf<C, T, F> = C extends BasicFalsy ? F : T;

type C = LooseIf<true, 'c', 'd'>;
type D = LooseIf<false, 'c', 'd'>;
type E = LooseIf<23, 'c', 'd'>;
type F = LooseIf<0, 'c', 'd'>;

type TestC = Expect<Equal<C, 'c'>>;
type testD = Expect<Equal<D, 'd'>>;
type TestE = Expect<Equal<E, 'c'>>;
type testF = Expect<Equal<F, 'd'>>;
