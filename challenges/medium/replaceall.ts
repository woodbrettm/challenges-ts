/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00119-medium-replaceall/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type ReplaceAll
<
  S extends string,
  From extends string,
  To extends string,
>
= (
  S extends `${infer A}${From}${infer B}`
    ? ReplaceAll<`${A}${To}${B}`, From, To>
    : S
);

type Replaced = ReplaceAll<'t y p e s', ' ', ''>;
type Test = Expect<Equal<Replaced, 'types'>>;
