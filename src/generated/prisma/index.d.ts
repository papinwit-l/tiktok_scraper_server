
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TiktokTag
 * 
 */
export type TiktokTag = $Result.DefaultSelection<Prisma.$TiktokTagPayload>
/**
 * Model TiktokUser
 * 
 */
export type TiktokUser = $Result.DefaultSelection<Prisma.$TiktokUserPayload>
/**
 * Model TiktokUserTag
 * 
 */
export type TiktokUserTag = $Result.DefaultSelection<Prisma.$TiktokUserTagPayload>
/**
 * Model tiktokUserTagSyncError
 * 
 */
export type tiktokUserTagSyncError = $Result.DefaultSelection<Prisma.$tiktokUserTagSyncErrorPayload>
/**
 * Model tiktokTagTotalUserHistory
 * 
 */
export type tiktokTagTotalUserHistory = $Result.DefaultSelection<Prisma.$tiktokTagTotalUserHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TiktokTags
 * const tiktokTags = await prisma.tiktokTag.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TiktokTags
   * const tiktokTags = await prisma.tiktokTag.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tiktokTag`: Exposes CRUD operations for the **TiktokTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TiktokTags
    * const tiktokTags = await prisma.tiktokTag.findMany()
    * ```
    */
  get tiktokTag(): Prisma.TiktokTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tiktokUser`: Exposes CRUD operations for the **TiktokUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TiktokUsers
    * const tiktokUsers = await prisma.tiktokUser.findMany()
    * ```
    */
  get tiktokUser(): Prisma.TiktokUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tiktokUserTag`: Exposes CRUD operations for the **TiktokUserTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TiktokUserTags
    * const tiktokUserTags = await prisma.tiktokUserTag.findMany()
    * ```
    */
  get tiktokUserTag(): Prisma.TiktokUserTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tiktokUserTagSyncError`: Exposes CRUD operations for the **tiktokUserTagSyncError** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TiktokUserTagSyncErrors
    * const tiktokUserTagSyncErrors = await prisma.tiktokUserTagSyncError.findMany()
    * ```
    */
  get tiktokUserTagSyncError(): Prisma.tiktokUserTagSyncErrorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tiktokTagTotalUserHistory`: Exposes CRUD operations for the **tiktokTagTotalUserHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TiktokTagTotalUserHistories
    * const tiktokTagTotalUserHistories = await prisma.tiktokTagTotalUserHistory.findMany()
    * ```
    */
  get tiktokTagTotalUserHistory(): Prisma.tiktokTagTotalUserHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TiktokTag: 'TiktokTag',
    TiktokUser: 'TiktokUser',
    TiktokUserTag: 'TiktokUserTag',
    tiktokUserTagSyncError: 'tiktokUserTagSyncError',
    tiktokTagTotalUserHistory: 'tiktokTagTotalUserHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tiktokTag" | "tiktokUser" | "tiktokUserTag" | "tiktokUserTagSyncError" | "tiktokTagTotalUserHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TiktokTag: {
        payload: Prisma.$TiktokTagPayload<ExtArgs>
        fields: Prisma.TiktokTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiktokTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiktokTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokTagPayload>
          }
          findFirst: {
            args: Prisma.TiktokTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiktokTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokTagPayload>
          }
          findMany: {
            args: Prisma.TiktokTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokTagPayload>[]
          }
          create: {
            args: Prisma.TiktokTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokTagPayload>
          }
          createMany: {
            args: Prisma.TiktokTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TiktokTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokTagPayload>
          }
          update: {
            args: Prisma.TiktokTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokTagPayload>
          }
          deleteMany: {
            args: Prisma.TiktokTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiktokTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TiktokTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokTagPayload>
          }
          aggregate: {
            args: Prisma.TiktokTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiktokTag>
          }
          groupBy: {
            args: Prisma.TiktokTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiktokTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiktokTagCountArgs<ExtArgs>
            result: $Utils.Optional<TiktokTagCountAggregateOutputType> | number
          }
        }
      }
      TiktokUser: {
        payload: Prisma.$TiktokUserPayload<ExtArgs>
        fields: Prisma.TiktokUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiktokUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiktokUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          findFirst: {
            args: Prisma.TiktokUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiktokUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          findMany: {
            args: Prisma.TiktokUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>[]
          }
          create: {
            args: Prisma.TiktokUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          createMany: {
            args: Prisma.TiktokUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TiktokUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          update: {
            args: Prisma.TiktokUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          deleteMany: {
            args: Prisma.TiktokUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiktokUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TiktokUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserPayload>
          }
          aggregate: {
            args: Prisma.TiktokUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiktokUser>
          }
          groupBy: {
            args: Prisma.TiktokUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiktokUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiktokUserCountArgs<ExtArgs>
            result: $Utils.Optional<TiktokUserCountAggregateOutputType> | number
          }
        }
      }
      TiktokUserTag: {
        payload: Prisma.$TiktokUserTagPayload<ExtArgs>
        fields: Prisma.TiktokUserTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiktokUserTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiktokUserTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserTagPayload>
          }
          findFirst: {
            args: Prisma.TiktokUserTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiktokUserTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserTagPayload>
          }
          findMany: {
            args: Prisma.TiktokUserTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserTagPayload>[]
          }
          create: {
            args: Prisma.TiktokUserTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserTagPayload>
          }
          createMany: {
            args: Prisma.TiktokUserTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TiktokUserTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserTagPayload>
          }
          update: {
            args: Prisma.TiktokUserTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserTagPayload>
          }
          deleteMany: {
            args: Prisma.TiktokUserTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiktokUserTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TiktokUserTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiktokUserTagPayload>
          }
          aggregate: {
            args: Prisma.TiktokUserTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiktokUserTag>
          }
          groupBy: {
            args: Prisma.TiktokUserTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiktokUserTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiktokUserTagCountArgs<ExtArgs>
            result: $Utils.Optional<TiktokUserTagCountAggregateOutputType> | number
          }
        }
      }
      tiktokUserTagSyncError: {
        payload: Prisma.$tiktokUserTagSyncErrorPayload<ExtArgs>
        fields: Prisma.tiktokUserTagSyncErrorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tiktokUserTagSyncErrorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokUserTagSyncErrorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tiktokUserTagSyncErrorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokUserTagSyncErrorPayload>
          }
          findFirst: {
            args: Prisma.tiktokUserTagSyncErrorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokUserTagSyncErrorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tiktokUserTagSyncErrorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokUserTagSyncErrorPayload>
          }
          findMany: {
            args: Prisma.tiktokUserTagSyncErrorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokUserTagSyncErrorPayload>[]
          }
          create: {
            args: Prisma.tiktokUserTagSyncErrorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokUserTagSyncErrorPayload>
          }
          createMany: {
            args: Prisma.tiktokUserTagSyncErrorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tiktokUserTagSyncErrorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokUserTagSyncErrorPayload>
          }
          update: {
            args: Prisma.tiktokUserTagSyncErrorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokUserTagSyncErrorPayload>
          }
          deleteMany: {
            args: Prisma.tiktokUserTagSyncErrorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tiktokUserTagSyncErrorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tiktokUserTagSyncErrorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokUserTagSyncErrorPayload>
          }
          aggregate: {
            args: Prisma.TiktokUserTagSyncErrorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiktokUserTagSyncError>
          }
          groupBy: {
            args: Prisma.tiktokUserTagSyncErrorGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiktokUserTagSyncErrorGroupByOutputType>[]
          }
          count: {
            args: Prisma.tiktokUserTagSyncErrorCountArgs<ExtArgs>
            result: $Utils.Optional<TiktokUserTagSyncErrorCountAggregateOutputType> | number
          }
        }
      }
      tiktokTagTotalUserHistory: {
        payload: Prisma.$tiktokTagTotalUserHistoryPayload<ExtArgs>
        fields: Prisma.tiktokTagTotalUserHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tiktokTagTotalUserHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokTagTotalUserHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tiktokTagTotalUserHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokTagTotalUserHistoryPayload>
          }
          findFirst: {
            args: Prisma.tiktokTagTotalUserHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokTagTotalUserHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tiktokTagTotalUserHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokTagTotalUserHistoryPayload>
          }
          findMany: {
            args: Prisma.tiktokTagTotalUserHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokTagTotalUserHistoryPayload>[]
          }
          create: {
            args: Prisma.tiktokTagTotalUserHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokTagTotalUserHistoryPayload>
          }
          createMany: {
            args: Prisma.tiktokTagTotalUserHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tiktokTagTotalUserHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokTagTotalUserHistoryPayload>
          }
          update: {
            args: Prisma.tiktokTagTotalUserHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokTagTotalUserHistoryPayload>
          }
          deleteMany: {
            args: Prisma.tiktokTagTotalUserHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tiktokTagTotalUserHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tiktokTagTotalUserHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tiktokTagTotalUserHistoryPayload>
          }
          aggregate: {
            args: Prisma.TiktokTagTotalUserHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiktokTagTotalUserHistory>
          }
          groupBy: {
            args: Prisma.tiktokTagTotalUserHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiktokTagTotalUserHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.tiktokTagTotalUserHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TiktokTagTotalUserHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tiktokTag?: TiktokTagOmit
    tiktokUser?: TiktokUserOmit
    tiktokUserTag?: TiktokUserTagOmit
    tiktokUserTagSyncError?: tiktokUserTagSyncErrorOmit
    tiktokTagTotalUserHistory?: tiktokTagTotalUserHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TiktokTagCountOutputType
   */

  export type TiktokTagCountOutputType = {
    TiktokUserTag: number
  }

  export type TiktokTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TiktokUserTag?: boolean | TiktokTagCountOutputTypeCountTiktokUserTagArgs
  }

  // Custom InputTypes
  /**
   * TiktokTagCountOutputType without action
   */
  export type TiktokTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokTagCountOutputType
     */
    select?: TiktokTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TiktokTagCountOutputType without action
   */
  export type TiktokTagCountOutputTypeCountTiktokUserTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiktokUserTagWhereInput
  }


  /**
   * Count Type TiktokUserCountOutputType
   */

  export type TiktokUserCountOutputType = {
    TiktokUserTag: number
  }

  export type TiktokUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TiktokUserTag?: boolean | TiktokUserCountOutputTypeCountTiktokUserTagArgs
  }

  // Custom InputTypes
  /**
   * TiktokUserCountOutputType without action
   */
  export type TiktokUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUserCountOutputType
     */
    select?: TiktokUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TiktokUserCountOutputType without action
   */
  export type TiktokUserCountOutputTypeCountTiktokUserTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiktokUserTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TiktokTag
   */

  export type AggregateTiktokTag = {
    _count: TiktokTagCountAggregateOutputType | null
    _avg: TiktokTagAvgAggregateOutputType | null
    _sum: TiktokTagSumAggregateOutputType | null
    _min: TiktokTagMinAggregateOutputType | null
    _max: TiktokTagMaxAggregateOutputType | null
  }

  export type TiktokTagAvgAggregateOutputType = {
    id: number | null
  }

  export type TiktokTagSumAggregateOutputType = {
    id: number | null
  }

  export type TiktokTagMinAggregateOutputType = {
    id: number | null
    name: string | null
    post_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TiktokTagMaxAggregateOutputType = {
    id: number | null
    name: string | null
    post_number: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TiktokTagCountAggregateOutputType = {
    id: number
    name: number
    post_number: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TiktokTagAvgAggregateInputType = {
    id?: true
  }

  export type TiktokTagSumAggregateInputType = {
    id?: true
  }

  export type TiktokTagMinAggregateInputType = {
    id?: true
    name?: true
    post_number?: true
    created_at?: true
    updated_at?: true
  }

  export type TiktokTagMaxAggregateInputType = {
    id?: true
    name?: true
    post_number?: true
    created_at?: true
    updated_at?: true
  }

  export type TiktokTagCountAggregateInputType = {
    id?: true
    name?: true
    post_number?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TiktokTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokTag to aggregate.
     */
    where?: TiktokTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokTags to fetch.
     */
    orderBy?: TiktokTagOrderByWithRelationInput | TiktokTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiktokTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TiktokTags
    **/
    _count?: true | TiktokTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TiktokTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TiktokTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiktokTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiktokTagMaxAggregateInputType
  }

  export type GetTiktokTagAggregateType<T extends TiktokTagAggregateArgs> = {
        [P in keyof T & keyof AggregateTiktokTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiktokTag[P]>
      : GetScalarType<T[P], AggregateTiktokTag[P]>
  }




  export type TiktokTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiktokTagWhereInput
    orderBy?: TiktokTagOrderByWithAggregationInput | TiktokTagOrderByWithAggregationInput[]
    by: TiktokTagScalarFieldEnum[] | TiktokTagScalarFieldEnum
    having?: TiktokTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiktokTagCountAggregateInputType | true
    _avg?: TiktokTagAvgAggregateInputType
    _sum?: TiktokTagSumAggregateInputType
    _min?: TiktokTagMinAggregateInputType
    _max?: TiktokTagMaxAggregateInputType
  }

  export type TiktokTagGroupByOutputType = {
    id: number
    name: string
    post_number: string
    created_at: Date
    updated_at: Date
    _count: TiktokTagCountAggregateOutputType | null
    _avg: TiktokTagAvgAggregateOutputType | null
    _sum: TiktokTagSumAggregateOutputType | null
    _min: TiktokTagMinAggregateOutputType | null
    _max: TiktokTagMaxAggregateOutputType | null
  }

  type GetTiktokTagGroupByPayload<T extends TiktokTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiktokTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiktokTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiktokTagGroupByOutputType[P]>
            : GetScalarType<T[P], TiktokTagGroupByOutputType[P]>
        }
      >
    >


  export type TiktokTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    post_number?: boolean
    created_at?: boolean
    updated_at?: boolean
    TiktokUserTag?: boolean | TiktokTag$TiktokUserTagArgs<ExtArgs>
    _count?: boolean | TiktokTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiktokTag"]>



  export type TiktokTagSelectScalar = {
    id?: boolean
    name?: boolean
    post_number?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TiktokTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "post_number" | "created_at" | "updated_at", ExtArgs["result"]["tiktokTag"]>
  export type TiktokTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TiktokUserTag?: boolean | TiktokTag$TiktokUserTagArgs<ExtArgs>
    _count?: boolean | TiktokTagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TiktokTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TiktokTag"
    objects: {
      TiktokUserTag: Prisma.$TiktokUserTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      post_number: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tiktokTag"]>
    composites: {}
  }

  type TiktokTagGetPayload<S extends boolean | null | undefined | TiktokTagDefaultArgs> = $Result.GetResult<Prisma.$TiktokTagPayload, S>

  type TiktokTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TiktokTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiktokTagCountAggregateInputType | true
    }

  export interface TiktokTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TiktokTag'], meta: { name: 'TiktokTag' } }
    /**
     * Find zero or one TiktokTag that matches the filter.
     * @param {TiktokTagFindUniqueArgs} args - Arguments to find a TiktokTag
     * @example
     * // Get one TiktokTag
     * const tiktokTag = await prisma.tiktokTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiktokTagFindUniqueArgs>(args: SelectSubset<T, TiktokTagFindUniqueArgs<ExtArgs>>): Prisma__TiktokTagClient<$Result.GetResult<Prisma.$TiktokTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TiktokTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TiktokTagFindUniqueOrThrowArgs} args - Arguments to find a TiktokTag
     * @example
     * // Get one TiktokTag
     * const tiktokTag = await prisma.tiktokTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiktokTagFindUniqueOrThrowArgs>(args: SelectSubset<T, TiktokTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiktokTagClient<$Result.GetResult<Prisma.$TiktokTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokTagFindFirstArgs} args - Arguments to find a TiktokTag
     * @example
     * // Get one TiktokTag
     * const tiktokTag = await prisma.tiktokTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiktokTagFindFirstArgs>(args?: SelectSubset<T, TiktokTagFindFirstArgs<ExtArgs>>): Prisma__TiktokTagClient<$Result.GetResult<Prisma.$TiktokTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokTagFindFirstOrThrowArgs} args - Arguments to find a TiktokTag
     * @example
     * // Get one TiktokTag
     * const tiktokTag = await prisma.tiktokTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiktokTagFindFirstOrThrowArgs>(args?: SelectSubset<T, TiktokTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiktokTagClient<$Result.GetResult<Prisma.$TiktokTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TiktokTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TiktokTags
     * const tiktokTags = await prisma.tiktokTag.findMany()
     * 
     * // Get first 10 TiktokTags
     * const tiktokTags = await prisma.tiktokTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tiktokTagWithIdOnly = await prisma.tiktokTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TiktokTagFindManyArgs>(args?: SelectSubset<T, TiktokTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TiktokTag.
     * @param {TiktokTagCreateArgs} args - Arguments to create a TiktokTag.
     * @example
     * // Create one TiktokTag
     * const TiktokTag = await prisma.tiktokTag.create({
     *   data: {
     *     // ... data to create a TiktokTag
     *   }
     * })
     * 
     */
    create<T extends TiktokTagCreateArgs>(args: SelectSubset<T, TiktokTagCreateArgs<ExtArgs>>): Prisma__TiktokTagClient<$Result.GetResult<Prisma.$TiktokTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TiktokTags.
     * @param {TiktokTagCreateManyArgs} args - Arguments to create many TiktokTags.
     * @example
     * // Create many TiktokTags
     * const tiktokTag = await prisma.tiktokTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiktokTagCreateManyArgs>(args?: SelectSubset<T, TiktokTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TiktokTag.
     * @param {TiktokTagDeleteArgs} args - Arguments to delete one TiktokTag.
     * @example
     * // Delete one TiktokTag
     * const TiktokTag = await prisma.tiktokTag.delete({
     *   where: {
     *     // ... filter to delete one TiktokTag
     *   }
     * })
     * 
     */
    delete<T extends TiktokTagDeleteArgs>(args: SelectSubset<T, TiktokTagDeleteArgs<ExtArgs>>): Prisma__TiktokTagClient<$Result.GetResult<Prisma.$TiktokTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TiktokTag.
     * @param {TiktokTagUpdateArgs} args - Arguments to update one TiktokTag.
     * @example
     * // Update one TiktokTag
     * const tiktokTag = await prisma.tiktokTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiktokTagUpdateArgs>(args: SelectSubset<T, TiktokTagUpdateArgs<ExtArgs>>): Prisma__TiktokTagClient<$Result.GetResult<Prisma.$TiktokTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TiktokTags.
     * @param {TiktokTagDeleteManyArgs} args - Arguments to filter TiktokTags to delete.
     * @example
     * // Delete a few TiktokTags
     * const { count } = await prisma.tiktokTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiktokTagDeleteManyArgs>(args?: SelectSubset<T, TiktokTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TiktokTags
     * const tiktokTag = await prisma.tiktokTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiktokTagUpdateManyArgs>(args: SelectSubset<T, TiktokTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TiktokTag.
     * @param {TiktokTagUpsertArgs} args - Arguments to update or create a TiktokTag.
     * @example
     * // Update or create a TiktokTag
     * const tiktokTag = await prisma.tiktokTag.upsert({
     *   create: {
     *     // ... data to create a TiktokTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TiktokTag we want to update
     *   }
     * })
     */
    upsert<T extends TiktokTagUpsertArgs>(args: SelectSubset<T, TiktokTagUpsertArgs<ExtArgs>>): Prisma__TiktokTagClient<$Result.GetResult<Prisma.$TiktokTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TiktokTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokTagCountArgs} args - Arguments to filter TiktokTags to count.
     * @example
     * // Count the number of TiktokTags
     * const count = await prisma.tiktokTag.count({
     *   where: {
     *     // ... the filter for the TiktokTags we want to count
     *   }
     * })
    **/
    count<T extends TiktokTagCountArgs>(
      args?: Subset<T, TiktokTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiktokTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TiktokTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TiktokTagAggregateArgs>(args: Subset<T, TiktokTagAggregateArgs>): Prisma.PrismaPromise<GetTiktokTagAggregateType<T>>

    /**
     * Group by TiktokTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TiktokTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiktokTagGroupByArgs['orderBy'] }
        : { orderBy?: TiktokTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TiktokTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiktokTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TiktokTag model
   */
  readonly fields: TiktokTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TiktokTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiktokTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TiktokUserTag<T extends TiktokTag$TiktokUserTagArgs<ExtArgs> = {}>(args?: Subset<T, TiktokTag$TiktokUserTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokUserTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TiktokTag model
   */
  interface TiktokTagFieldRefs {
    readonly id: FieldRef<"TiktokTag", 'Int'>
    readonly name: FieldRef<"TiktokTag", 'String'>
    readonly post_number: FieldRef<"TiktokTag", 'String'>
    readonly created_at: FieldRef<"TiktokTag", 'DateTime'>
    readonly updated_at: FieldRef<"TiktokTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TiktokTag findUnique
   */
  export type TiktokTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokTag
     */
    select?: TiktokTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokTag
     */
    omit?: TiktokTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokTagInclude<ExtArgs> | null
    /**
     * Filter, which TiktokTag to fetch.
     */
    where: TiktokTagWhereUniqueInput
  }

  /**
   * TiktokTag findUniqueOrThrow
   */
  export type TiktokTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokTag
     */
    select?: TiktokTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokTag
     */
    omit?: TiktokTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokTagInclude<ExtArgs> | null
    /**
     * Filter, which TiktokTag to fetch.
     */
    where: TiktokTagWhereUniqueInput
  }

  /**
   * TiktokTag findFirst
   */
  export type TiktokTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokTag
     */
    select?: TiktokTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokTag
     */
    omit?: TiktokTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokTagInclude<ExtArgs> | null
    /**
     * Filter, which TiktokTag to fetch.
     */
    where?: TiktokTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokTags to fetch.
     */
    orderBy?: TiktokTagOrderByWithRelationInput | TiktokTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokTags.
     */
    cursor?: TiktokTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokTags.
     */
    distinct?: TiktokTagScalarFieldEnum | TiktokTagScalarFieldEnum[]
  }

  /**
   * TiktokTag findFirstOrThrow
   */
  export type TiktokTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokTag
     */
    select?: TiktokTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokTag
     */
    omit?: TiktokTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokTagInclude<ExtArgs> | null
    /**
     * Filter, which TiktokTag to fetch.
     */
    where?: TiktokTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokTags to fetch.
     */
    orderBy?: TiktokTagOrderByWithRelationInput | TiktokTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokTags.
     */
    cursor?: TiktokTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokTags.
     */
    distinct?: TiktokTagScalarFieldEnum | TiktokTagScalarFieldEnum[]
  }

  /**
   * TiktokTag findMany
   */
  export type TiktokTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokTag
     */
    select?: TiktokTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokTag
     */
    omit?: TiktokTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokTagInclude<ExtArgs> | null
    /**
     * Filter, which TiktokTags to fetch.
     */
    where?: TiktokTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokTags to fetch.
     */
    orderBy?: TiktokTagOrderByWithRelationInput | TiktokTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TiktokTags.
     */
    cursor?: TiktokTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokTags.
     */
    skip?: number
    distinct?: TiktokTagScalarFieldEnum | TiktokTagScalarFieldEnum[]
  }

  /**
   * TiktokTag create
   */
  export type TiktokTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokTag
     */
    select?: TiktokTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokTag
     */
    omit?: TiktokTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokTagInclude<ExtArgs> | null
    /**
     * The data needed to create a TiktokTag.
     */
    data: XOR<TiktokTagCreateInput, TiktokTagUncheckedCreateInput>
  }

  /**
   * TiktokTag createMany
   */
  export type TiktokTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TiktokTags.
     */
    data: TiktokTagCreateManyInput | TiktokTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiktokTag update
   */
  export type TiktokTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokTag
     */
    select?: TiktokTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokTag
     */
    omit?: TiktokTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokTagInclude<ExtArgs> | null
    /**
     * The data needed to update a TiktokTag.
     */
    data: XOR<TiktokTagUpdateInput, TiktokTagUncheckedUpdateInput>
    /**
     * Choose, which TiktokTag to update.
     */
    where: TiktokTagWhereUniqueInput
  }

  /**
   * TiktokTag updateMany
   */
  export type TiktokTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TiktokTags.
     */
    data: XOR<TiktokTagUpdateManyMutationInput, TiktokTagUncheckedUpdateManyInput>
    /**
     * Filter which TiktokTags to update
     */
    where?: TiktokTagWhereInput
    /**
     * Limit how many TiktokTags to update.
     */
    limit?: number
  }

  /**
   * TiktokTag upsert
   */
  export type TiktokTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokTag
     */
    select?: TiktokTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokTag
     */
    omit?: TiktokTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokTagInclude<ExtArgs> | null
    /**
     * The filter to search for the TiktokTag to update in case it exists.
     */
    where: TiktokTagWhereUniqueInput
    /**
     * In case the TiktokTag found by the `where` argument doesn't exist, create a new TiktokTag with this data.
     */
    create: XOR<TiktokTagCreateInput, TiktokTagUncheckedCreateInput>
    /**
     * In case the TiktokTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiktokTagUpdateInput, TiktokTagUncheckedUpdateInput>
  }

  /**
   * TiktokTag delete
   */
  export type TiktokTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokTag
     */
    select?: TiktokTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokTag
     */
    omit?: TiktokTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokTagInclude<ExtArgs> | null
    /**
     * Filter which TiktokTag to delete.
     */
    where: TiktokTagWhereUniqueInput
  }

  /**
   * TiktokTag deleteMany
   */
  export type TiktokTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokTags to delete
     */
    where?: TiktokTagWhereInput
    /**
     * Limit how many TiktokTags to delete.
     */
    limit?: number
  }

  /**
   * TiktokTag.TiktokUserTag
   */
  export type TiktokTag$TiktokUserTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUserTag
     */
    select?: TiktokUserTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUserTag
     */
    omit?: TiktokUserTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserTagInclude<ExtArgs> | null
    where?: TiktokUserTagWhereInput
    orderBy?: TiktokUserTagOrderByWithRelationInput | TiktokUserTagOrderByWithRelationInput[]
    cursor?: TiktokUserTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TiktokUserTagScalarFieldEnum | TiktokUserTagScalarFieldEnum[]
  }

  /**
   * TiktokTag without action
   */
  export type TiktokTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokTag
     */
    select?: TiktokTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokTag
     */
    omit?: TiktokTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokTagInclude<ExtArgs> | null
  }


  /**
   * Model TiktokUser
   */

  export type AggregateTiktokUser = {
    _count: TiktokUserCountAggregateOutputType | null
    _avg: TiktokUserAvgAggregateOutputType | null
    _sum: TiktokUserSumAggregateOutputType | null
    _min: TiktokUserMinAggregateOutputType | null
    _max: TiktokUserMaxAggregateOutputType | null
  }

  export type TiktokUserAvgAggregateOutputType = {
    id: number | null
  }

  export type TiktokUserSumAggregateOutputType = {
    id: number | null
  }

  export type TiktokUserMinAggregateOutputType = {
    id: number | null
    username: string | null
    avatar: string | null
    tiktok_src: string | null
    created_at: Date | null
    updated_at: Date | null
    followers: string | null
    following: string | null
    likes: string | null
  }

  export type TiktokUserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    avatar: string | null
    tiktok_src: string | null
    created_at: Date | null
    updated_at: Date | null
    followers: string | null
    following: string | null
    likes: string | null
  }

  export type TiktokUserCountAggregateOutputType = {
    id: number
    username: number
    avatar: number
    tiktok_src: number
    created_at: number
    updated_at: number
    followers: number
    following: number
    likes: number
    _all: number
  }


  export type TiktokUserAvgAggregateInputType = {
    id?: true
  }

  export type TiktokUserSumAggregateInputType = {
    id?: true
  }

  export type TiktokUserMinAggregateInputType = {
    id?: true
    username?: true
    avatar?: true
    tiktok_src?: true
    created_at?: true
    updated_at?: true
    followers?: true
    following?: true
    likes?: true
  }

  export type TiktokUserMaxAggregateInputType = {
    id?: true
    username?: true
    avatar?: true
    tiktok_src?: true
    created_at?: true
    updated_at?: true
    followers?: true
    following?: true
    likes?: true
  }

  export type TiktokUserCountAggregateInputType = {
    id?: true
    username?: true
    avatar?: true
    tiktok_src?: true
    created_at?: true
    updated_at?: true
    followers?: true
    following?: true
    likes?: true
    _all?: true
  }

  export type TiktokUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokUser to aggregate.
     */
    where?: TiktokUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokUsers to fetch.
     */
    orderBy?: TiktokUserOrderByWithRelationInput | TiktokUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiktokUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TiktokUsers
    **/
    _count?: true | TiktokUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TiktokUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TiktokUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiktokUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiktokUserMaxAggregateInputType
  }

  export type GetTiktokUserAggregateType<T extends TiktokUserAggregateArgs> = {
        [P in keyof T & keyof AggregateTiktokUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiktokUser[P]>
      : GetScalarType<T[P], AggregateTiktokUser[P]>
  }




  export type TiktokUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiktokUserWhereInput
    orderBy?: TiktokUserOrderByWithAggregationInput | TiktokUserOrderByWithAggregationInput[]
    by: TiktokUserScalarFieldEnum[] | TiktokUserScalarFieldEnum
    having?: TiktokUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiktokUserCountAggregateInputType | true
    _avg?: TiktokUserAvgAggregateInputType
    _sum?: TiktokUserSumAggregateInputType
    _min?: TiktokUserMinAggregateInputType
    _max?: TiktokUserMaxAggregateInputType
  }

  export type TiktokUserGroupByOutputType = {
    id: number
    username: string
    avatar: string | null
    tiktok_src: string
    created_at: Date
    updated_at: Date
    followers: string | null
    following: string | null
    likes: string | null
    _count: TiktokUserCountAggregateOutputType | null
    _avg: TiktokUserAvgAggregateOutputType | null
    _sum: TiktokUserSumAggregateOutputType | null
    _min: TiktokUserMinAggregateOutputType | null
    _max: TiktokUserMaxAggregateOutputType | null
  }

  type GetTiktokUserGroupByPayload<T extends TiktokUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiktokUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiktokUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiktokUserGroupByOutputType[P]>
            : GetScalarType<T[P], TiktokUserGroupByOutputType[P]>
        }
      >
    >


  export type TiktokUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    avatar?: boolean
    tiktok_src?: boolean
    created_at?: boolean
    updated_at?: boolean
    followers?: boolean
    following?: boolean
    likes?: boolean
    TiktokUserTag?: boolean | TiktokUser$TiktokUserTagArgs<ExtArgs>
    _count?: boolean | TiktokUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiktokUser"]>



  export type TiktokUserSelectScalar = {
    id?: boolean
    username?: boolean
    avatar?: boolean
    tiktok_src?: boolean
    created_at?: boolean
    updated_at?: boolean
    followers?: boolean
    following?: boolean
    likes?: boolean
  }

  export type TiktokUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "avatar" | "tiktok_src" | "created_at" | "updated_at" | "followers" | "following" | "likes", ExtArgs["result"]["tiktokUser"]>
  export type TiktokUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TiktokUserTag?: boolean | TiktokUser$TiktokUserTagArgs<ExtArgs>
    _count?: boolean | TiktokUserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TiktokUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TiktokUser"
    objects: {
      TiktokUserTag: Prisma.$TiktokUserTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      avatar: string | null
      tiktok_src: string
      created_at: Date
      updated_at: Date
      followers: string | null
      following: string | null
      likes: string | null
    }, ExtArgs["result"]["tiktokUser"]>
    composites: {}
  }

  type TiktokUserGetPayload<S extends boolean | null | undefined | TiktokUserDefaultArgs> = $Result.GetResult<Prisma.$TiktokUserPayload, S>

  type TiktokUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TiktokUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiktokUserCountAggregateInputType | true
    }

  export interface TiktokUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TiktokUser'], meta: { name: 'TiktokUser' } }
    /**
     * Find zero or one TiktokUser that matches the filter.
     * @param {TiktokUserFindUniqueArgs} args - Arguments to find a TiktokUser
     * @example
     * // Get one TiktokUser
     * const tiktokUser = await prisma.tiktokUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiktokUserFindUniqueArgs>(args: SelectSubset<T, TiktokUserFindUniqueArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TiktokUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TiktokUserFindUniqueOrThrowArgs} args - Arguments to find a TiktokUser
     * @example
     * // Get one TiktokUser
     * const tiktokUser = await prisma.tiktokUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiktokUserFindUniqueOrThrowArgs>(args: SelectSubset<T, TiktokUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserFindFirstArgs} args - Arguments to find a TiktokUser
     * @example
     * // Get one TiktokUser
     * const tiktokUser = await prisma.tiktokUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiktokUserFindFirstArgs>(args?: SelectSubset<T, TiktokUserFindFirstArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserFindFirstOrThrowArgs} args - Arguments to find a TiktokUser
     * @example
     * // Get one TiktokUser
     * const tiktokUser = await prisma.tiktokUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiktokUserFindFirstOrThrowArgs>(args?: SelectSubset<T, TiktokUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TiktokUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TiktokUsers
     * const tiktokUsers = await prisma.tiktokUser.findMany()
     * 
     * // Get first 10 TiktokUsers
     * const tiktokUsers = await prisma.tiktokUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tiktokUserWithIdOnly = await prisma.tiktokUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TiktokUserFindManyArgs>(args?: SelectSubset<T, TiktokUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TiktokUser.
     * @param {TiktokUserCreateArgs} args - Arguments to create a TiktokUser.
     * @example
     * // Create one TiktokUser
     * const TiktokUser = await prisma.tiktokUser.create({
     *   data: {
     *     // ... data to create a TiktokUser
     *   }
     * })
     * 
     */
    create<T extends TiktokUserCreateArgs>(args: SelectSubset<T, TiktokUserCreateArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TiktokUsers.
     * @param {TiktokUserCreateManyArgs} args - Arguments to create many TiktokUsers.
     * @example
     * // Create many TiktokUsers
     * const tiktokUser = await prisma.tiktokUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiktokUserCreateManyArgs>(args?: SelectSubset<T, TiktokUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TiktokUser.
     * @param {TiktokUserDeleteArgs} args - Arguments to delete one TiktokUser.
     * @example
     * // Delete one TiktokUser
     * const TiktokUser = await prisma.tiktokUser.delete({
     *   where: {
     *     // ... filter to delete one TiktokUser
     *   }
     * })
     * 
     */
    delete<T extends TiktokUserDeleteArgs>(args: SelectSubset<T, TiktokUserDeleteArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TiktokUser.
     * @param {TiktokUserUpdateArgs} args - Arguments to update one TiktokUser.
     * @example
     * // Update one TiktokUser
     * const tiktokUser = await prisma.tiktokUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiktokUserUpdateArgs>(args: SelectSubset<T, TiktokUserUpdateArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TiktokUsers.
     * @param {TiktokUserDeleteManyArgs} args - Arguments to filter TiktokUsers to delete.
     * @example
     * // Delete a few TiktokUsers
     * const { count } = await prisma.tiktokUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiktokUserDeleteManyArgs>(args?: SelectSubset<T, TiktokUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TiktokUsers
     * const tiktokUser = await prisma.tiktokUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiktokUserUpdateManyArgs>(args: SelectSubset<T, TiktokUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TiktokUser.
     * @param {TiktokUserUpsertArgs} args - Arguments to update or create a TiktokUser.
     * @example
     * // Update or create a TiktokUser
     * const tiktokUser = await prisma.tiktokUser.upsert({
     *   create: {
     *     // ... data to create a TiktokUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TiktokUser we want to update
     *   }
     * })
     */
    upsert<T extends TiktokUserUpsertArgs>(args: SelectSubset<T, TiktokUserUpsertArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TiktokUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserCountArgs} args - Arguments to filter TiktokUsers to count.
     * @example
     * // Count the number of TiktokUsers
     * const count = await prisma.tiktokUser.count({
     *   where: {
     *     // ... the filter for the TiktokUsers we want to count
     *   }
     * })
    **/
    count<T extends TiktokUserCountArgs>(
      args?: Subset<T, TiktokUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiktokUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TiktokUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TiktokUserAggregateArgs>(args: Subset<T, TiktokUserAggregateArgs>): Prisma.PrismaPromise<GetTiktokUserAggregateType<T>>

    /**
     * Group by TiktokUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TiktokUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiktokUserGroupByArgs['orderBy'] }
        : { orderBy?: TiktokUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TiktokUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiktokUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TiktokUser model
   */
  readonly fields: TiktokUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TiktokUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiktokUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TiktokUserTag<T extends TiktokUser$TiktokUserTagArgs<ExtArgs> = {}>(args?: Subset<T, TiktokUser$TiktokUserTagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokUserTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TiktokUser model
   */
  interface TiktokUserFieldRefs {
    readonly id: FieldRef<"TiktokUser", 'Int'>
    readonly username: FieldRef<"TiktokUser", 'String'>
    readonly avatar: FieldRef<"TiktokUser", 'String'>
    readonly tiktok_src: FieldRef<"TiktokUser", 'String'>
    readonly created_at: FieldRef<"TiktokUser", 'DateTime'>
    readonly updated_at: FieldRef<"TiktokUser", 'DateTime'>
    readonly followers: FieldRef<"TiktokUser", 'String'>
    readonly following: FieldRef<"TiktokUser", 'String'>
    readonly likes: FieldRef<"TiktokUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TiktokUser findUnique
   */
  export type TiktokUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUser to fetch.
     */
    where: TiktokUserWhereUniqueInput
  }

  /**
   * TiktokUser findUniqueOrThrow
   */
  export type TiktokUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUser to fetch.
     */
    where: TiktokUserWhereUniqueInput
  }

  /**
   * TiktokUser findFirst
   */
  export type TiktokUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUser to fetch.
     */
    where?: TiktokUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokUsers to fetch.
     */
    orderBy?: TiktokUserOrderByWithRelationInput | TiktokUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokUsers.
     */
    cursor?: TiktokUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokUsers.
     */
    distinct?: TiktokUserScalarFieldEnum | TiktokUserScalarFieldEnum[]
  }

  /**
   * TiktokUser findFirstOrThrow
   */
  export type TiktokUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUser to fetch.
     */
    where?: TiktokUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokUsers to fetch.
     */
    orderBy?: TiktokUserOrderByWithRelationInput | TiktokUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokUsers.
     */
    cursor?: TiktokUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokUsers.
     */
    distinct?: TiktokUserScalarFieldEnum | TiktokUserScalarFieldEnum[]
  }

  /**
   * TiktokUser findMany
   */
  export type TiktokUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUsers to fetch.
     */
    where?: TiktokUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokUsers to fetch.
     */
    orderBy?: TiktokUserOrderByWithRelationInput | TiktokUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TiktokUsers.
     */
    cursor?: TiktokUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokUsers.
     */
    skip?: number
    distinct?: TiktokUserScalarFieldEnum | TiktokUserScalarFieldEnum[]
  }

  /**
   * TiktokUser create
   */
  export type TiktokUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * The data needed to create a TiktokUser.
     */
    data: XOR<TiktokUserCreateInput, TiktokUserUncheckedCreateInput>
  }

  /**
   * TiktokUser createMany
   */
  export type TiktokUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TiktokUsers.
     */
    data: TiktokUserCreateManyInput | TiktokUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiktokUser update
   */
  export type TiktokUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * The data needed to update a TiktokUser.
     */
    data: XOR<TiktokUserUpdateInput, TiktokUserUncheckedUpdateInput>
    /**
     * Choose, which TiktokUser to update.
     */
    where: TiktokUserWhereUniqueInput
  }

  /**
   * TiktokUser updateMany
   */
  export type TiktokUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TiktokUsers.
     */
    data: XOR<TiktokUserUpdateManyMutationInput, TiktokUserUncheckedUpdateManyInput>
    /**
     * Filter which TiktokUsers to update
     */
    where?: TiktokUserWhereInput
    /**
     * Limit how many TiktokUsers to update.
     */
    limit?: number
  }

  /**
   * TiktokUser upsert
   */
  export type TiktokUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * The filter to search for the TiktokUser to update in case it exists.
     */
    where: TiktokUserWhereUniqueInput
    /**
     * In case the TiktokUser found by the `where` argument doesn't exist, create a new TiktokUser with this data.
     */
    create: XOR<TiktokUserCreateInput, TiktokUserUncheckedCreateInput>
    /**
     * In case the TiktokUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiktokUserUpdateInput, TiktokUserUncheckedUpdateInput>
  }

  /**
   * TiktokUser delete
   */
  export type TiktokUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
    /**
     * Filter which TiktokUser to delete.
     */
    where: TiktokUserWhereUniqueInput
  }

  /**
   * TiktokUser deleteMany
   */
  export type TiktokUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokUsers to delete
     */
    where?: TiktokUserWhereInput
    /**
     * Limit how many TiktokUsers to delete.
     */
    limit?: number
  }

  /**
   * TiktokUser.TiktokUserTag
   */
  export type TiktokUser$TiktokUserTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUserTag
     */
    select?: TiktokUserTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUserTag
     */
    omit?: TiktokUserTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserTagInclude<ExtArgs> | null
    where?: TiktokUserTagWhereInput
    orderBy?: TiktokUserTagOrderByWithRelationInput | TiktokUserTagOrderByWithRelationInput[]
    cursor?: TiktokUserTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TiktokUserTagScalarFieldEnum | TiktokUserTagScalarFieldEnum[]
  }

  /**
   * TiktokUser without action
   */
  export type TiktokUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUser
     */
    select?: TiktokUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUser
     */
    omit?: TiktokUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserInclude<ExtArgs> | null
  }


  /**
   * Model TiktokUserTag
   */

  export type AggregateTiktokUserTag = {
    _count: TiktokUserTagCountAggregateOutputType | null
    _avg: TiktokUserTagAvgAggregateOutputType | null
    _sum: TiktokUserTagSumAggregateOutputType | null
    _min: TiktokUserTagMinAggregateOutputType | null
    _max: TiktokUserTagMaxAggregateOutputType | null
  }

  export type TiktokUserTagAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    tag_id: number | null
  }

  export type TiktokUserTagSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    tag_id: number | null
  }

  export type TiktokUserTagMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    tag_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TiktokUserTagMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    tag_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TiktokUserTagCountAggregateOutputType = {
    id: number
    user_id: number
    tag_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TiktokUserTagAvgAggregateInputType = {
    id?: true
    user_id?: true
    tag_id?: true
  }

  export type TiktokUserTagSumAggregateInputType = {
    id?: true
    user_id?: true
    tag_id?: true
  }

  export type TiktokUserTagMinAggregateInputType = {
    id?: true
    user_id?: true
    tag_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TiktokUserTagMaxAggregateInputType = {
    id?: true
    user_id?: true
    tag_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TiktokUserTagCountAggregateInputType = {
    id?: true
    user_id?: true
    tag_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TiktokUserTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokUserTag to aggregate.
     */
    where?: TiktokUserTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokUserTags to fetch.
     */
    orderBy?: TiktokUserTagOrderByWithRelationInput | TiktokUserTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiktokUserTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokUserTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokUserTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TiktokUserTags
    **/
    _count?: true | TiktokUserTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TiktokUserTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TiktokUserTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiktokUserTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiktokUserTagMaxAggregateInputType
  }

  export type GetTiktokUserTagAggregateType<T extends TiktokUserTagAggregateArgs> = {
        [P in keyof T & keyof AggregateTiktokUserTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiktokUserTag[P]>
      : GetScalarType<T[P], AggregateTiktokUserTag[P]>
  }




  export type TiktokUserTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiktokUserTagWhereInput
    orderBy?: TiktokUserTagOrderByWithAggregationInput | TiktokUserTagOrderByWithAggregationInput[]
    by: TiktokUserTagScalarFieldEnum[] | TiktokUserTagScalarFieldEnum
    having?: TiktokUserTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiktokUserTagCountAggregateInputType | true
    _avg?: TiktokUserTagAvgAggregateInputType
    _sum?: TiktokUserTagSumAggregateInputType
    _min?: TiktokUserTagMinAggregateInputType
    _max?: TiktokUserTagMaxAggregateInputType
  }

  export type TiktokUserTagGroupByOutputType = {
    id: number
    user_id: number
    tag_id: number
    created_at: Date
    updated_at: Date
    _count: TiktokUserTagCountAggregateOutputType | null
    _avg: TiktokUserTagAvgAggregateOutputType | null
    _sum: TiktokUserTagSumAggregateOutputType | null
    _min: TiktokUserTagMinAggregateOutputType | null
    _max: TiktokUserTagMaxAggregateOutputType | null
  }

  type GetTiktokUserTagGroupByPayload<T extends TiktokUserTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiktokUserTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiktokUserTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiktokUserTagGroupByOutputType[P]>
            : GetScalarType<T[P], TiktokUserTagGroupByOutputType[P]>
        }
      >
    >


  export type TiktokUserTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    tag_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | TiktokUserDefaultArgs<ExtArgs>
    tag?: boolean | TiktokTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiktokUserTag"]>



  export type TiktokUserTagSelectScalar = {
    id?: boolean
    user_id?: boolean
    tag_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TiktokUserTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "tag_id" | "created_at" | "updated_at", ExtArgs["result"]["tiktokUserTag"]>
  export type TiktokUserTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TiktokUserDefaultArgs<ExtArgs>
    tag?: boolean | TiktokTagDefaultArgs<ExtArgs>
  }

  export type $TiktokUserTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TiktokUserTag"
    objects: {
      user: Prisma.$TiktokUserPayload<ExtArgs>
      tag: Prisma.$TiktokTagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      tag_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tiktokUserTag"]>
    composites: {}
  }

  type TiktokUserTagGetPayload<S extends boolean | null | undefined | TiktokUserTagDefaultArgs> = $Result.GetResult<Prisma.$TiktokUserTagPayload, S>

  type TiktokUserTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TiktokUserTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiktokUserTagCountAggregateInputType | true
    }

  export interface TiktokUserTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TiktokUserTag'], meta: { name: 'TiktokUserTag' } }
    /**
     * Find zero or one TiktokUserTag that matches the filter.
     * @param {TiktokUserTagFindUniqueArgs} args - Arguments to find a TiktokUserTag
     * @example
     * // Get one TiktokUserTag
     * const tiktokUserTag = await prisma.tiktokUserTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiktokUserTagFindUniqueArgs>(args: SelectSubset<T, TiktokUserTagFindUniqueArgs<ExtArgs>>): Prisma__TiktokUserTagClient<$Result.GetResult<Prisma.$TiktokUserTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TiktokUserTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TiktokUserTagFindUniqueOrThrowArgs} args - Arguments to find a TiktokUserTag
     * @example
     * // Get one TiktokUserTag
     * const tiktokUserTag = await prisma.tiktokUserTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiktokUserTagFindUniqueOrThrowArgs>(args: SelectSubset<T, TiktokUserTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiktokUserTagClient<$Result.GetResult<Prisma.$TiktokUserTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokUserTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserTagFindFirstArgs} args - Arguments to find a TiktokUserTag
     * @example
     * // Get one TiktokUserTag
     * const tiktokUserTag = await prisma.tiktokUserTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiktokUserTagFindFirstArgs>(args?: SelectSubset<T, TiktokUserTagFindFirstArgs<ExtArgs>>): Prisma__TiktokUserTagClient<$Result.GetResult<Prisma.$TiktokUserTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokUserTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserTagFindFirstOrThrowArgs} args - Arguments to find a TiktokUserTag
     * @example
     * // Get one TiktokUserTag
     * const tiktokUserTag = await prisma.tiktokUserTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiktokUserTagFindFirstOrThrowArgs>(args?: SelectSubset<T, TiktokUserTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiktokUserTagClient<$Result.GetResult<Prisma.$TiktokUserTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TiktokUserTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TiktokUserTags
     * const tiktokUserTags = await prisma.tiktokUserTag.findMany()
     * 
     * // Get first 10 TiktokUserTags
     * const tiktokUserTags = await prisma.tiktokUserTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tiktokUserTagWithIdOnly = await prisma.tiktokUserTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TiktokUserTagFindManyArgs>(args?: SelectSubset<T, TiktokUserTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiktokUserTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TiktokUserTag.
     * @param {TiktokUserTagCreateArgs} args - Arguments to create a TiktokUserTag.
     * @example
     * // Create one TiktokUserTag
     * const TiktokUserTag = await prisma.tiktokUserTag.create({
     *   data: {
     *     // ... data to create a TiktokUserTag
     *   }
     * })
     * 
     */
    create<T extends TiktokUserTagCreateArgs>(args: SelectSubset<T, TiktokUserTagCreateArgs<ExtArgs>>): Prisma__TiktokUserTagClient<$Result.GetResult<Prisma.$TiktokUserTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TiktokUserTags.
     * @param {TiktokUserTagCreateManyArgs} args - Arguments to create many TiktokUserTags.
     * @example
     * // Create many TiktokUserTags
     * const tiktokUserTag = await prisma.tiktokUserTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiktokUserTagCreateManyArgs>(args?: SelectSubset<T, TiktokUserTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TiktokUserTag.
     * @param {TiktokUserTagDeleteArgs} args - Arguments to delete one TiktokUserTag.
     * @example
     * // Delete one TiktokUserTag
     * const TiktokUserTag = await prisma.tiktokUserTag.delete({
     *   where: {
     *     // ... filter to delete one TiktokUserTag
     *   }
     * })
     * 
     */
    delete<T extends TiktokUserTagDeleteArgs>(args: SelectSubset<T, TiktokUserTagDeleteArgs<ExtArgs>>): Prisma__TiktokUserTagClient<$Result.GetResult<Prisma.$TiktokUserTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TiktokUserTag.
     * @param {TiktokUserTagUpdateArgs} args - Arguments to update one TiktokUserTag.
     * @example
     * // Update one TiktokUserTag
     * const tiktokUserTag = await prisma.tiktokUserTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiktokUserTagUpdateArgs>(args: SelectSubset<T, TiktokUserTagUpdateArgs<ExtArgs>>): Prisma__TiktokUserTagClient<$Result.GetResult<Prisma.$TiktokUserTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TiktokUserTags.
     * @param {TiktokUserTagDeleteManyArgs} args - Arguments to filter TiktokUserTags to delete.
     * @example
     * // Delete a few TiktokUserTags
     * const { count } = await prisma.tiktokUserTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiktokUserTagDeleteManyArgs>(args?: SelectSubset<T, TiktokUserTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokUserTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TiktokUserTags
     * const tiktokUserTag = await prisma.tiktokUserTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiktokUserTagUpdateManyArgs>(args: SelectSubset<T, TiktokUserTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TiktokUserTag.
     * @param {TiktokUserTagUpsertArgs} args - Arguments to update or create a TiktokUserTag.
     * @example
     * // Update or create a TiktokUserTag
     * const tiktokUserTag = await prisma.tiktokUserTag.upsert({
     *   create: {
     *     // ... data to create a TiktokUserTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TiktokUserTag we want to update
     *   }
     * })
     */
    upsert<T extends TiktokUserTagUpsertArgs>(args: SelectSubset<T, TiktokUserTagUpsertArgs<ExtArgs>>): Prisma__TiktokUserTagClient<$Result.GetResult<Prisma.$TiktokUserTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TiktokUserTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserTagCountArgs} args - Arguments to filter TiktokUserTags to count.
     * @example
     * // Count the number of TiktokUserTags
     * const count = await prisma.tiktokUserTag.count({
     *   where: {
     *     // ... the filter for the TiktokUserTags we want to count
     *   }
     * })
    **/
    count<T extends TiktokUserTagCountArgs>(
      args?: Subset<T, TiktokUserTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiktokUserTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TiktokUserTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TiktokUserTagAggregateArgs>(args: Subset<T, TiktokUserTagAggregateArgs>): Prisma.PrismaPromise<GetTiktokUserTagAggregateType<T>>

    /**
     * Group by TiktokUserTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TiktokUserTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiktokUserTagGroupByArgs['orderBy'] }
        : { orderBy?: TiktokUserTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TiktokUserTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiktokUserTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TiktokUserTag model
   */
  readonly fields: TiktokUserTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TiktokUserTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiktokUserTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends TiktokUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TiktokUserDefaultArgs<ExtArgs>>): Prisma__TiktokUserClient<$Result.GetResult<Prisma.$TiktokUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TiktokTagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TiktokTagDefaultArgs<ExtArgs>>): Prisma__TiktokTagClient<$Result.GetResult<Prisma.$TiktokTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TiktokUserTag model
   */
  interface TiktokUserTagFieldRefs {
    readonly id: FieldRef<"TiktokUserTag", 'Int'>
    readonly user_id: FieldRef<"TiktokUserTag", 'Int'>
    readonly tag_id: FieldRef<"TiktokUserTag", 'Int'>
    readonly created_at: FieldRef<"TiktokUserTag", 'DateTime'>
    readonly updated_at: FieldRef<"TiktokUserTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TiktokUserTag findUnique
   */
  export type TiktokUserTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUserTag
     */
    select?: TiktokUserTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUserTag
     */
    omit?: TiktokUserTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserTagInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUserTag to fetch.
     */
    where: TiktokUserTagWhereUniqueInput
  }

  /**
   * TiktokUserTag findUniqueOrThrow
   */
  export type TiktokUserTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUserTag
     */
    select?: TiktokUserTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUserTag
     */
    omit?: TiktokUserTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserTagInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUserTag to fetch.
     */
    where: TiktokUserTagWhereUniqueInput
  }

  /**
   * TiktokUserTag findFirst
   */
  export type TiktokUserTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUserTag
     */
    select?: TiktokUserTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUserTag
     */
    omit?: TiktokUserTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserTagInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUserTag to fetch.
     */
    where?: TiktokUserTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokUserTags to fetch.
     */
    orderBy?: TiktokUserTagOrderByWithRelationInput | TiktokUserTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokUserTags.
     */
    cursor?: TiktokUserTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokUserTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokUserTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokUserTags.
     */
    distinct?: TiktokUserTagScalarFieldEnum | TiktokUserTagScalarFieldEnum[]
  }

  /**
   * TiktokUserTag findFirstOrThrow
   */
  export type TiktokUserTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUserTag
     */
    select?: TiktokUserTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUserTag
     */
    omit?: TiktokUserTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserTagInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUserTag to fetch.
     */
    where?: TiktokUserTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokUserTags to fetch.
     */
    orderBy?: TiktokUserTagOrderByWithRelationInput | TiktokUserTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiktokUserTags.
     */
    cursor?: TiktokUserTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokUserTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokUserTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiktokUserTags.
     */
    distinct?: TiktokUserTagScalarFieldEnum | TiktokUserTagScalarFieldEnum[]
  }

  /**
   * TiktokUserTag findMany
   */
  export type TiktokUserTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUserTag
     */
    select?: TiktokUserTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUserTag
     */
    omit?: TiktokUserTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserTagInclude<ExtArgs> | null
    /**
     * Filter, which TiktokUserTags to fetch.
     */
    where?: TiktokUserTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiktokUserTags to fetch.
     */
    orderBy?: TiktokUserTagOrderByWithRelationInput | TiktokUserTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TiktokUserTags.
     */
    cursor?: TiktokUserTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiktokUserTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiktokUserTags.
     */
    skip?: number
    distinct?: TiktokUserTagScalarFieldEnum | TiktokUserTagScalarFieldEnum[]
  }

  /**
   * TiktokUserTag create
   */
  export type TiktokUserTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUserTag
     */
    select?: TiktokUserTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUserTag
     */
    omit?: TiktokUserTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserTagInclude<ExtArgs> | null
    /**
     * The data needed to create a TiktokUserTag.
     */
    data: XOR<TiktokUserTagCreateInput, TiktokUserTagUncheckedCreateInput>
  }

  /**
   * TiktokUserTag createMany
   */
  export type TiktokUserTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TiktokUserTags.
     */
    data: TiktokUserTagCreateManyInput | TiktokUserTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiktokUserTag update
   */
  export type TiktokUserTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUserTag
     */
    select?: TiktokUserTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUserTag
     */
    omit?: TiktokUserTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserTagInclude<ExtArgs> | null
    /**
     * The data needed to update a TiktokUserTag.
     */
    data: XOR<TiktokUserTagUpdateInput, TiktokUserTagUncheckedUpdateInput>
    /**
     * Choose, which TiktokUserTag to update.
     */
    where: TiktokUserTagWhereUniqueInput
  }

  /**
   * TiktokUserTag updateMany
   */
  export type TiktokUserTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TiktokUserTags.
     */
    data: XOR<TiktokUserTagUpdateManyMutationInput, TiktokUserTagUncheckedUpdateManyInput>
    /**
     * Filter which TiktokUserTags to update
     */
    where?: TiktokUserTagWhereInput
    /**
     * Limit how many TiktokUserTags to update.
     */
    limit?: number
  }

  /**
   * TiktokUserTag upsert
   */
  export type TiktokUserTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUserTag
     */
    select?: TiktokUserTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUserTag
     */
    omit?: TiktokUserTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserTagInclude<ExtArgs> | null
    /**
     * The filter to search for the TiktokUserTag to update in case it exists.
     */
    where: TiktokUserTagWhereUniqueInput
    /**
     * In case the TiktokUserTag found by the `where` argument doesn't exist, create a new TiktokUserTag with this data.
     */
    create: XOR<TiktokUserTagCreateInput, TiktokUserTagUncheckedCreateInput>
    /**
     * In case the TiktokUserTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiktokUserTagUpdateInput, TiktokUserTagUncheckedUpdateInput>
  }

  /**
   * TiktokUserTag delete
   */
  export type TiktokUserTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUserTag
     */
    select?: TiktokUserTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUserTag
     */
    omit?: TiktokUserTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserTagInclude<ExtArgs> | null
    /**
     * Filter which TiktokUserTag to delete.
     */
    where: TiktokUserTagWhereUniqueInput
  }

  /**
   * TiktokUserTag deleteMany
   */
  export type TiktokUserTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiktokUserTags to delete
     */
    where?: TiktokUserTagWhereInput
    /**
     * Limit how many TiktokUserTags to delete.
     */
    limit?: number
  }

  /**
   * TiktokUserTag without action
   */
  export type TiktokUserTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiktokUserTag
     */
    select?: TiktokUserTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiktokUserTag
     */
    omit?: TiktokUserTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiktokUserTagInclude<ExtArgs> | null
  }


  /**
   * Model tiktokUserTagSyncError
   */

  export type AggregateTiktokUserTagSyncError = {
    _count: TiktokUserTagSyncErrorCountAggregateOutputType | null
    _avg: TiktokUserTagSyncErrorAvgAggregateOutputType | null
    _sum: TiktokUserTagSyncErrorSumAggregateOutputType | null
    _min: TiktokUserTagSyncErrorMinAggregateOutputType | null
    _max: TiktokUserTagSyncErrorMaxAggregateOutputType | null
  }

  export type TiktokUserTagSyncErrorAvgAggregateOutputType = {
    id: number | null
  }

  export type TiktokUserTagSyncErrorSumAggregateOutputType = {
    id: number | null
  }

  export type TiktokUserTagSyncErrorMinAggregateOutputType = {
    id: number | null
    tiktok_src: string | null
    tag: string | null
    created_at: Date | null
    updated_at: Date | null
    error: string | null
  }

  export type TiktokUserTagSyncErrorMaxAggregateOutputType = {
    id: number | null
    tiktok_src: string | null
    tag: string | null
    created_at: Date | null
    updated_at: Date | null
    error: string | null
  }

  export type TiktokUserTagSyncErrorCountAggregateOutputType = {
    id: number
    tiktok_src: number
    tag: number
    created_at: number
    updated_at: number
    error: number
    _all: number
  }


  export type TiktokUserTagSyncErrorAvgAggregateInputType = {
    id?: true
  }

  export type TiktokUserTagSyncErrorSumAggregateInputType = {
    id?: true
  }

  export type TiktokUserTagSyncErrorMinAggregateInputType = {
    id?: true
    tiktok_src?: true
    tag?: true
    created_at?: true
    updated_at?: true
    error?: true
  }

  export type TiktokUserTagSyncErrorMaxAggregateInputType = {
    id?: true
    tiktok_src?: true
    tag?: true
    created_at?: true
    updated_at?: true
    error?: true
  }

  export type TiktokUserTagSyncErrorCountAggregateInputType = {
    id?: true
    tiktok_src?: true
    tag?: true
    created_at?: true
    updated_at?: true
    error?: true
    _all?: true
  }

  export type TiktokUserTagSyncErrorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tiktokUserTagSyncError to aggregate.
     */
    where?: tiktokUserTagSyncErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tiktokUserTagSyncErrors to fetch.
     */
    orderBy?: tiktokUserTagSyncErrorOrderByWithRelationInput | tiktokUserTagSyncErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tiktokUserTagSyncErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tiktokUserTagSyncErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tiktokUserTagSyncErrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tiktokUserTagSyncErrors
    **/
    _count?: true | TiktokUserTagSyncErrorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TiktokUserTagSyncErrorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TiktokUserTagSyncErrorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiktokUserTagSyncErrorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiktokUserTagSyncErrorMaxAggregateInputType
  }

  export type GetTiktokUserTagSyncErrorAggregateType<T extends TiktokUserTagSyncErrorAggregateArgs> = {
        [P in keyof T & keyof AggregateTiktokUserTagSyncError]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiktokUserTagSyncError[P]>
      : GetScalarType<T[P], AggregateTiktokUserTagSyncError[P]>
  }




  export type tiktokUserTagSyncErrorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tiktokUserTagSyncErrorWhereInput
    orderBy?: tiktokUserTagSyncErrorOrderByWithAggregationInput | tiktokUserTagSyncErrorOrderByWithAggregationInput[]
    by: TiktokUserTagSyncErrorScalarFieldEnum[] | TiktokUserTagSyncErrorScalarFieldEnum
    having?: tiktokUserTagSyncErrorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiktokUserTagSyncErrorCountAggregateInputType | true
    _avg?: TiktokUserTagSyncErrorAvgAggregateInputType
    _sum?: TiktokUserTagSyncErrorSumAggregateInputType
    _min?: TiktokUserTagSyncErrorMinAggregateInputType
    _max?: TiktokUserTagSyncErrorMaxAggregateInputType
  }

  export type TiktokUserTagSyncErrorGroupByOutputType = {
    id: number
    tiktok_src: string
    tag: string
    created_at: Date
    updated_at: Date
    error: string | null
    _count: TiktokUserTagSyncErrorCountAggregateOutputType | null
    _avg: TiktokUserTagSyncErrorAvgAggregateOutputType | null
    _sum: TiktokUserTagSyncErrorSumAggregateOutputType | null
    _min: TiktokUserTagSyncErrorMinAggregateOutputType | null
    _max: TiktokUserTagSyncErrorMaxAggregateOutputType | null
  }

  type GetTiktokUserTagSyncErrorGroupByPayload<T extends tiktokUserTagSyncErrorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiktokUserTagSyncErrorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiktokUserTagSyncErrorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiktokUserTagSyncErrorGroupByOutputType[P]>
            : GetScalarType<T[P], TiktokUserTagSyncErrorGroupByOutputType[P]>
        }
      >
    >


  export type tiktokUserTagSyncErrorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tiktok_src?: boolean
    tag?: boolean
    created_at?: boolean
    updated_at?: boolean
    error?: boolean
  }, ExtArgs["result"]["tiktokUserTagSyncError"]>



  export type tiktokUserTagSyncErrorSelectScalar = {
    id?: boolean
    tiktok_src?: boolean
    tag?: boolean
    created_at?: boolean
    updated_at?: boolean
    error?: boolean
  }

  export type tiktokUserTagSyncErrorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tiktok_src" | "tag" | "created_at" | "updated_at" | "error", ExtArgs["result"]["tiktokUserTagSyncError"]>

  export type $tiktokUserTagSyncErrorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tiktokUserTagSyncError"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tiktok_src: string
      tag: string
      created_at: Date
      updated_at: Date
      error: string | null
    }, ExtArgs["result"]["tiktokUserTagSyncError"]>
    composites: {}
  }

  type tiktokUserTagSyncErrorGetPayload<S extends boolean | null | undefined | tiktokUserTagSyncErrorDefaultArgs> = $Result.GetResult<Prisma.$tiktokUserTagSyncErrorPayload, S>

  type tiktokUserTagSyncErrorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tiktokUserTagSyncErrorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiktokUserTagSyncErrorCountAggregateInputType | true
    }

  export interface tiktokUserTagSyncErrorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tiktokUserTagSyncError'], meta: { name: 'tiktokUserTagSyncError' } }
    /**
     * Find zero or one TiktokUserTagSyncError that matches the filter.
     * @param {tiktokUserTagSyncErrorFindUniqueArgs} args - Arguments to find a TiktokUserTagSyncError
     * @example
     * // Get one TiktokUserTagSyncError
     * const tiktokUserTagSyncError = await prisma.tiktokUserTagSyncError.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tiktokUserTagSyncErrorFindUniqueArgs>(args: SelectSubset<T, tiktokUserTagSyncErrorFindUniqueArgs<ExtArgs>>): Prisma__tiktokUserTagSyncErrorClient<$Result.GetResult<Prisma.$tiktokUserTagSyncErrorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TiktokUserTagSyncError that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tiktokUserTagSyncErrorFindUniqueOrThrowArgs} args - Arguments to find a TiktokUserTagSyncError
     * @example
     * // Get one TiktokUserTagSyncError
     * const tiktokUserTagSyncError = await prisma.tiktokUserTagSyncError.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tiktokUserTagSyncErrorFindUniqueOrThrowArgs>(args: SelectSubset<T, tiktokUserTagSyncErrorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tiktokUserTagSyncErrorClient<$Result.GetResult<Prisma.$tiktokUserTagSyncErrorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokUserTagSyncError that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiktokUserTagSyncErrorFindFirstArgs} args - Arguments to find a TiktokUserTagSyncError
     * @example
     * // Get one TiktokUserTagSyncError
     * const tiktokUserTagSyncError = await prisma.tiktokUserTagSyncError.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tiktokUserTagSyncErrorFindFirstArgs>(args?: SelectSubset<T, tiktokUserTagSyncErrorFindFirstArgs<ExtArgs>>): Prisma__tiktokUserTagSyncErrorClient<$Result.GetResult<Prisma.$tiktokUserTagSyncErrorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokUserTagSyncError that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiktokUserTagSyncErrorFindFirstOrThrowArgs} args - Arguments to find a TiktokUserTagSyncError
     * @example
     * // Get one TiktokUserTagSyncError
     * const tiktokUserTagSyncError = await prisma.tiktokUserTagSyncError.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tiktokUserTagSyncErrorFindFirstOrThrowArgs>(args?: SelectSubset<T, tiktokUserTagSyncErrorFindFirstOrThrowArgs<ExtArgs>>): Prisma__tiktokUserTagSyncErrorClient<$Result.GetResult<Prisma.$tiktokUserTagSyncErrorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TiktokUserTagSyncErrors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiktokUserTagSyncErrorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TiktokUserTagSyncErrors
     * const tiktokUserTagSyncErrors = await prisma.tiktokUserTagSyncError.findMany()
     * 
     * // Get first 10 TiktokUserTagSyncErrors
     * const tiktokUserTagSyncErrors = await prisma.tiktokUserTagSyncError.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tiktokUserTagSyncErrorWithIdOnly = await prisma.tiktokUserTagSyncError.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tiktokUserTagSyncErrorFindManyArgs>(args?: SelectSubset<T, tiktokUserTagSyncErrorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tiktokUserTagSyncErrorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TiktokUserTagSyncError.
     * @param {tiktokUserTagSyncErrorCreateArgs} args - Arguments to create a TiktokUserTagSyncError.
     * @example
     * // Create one TiktokUserTagSyncError
     * const TiktokUserTagSyncError = await prisma.tiktokUserTagSyncError.create({
     *   data: {
     *     // ... data to create a TiktokUserTagSyncError
     *   }
     * })
     * 
     */
    create<T extends tiktokUserTagSyncErrorCreateArgs>(args: SelectSubset<T, tiktokUserTagSyncErrorCreateArgs<ExtArgs>>): Prisma__tiktokUserTagSyncErrorClient<$Result.GetResult<Prisma.$tiktokUserTagSyncErrorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TiktokUserTagSyncErrors.
     * @param {tiktokUserTagSyncErrorCreateManyArgs} args - Arguments to create many TiktokUserTagSyncErrors.
     * @example
     * // Create many TiktokUserTagSyncErrors
     * const tiktokUserTagSyncError = await prisma.tiktokUserTagSyncError.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tiktokUserTagSyncErrorCreateManyArgs>(args?: SelectSubset<T, tiktokUserTagSyncErrorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TiktokUserTagSyncError.
     * @param {tiktokUserTagSyncErrorDeleteArgs} args - Arguments to delete one TiktokUserTagSyncError.
     * @example
     * // Delete one TiktokUserTagSyncError
     * const TiktokUserTagSyncError = await prisma.tiktokUserTagSyncError.delete({
     *   where: {
     *     // ... filter to delete one TiktokUserTagSyncError
     *   }
     * })
     * 
     */
    delete<T extends tiktokUserTagSyncErrorDeleteArgs>(args: SelectSubset<T, tiktokUserTagSyncErrorDeleteArgs<ExtArgs>>): Prisma__tiktokUserTagSyncErrorClient<$Result.GetResult<Prisma.$tiktokUserTagSyncErrorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TiktokUserTagSyncError.
     * @param {tiktokUserTagSyncErrorUpdateArgs} args - Arguments to update one TiktokUserTagSyncError.
     * @example
     * // Update one TiktokUserTagSyncError
     * const tiktokUserTagSyncError = await prisma.tiktokUserTagSyncError.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tiktokUserTagSyncErrorUpdateArgs>(args: SelectSubset<T, tiktokUserTagSyncErrorUpdateArgs<ExtArgs>>): Prisma__tiktokUserTagSyncErrorClient<$Result.GetResult<Prisma.$tiktokUserTagSyncErrorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TiktokUserTagSyncErrors.
     * @param {tiktokUserTagSyncErrorDeleteManyArgs} args - Arguments to filter TiktokUserTagSyncErrors to delete.
     * @example
     * // Delete a few TiktokUserTagSyncErrors
     * const { count } = await prisma.tiktokUserTagSyncError.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tiktokUserTagSyncErrorDeleteManyArgs>(args?: SelectSubset<T, tiktokUserTagSyncErrorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokUserTagSyncErrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiktokUserTagSyncErrorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TiktokUserTagSyncErrors
     * const tiktokUserTagSyncError = await prisma.tiktokUserTagSyncError.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tiktokUserTagSyncErrorUpdateManyArgs>(args: SelectSubset<T, tiktokUserTagSyncErrorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TiktokUserTagSyncError.
     * @param {tiktokUserTagSyncErrorUpsertArgs} args - Arguments to update or create a TiktokUserTagSyncError.
     * @example
     * // Update or create a TiktokUserTagSyncError
     * const tiktokUserTagSyncError = await prisma.tiktokUserTagSyncError.upsert({
     *   create: {
     *     // ... data to create a TiktokUserTagSyncError
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TiktokUserTagSyncError we want to update
     *   }
     * })
     */
    upsert<T extends tiktokUserTagSyncErrorUpsertArgs>(args: SelectSubset<T, tiktokUserTagSyncErrorUpsertArgs<ExtArgs>>): Prisma__tiktokUserTagSyncErrorClient<$Result.GetResult<Prisma.$tiktokUserTagSyncErrorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TiktokUserTagSyncErrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiktokUserTagSyncErrorCountArgs} args - Arguments to filter TiktokUserTagSyncErrors to count.
     * @example
     * // Count the number of TiktokUserTagSyncErrors
     * const count = await prisma.tiktokUserTagSyncError.count({
     *   where: {
     *     // ... the filter for the TiktokUserTagSyncErrors we want to count
     *   }
     * })
    **/
    count<T extends tiktokUserTagSyncErrorCountArgs>(
      args?: Subset<T, tiktokUserTagSyncErrorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiktokUserTagSyncErrorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TiktokUserTagSyncError.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokUserTagSyncErrorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TiktokUserTagSyncErrorAggregateArgs>(args: Subset<T, TiktokUserTagSyncErrorAggregateArgs>): Prisma.PrismaPromise<GetTiktokUserTagSyncErrorAggregateType<T>>

    /**
     * Group by TiktokUserTagSyncError.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiktokUserTagSyncErrorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tiktokUserTagSyncErrorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tiktokUserTagSyncErrorGroupByArgs['orderBy'] }
        : { orderBy?: tiktokUserTagSyncErrorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tiktokUserTagSyncErrorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiktokUserTagSyncErrorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tiktokUserTagSyncError model
   */
  readonly fields: tiktokUserTagSyncErrorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tiktokUserTagSyncError.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tiktokUserTagSyncErrorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tiktokUserTagSyncError model
   */
  interface tiktokUserTagSyncErrorFieldRefs {
    readonly id: FieldRef<"tiktokUserTagSyncError", 'Int'>
    readonly tiktok_src: FieldRef<"tiktokUserTagSyncError", 'String'>
    readonly tag: FieldRef<"tiktokUserTagSyncError", 'String'>
    readonly created_at: FieldRef<"tiktokUserTagSyncError", 'DateTime'>
    readonly updated_at: FieldRef<"tiktokUserTagSyncError", 'DateTime'>
    readonly error: FieldRef<"tiktokUserTagSyncError", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tiktokUserTagSyncError findUnique
   */
  export type tiktokUserTagSyncErrorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokUserTagSyncError
     */
    select?: tiktokUserTagSyncErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokUserTagSyncError
     */
    omit?: tiktokUserTagSyncErrorOmit<ExtArgs> | null
    /**
     * Filter, which tiktokUserTagSyncError to fetch.
     */
    where: tiktokUserTagSyncErrorWhereUniqueInput
  }

  /**
   * tiktokUserTagSyncError findUniqueOrThrow
   */
  export type tiktokUserTagSyncErrorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokUserTagSyncError
     */
    select?: tiktokUserTagSyncErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokUserTagSyncError
     */
    omit?: tiktokUserTagSyncErrorOmit<ExtArgs> | null
    /**
     * Filter, which tiktokUserTagSyncError to fetch.
     */
    where: tiktokUserTagSyncErrorWhereUniqueInput
  }

  /**
   * tiktokUserTagSyncError findFirst
   */
  export type tiktokUserTagSyncErrorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokUserTagSyncError
     */
    select?: tiktokUserTagSyncErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokUserTagSyncError
     */
    omit?: tiktokUserTagSyncErrorOmit<ExtArgs> | null
    /**
     * Filter, which tiktokUserTagSyncError to fetch.
     */
    where?: tiktokUserTagSyncErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tiktokUserTagSyncErrors to fetch.
     */
    orderBy?: tiktokUserTagSyncErrorOrderByWithRelationInput | tiktokUserTagSyncErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tiktokUserTagSyncErrors.
     */
    cursor?: tiktokUserTagSyncErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tiktokUserTagSyncErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tiktokUserTagSyncErrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tiktokUserTagSyncErrors.
     */
    distinct?: TiktokUserTagSyncErrorScalarFieldEnum | TiktokUserTagSyncErrorScalarFieldEnum[]
  }

  /**
   * tiktokUserTagSyncError findFirstOrThrow
   */
  export type tiktokUserTagSyncErrorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokUserTagSyncError
     */
    select?: tiktokUserTagSyncErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokUserTagSyncError
     */
    omit?: tiktokUserTagSyncErrorOmit<ExtArgs> | null
    /**
     * Filter, which tiktokUserTagSyncError to fetch.
     */
    where?: tiktokUserTagSyncErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tiktokUserTagSyncErrors to fetch.
     */
    orderBy?: tiktokUserTagSyncErrorOrderByWithRelationInput | tiktokUserTagSyncErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tiktokUserTagSyncErrors.
     */
    cursor?: tiktokUserTagSyncErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tiktokUserTagSyncErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tiktokUserTagSyncErrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tiktokUserTagSyncErrors.
     */
    distinct?: TiktokUserTagSyncErrorScalarFieldEnum | TiktokUserTagSyncErrorScalarFieldEnum[]
  }

  /**
   * tiktokUserTagSyncError findMany
   */
  export type tiktokUserTagSyncErrorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokUserTagSyncError
     */
    select?: tiktokUserTagSyncErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokUserTagSyncError
     */
    omit?: tiktokUserTagSyncErrorOmit<ExtArgs> | null
    /**
     * Filter, which tiktokUserTagSyncErrors to fetch.
     */
    where?: tiktokUserTagSyncErrorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tiktokUserTagSyncErrors to fetch.
     */
    orderBy?: tiktokUserTagSyncErrorOrderByWithRelationInput | tiktokUserTagSyncErrorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tiktokUserTagSyncErrors.
     */
    cursor?: tiktokUserTagSyncErrorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tiktokUserTagSyncErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tiktokUserTagSyncErrors.
     */
    skip?: number
    distinct?: TiktokUserTagSyncErrorScalarFieldEnum | TiktokUserTagSyncErrorScalarFieldEnum[]
  }

  /**
   * tiktokUserTagSyncError create
   */
  export type tiktokUserTagSyncErrorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokUserTagSyncError
     */
    select?: tiktokUserTagSyncErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokUserTagSyncError
     */
    omit?: tiktokUserTagSyncErrorOmit<ExtArgs> | null
    /**
     * The data needed to create a tiktokUserTagSyncError.
     */
    data: XOR<tiktokUserTagSyncErrorCreateInput, tiktokUserTagSyncErrorUncheckedCreateInput>
  }

  /**
   * tiktokUserTagSyncError createMany
   */
  export type tiktokUserTagSyncErrorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tiktokUserTagSyncErrors.
     */
    data: tiktokUserTagSyncErrorCreateManyInput | tiktokUserTagSyncErrorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tiktokUserTagSyncError update
   */
  export type tiktokUserTagSyncErrorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokUserTagSyncError
     */
    select?: tiktokUserTagSyncErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokUserTagSyncError
     */
    omit?: tiktokUserTagSyncErrorOmit<ExtArgs> | null
    /**
     * The data needed to update a tiktokUserTagSyncError.
     */
    data: XOR<tiktokUserTagSyncErrorUpdateInput, tiktokUserTagSyncErrorUncheckedUpdateInput>
    /**
     * Choose, which tiktokUserTagSyncError to update.
     */
    where: tiktokUserTagSyncErrorWhereUniqueInput
  }

  /**
   * tiktokUserTagSyncError updateMany
   */
  export type tiktokUserTagSyncErrorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tiktokUserTagSyncErrors.
     */
    data: XOR<tiktokUserTagSyncErrorUpdateManyMutationInput, tiktokUserTagSyncErrorUncheckedUpdateManyInput>
    /**
     * Filter which tiktokUserTagSyncErrors to update
     */
    where?: tiktokUserTagSyncErrorWhereInput
    /**
     * Limit how many tiktokUserTagSyncErrors to update.
     */
    limit?: number
  }

  /**
   * tiktokUserTagSyncError upsert
   */
  export type tiktokUserTagSyncErrorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokUserTagSyncError
     */
    select?: tiktokUserTagSyncErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokUserTagSyncError
     */
    omit?: tiktokUserTagSyncErrorOmit<ExtArgs> | null
    /**
     * The filter to search for the tiktokUserTagSyncError to update in case it exists.
     */
    where: tiktokUserTagSyncErrorWhereUniqueInput
    /**
     * In case the tiktokUserTagSyncError found by the `where` argument doesn't exist, create a new tiktokUserTagSyncError with this data.
     */
    create: XOR<tiktokUserTagSyncErrorCreateInput, tiktokUserTagSyncErrorUncheckedCreateInput>
    /**
     * In case the tiktokUserTagSyncError was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tiktokUserTagSyncErrorUpdateInput, tiktokUserTagSyncErrorUncheckedUpdateInput>
  }

  /**
   * tiktokUserTagSyncError delete
   */
  export type tiktokUserTagSyncErrorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokUserTagSyncError
     */
    select?: tiktokUserTagSyncErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokUserTagSyncError
     */
    omit?: tiktokUserTagSyncErrorOmit<ExtArgs> | null
    /**
     * Filter which tiktokUserTagSyncError to delete.
     */
    where: tiktokUserTagSyncErrorWhereUniqueInput
  }

  /**
   * tiktokUserTagSyncError deleteMany
   */
  export type tiktokUserTagSyncErrorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tiktokUserTagSyncErrors to delete
     */
    where?: tiktokUserTagSyncErrorWhereInput
    /**
     * Limit how many tiktokUserTagSyncErrors to delete.
     */
    limit?: number
  }

  /**
   * tiktokUserTagSyncError without action
   */
  export type tiktokUserTagSyncErrorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokUserTagSyncError
     */
    select?: tiktokUserTagSyncErrorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokUserTagSyncError
     */
    omit?: tiktokUserTagSyncErrorOmit<ExtArgs> | null
  }


  /**
   * Model tiktokTagTotalUserHistory
   */

  export type AggregateTiktokTagTotalUserHistory = {
    _count: TiktokTagTotalUserHistoryCountAggregateOutputType | null
    _avg: TiktokTagTotalUserHistoryAvgAggregateOutputType | null
    _sum: TiktokTagTotalUserHistorySumAggregateOutputType | null
    _min: TiktokTagTotalUserHistoryMinAggregateOutputType | null
    _max: TiktokTagTotalUserHistoryMaxAggregateOutputType | null
  }

  export type TiktokTagTotalUserHistoryAvgAggregateOutputType = {
    id: number | null
    tag_id: number | null
    total_user: number | null
  }

  export type TiktokTagTotalUserHistorySumAggregateOutputType = {
    id: number | null
    tag_id: number | null
    total_user: number | null
  }

  export type TiktokTagTotalUserHistoryMinAggregateOutputType = {
    id: number | null
    tag_id: number | null
    total_user: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TiktokTagTotalUserHistoryMaxAggregateOutputType = {
    id: number | null
    tag_id: number | null
    total_user: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TiktokTagTotalUserHistoryCountAggregateOutputType = {
    id: number
    tag_id: number
    total_user: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TiktokTagTotalUserHistoryAvgAggregateInputType = {
    id?: true
    tag_id?: true
    total_user?: true
  }

  export type TiktokTagTotalUserHistorySumAggregateInputType = {
    id?: true
    tag_id?: true
    total_user?: true
  }

  export type TiktokTagTotalUserHistoryMinAggregateInputType = {
    id?: true
    tag_id?: true
    total_user?: true
    created_at?: true
    updated_at?: true
  }

  export type TiktokTagTotalUserHistoryMaxAggregateInputType = {
    id?: true
    tag_id?: true
    total_user?: true
    created_at?: true
    updated_at?: true
  }

  export type TiktokTagTotalUserHistoryCountAggregateInputType = {
    id?: true
    tag_id?: true
    total_user?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TiktokTagTotalUserHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tiktokTagTotalUserHistory to aggregate.
     */
    where?: tiktokTagTotalUserHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tiktokTagTotalUserHistories to fetch.
     */
    orderBy?: tiktokTagTotalUserHistoryOrderByWithRelationInput | tiktokTagTotalUserHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tiktokTagTotalUserHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tiktokTagTotalUserHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tiktokTagTotalUserHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tiktokTagTotalUserHistories
    **/
    _count?: true | TiktokTagTotalUserHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TiktokTagTotalUserHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TiktokTagTotalUserHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiktokTagTotalUserHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiktokTagTotalUserHistoryMaxAggregateInputType
  }

  export type GetTiktokTagTotalUserHistoryAggregateType<T extends TiktokTagTotalUserHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTiktokTagTotalUserHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiktokTagTotalUserHistory[P]>
      : GetScalarType<T[P], AggregateTiktokTagTotalUserHistory[P]>
  }




  export type tiktokTagTotalUserHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tiktokTagTotalUserHistoryWhereInput
    orderBy?: tiktokTagTotalUserHistoryOrderByWithAggregationInput | tiktokTagTotalUserHistoryOrderByWithAggregationInput[]
    by: TiktokTagTotalUserHistoryScalarFieldEnum[] | TiktokTagTotalUserHistoryScalarFieldEnum
    having?: tiktokTagTotalUserHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiktokTagTotalUserHistoryCountAggregateInputType | true
    _avg?: TiktokTagTotalUserHistoryAvgAggregateInputType
    _sum?: TiktokTagTotalUserHistorySumAggregateInputType
    _min?: TiktokTagTotalUserHistoryMinAggregateInputType
    _max?: TiktokTagTotalUserHistoryMaxAggregateInputType
  }

  export type TiktokTagTotalUserHistoryGroupByOutputType = {
    id: number
    tag_id: number
    total_user: number
    created_at: Date
    updated_at: Date
    _count: TiktokTagTotalUserHistoryCountAggregateOutputType | null
    _avg: TiktokTagTotalUserHistoryAvgAggregateOutputType | null
    _sum: TiktokTagTotalUserHistorySumAggregateOutputType | null
    _min: TiktokTagTotalUserHistoryMinAggregateOutputType | null
    _max: TiktokTagTotalUserHistoryMaxAggregateOutputType | null
  }

  type GetTiktokTagTotalUserHistoryGroupByPayload<T extends tiktokTagTotalUserHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiktokTagTotalUserHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiktokTagTotalUserHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiktokTagTotalUserHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TiktokTagTotalUserHistoryGroupByOutputType[P]>
        }
      >
    >


  export type tiktokTagTotalUserHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tag_id?: boolean
    total_user?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tiktokTagTotalUserHistory"]>



  export type tiktokTagTotalUserHistorySelectScalar = {
    id?: boolean
    tag_id?: boolean
    total_user?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type tiktokTagTotalUserHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tag_id" | "total_user" | "created_at" | "updated_at", ExtArgs["result"]["tiktokTagTotalUserHistory"]>

  export type $tiktokTagTotalUserHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tiktokTagTotalUserHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tag_id: number
      total_user: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tiktokTagTotalUserHistory"]>
    composites: {}
  }

  type tiktokTagTotalUserHistoryGetPayload<S extends boolean | null | undefined | tiktokTagTotalUserHistoryDefaultArgs> = $Result.GetResult<Prisma.$tiktokTagTotalUserHistoryPayload, S>

  type tiktokTagTotalUserHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tiktokTagTotalUserHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiktokTagTotalUserHistoryCountAggregateInputType | true
    }

  export interface tiktokTagTotalUserHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tiktokTagTotalUserHistory'], meta: { name: 'tiktokTagTotalUserHistory' } }
    /**
     * Find zero or one TiktokTagTotalUserHistory that matches the filter.
     * @param {tiktokTagTotalUserHistoryFindUniqueArgs} args - Arguments to find a TiktokTagTotalUserHistory
     * @example
     * // Get one TiktokTagTotalUserHistory
     * const tiktokTagTotalUserHistory = await prisma.tiktokTagTotalUserHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tiktokTagTotalUserHistoryFindUniqueArgs>(args: SelectSubset<T, tiktokTagTotalUserHistoryFindUniqueArgs<ExtArgs>>): Prisma__tiktokTagTotalUserHistoryClient<$Result.GetResult<Prisma.$tiktokTagTotalUserHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TiktokTagTotalUserHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tiktokTagTotalUserHistoryFindUniqueOrThrowArgs} args - Arguments to find a TiktokTagTotalUserHistory
     * @example
     * // Get one TiktokTagTotalUserHistory
     * const tiktokTagTotalUserHistory = await prisma.tiktokTagTotalUserHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tiktokTagTotalUserHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, tiktokTagTotalUserHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tiktokTagTotalUserHistoryClient<$Result.GetResult<Prisma.$tiktokTagTotalUserHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokTagTotalUserHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiktokTagTotalUserHistoryFindFirstArgs} args - Arguments to find a TiktokTagTotalUserHistory
     * @example
     * // Get one TiktokTagTotalUserHistory
     * const tiktokTagTotalUserHistory = await prisma.tiktokTagTotalUserHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tiktokTagTotalUserHistoryFindFirstArgs>(args?: SelectSubset<T, tiktokTagTotalUserHistoryFindFirstArgs<ExtArgs>>): Prisma__tiktokTagTotalUserHistoryClient<$Result.GetResult<Prisma.$tiktokTagTotalUserHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiktokTagTotalUserHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiktokTagTotalUserHistoryFindFirstOrThrowArgs} args - Arguments to find a TiktokTagTotalUserHistory
     * @example
     * // Get one TiktokTagTotalUserHistory
     * const tiktokTagTotalUserHistory = await prisma.tiktokTagTotalUserHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tiktokTagTotalUserHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, tiktokTagTotalUserHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__tiktokTagTotalUserHistoryClient<$Result.GetResult<Prisma.$tiktokTagTotalUserHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TiktokTagTotalUserHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiktokTagTotalUserHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TiktokTagTotalUserHistories
     * const tiktokTagTotalUserHistories = await prisma.tiktokTagTotalUserHistory.findMany()
     * 
     * // Get first 10 TiktokTagTotalUserHistories
     * const tiktokTagTotalUserHistories = await prisma.tiktokTagTotalUserHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tiktokTagTotalUserHistoryWithIdOnly = await prisma.tiktokTagTotalUserHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tiktokTagTotalUserHistoryFindManyArgs>(args?: SelectSubset<T, tiktokTagTotalUserHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tiktokTagTotalUserHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TiktokTagTotalUserHistory.
     * @param {tiktokTagTotalUserHistoryCreateArgs} args - Arguments to create a TiktokTagTotalUserHistory.
     * @example
     * // Create one TiktokTagTotalUserHistory
     * const TiktokTagTotalUserHistory = await prisma.tiktokTagTotalUserHistory.create({
     *   data: {
     *     // ... data to create a TiktokTagTotalUserHistory
     *   }
     * })
     * 
     */
    create<T extends tiktokTagTotalUserHistoryCreateArgs>(args: SelectSubset<T, tiktokTagTotalUserHistoryCreateArgs<ExtArgs>>): Prisma__tiktokTagTotalUserHistoryClient<$Result.GetResult<Prisma.$tiktokTagTotalUserHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TiktokTagTotalUserHistories.
     * @param {tiktokTagTotalUserHistoryCreateManyArgs} args - Arguments to create many TiktokTagTotalUserHistories.
     * @example
     * // Create many TiktokTagTotalUserHistories
     * const tiktokTagTotalUserHistory = await prisma.tiktokTagTotalUserHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tiktokTagTotalUserHistoryCreateManyArgs>(args?: SelectSubset<T, tiktokTagTotalUserHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TiktokTagTotalUserHistory.
     * @param {tiktokTagTotalUserHistoryDeleteArgs} args - Arguments to delete one TiktokTagTotalUserHistory.
     * @example
     * // Delete one TiktokTagTotalUserHistory
     * const TiktokTagTotalUserHistory = await prisma.tiktokTagTotalUserHistory.delete({
     *   where: {
     *     // ... filter to delete one TiktokTagTotalUserHistory
     *   }
     * })
     * 
     */
    delete<T extends tiktokTagTotalUserHistoryDeleteArgs>(args: SelectSubset<T, tiktokTagTotalUserHistoryDeleteArgs<ExtArgs>>): Prisma__tiktokTagTotalUserHistoryClient<$Result.GetResult<Prisma.$tiktokTagTotalUserHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TiktokTagTotalUserHistory.
     * @param {tiktokTagTotalUserHistoryUpdateArgs} args - Arguments to update one TiktokTagTotalUserHistory.
     * @example
     * // Update one TiktokTagTotalUserHistory
     * const tiktokTagTotalUserHistory = await prisma.tiktokTagTotalUserHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tiktokTagTotalUserHistoryUpdateArgs>(args: SelectSubset<T, tiktokTagTotalUserHistoryUpdateArgs<ExtArgs>>): Prisma__tiktokTagTotalUserHistoryClient<$Result.GetResult<Prisma.$tiktokTagTotalUserHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TiktokTagTotalUserHistories.
     * @param {tiktokTagTotalUserHistoryDeleteManyArgs} args - Arguments to filter TiktokTagTotalUserHistories to delete.
     * @example
     * // Delete a few TiktokTagTotalUserHistories
     * const { count } = await prisma.tiktokTagTotalUserHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tiktokTagTotalUserHistoryDeleteManyArgs>(args?: SelectSubset<T, tiktokTagTotalUserHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiktokTagTotalUserHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiktokTagTotalUserHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TiktokTagTotalUserHistories
     * const tiktokTagTotalUserHistory = await prisma.tiktokTagTotalUserHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tiktokTagTotalUserHistoryUpdateManyArgs>(args: SelectSubset<T, tiktokTagTotalUserHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TiktokTagTotalUserHistory.
     * @param {tiktokTagTotalUserHistoryUpsertArgs} args - Arguments to update or create a TiktokTagTotalUserHistory.
     * @example
     * // Update or create a TiktokTagTotalUserHistory
     * const tiktokTagTotalUserHistory = await prisma.tiktokTagTotalUserHistory.upsert({
     *   create: {
     *     // ... data to create a TiktokTagTotalUserHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TiktokTagTotalUserHistory we want to update
     *   }
     * })
     */
    upsert<T extends tiktokTagTotalUserHistoryUpsertArgs>(args: SelectSubset<T, tiktokTagTotalUserHistoryUpsertArgs<ExtArgs>>): Prisma__tiktokTagTotalUserHistoryClient<$Result.GetResult<Prisma.$tiktokTagTotalUserHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TiktokTagTotalUserHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiktokTagTotalUserHistoryCountArgs} args - Arguments to filter TiktokTagTotalUserHistories to count.
     * @example
     * // Count the number of TiktokTagTotalUserHistories
     * const count = await prisma.tiktokTagTotalUserHistory.count({
     *   where: {
     *     // ... the filter for the TiktokTagTotalUserHistories we want to count
     *   }
     * })
    **/
    count<T extends tiktokTagTotalUserHistoryCountArgs>(
      args?: Subset<T, tiktokTagTotalUserHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiktokTagTotalUserHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TiktokTagTotalUserHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiktokTagTotalUserHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TiktokTagTotalUserHistoryAggregateArgs>(args: Subset<T, TiktokTagTotalUserHistoryAggregateArgs>): Prisma.PrismaPromise<GetTiktokTagTotalUserHistoryAggregateType<T>>

    /**
     * Group by TiktokTagTotalUserHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tiktokTagTotalUserHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tiktokTagTotalUserHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tiktokTagTotalUserHistoryGroupByArgs['orderBy'] }
        : { orderBy?: tiktokTagTotalUserHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tiktokTagTotalUserHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiktokTagTotalUserHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tiktokTagTotalUserHistory model
   */
  readonly fields: tiktokTagTotalUserHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tiktokTagTotalUserHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tiktokTagTotalUserHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tiktokTagTotalUserHistory model
   */
  interface tiktokTagTotalUserHistoryFieldRefs {
    readonly id: FieldRef<"tiktokTagTotalUserHistory", 'Int'>
    readonly tag_id: FieldRef<"tiktokTagTotalUserHistory", 'Int'>
    readonly total_user: FieldRef<"tiktokTagTotalUserHistory", 'Int'>
    readonly created_at: FieldRef<"tiktokTagTotalUserHistory", 'DateTime'>
    readonly updated_at: FieldRef<"tiktokTagTotalUserHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tiktokTagTotalUserHistory findUnique
   */
  export type tiktokTagTotalUserHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokTagTotalUserHistory
     */
    select?: tiktokTagTotalUserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokTagTotalUserHistory
     */
    omit?: tiktokTagTotalUserHistoryOmit<ExtArgs> | null
    /**
     * Filter, which tiktokTagTotalUserHistory to fetch.
     */
    where: tiktokTagTotalUserHistoryWhereUniqueInput
  }

  /**
   * tiktokTagTotalUserHistory findUniqueOrThrow
   */
  export type tiktokTagTotalUserHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokTagTotalUserHistory
     */
    select?: tiktokTagTotalUserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokTagTotalUserHistory
     */
    omit?: tiktokTagTotalUserHistoryOmit<ExtArgs> | null
    /**
     * Filter, which tiktokTagTotalUserHistory to fetch.
     */
    where: tiktokTagTotalUserHistoryWhereUniqueInput
  }

  /**
   * tiktokTagTotalUserHistory findFirst
   */
  export type tiktokTagTotalUserHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokTagTotalUserHistory
     */
    select?: tiktokTagTotalUserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokTagTotalUserHistory
     */
    omit?: tiktokTagTotalUserHistoryOmit<ExtArgs> | null
    /**
     * Filter, which tiktokTagTotalUserHistory to fetch.
     */
    where?: tiktokTagTotalUserHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tiktokTagTotalUserHistories to fetch.
     */
    orderBy?: tiktokTagTotalUserHistoryOrderByWithRelationInput | tiktokTagTotalUserHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tiktokTagTotalUserHistories.
     */
    cursor?: tiktokTagTotalUserHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tiktokTagTotalUserHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tiktokTagTotalUserHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tiktokTagTotalUserHistories.
     */
    distinct?: TiktokTagTotalUserHistoryScalarFieldEnum | TiktokTagTotalUserHistoryScalarFieldEnum[]
  }

  /**
   * tiktokTagTotalUserHistory findFirstOrThrow
   */
  export type tiktokTagTotalUserHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokTagTotalUserHistory
     */
    select?: tiktokTagTotalUserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokTagTotalUserHistory
     */
    omit?: tiktokTagTotalUserHistoryOmit<ExtArgs> | null
    /**
     * Filter, which tiktokTagTotalUserHistory to fetch.
     */
    where?: tiktokTagTotalUserHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tiktokTagTotalUserHistories to fetch.
     */
    orderBy?: tiktokTagTotalUserHistoryOrderByWithRelationInput | tiktokTagTotalUserHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tiktokTagTotalUserHistories.
     */
    cursor?: tiktokTagTotalUserHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tiktokTagTotalUserHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tiktokTagTotalUserHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tiktokTagTotalUserHistories.
     */
    distinct?: TiktokTagTotalUserHistoryScalarFieldEnum | TiktokTagTotalUserHistoryScalarFieldEnum[]
  }

  /**
   * tiktokTagTotalUserHistory findMany
   */
  export type tiktokTagTotalUserHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokTagTotalUserHistory
     */
    select?: tiktokTagTotalUserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokTagTotalUserHistory
     */
    omit?: tiktokTagTotalUserHistoryOmit<ExtArgs> | null
    /**
     * Filter, which tiktokTagTotalUserHistories to fetch.
     */
    where?: tiktokTagTotalUserHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tiktokTagTotalUserHistories to fetch.
     */
    orderBy?: tiktokTagTotalUserHistoryOrderByWithRelationInput | tiktokTagTotalUserHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tiktokTagTotalUserHistories.
     */
    cursor?: tiktokTagTotalUserHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tiktokTagTotalUserHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tiktokTagTotalUserHistories.
     */
    skip?: number
    distinct?: TiktokTagTotalUserHistoryScalarFieldEnum | TiktokTagTotalUserHistoryScalarFieldEnum[]
  }

  /**
   * tiktokTagTotalUserHistory create
   */
  export type tiktokTagTotalUserHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokTagTotalUserHistory
     */
    select?: tiktokTagTotalUserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokTagTotalUserHistory
     */
    omit?: tiktokTagTotalUserHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a tiktokTagTotalUserHistory.
     */
    data: XOR<tiktokTagTotalUserHistoryCreateInput, tiktokTagTotalUserHistoryUncheckedCreateInput>
  }

  /**
   * tiktokTagTotalUserHistory createMany
   */
  export type tiktokTagTotalUserHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tiktokTagTotalUserHistories.
     */
    data: tiktokTagTotalUserHistoryCreateManyInput | tiktokTagTotalUserHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tiktokTagTotalUserHistory update
   */
  export type tiktokTagTotalUserHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokTagTotalUserHistory
     */
    select?: tiktokTagTotalUserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokTagTotalUserHistory
     */
    omit?: tiktokTagTotalUserHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a tiktokTagTotalUserHistory.
     */
    data: XOR<tiktokTagTotalUserHistoryUpdateInput, tiktokTagTotalUserHistoryUncheckedUpdateInput>
    /**
     * Choose, which tiktokTagTotalUserHistory to update.
     */
    where: tiktokTagTotalUserHistoryWhereUniqueInput
  }

  /**
   * tiktokTagTotalUserHistory updateMany
   */
  export type tiktokTagTotalUserHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tiktokTagTotalUserHistories.
     */
    data: XOR<tiktokTagTotalUserHistoryUpdateManyMutationInput, tiktokTagTotalUserHistoryUncheckedUpdateManyInput>
    /**
     * Filter which tiktokTagTotalUserHistories to update
     */
    where?: tiktokTagTotalUserHistoryWhereInput
    /**
     * Limit how many tiktokTagTotalUserHistories to update.
     */
    limit?: number
  }

  /**
   * tiktokTagTotalUserHistory upsert
   */
  export type tiktokTagTotalUserHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokTagTotalUserHistory
     */
    select?: tiktokTagTotalUserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokTagTotalUserHistory
     */
    omit?: tiktokTagTotalUserHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the tiktokTagTotalUserHistory to update in case it exists.
     */
    where: tiktokTagTotalUserHistoryWhereUniqueInput
    /**
     * In case the tiktokTagTotalUserHistory found by the `where` argument doesn't exist, create a new tiktokTagTotalUserHistory with this data.
     */
    create: XOR<tiktokTagTotalUserHistoryCreateInput, tiktokTagTotalUserHistoryUncheckedCreateInput>
    /**
     * In case the tiktokTagTotalUserHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tiktokTagTotalUserHistoryUpdateInput, tiktokTagTotalUserHistoryUncheckedUpdateInput>
  }

  /**
   * tiktokTagTotalUserHistory delete
   */
  export type tiktokTagTotalUserHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokTagTotalUserHistory
     */
    select?: tiktokTagTotalUserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokTagTotalUserHistory
     */
    omit?: tiktokTagTotalUserHistoryOmit<ExtArgs> | null
    /**
     * Filter which tiktokTagTotalUserHistory to delete.
     */
    where: tiktokTagTotalUserHistoryWhereUniqueInput
  }

  /**
   * tiktokTagTotalUserHistory deleteMany
   */
  export type tiktokTagTotalUserHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tiktokTagTotalUserHistories to delete
     */
    where?: tiktokTagTotalUserHistoryWhereInput
    /**
     * Limit how many tiktokTagTotalUserHistories to delete.
     */
    limit?: number
  }

  /**
   * tiktokTagTotalUserHistory without action
   */
  export type tiktokTagTotalUserHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tiktokTagTotalUserHistory
     */
    select?: tiktokTagTotalUserHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the tiktokTagTotalUserHistory
     */
    omit?: tiktokTagTotalUserHistoryOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TiktokTagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    post_number: 'post_number',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TiktokTagScalarFieldEnum = (typeof TiktokTagScalarFieldEnum)[keyof typeof TiktokTagScalarFieldEnum]


  export const TiktokUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    avatar: 'avatar',
    tiktok_src: 'tiktok_src',
    created_at: 'created_at',
    updated_at: 'updated_at',
    followers: 'followers',
    following: 'following',
    likes: 'likes'
  };

  export type TiktokUserScalarFieldEnum = (typeof TiktokUserScalarFieldEnum)[keyof typeof TiktokUserScalarFieldEnum]


  export const TiktokUserTagScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    tag_id: 'tag_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TiktokUserTagScalarFieldEnum = (typeof TiktokUserTagScalarFieldEnum)[keyof typeof TiktokUserTagScalarFieldEnum]


  export const TiktokUserTagSyncErrorScalarFieldEnum: {
    id: 'id',
    tiktok_src: 'tiktok_src',
    tag: 'tag',
    created_at: 'created_at',
    updated_at: 'updated_at',
    error: 'error'
  };

  export type TiktokUserTagSyncErrorScalarFieldEnum = (typeof TiktokUserTagSyncErrorScalarFieldEnum)[keyof typeof TiktokUserTagSyncErrorScalarFieldEnum]


  export const TiktokTagTotalUserHistoryScalarFieldEnum: {
    id: 'id',
    tag_id: 'tag_id',
    total_user: 'total_user',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TiktokTagTotalUserHistoryScalarFieldEnum = (typeof TiktokTagTotalUserHistoryScalarFieldEnum)[keyof typeof TiktokTagTotalUserHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TiktokTagOrderByRelevanceFieldEnum: {
    name: 'name',
    post_number: 'post_number'
  };

  export type TiktokTagOrderByRelevanceFieldEnum = (typeof TiktokTagOrderByRelevanceFieldEnum)[keyof typeof TiktokTagOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const TiktokUserOrderByRelevanceFieldEnum: {
    username: 'username',
    avatar: 'avatar',
    tiktok_src: 'tiktok_src',
    followers: 'followers',
    following: 'following',
    likes: 'likes'
  };

  export type TiktokUserOrderByRelevanceFieldEnum = (typeof TiktokUserOrderByRelevanceFieldEnum)[keyof typeof TiktokUserOrderByRelevanceFieldEnum]


  export const tiktokUserTagSyncErrorOrderByRelevanceFieldEnum: {
    tiktok_src: 'tiktok_src',
    tag: 'tag',
    error: 'error'
  };

  export type tiktokUserTagSyncErrorOrderByRelevanceFieldEnum = (typeof tiktokUserTagSyncErrorOrderByRelevanceFieldEnum)[keyof typeof tiktokUserTagSyncErrorOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TiktokTagWhereInput = {
    AND?: TiktokTagWhereInput | TiktokTagWhereInput[]
    OR?: TiktokTagWhereInput[]
    NOT?: TiktokTagWhereInput | TiktokTagWhereInput[]
    id?: IntFilter<"TiktokTag"> | number
    name?: StringFilter<"TiktokTag"> | string
    post_number?: StringFilter<"TiktokTag"> | string
    created_at?: DateTimeFilter<"TiktokTag"> | Date | string
    updated_at?: DateTimeFilter<"TiktokTag"> | Date | string
    TiktokUserTag?: TiktokUserTagListRelationFilter
  }

  export type TiktokTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    post_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    TiktokUserTag?: TiktokUserTagOrderByRelationAggregateInput
    _relevance?: TiktokTagOrderByRelevanceInput
  }

  export type TiktokTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TiktokTagWhereInput | TiktokTagWhereInput[]
    OR?: TiktokTagWhereInput[]
    NOT?: TiktokTagWhereInput | TiktokTagWhereInput[]
    name?: StringFilter<"TiktokTag"> | string
    post_number?: StringFilter<"TiktokTag"> | string
    created_at?: DateTimeFilter<"TiktokTag"> | Date | string
    updated_at?: DateTimeFilter<"TiktokTag"> | Date | string
    TiktokUserTag?: TiktokUserTagListRelationFilter
  }, "id">

  export type TiktokTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    post_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TiktokTagCountOrderByAggregateInput
    _avg?: TiktokTagAvgOrderByAggregateInput
    _max?: TiktokTagMaxOrderByAggregateInput
    _min?: TiktokTagMinOrderByAggregateInput
    _sum?: TiktokTagSumOrderByAggregateInput
  }

  export type TiktokTagScalarWhereWithAggregatesInput = {
    AND?: TiktokTagScalarWhereWithAggregatesInput | TiktokTagScalarWhereWithAggregatesInput[]
    OR?: TiktokTagScalarWhereWithAggregatesInput[]
    NOT?: TiktokTagScalarWhereWithAggregatesInput | TiktokTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TiktokTag"> | number
    name?: StringWithAggregatesFilter<"TiktokTag"> | string
    post_number?: StringWithAggregatesFilter<"TiktokTag"> | string
    created_at?: DateTimeWithAggregatesFilter<"TiktokTag"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TiktokTag"> | Date | string
  }

  export type TiktokUserWhereInput = {
    AND?: TiktokUserWhereInput | TiktokUserWhereInput[]
    OR?: TiktokUserWhereInput[]
    NOT?: TiktokUserWhereInput | TiktokUserWhereInput[]
    id?: IntFilter<"TiktokUser"> | number
    username?: StringFilter<"TiktokUser"> | string
    avatar?: StringNullableFilter<"TiktokUser"> | string | null
    tiktok_src?: StringFilter<"TiktokUser"> | string
    created_at?: DateTimeFilter<"TiktokUser"> | Date | string
    updated_at?: DateTimeFilter<"TiktokUser"> | Date | string
    followers?: StringNullableFilter<"TiktokUser"> | string | null
    following?: StringNullableFilter<"TiktokUser"> | string | null
    likes?: StringNullableFilter<"TiktokUser"> | string | null
    TiktokUserTag?: TiktokUserTagListRelationFilter
  }

  export type TiktokUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrderInput | SortOrder
    tiktok_src?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    followers?: SortOrderInput | SortOrder
    following?: SortOrderInput | SortOrder
    likes?: SortOrderInput | SortOrder
    TiktokUserTag?: TiktokUserTagOrderByRelationAggregateInput
    _relevance?: TiktokUserOrderByRelevanceInput
  }

  export type TiktokUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TiktokUserWhereInput | TiktokUserWhereInput[]
    OR?: TiktokUserWhereInput[]
    NOT?: TiktokUserWhereInput | TiktokUserWhereInput[]
    username?: StringFilter<"TiktokUser"> | string
    avatar?: StringNullableFilter<"TiktokUser"> | string | null
    tiktok_src?: StringFilter<"TiktokUser"> | string
    created_at?: DateTimeFilter<"TiktokUser"> | Date | string
    updated_at?: DateTimeFilter<"TiktokUser"> | Date | string
    followers?: StringNullableFilter<"TiktokUser"> | string | null
    following?: StringNullableFilter<"TiktokUser"> | string | null
    likes?: StringNullableFilter<"TiktokUser"> | string | null
    TiktokUserTag?: TiktokUserTagListRelationFilter
  }, "id">

  export type TiktokUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrderInput | SortOrder
    tiktok_src?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    followers?: SortOrderInput | SortOrder
    following?: SortOrderInput | SortOrder
    likes?: SortOrderInput | SortOrder
    _count?: TiktokUserCountOrderByAggregateInput
    _avg?: TiktokUserAvgOrderByAggregateInput
    _max?: TiktokUserMaxOrderByAggregateInput
    _min?: TiktokUserMinOrderByAggregateInput
    _sum?: TiktokUserSumOrderByAggregateInput
  }

  export type TiktokUserScalarWhereWithAggregatesInput = {
    AND?: TiktokUserScalarWhereWithAggregatesInput | TiktokUserScalarWhereWithAggregatesInput[]
    OR?: TiktokUserScalarWhereWithAggregatesInput[]
    NOT?: TiktokUserScalarWhereWithAggregatesInput | TiktokUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TiktokUser"> | number
    username?: StringWithAggregatesFilter<"TiktokUser"> | string
    avatar?: StringNullableWithAggregatesFilter<"TiktokUser"> | string | null
    tiktok_src?: StringWithAggregatesFilter<"TiktokUser"> | string
    created_at?: DateTimeWithAggregatesFilter<"TiktokUser"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TiktokUser"> | Date | string
    followers?: StringNullableWithAggregatesFilter<"TiktokUser"> | string | null
    following?: StringNullableWithAggregatesFilter<"TiktokUser"> | string | null
    likes?: StringNullableWithAggregatesFilter<"TiktokUser"> | string | null
  }

  export type TiktokUserTagWhereInput = {
    AND?: TiktokUserTagWhereInput | TiktokUserTagWhereInput[]
    OR?: TiktokUserTagWhereInput[]
    NOT?: TiktokUserTagWhereInput | TiktokUserTagWhereInput[]
    id?: IntFilter<"TiktokUserTag"> | number
    user_id?: IntFilter<"TiktokUserTag"> | number
    tag_id?: IntFilter<"TiktokUserTag"> | number
    created_at?: DateTimeFilter<"TiktokUserTag"> | Date | string
    updated_at?: DateTimeFilter<"TiktokUserTag"> | Date | string
    user?: XOR<TiktokUserScalarRelationFilter, TiktokUserWhereInput>
    tag?: XOR<TiktokTagScalarRelationFilter, TiktokTagWhereInput>
  }

  export type TiktokUserTagOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: TiktokUserOrderByWithRelationInput
    tag?: TiktokTagOrderByWithRelationInput
  }

  export type TiktokUserTagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TiktokUserTagWhereInput | TiktokUserTagWhereInput[]
    OR?: TiktokUserTagWhereInput[]
    NOT?: TiktokUserTagWhereInput | TiktokUserTagWhereInput[]
    user_id?: IntFilter<"TiktokUserTag"> | number
    tag_id?: IntFilter<"TiktokUserTag"> | number
    created_at?: DateTimeFilter<"TiktokUserTag"> | Date | string
    updated_at?: DateTimeFilter<"TiktokUserTag"> | Date | string
    user?: XOR<TiktokUserScalarRelationFilter, TiktokUserWhereInput>
    tag?: XOR<TiktokTagScalarRelationFilter, TiktokTagWhereInput>
  }, "id">

  export type TiktokUserTagOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TiktokUserTagCountOrderByAggregateInput
    _avg?: TiktokUserTagAvgOrderByAggregateInput
    _max?: TiktokUserTagMaxOrderByAggregateInput
    _min?: TiktokUserTagMinOrderByAggregateInput
    _sum?: TiktokUserTagSumOrderByAggregateInput
  }

  export type TiktokUserTagScalarWhereWithAggregatesInput = {
    AND?: TiktokUserTagScalarWhereWithAggregatesInput | TiktokUserTagScalarWhereWithAggregatesInput[]
    OR?: TiktokUserTagScalarWhereWithAggregatesInput[]
    NOT?: TiktokUserTagScalarWhereWithAggregatesInput | TiktokUserTagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TiktokUserTag"> | number
    user_id?: IntWithAggregatesFilter<"TiktokUserTag"> | number
    tag_id?: IntWithAggregatesFilter<"TiktokUserTag"> | number
    created_at?: DateTimeWithAggregatesFilter<"TiktokUserTag"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"TiktokUserTag"> | Date | string
  }

  export type tiktokUserTagSyncErrorWhereInput = {
    AND?: tiktokUserTagSyncErrorWhereInput | tiktokUserTagSyncErrorWhereInput[]
    OR?: tiktokUserTagSyncErrorWhereInput[]
    NOT?: tiktokUserTagSyncErrorWhereInput | tiktokUserTagSyncErrorWhereInput[]
    id?: IntFilter<"tiktokUserTagSyncError"> | number
    tiktok_src?: StringFilter<"tiktokUserTagSyncError"> | string
    tag?: StringFilter<"tiktokUserTagSyncError"> | string
    created_at?: DateTimeFilter<"tiktokUserTagSyncError"> | Date | string
    updated_at?: DateTimeFilter<"tiktokUserTagSyncError"> | Date | string
    error?: StringNullableFilter<"tiktokUserTagSyncError"> | string | null
  }

  export type tiktokUserTagSyncErrorOrderByWithRelationInput = {
    id?: SortOrder
    tiktok_src?: SortOrder
    tag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    error?: SortOrderInput | SortOrder
    _relevance?: tiktokUserTagSyncErrorOrderByRelevanceInput
  }

  export type tiktokUserTagSyncErrorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tiktokUserTagSyncErrorWhereInput | tiktokUserTagSyncErrorWhereInput[]
    OR?: tiktokUserTagSyncErrorWhereInput[]
    NOT?: tiktokUserTagSyncErrorWhereInput | tiktokUserTagSyncErrorWhereInput[]
    tiktok_src?: StringFilter<"tiktokUserTagSyncError"> | string
    tag?: StringFilter<"tiktokUserTagSyncError"> | string
    created_at?: DateTimeFilter<"tiktokUserTagSyncError"> | Date | string
    updated_at?: DateTimeFilter<"tiktokUserTagSyncError"> | Date | string
    error?: StringNullableFilter<"tiktokUserTagSyncError"> | string | null
  }, "id">

  export type tiktokUserTagSyncErrorOrderByWithAggregationInput = {
    id?: SortOrder
    tiktok_src?: SortOrder
    tag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    error?: SortOrderInput | SortOrder
    _count?: tiktokUserTagSyncErrorCountOrderByAggregateInput
    _avg?: tiktokUserTagSyncErrorAvgOrderByAggregateInput
    _max?: tiktokUserTagSyncErrorMaxOrderByAggregateInput
    _min?: tiktokUserTagSyncErrorMinOrderByAggregateInput
    _sum?: tiktokUserTagSyncErrorSumOrderByAggregateInput
  }

  export type tiktokUserTagSyncErrorScalarWhereWithAggregatesInput = {
    AND?: tiktokUserTagSyncErrorScalarWhereWithAggregatesInput | tiktokUserTagSyncErrorScalarWhereWithAggregatesInput[]
    OR?: tiktokUserTagSyncErrorScalarWhereWithAggregatesInput[]
    NOT?: tiktokUserTagSyncErrorScalarWhereWithAggregatesInput | tiktokUserTagSyncErrorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tiktokUserTagSyncError"> | number
    tiktok_src?: StringWithAggregatesFilter<"tiktokUserTagSyncError"> | string
    tag?: StringWithAggregatesFilter<"tiktokUserTagSyncError"> | string
    created_at?: DateTimeWithAggregatesFilter<"tiktokUserTagSyncError"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"tiktokUserTagSyncError"> | Date | string
    error?: StringNullableWithAggregatesFilter<"tiktokUserTagSyncError"> | string | null
  }

  export type tiktokTagTotalUserHistoryWhereInput = {
    AND?: tiktokTagTotalUserHistoryWhereInput | tiktokTagTotalUserHistoryWhereInput[]
    OR?: tiktokTagTotalUserHistoryWhereInput[]
    NOT?: tiktokTagTotalUserHistoryWhereInput | tiktokTagTotalUserHistoryWhereInput[]
    id?: IntFilter<"tiktokTagTotalUserHistory"> | number
    tag_id?: IntFilter<"tiktokTagTotalUserHistory"> | number
    total_user?: IntFilter<"tiktokTagTotalUserHistory"> | number
    created_at?: DateTimeFilter<"tiktokTagTotalUserHistory"> | Date | string
    updated_at?: DateTimeFilter<"tiktokTagTotalUserHistory"> | Date | string
  }

  export type tiktokTagTotalUserHistoryOrderByWithRelationInput = {
    id?: SortOrder
    tag_id?: SortOrder
    total_user?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tiktokTagTotalUserHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tiktokTagTotalUserHistoryWhereInput | tiktokTagTotalUserHistoryWhereInput[]
    OR?: tiktokTagTotalUserHistoryWhereInput[]
    NOT?: tiktokTagTotalUserHistoryWhereInput | tiktokTagTotalUserHistoryWhereInput[]
    tag_id?: IntFilter<"tiktokTagTotalUserHistory"> | number
    total_user?: IntFilter<"tiktokTagTotalUserHistory"> | number
    created_at?: DateTimeFilter<"tiktokTagTotalUserHistory"> | Date | string
    updated_at?: DateTimeFilter<"tiktokTagTotalUserHistory"> | Date | string
  }, "id">

  export type tiktokTagTotalUserHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    tag_id?: SortOrder
    total_user?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: tiktokTagTotalUserHistoryCountOrderByAggregateInput
    _avg?: tiktokTagTotalUserHistoryAvgOrderByAggregateInput
    _max?: tiktokTagTotalUserHistoryMaxOrderByAggregateInput
    _min?: tiktokTagTotalUserHistoryMinOrderByAggregateInput
    _sum?: tiktokTagTotalUserHistorySumOrderByAggregateInput
  }

  export type tiktokTagTotalUserHistoryScalarWhereWithAggregatesInput = {
    AND?: tiktokTagTotalUserHistoryScalarWhereWithAggregatesInput | tiktokTagTotalUserHistoryScalarWhereWithAggregatesInput[]
    OR?: tiktokTagTotalUserHistoryScalarWhereWithAggregatesInput[]
    NOT?: tiktokTagTotalUserHistoryScalarWhereWithAggregatesInput | tiktokTagTotalUserHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tiktokTagTotalUserHistory"> | number
    tag_id?: IntWithAggregatesFilter<"tiktokTagTotalUserHistory"> | number
    total_user?: IntWithAggregatesFilter<"tiktokTagTotalUserHistory"> | number
    created_at?: DateTimeWithAggregatesFilter<"tiktokTagTotalUserHistory"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"tiktokTagTotalUserHistory"> | Date | string
  }

  export type TiktokTagCreateInput = {
    name: string
    post_number: string
    created_at?: Date | string
    updated_at?: Date | string
    TiktokUserTag?: TiktokUserTagCreateNestedManyWithoutTagInput
  }

  export type TiktokTagUncheckedCreateInput = {
    id?: number
    name: string
    post_number: string
    created_at?: Date | string
    updated_at?: Date | string
    TiktokUserTag?: TiktokUserTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TiktokTagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    post_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    TiktokUserTag?: TiktokUserTagUpdateManyWithoutTagNestedInput
  }

  export type TiktokTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    post_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    TiktokUserTag?: TiktokUserTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TiktokTagCreateManyInput = {
    id?: number
    name: string
    post_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TiktokTagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    post_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiktokTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    post_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiktokUserCreateInput = {
    username: string
    avatar?: string | null
    tiktok_src: string
    created_at?: Date | string
    updated_at?: Date | string
    followers?: string | null
    following?: string | null
    likes?: string | null
    TiktokUserTag?: TiktokUserTagCreateNestedManyWithoutUserInput
  }

  export type TiktokUserUncheckedCreateInput = {
    id?: number
    username: string
    avatar?: string | null
    tiktok_src: string
    created_at?: Date | string
    updated_at?: Date | string
    followers?: string | null
    following?: string | null
    likes?: string | null
    TiktokUserTag?: TiktokUserTagUncheckedCreateNestedManyWithoutUserInput
  }

  export type TiktokUserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_src?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: NullableStringFieldUpdateOperationsInput | string | null
    following?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableStringFieldUpdateOperationsInput | string | null
    TiktokUserTag?: TiktokUserTagUpdateManyWithoutUserNestedInput
  }

  export type TiktokUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_src?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: NullableStringFieldUpdateOperationsInput | string | null
    following?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableStringFieldUpdateOperationsInput | string | null
    TiktokUserTag?: TiktokUserTagUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TiktokUserCreateManyInput = {
    id?: number
    username: string
    avatar?: string | null
    tiktok_src: string
    created_at?: Date | string
    updated_at?: Date | string
    followers?: string | null
    following?: string | null
    likes?: string | null
  }

  export type TiktokUserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_src?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: NullableStringFieldUpdateOperationsInput | string | null
    following?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TiktokUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_src?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: NullableStringFieldUpdateOperationsInput | string | null
    following?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TiktokUserTagCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user: TiktokUserCreateNestedOneWithoutTiktokUserTagInput
    tag: TiktokTagCreateNestedOneWithoutTiktokUserTagInput
  }

  export type TiktokUserTagUncheckedCreateInput = {
    id?: number
    user_id: number
    tag_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TiktokUserTagUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: TiktokUserUpdateOneRequiredWithoutTiktokUserTagNestedInput
    tag?: TiktokTagUpdateOneRequiredWithoutTiktokUserTagNestedInput
  }

  export type TiktokUserTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiktokUserTagCreateManyInput = {
    id?: number
    user_id: number
    tag_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TiktokUserTagUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiktokUserTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tiktokUserTagSyncErrorCreateInput = {
    tiktok_src: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    error?: string | null
  }

  export type tiktokUserTagSyncErrorUncheckedCreateInput = {
    id?: number
    tiktok_src: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    error?: string | null
  }

  export type tiktokUserTagSyncErrorUpdateInput = {
    tiktok_src?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tiktokUserTagSyncErrorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tiktok_src?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tiktokUserTagSyncErrorCreateManyInput = {
    id?: number
    tiktok_src: string
    tag: string
    created_at?: Date | string
    updated_at?: Date | string
    error?: string | null
  }

  export type tiktokUserTagSyncErrorUpdateManyMutationInput = {
    tiktok_src?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tiktokUserTagSyncErrorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tiktok_src?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tiktokTagTotalUserHistoryCreateInput = {
    tag_id: number
    total_user: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tiktokTagTotalUserHistoryUncheckedCreateInput = {
    id?: number
    tag_id: number
    total_user: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tiktokTagTotalUserHistoryUpdateInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    total_user?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tiktokTagTotalUserHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    total_user?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tiktokTagTotalUserHistoryCreateManyInput = {
    id?: number
    tag_id: number
    total_user: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type tiktokTagTotalUserHistoryUpdateManyMutationInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
    total_user?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tiktokTagTotalUserHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    total_user?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TiktokUserTagListRelationFilter = {
    every?: TiktokUserTagWhereInput
    some?: TiktokUserTagWhereInput
    none?: TiktokUserTagWhereInput
  }

  export type TiktokUserTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TiktokTagOrderByRelevanceInput = {
    fields: TiktokTagOrderByRelevanceFieldEnum | TiktokTagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TiktokTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    post_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TiktokTagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TiktokTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    post_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TiktokTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    post_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TiktokTagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TiktokUserOrderByRelevanceInput = {
    fields: TiktokUserOrderByRelevanceFieldEnum | TiktokUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TiktokUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    tiktok_src?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    likes?: SortOrder
  }

  export type TiktokUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TiktokUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    tiktok_src?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    likes?: SortOrder
  }

  export type TiktokUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    tiktok_src?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    followers?: SortOrder
    following?: SortOrder
    likes?: SortOrder
  }

  export type TiktokUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TiktokUserScalarRelationFilter = {
    is?: TiktokUserWhereInput
    isNot?: TiktokUserWhereInput
  }

  export type TiktokTagScalarRelationFilter = {
    is?: TiktokTagWhereInput
    isNot?: TiktokTagWhereInput
  }

  export type TiktokUserTagCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TiktokUserTagAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    tag_id?: SortOrder
  }

  export type TiktokUserTagMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TiktokUserTagMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    tag_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TiktokUserTagSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    tag_id?: SortOrder
  }

  export type tiktokUserTagSyncErrorOrderByRelevanceInput = {
    fields: tiktokUserTagSyncErrorOrderByRelevanceFieldEnum | tiktokUserTagSyncErrorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tiktokUserTagSyncErrorCountOrderByAggregateInput = {
    id?: SortOrder
    tiktok_src?: SortOrder
    tag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    error?: SortOrder
  }

  export type tiktokUserTagSyncErrorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tiktokUserTagSyncErrorMaxOrderByAggregateInput = {
    id?: SortOrder
    tiktok_src?: SortOrder
    tag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    error?: SortOrder
  }

  export type tiktokUserTagSyncErrorMinOrderByAggregateInput = {
    id?: SortOrder
    tiktok_src?: SortOrder
    tag?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    error?: SortOrder
  }

  export type tiktokUserTagSyncErrorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tiktokTagTotalUserHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    tag_id?: SortOrder
    total_user?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tiktokTagTotalUserHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    tag_id?: SortOrder
    total_user?: SortOrder
  }

  export type tiktokTagTotalUserHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    tag_id?: SortOrder
    total_user?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tiktokTagTotalUserHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    tag_id?: SortOrder
    total_user?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tiktokTagTotalUserHistorySumOrderByAggregateInput = {
    id?: SortOrder
    tag_id?: SortOrder
    total_user?: SortOrder
  }

  export type TiktokUserTagCreateNestedManyWithoutTagInput = {
    create?: XOR<TiktokUserTagCreateWithoutTagInput, TiktokUserTagUncheckedCreateWithoutTagInput> | TiktokUserTagCreateWithoutTagInput[] | TiktokUserTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TiktokUserTagCreateOrConnectWithoutTagInput | TiktokUserTagCreateOrConnectWithoutTagInput[]
    createMany?: TiktokUserTagCreateManyTagInputEnvelope
    connect?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
  }

  export type TiktokUserTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<TiktokUserTagCreateWithoutTagInput, TiktokUserTagUncheckedCreateWithoutTagInput> | TiktokUserTagCreateWithoutTagInput[] | TiktokUserTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TiktokUserTagCreateOrConnectWithoutTagInput | TiktokUserTagCreateOrConnectWithoutTagInput[]
    createMany?: TiktokUserTagCreateManyTagInputEnvelope
    connect?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TiktokUserTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<TiktokUserTagCreateWithoutTagInput, TiktokUserTagUncheckedCreateWithoutTagInput> | TiktokUserTagCreateWithoutTagInput[] | TiktokUserTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TiktokUserTagCreateOrConnectWithoutTagInput | TiktokUserTagCreateOrConnectWithoutTagInput[]
    upsert?: TiktokUserTagUpsertWithWhereUniqueWithoutTagInput | TiktokUserTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TiktokUserTagCreateManyTagInputEnvelope
    set?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
    disconnect?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
    delete?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
    connect?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
    update?: TiktokUserTagUpdateWithWhereUniqueWithoutTagInput | TiktokUserTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TiktokUserTagUpdateManyWithWhereWithoutTagInput | TiktokUserTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TiktokUserTagScalarWhereInput | TiktokUserTagScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TiktokUserTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<TiktokUserTagCreateWithoutTagInput, TiktokUserTagUncheckedCreateWithoutTagInput> | TiktokUserTagCreateWithoutTagInput[] | TiktokUserTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: TiktokUserTagCreateOrConnectWithoutTagInput | TiktokUserTagCreateOrConnectWithoutTagInput[]
    upsert?: TiktokUserTagUpsertWithWhereUniqueWithoutTagInput | TiktokUserTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: TiktokUserTagCreateManyTagInputEnvelope
    set?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
    disconnect?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
    delete?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
    connect?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
    update?: TiktokUserTagUpdateWithWhereUniqueWithoutTagInput | TiktokUserTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: TiktokUserTagUpdateManyWithWhereWithoutTagInput | TiktokUserTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: TiktokUserTagScalarWhereInput | TiktokUserTagScalarWhereInput[]
  }

  export type TiktokUserTagCreateNestedManyWithoutUserInput = {
    create?: XOR<TiktokUserTagCreateWithoutUserInput, TiktokUserTagUncheckedCreateWithoutUserInput> | TiktokUserTagCreateWithoutUserInput[] | TiktokUserTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TiktokUserTagCreateOrConnectWithoutUserInput | TiktokUserTagCreateOrConnectWithoutUserInput[]
    createMany?: TiktokUserTagCreateManyUserInputEnvelope
    connect?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
  }

  export type TiktokUserTagUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TiktokUserTagCreateWithoutUserInput, TiktokUserTagUncheckedCreateWithoutUserInput> | TiktokUserTagCreateWithoutUserInput[] | TiktokUserTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TiktokUserTagCreateOrConnectWithoutUserInput | TiktokUserTagCreateOrConnectWithoutUserInput[]
    createMany?: TiktokUserTagCreateManyUserInputEnvelope
    connect?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TiktokUserTagUpdateManyWithoutUserNestedInput = {
    create?: XOR<TiktokUserTagCreateWithoutUserInput, TiktokUserTagUncheckedCreateWithoutUserInput> | TiktokUserTagCreateWithoutUserInput[] | TiktokUserTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TiktokUserTagCreateOrConnectWithoutUserInput | TiktokUserTagCreateOrConnectWithoutUserInput[]
    upsert?: TiktokUserTagUpsertWithWhereUniqueWithoutUserInput | TiktokUserTagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TiktokUserTagCreateManyUserInputEnvelope
    set?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
    disconnect?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
    delete?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
    connect?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
    update?: TiktokUserTagUpdateWithWhereUniqueWithoutUserInput | TiktokUserTagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TiktokUserTagUpdateManyWithWhereWithoutUserInput | TiktokUserTagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TiktokUserTagScalarWhereInput | TiktokUserTagScalarWhereInput[]
  }

  export type TiktokUserTagUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TiktokUserTagCreateWithoutUserInput, TiktokUserTagUncheckedCreateWithoutUserInput> | TiktokUserTagCreateWithoutUserInput[] | TiktokUserTagUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TiktokUserTagCreateOrConnectWithoutUserInput | TiktokUserTagCreateOrConnectWithoutUserInput[]
    upsert?: TiktokUserTagUpsertWithWhereUniqueWithoutUserInput | TiktokUserTagUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TiktokUserTagCreateManyUserInputEnvelope
    set?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
    disconnect?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
    delete?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
    connect?: TiktokUserTagWhereUniqueInput | TiktokUserTagWhereUniqueInput[]
    update?: TiktokUserTagUpdateWithWhereUniqueWithoutUserInput | TiktokUserTagUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TiktokUserTagUpdateManyWithWhereWithoutUserInput | TiktokUserTagUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TiktokUserTagScalarWhereInput | TiktokUserTagScalarWhereInput[]
  }

  export type TiktokUserCreateNestedOneWithoutTiktokUserTagInput = {
    create?: XOR<TiktokUserCreateWithoutTiktokUserTagInput, TiktokUserUncheckedCreateWithoutTiktokUserTagInput>
    connectOrCreate?: TiktokUserCreateOrConnectWithoutTiktokUserTagInput
    connect?: TiktokUserWhereUniqueInput
  }

  export type TiktokTagCreateNestedOneWithoutTiktokUserTagInput = {
    create?: XOR<TiktokTagCreateWithoutTiktokUserTagInput, TiktokTagUncheckedCreateWithoutTiktokUserTagInput>
    connectOrCreate?: TiktokTagCreateOrConnectWithoutTiktokUserTagInput
    connect?: TiktokTagWhereUniqueInput
  }

  export type TiktokUserUpdateOneRequiredWithoutTiktokUserTagNestedInput = {
    create?: XOR<TiktokUserCreateWithoutTiktokUserTagInput, TiktokUserUncheckedCreateWithoutTiktokUserTagInput>
    connectOrCreate?: TiktokUserCreateOrConnectWithoutTiktokUserTagInput
    upsert?: TiktokUserUpsertWithoutTiktokUserTagInput
    connect?: TiktokUserWhereUniqueInput
    update?: XOR<XOR<TiktokUserUpdateToOneWithWhereWithoutTiktokUserTagInput, TiktokUserUpdateWithoutTiktokUserTagInput>, TiktokUserUncheckedUpdateWithoutTiktokUserTagInput>
  }

  export type TiktokTagUpdateOneRequiredWithoutTiktokUserTagNestedInput = {
    create?: XOR<TiktokTagCreateWithoutTiktokUserTagInput, TiktokTagUncheckedCreateWithoutTiktokUserTagInput>
    connectOrCreate?: TiktokTagCreateOrConnectWithoutTiktokUserTagInput
    upsert?: TiktokTagUpsertWithoutTiktokUserTagInput
    connect?: TiktokTagWhereUniqueInput
    update?: XOR<XOR<TiktokTagUpdateToOneWithWhereWithoutTiktokUserTagInput, TiktokTagUpdateWithoutTiktokUserTagInput>, TiktokTagUncheckedUpdateWithoutTiktokUserTagInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TiktokUserTagCreateWithoutTagInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user: TiktokUserCreateNestedOneWithoutTiktokUserTagInput
  }

  export type TiktokUserTagUncheckedCreateWithoutTagInput = {
    id?: number
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TiktokUserTagCreateOrConnectWithoutTagInput = {
    where: TiktokUserTagWhereUniqueInput
    create: XOR<TiktokUserTagCreateWithoutTagInput, TiktokUserTagUncheckedCreateWithoutTagInput>
  }

  export type TiktokUserTagCreateManyTagInputEnvelope = {
    data: TiktokUserTagCreateManyTagInput | TiktokUserTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type TiktokUserTagUpsertWithWhereUniqueWithoutTagInput = {
    where: TiktokUserTagWhereUniqueInput
    update: XOR<TiktokUserTagUpdateWithoutTagInput, TiktokUserTagUncheckedUpdateWithoutTagInput>
    create: XOR<TiktokUserTagCreateWithoutTagInput, TiktokUserTagUncheckedCreateWithoutTagInput>
  }

  export type TiktokUserTagUpdateWithWhereUniqueWithoutTagInput = {
    where: TiktokUserTagWhereUniqueInput
    data: XOR<TiktokUserTagUpdateWithoutTagInput, TiktokUserTagUncheckedUpdateWithoutTagInput>
  }

  export type TiktokUserTagUpdateManyWithWhereWithoutTagInput = {
    where: TiktokUserTagScalarWhereInput
    data: XOR<TiktokUserTagUpdateManyMutationInput, TiktokUserTagUncheckedUpdateManyWithoutTagInput>
  }

  export type TiktokUserTagScalarWhereInput = {
    AND?: TiktokUserTagScalarWhereInput | TiktokUserTagScalarWhereInput[]
    OR?: TiktokUserTagScalarWhereInput[]
    NOT?: TiktokUserTagScalarWhereInput | TiktokUserTagScalarWhereInput[]
    id?: IntFilter<"TiktokUserTag"> | number
    user_id?: IntFilter<"TiktokUserTag"> | number
    tag_id?: IntFilter<"TiktokUserTag"> | number
    created_at?: DateTimeFilter<"TiktokUserTag"> | Date | string
    updated_at?: DateTimeFilter<"TiktokUserTag"> | Date | string
  }

  export type TiktokUserTagCreateWithoutUserInput = {
    created_at?: Date | string
    updated_at?: Date | string
    tag: TiktokTagCreateNestedOneWithoutTiktokUserTagInput
  }

  export type TiktokUserTagUncheckedCreateWithoutUserInput = {
    id?: number
    tag_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TiktokUserTagCreateOrConnectWithoutUserInput = {
    where: TiktokUserTagWhereUniqueInput
    create: XOR<TiktokUserTagCreateWithoutUserInput, TiktokUserTagUncheckedCreateWithoutUserInput>
  }

  export type TiktokUserTagCreateManyUserInputEnvelope = {
    data: TiktokUserTagCreateManyUserInput | TiktokUserTagCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TiktokUserTagUpsertWithWhereUniqueWithoutUserInput = {
    where: TiktokUserTagWhereUniqueInput
    update: XOR<TiktokUserTagUpdateWithoutUserInput, TiktokUserTagUncheckedUpdateWithoutUserInput>
    create: XOR<TiktokUserTagCreateWithoutUserInput, TiktokUserTagUncheckedCreateWithoutUserInput>
  }

  export type TiktokUserTagUpdateWithWhereUniqueWithoutUserInput = {
    where: TiktokUserTagWhereUniqueInput
    data: XOR<TiktokUserTagUpdateWithoutUserInput, TiktokUserTagUncheckedUpdateWithoutUserInput>
  }

  export type TiktokUserTagUpdateManyWithWhereWithoutUserInput = {
    where: TiktokUserTagScalarWhereInput
    data: XOR<TiktokUserTagUpdateManyMutationInput, TiktokUserTagUncheckedUpdateManyWithoutUserInput>
  }

  export type TiktokUserCreateWithoutTiktokUserTagInput = {
    username: string
    avatar?: string | null
    tiktok_src: string
    created_at?: Date | string
    updated_at?: Date | string
    followers?: string | null
    following?: string | null
    likes?: string | null
  }

  export type TiktokUserUncheckedCreateWithoutTiktokUserTagInput = {
    id?: number
    username: string
    avatar?: string | null
    tiktok_src: string
    created_at?: Date | string
    updated_at?: Date | string
    followers?: string | null
    following?: string | null
    likes?: string | null
  }

  export type TiktokUserCreateOrConnectWithoutTiktokUserTagInput = {
    where: TiktokUserWhereUniqueInput
    create: XOR<TiktokUserCreateWithoutTiktokUserTagInput, TiktokUserUncheckedCreateWithoutTiktokUserTagInput>
  }

  export type TiktokTagCreateWithoutTiktokUserTagInput = {
    name: string
    post_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TiktokTagUncheckedCreateWithoutTiktokUserTagInput = {
    id?: number
    name: string
    post_number: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TiktokTagCreateOrConnectWithoutTiktokUserTagInput = {
    where: TiktokTagWhereUniqueInput
    create: XOR<TiktokTagCreateWithoutTiktokUserTagInput, TiktokTagUncheckedCreateWithoutTiktokUserTagInput>
  }

  export type TiktokUserUpsertWithoutTiktokUserTagInput = {
    update: XOR<TiktokUserUpdateWithoutTiktokUserTagInput, TiktokUserUncheckedUpdateWithoutTiktokUserTagInput>
    create: XOR<TiktokUserCreateWithoutTiktokUserTagInput, TiktokUserUncheckedCreateWithoutTiktokUserTagInput>
    where?: TiktokUserWhereInput
  }

  export type TiktokUserUpdateToOneWithWhereWithoutTiktokUserTagInput = {
    where?: TiktokUserWhereInput
    data: XOR<TiktokUserUpdateWithoutTiktokUserTagInput, TiktokUserUncheckedUpdateWithoutTiktokUserTagInput>
  }

  export type TiktokUserUpdateWithoutTiktokUserTagInput = {
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_src?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: NullableStringFieldUpdateOperationsInput | string | null
    following?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TiktokUserUncheckedUpdateWithoutTiktokUserTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    tiktok_src?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    followers?: NullableStringFieldUpdateOperationsInput | string | null
    following?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TiktokTagUpsertWithoutTiktokUserTagInput = {
    update: XOR<TiktokTagUpdateWithoutTiktokUserTagInput, TiktokTagUncheckedUpdateWithoutTiktokUserTagInput>
    create: XOR<TiktokTagCreateWithoutTiktokUserTagInput, TiktokTagUncheckedCreateWithoutTiktokUserTagInput>
    where?: TiktokTagWhereInput
  }

  export type TiktokTagUpdateToOneWithWhereWithoutTiktokUserTagInput = {
    where?: TiktokTagWhereInput
    data: XOR<TiktokTagUpdateWithoutTiktokUserTagInput, TiktokTagUncheckedUpdateWithoutTiktokUserTagInput>
  }

  export type TiktokTagUpdateWithoutTiktokUserTagInput = {
    name?: StringFieldUpdateOperationsInput | string
    post_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiktokTagUncheckedUpdateWithoutTiktokUserTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    post_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiktokUserTagCreateManyTagInput = {
    id?: number
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TiktokUserTagUpdateWithoutTagInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: TiktokUserUpdateOneRequiredWithoutTiktokUserTagNestedInput
  }

  export type TiktokUserTagUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiktokUserTagUncheckedUpdateManyWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiktokUserTagCreateManyUserInput = {
    id?: number
    tag_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TiktokUserTagUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: TiktokTagUpdateOneRequiredWithoutTiktokUserTagNestedInput
  }

  export type TiktokUserTagUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiktokUserTagUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}