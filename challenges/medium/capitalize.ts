/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00110-medium-capitalize/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type MyCapitalize<T extends string> = T extends `${infer U}${infer S}` ? `${Uppercase<U>}${S}` : T;

type Capitalized = MyCapitalize<'hello world'>;
type Test = Expect<Equal<Capitalized, 'Hello world'>>;
