/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type Tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type SpaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'];

// Arrays are objects, containing the 'length' property
type Length<T extends ReadonlyArray<unknown>> = T['length'];

type TeslaLength = Length<Tesla>; // expected 4
type SpaceXLength = Length<SpaceX>; // expected 5

type Test1 = Expect<Equal<TeslaLength, 4>>;
type Test2 = Expect<Equal<SpaceXLength, 5>>;
