/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type Includes<T extends ReadonlyArray<unknown>, Key> = Key extends T[number] ? true : false;

type Example = ['Kars', 'Esidisi', 'Wamuu', 'Santana'];

type Res1 = Includes<Example, 'Dio'>;
type Res2 = Includes<Example, 'Esidisi'>;

type Test1 = Expect<Equal<Res1, false>>;
type Test2 = Expect<Equal<Res2, true>>;
