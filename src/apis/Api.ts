type ArgumentType<T> = T extends (...args: infer A) => string ? A : never;

abstract class Api {
  abstract endPoints: Record<
    string,
    string | ((...args: ArgumentType<string | number>) => string)
  >;
}

export default Api;
