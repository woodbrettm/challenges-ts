/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00062-medium-type-lookup/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type Cat = {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
};

type Dog = {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
};

type NotValid = {
  name: 'Not Valid';
};

type TypeOptions
<
  TUnion extends { type: string },
>
= keyof {
  [T in TUnion as T['type']]: T['type'];
};

type Lookup
<
  T extends { type: string },
  Key extends TypeOptions<T>,
>
= (
  T extends { type: infer U }
    ? U extends Key
      ? T
      : never
    : never
)

type Res1 = Lookup<Cat | Dog, 'dog'>;
type Res2 = Lookup<Cat | Dog, 'cat'>;

type Test1 = Expect<Equal<Res1, Dog>>;
type Test2 = Expect<Equal<Res2, Cat>>;

// @ts-expect-error: Should not allow records
// without the 'type' key
type Res3 = Lookup<NotValid, 'test'>;
