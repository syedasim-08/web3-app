type AnyFunction = (...args: any[]) => any

export type Modify<T, R extends PartialAny<T>> = Omit<T, keyof R> & R

type AnyObject<T = any> = Record<string, T>
