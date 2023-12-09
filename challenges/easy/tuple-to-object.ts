/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.md
*/

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type ObjectKey = string | symbol;

type TupleToObject<T extends ReadonlyArray<ObjectKey>> = {
  [K in T[number]]: K;
};

type result = TupleToObject<typeof tuple>;

// expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
