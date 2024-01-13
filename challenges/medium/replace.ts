/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type Replace
<
  S extends string,
  From extends string,
  To extends string,
>
= (
  S extends `${infer A}${From}${infer B}`
    ? `${A}${To}${B}`
    : S
);

type Replaced = Replace<'types are fun!', 'fun', 'awesome'>;

type Test = Expect<Equal<Replaced, 'types are awesome!'>>;
