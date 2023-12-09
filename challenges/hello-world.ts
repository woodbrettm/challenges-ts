/*
  Challenge: https://github.com/type-challenges/type-challenges/blob/main/questions/00013-warm-hello-world/README.md
*/

import { Expect, Equal } from '@type-challenges/utils';

type HelloWorld = string;
type Test = Expect<Equal<HelloWorld, string>>;
