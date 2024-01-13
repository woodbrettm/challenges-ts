/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00108-medium-trim/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type Spacing = '\t' | ' ';

type Trim<T extends string> = T extends `${Spacing}${infer U}${Spacing}` ? Trim<U> : T;

type Trimmed = Trim<'  Hello World  '>;
type Test = Expect<Equal<Trimmed, 'Hello World'>>;
