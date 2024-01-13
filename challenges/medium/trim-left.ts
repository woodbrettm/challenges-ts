/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trimleft/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type Spacing = '\t' | ' ';

type TrimLeft<T extends string> = T extends `${Spacing}${infer U}` ? TrimLeft<U> : T;

type Trimmed = TrimLeft<'  Hello World  '>;
type Test = Expect<Equal<Trimmed, 'Hello World  '>>;
