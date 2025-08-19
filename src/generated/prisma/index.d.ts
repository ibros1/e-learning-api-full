
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model course
 * 
 */
export type course = $Result.DefaultSelection<Prisma.$coursePayload>
/**
 * Model chapter
 * 
 */
export type chapter = $Result.DefaultSelection<Prisma.$chapterPayload>
/**
 * Model lessons
 * 
 */
export type lessons = $Result.DefaultSelection<Prisma.$lessonsPayload>
/**
 * Model lessonProgress
 * 
 */
export type lessonProgress = $Result.DefaultSelection<Prisma.$lessonProgressPayload>
/**
 * Model enrollment
 * 
 */
export type enrollment = $Result.DefaultSelection<Prisma.$enrollmentPayload>
/**
 * Model payment
 * 
 */
export type payment = $Result.DefaultSelection<Prisma.$paymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ROLE: {
  ADMIN: 'ADMIN',
  INSTRUCTOR: 'INSTRUCTOR',
  STUDENT: 'STUDENT'
};

export type ROLE = (typeof ROLE)[keyof typeof ROLE]


export const Sex: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Sex = (typeof Sex)[keyof typeof Sex]


export const EnrollmentStatus: {
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type EnrollmentStatus = (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentMethod: {
  ZAAD: 'ZAAD',
  E_DAHAB: 'E_DAHAB'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const Currency: {
  USD: 'USD',
  SOS: 'SOS'
};

export type Currency = (typeof Currency)[keyof typeof Currency]

}

export type ROLE = $Enums.ROLE

export const ROLE: typeof $Enums.ROLE

export type Sex = $Enums.Sex

export const Sex: typeof $Enums.Sex

export type EnrollmentStatus = $Enums.EnrollmentStatus

export const EnrollmentStatus: typeof $Enums.EnrollmentStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type Currency = $Enums.Currency

export const Currency: typeof $Enums.Currency

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.courseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chapter`: Exposes CRUD operations for the **chapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chapters
    * const chapters = await prisma.chapter.findMany()
    * ```
    */
  get chapter(): Prisma.chapterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lessons`: Exposes CRUD operations for the **lessons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lessons.findMany()
    * ```
    */
  get lessons(): Prisma.lessonsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lessonProgress`: Exposes CRUD operations for the **lessonProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonProgresses
    * const lessonProgresses = await prisma.lessonProgress.findMany()
    * ```
    */
  get lessonProgress(): Prisma.lessonProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.enrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.paymentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    user: 'user',
    course: 'course',
    chapter: 'chapter',
    lessons: 'lessons',
    lessonProgress: 'lessonProgress',
    enrollment: 'enrollment',
    payment: 'payment'
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
      modelProps: "user" | "course" | "chapter" | "lessons" | "lessonProgress" | "enrollment" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      course: {
        payload: Prisma.$coursePayload<ExtArgs>
        fields: Prisma.courseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.courseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.courseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findFirst: {
            args: Prisma.courseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.courseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findMany: {
            args: Prisma.courseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          create: {
            args: Prisma.courseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          createMany: {
            args: Prisma.courseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.courseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          delete: {
            args: Prisma.courseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          update: {
            args: Prisma.courseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          deleteMany: {
            args: Prisma.courseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.courseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.courseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          upsert: {
            args: Prisma.courseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.courseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.courseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      chapter: {
        payload: Prisma.$chapterPayload<ExtArgs>
        fields: Prisma.chapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload>
          }
          findFirst: {
            args: Prisma.chapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload>
          }
          findMany: {
            args: Prisma.chapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload>[]
          }
          create: {
            args: Prisma.chapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload>
          }
          createMany: {
            args: Prisma.chapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chapterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload>[]
          }
          delete: {
            args: Prisma.chapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload>
          }
          update: {
            args: Prisma.chapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload>
          }
          deleteMany: {
            args: Prisma.chapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chapterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload>[]
          }
          upsert: {
            args: Prisma.chapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chapterPayload>
          }
          aggregate: {
            args: Prisma.ChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChapter>
          }
          groupBy: {
            args: Prisma.chapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.chapterCountArgs<ExtArgs>
            result: $Utils.Optional<ChapterCountAggregateOutputType> | number
          }
        }
      }
      lessons: {
        payload: Prisma.$lessonsPayload<ExtArgs>
        fields: Prisma.lessonsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lessonsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lessonsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>
          }
          findFirst: {
            args: Prisma.lessonsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lessonsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>
          }
          findMany: {
            args: Prisma.lessonsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>[]
          }
          create: {
            args: Prisma.lessonsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>
          }
          createMany: {
            args: Prisma.lessonsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lessonsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>[]
          }
          delete: {
            args: Prisma.lessonsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>
          }
          update: {
            args: Prisma.lessonsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>
          }
          deleteMany: {
            args: Prisma.lessonsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lessonsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lessonsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>[]
          }
          upsert: {
            args: Prisma.lessonsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>
          }
          aggregate: {
            args: Prisma.LessonsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessons>
          }
          groupBy: {
            args: Prisma.lessonsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonsGroupByOutputType>[]
          }
          count: {
            args: Prisma.lessonsCountArgs<ExtArgs>
            result: $Utils.Optional<LessonsCountAggregateOutputType> | number
          }
        }
      }
      lessonProgress: {
        payload: Prisma.$lessonProgressPayload<ExtArgs>
        fields: Prisma.lessonProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lessonProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lessonProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonProgressPayload>
          }
          findFirst: {
            args: Prisma.lessonProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lessonProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonProgressPayload>
          }
          findMany: {
            args: Prisma.lessonProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonProgressPayload>[]
          }
          create: {
            args: Prisma.lessonProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonProgressPayload>
          }
          createMany: {
            args: Prisma.lessonProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lessonProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonProgressPayload>[]
          }
          delete: {
            args: Prisma.lessonProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonProgressPayload>
          }
          update: {
            args: Prisma.lessonProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonProgressPayload>
          }
          deleteMany: {
            args: Prisma.lessonProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lessonProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lessonProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonProgressPayload>[]
          }
          upsert: {
            args: Prisma.lessonProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonProgressPayload>
          }
          aggregate: {
            args: Prisma.LessonProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonProgress>
          }
          groupBy: {
            args: Prisma.lessonProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.lessonProgressCountArgs<ExtArgs>
            result: $Utils.Optional<LessonProgressCountAggregateOutputType> | number
          }
        }
      }
      enrollment: {
        payload: Prisma.$enrollmentPayload<ExtArgs>
        fields: Prisma.enrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          findFirst: {
            args: Prisma.enrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          findMany: {
            args: Prisma.enrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>[]
          }
          create: {
            args: Prisma.enrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          createMany: {
            args: Prisma.enrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.enrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>[]
          }
          delete: {
            args: Prisma.enrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          update: {
            args: Prisma.enrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          deleteMany: {
            args: Prisma.enrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.enrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>[]
          }
          upsert: {
            args: Prisma.enrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.enrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.enrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      payment: {
        payload: Prisma.$paymentPayload<ExtArgs>
        fields: Prisma.paymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.paymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.paymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findFirst: {
            args: Prisma.paymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.paymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          findMany: {
            args: Prisma.paymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          create: {
            args: Prisma.paymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          createMany: {
            args: Prisma.paymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.paymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          delete: {
            args: Prisma.paymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          update: {
            args: Prisma.paymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          deleteMany: {
            args: Prisma.paymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.paymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.paymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>[]
          }
          upsert: {
            args: Prisma.paymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$paymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.paymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.paymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    user?: userOmit
    course?: courseOmit
    chapter?: chapterOmit
    lessons?: lessonsOmit
    lessonProgress?: lessonProgressOmit
    enrollment?: enrollmentOmit
    payment?: paymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    courses: number
    lesson: number
    lessonProgress: number
    enrollements: number
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | UserCountOutputTypeCountCoursesArgs
    lesson?: boolean | UserCountOutputTypeCountLessonArgs
    lessonProgress?: boolean | UserCountOutputTypeCountLessonProgressArgs
    enrollements?: boolean | UserCountOutputTypeCountEnrollementsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lessonsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLessonProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lessonProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrollementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    chapters: number
    enrollments: number
    lesson: number
    lessonProgress: number
    payments: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | CourseCountOutputTypeCountChaptersArgs
    enrollments?: boolean | CourseCountOutputTypeCountEnrollmentsArgs
    lesson?: boolean | CourseCountOutputTypeCountLessonArgs
    lessonProgress?: boolean | CourseCountOutputTypeCountLessonProgressArgs
    payments?: boolean | CourseCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chapterWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountLessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lessonsWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountLessonProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lessonProgressWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
  }


  /**
   * Count Type ChapterCountOutputType
   */

  export type ChapterCountOutputType = {
    lesson: number
  }

  export type ChapterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lesson?: boolean | ChapterCountOutputTypeCountLessonArgs
  }

  // Custom InputTypes
  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterCountOutputType
     */
    select?: ChapterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChapterCountOutputType without action
   */
  export type ChapterCountOutputTypeCountLessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lessonsWhereInput
  }


  /**
   * Count Type LessonsCountOutputType
   */

  export type LessonsCountOutputType = {
    lessonProgress: number
  }

  export type LessonsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessonProgress?: boolean | LessonsCountOutputTypeCountLessonProgressArgs
  }

  // Custom InputTypes
  /**
   * LessonsCountOutputType without action
   */
  export type LessonsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonsCountOutputType
     */
    select?: LessonsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonsCountOutputType without action
   */
  export type LessonsCountOutputTypeCountLessonProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lessonProgressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    full_name: string | null
    profilePhoto: string | null
    coverPhoto: string | null
    sex: $Enums.Sex | null
    phone_number: string | null
    password: string | null
    role: $Enums.ROLE | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    full_name: string | null
    profilePhoto: string | null
    coverPhoto: string | null
    sex: $Enums.Sex | null
    phone_number: string | null
    password: string | null
    role: $Enums.ROLE | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    full_name: number
    profilePhoto: number
    coverPhoto: number
    sex: number
    phone_number: number
    password: number
    role: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    full_name?: true
    profilePhoto?: true
    coverPhoto?: true
    sex?: true
    phone_number?: true
    password?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    full_name?: true
    profilePhoto?: true
    coverPhoto?: true
    sex?: true
    phone_number?: true
    password?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    full_name?: true
    profilePhoto?: true
    coverPhoto?: true
    sex?: true
    phone_number?: true
    password?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    full_name: string
    profilePhoto: string
    coverPhoto: string
    sex: $Enums.Sex | null
    phone_number: string
    password: string
    role: $Enums.ROLE
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    full_name?: boolean
    profilePhoto?: boolean
    coverPhoto?: boolean
    sex?: boolean
    phone_number?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    courses?: boolean | user$coursesArgs<ExtArgs>
    lesson?: boolean | user$lessonArgs<ExtArgs>
    lessonProgress?: boolean | user$lessonProgressArgs<ExtArgs>
    enrollements?: boolean | user$enrollementsArgs<ExtArgs>
    payments?: boolean | user$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    full_name?: boolean
    profilePhoto?: boolean
    coverPhoto?: boolean
    sex?: boolean
    phone_number?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    full_name?: boolean
    profilePhoto?: boolean
    coverPhoto?: boolean
    sex?: boolean
    phone_number?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    full_name?: boolean
    profilePhoto?: boolean
    coverPhoto?: boolean
    sex?: boolean
    phone_number?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "full_name" | "profilePhoto" | "coverPhoto" | "sex" | "phone_number" | "password" | "role" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | user$coursesArgs<ExtArgs>
    lesson?: boolean | user$lessonArgs<ExtArgs>
    lessonProgress?: boolean | user$lessonProgressArgs<ExtArgs>
    enrollements?: boolean | user$enrollementsArgs<ExtArgs>
    payments?: boolean | user$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      courses: Prisma.$coursePayload<ExtArgs>[]
      lesson: Prisma.$lessonsPayload<ExtArgs>[]
      lessonProgress: Prisma.$lessonProgressPayload<ExtArgs>[]
      enrollements: Prisma.$enrollmentPayload<ExtArgs>[]
      payments: Prisma.$paymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      full_name: string
      profilePhoto: string
      coverPhoto: string
      sex: $Enums.Sex | null
      phone_number: string
      password: string
      role: $Enums.ROLE
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends user$coursesArgs<ExtArgs> = {}>(args?: Subset<T, user$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lesson<T extends user$lessonArgs<ExtArgs> = {}>(args?: Subset<T, user$lessonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lessonProgress<T extends user$lessonProgressArgs<ExtArgs> = {}>(args?: Subset<T, user$lessonProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollements<T extends user$enrollementsArgs<ExtArgs> = {}>(args?: Subset<T, user$enrollementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends user$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, user$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly username: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly full_name: FieldRef<"user", 'String'>
    readonly profilePhoto: FieldRef<"user", 'String'>
    readonly coverPhoto: FieldRef<"user", 'String'>
    readonly sex: FieldRef<"user", 'Sex'>
    readonly phone_number: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'ROLE'>
    readonly is_active: FieldRef<"user", 'Boolean'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.courses
   */
  export type user$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    where?: courseWhereInput
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    cursor?: courseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * user.lesson
   */
  export type user$lessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    where?: lessonsWhereInput
    orderBy?: lessonsOrderByWithRelationInput | lessonsOrderByWithRelationInput[]
    cursor?: lessonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonsScalarFieldEnum | LessonsScalarFieldEnum[]
  }

  /**
   * user.lessonProgress
   */
  export type user$lessonProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessonProgress
     */
    select?: lessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessonProgress
     */
    omit?: lessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonProgressInclude<ExtArgs> | null
    where?: lessonProgressWhereInput
    orderBy?: lessonProgressOrderByWithRelationInput | lessonProgressOrderByWithRelationInput[]
    cursor?: lessonProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * user.enrollements
   */
  export type user$enrollementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    where?: enrollmentWhereInput
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    cursor?: enrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * user.payments
   */
  export type user$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    cursor?: paymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
    userId: number | null
    price: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    userId: number | null
    course_img: string | null
    cover_img: string | null
    preview_course_url: string | null
    title: string | null
    description: string | null
    is_published: boolean | null
    price: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    course_img: string | null
    cover_img: string | null
    preview_course_url: string | null
    title: string | null
    description: string | null
    is_published: boolean | null
    price: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    userId: number
    course_img: number
    cover_img: number
    preview_course_url: number
    title: number
    description: number
    is_published: number
    price: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    userId?: true
    price?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    userId?: true
    price?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    userId?: true
    course_img?: true
    cover_img?: true
    preview_course_url?: true
    title?: true
    description?: true
    is_published?: true
    price?: true
    created_at?: true
    updated_at?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    userId?: true
    course_img?: true
    cover_img?: true
    preview_course_url?: true
    title?: true
    description?: true
    is_published?: true
    price?: true
    created_at?: true
    updated_at?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    userId?: true
    course_img?: true
    cover_img?: true
    preview_course_url?: true
    title?: true
    description?: true
    is_published?: true
    price?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course to aggregate.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type courseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
    orderBy?: courseOrderByWithAggregationInput | courseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: courseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    userId: number
    course_img: string
    cover_img: string | null
    preview_course_url: string
    title: string
    description: string | null
    is_published: boolean
    price: number
    created_at: Date
    updated_at: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends courseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type courseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    course_img?: boolean
    cover_img?: boolean
    preview_course_url?: boolean
    title?: boolean
    description?: boolean
    is_published?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | userDefaultArgs<ExtArgs>
    chapters?: boolean | course$chaptersArgs<ExtArgs>
    enrollments?: boolean | course$enrollmentsArgs<ExtArgs>
    lesson?: boolean | course$lessonArgs<ExtArgs>
    lessonProgress?: boolean | course$lessonProgressArgs<ExtArgs>
    payments?: boolean | course$paymentsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    course_img?: boolean
    cover_img?: boolean
    preview_course_url?: boolean
    title?: boolean
    description?: boolean
    is_published?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    course_img?: boolean
    cover_img?: boolean
    preview_course_url?: boolean
    title?: boolean
    description?: boolean
    is_published?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectScalar = {
    id?: boolean
    userId?: boolean
    course_img?: boolean
    cover_img?: boolean
    preview_course_url?: boolean
    title?: boolean
    description?: boolean
    is_published?: boolean
    price?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type courseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "course_img" | "cover_img" | "preview_course_url" | "title" | "description" | "is_published" | "price" | "created_at" | "updated_at", ExtArgs["result"]["course"]>
  export type courseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userDefaultArgs<ExtArgs>
    chapters?: boolean | course$chaptersArgs<ExtArgs>
    enrollments?: boolean | course$enrollmentsArgs<ExtArgs>
    lesson?: boolean | course$lessonArgs<ExtArgs>
    lessonProgress?: boolean | course$lessonProgressArgs<ExtArgs>
    payments?: boolean | course$paymentsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type courseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userDefaultArgs<ExtArgs>
  }
  export type courseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $coursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course"
    objects: {
      users: Prisma.$userPayload<ExtArgs>
      chapters: Prisma.$chapterPayload<ExtArgs>[]
      enrollments: Prisma.$enrollmentPayload<ExtArgs>[]
      lesson: Prisma.$lessonsPayload<ExtArgs>[]
      lessonProgress: Prisma.$lessonProgressPayload<ExtArgs>[]
      payments: Prisma.$paymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      course_img: string
      cover_img: string | null
      preview_course_url: string
      title: string
      description: string | null
      is_published: boolean
      price: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type courseGetPayload<S extends boolean | null | undefined | courseDefaultArgs> = $Result.GetResult<Prisma.$coursePayload, S>

  type courseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<courseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface courseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course'], meta: { name: 'course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {courseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends courseFindUniqueArgs>(args: SelectSubset<T, courseFindUniqueArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {courseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends courseFindUniqueOrThrowArgs>(args: SelectSubset<T, courseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends courseFindFirstArgs>(args?: SelectSubset<T, courseFindFirstArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends courseFindFirstOrThrowArgs>(args?: SelectSubset<T, courseFindFirstOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends courseFindManyArgs>(args?: SelectSubset<T, courseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {courseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends courseCreateArgs>(args: SelectSubset<T, courseCreateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {courseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends courseCreateManyArgs>(args?: SelectSubset<T, courseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {courseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends courseCreateManyAndReturnArgs>(args?: SelectSubset<T, courseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {courseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends courseDeleteArgs>(args: SelectSubset<T, courseDeleteArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {courseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends courseUpdateArgs>(args: SelectSubset<T, courseUpdateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {courseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends courseDeleteManyArgs>(args?: SelectSubset<T, courseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends courseUpdateManyArgs>(args: SelectSubset<T, courseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {courseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends courseUpdateManyAndReturnArgs>(args: SelectSubset<T, courseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {courseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends courseUpsertArgs>(args: SelectSubset<T, courseUpsertArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends courseCountArgs>(
      args?: Subset<T, courseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseGroupByArgs} args - Group by arguments.
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
      T extends courseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courseGroupByArgs['orderBy'] }
        : { orderBy?: courseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, courseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course model
   */
  readonly fields: courseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapters<T extends course$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, course$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends course$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, course$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lesson<T extends course$lessonArgs<ExtArgs> = {}>(args?: Subset<T, course$lessonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lessonProgress<T extends course$lessonProgressArgs<ExtArgs> = {}>(args?: Subset<T, course$lessonProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends course$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, course$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the course model
   */
  interface courseFieldRefs {
    readonly id: FieldRef<"course", 'Int'>
    readonly userId: FieldRef<"course", 'Int'>
    readonly course_img: FieldRef<"course", 'String'>
    readonly cover_img: FieldRef<"course", 'String'>
    readonly preview_course_url: FieldRef<"course", 'String'>
    readonly title: FieldRef<"course", 'String'>
    readonly description: FieldRef<"course", 'String'>
    readonly is_published: FieldRef<"course", 'Boolean'>
    readonly price: FieldRef<"course", 'Float'>
    readonly created_at: FieldRef<"course", 'DateTime'>
    readonly updated_at: FieldRef<"course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * course findUnique
   */
  export type courseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findUniqueOrThrow
   */
  export type courseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findFirst
   */
  export type courseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findFirstOrThrow
   */
  export type courseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findMany
   */
  export type courseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course create
   */
  export type courseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to create a course.
     */
    data: XOR<courseCreateInput, courseUncheckedCreateInput>
  }

  /**
   * course createMany
   */
  export type courseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course createManyAndReturn
   */
  export type courseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * course update
   */
  export type courseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to update a course.
     */
    data: XOR<courseUpdateInput, courseUncheckedUpdateInput>
    /**
     * Choose, which course to update.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course updateMany
   */
  export type courseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
  }

  /**
   * course updateManyAndReturn
   */
  export type courseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * course upsert
   */
  export type courseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The filter to search for the course to update in case it exists.
     */
    where: courseWhereUniqueInput
    /**
     * In case the course found by the `where` argument doesn't exist, create a new course with this data.
     */
    create: XOR<courseCreateInput, courseUncheckedCreateInput>
    /**
     * In case the course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courseUpdateInput, courseUncheckedUpdateInput>
  }

  /**
   * course delete
   */
  export type courseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter which course to delete.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course deleteMany
   */
  export type courseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to delete.
     */
    limit?: number
  }

  /**
   * course.chapters
   */
  export type course$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    where?: chapterWhereInput
    orderBy?: chapterOrderByWithRelationInput | chapterOrderByWithRelationInput[]
    cursor?: chapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * course.enrollments
   */
  export type course$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    where?: enrollmentWhereInput
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    cursor?: enrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * course.lesson
   */
  export type course$lessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    where?: lessonsWhereInput
    orderBy?: lessonsOrderByWithRelationInput | lessonsOrderByWithRelationInput[]
    cursor?: lessonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonsScalarFieldEnum | LessonsScalarFieldEnum[]
  }

  /**
   * course.lessonProgress
   */
  export type course$lessonProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessonProgress
     */
    select?: lessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessonProgress
     */
    omit?: lessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonProgressInclude<ExtArgs> | null
    where?: lessonProgressWhereInput
    orderBy?: lessonProgressOrderByWithRelationInput | lessonProgressOrderByWithRelationInput[]
    cursor?: lessonProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * course.payments
   */
  export type course$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    cursor?: paymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * course without action
   */
  export type courseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
  }


  /**
   * Model chapter
   */

  export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  export type ChapterAvgAggregateOutputType = {
    userId: number | null
    courseId: number | null
  }

  export type ChapterSumAggregateOutputType = {
    userId: number | null
    courseId: number | null
  }

  export type ChapterMinAggregateOutputType = {
    id: string | null
    userId: number | null
    courseId: number | null
    chapterTitle: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ChapterMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    courseId: number | null
    chapterTitle: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ChapterCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    chapterTitle: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ChapterAvgAggregateInputType = {
    userId?: true
    courseId?: true
  }

  export type ChapterSumAggregateInputType = {
    userId?: true
    courseId?: true
  }

  export type ChapterMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    chapterTitle?: true
    created_at?: true
    updated_at?: true
  }

  export type ChapterMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    chapterTitle?: true
    created_at?: true
    updated_at?: true
  }

  export type ChapterCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    chapterTitle?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chapter to aggregate.
     */
    where?: chapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chapters to fetch.
     */
    orderBy?: chapterOrderByWithRelationInput | chapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chapters
    **/
    _count?: true | ChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType
  }

  export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChapter[P]>
      : GetScalarType<T[P], AggregateChapter[P]>
  }




  export type chapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chapterWhereInput
    orderBy?: chapterOrderByWithAggregationInput | chapterOrderByWithAggregationInput[]
    by: ChapterScalarFieldEnum[] | ChapterScalarFieldEnum
    having?: chapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChapterCountAggregateInputType | true
    _avg?: ChapterAvgAggregateInputType
    _sum?: ChapterSumAggregateInputType
    _min?: ChapterMinAggregateInputType
    _max?: ChapterMaxAggregateInputType
  }

  export type ChapterGroupByOutputType = {
    id: string
    userId: number
    courseId: number
    chapterTitle: string
    created_at: Date
    updated_at: Date
    _count: ChapterCountAggregateOutputType | null
    _avg: ChapterAvgAggregateOutputType | null
    _sum: ChapterSumAggregateOutputType | null
    _min: ChapterMinAggregateOutputType | null
    _max: ChapterMaxAggregateOutputType | null
  }

  type GetChapterGroupByPayload<T extends chapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChapterGroupByOutputType[P]>
            : GetScalarType<T[P], ChapterGroupByOutputType[P]>
        }
      >
    >


  export type chapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    chapterTitle?: boolean
    created_at?: boolean
    updated_at?: boolean
    courses?: boolean | courseDefaultArgs<ExtArgs>
    lesson?: boolean | chapter$lessonArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type chapterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    chapterTitle?: boolean
    created_at?: boolean
    updated_at?: boolean
    courses?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type chapterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    chapterTitle?: boolean
    created_at?: boolean
    updated_at?: boolean
    courses?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chapter"]>

  export type chapterSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    chapterTitle?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type chapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "chapterTitle" | "created_at" | "updated_at", ExtArgs["result"]["chapter"]>
  export type chapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | courseDefaultArgs<ExtArgs>
    lesson?: boolean | chapter$lessonArgs<ExtArgs>
    _count?: boolean | ChapterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type chapterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type chapterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | courseDefaultArgs<ExtArgs>
  }

  export type $chapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chapter"
    objects: {
      courses: Prisma.$coursePayload<ExtArgs>
      lesson: Prisma.$lessonsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      courseId: number
      chapterTitle: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["chapter"]>
    composites: {}
  }

  type chapterGetPayload<S extends boolean | null | undefined | chapterDefaultArgs> = $Result.GetResult<Prisma.$chapterPayload, S>

  type chapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChapterCountAggregateInputType | true
    }

  export interface chapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chapter'], meta: { name: 'chapter' } }
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {chapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chapterFindUniqueArgs>(args: SelectSubset<T, chapterFindUniqueArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chapterFindUniqueOrThrowArgs>(args: SelectSubset<T, chapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chapterFindFirstArgs>(args?: SelectSubset<T, chapterFindFirstArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chapterFindFirstOrThrowArgs>(args?: SelectSubset<T, chapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     * 
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chapterFindManyArgs>(args?: SelectSubset<T, chapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chapter.
     * @param {chapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     * 
     */
    create<T extends chapterCreateArgs>(args: SelectSubset<T, chapterCreateArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chapters.
     * @param {chapterCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chapterCreateManyArgs>(args?: SelectSubset<T, chapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chapters and returns the data saved in the database.
     * @param {chapterCreateManyAndReturnArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chapterCreateManyAndReturnArgs>(args?: SelectSubset<T, chapterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chapter.
     * @param {chapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     * 
     */
    delete<T extends chapterDeleteArgs>(args: SelectSubset<T, chapterDeleteArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chapter.
     * @param {chapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chapterUpdateArgs>(args: SelectSubset<T, chapterUpdateArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chapters.
     * @param {chapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chapterDeleteManyArgs>(args?: SelectSubset<T, chapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chapterUpdateManyArgs>(args: SelectSubset<T, chapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chapters and returns the data updated in the database.
     * @param {chapterUpdateManyAndReturnArgs} args - Arguments to update many Chapters.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chapters and only return the `id`
     * const chapterWithIdOnly = await prisma.chapter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends chapterUpdateManyAndReturnArgs>(args: SelectSubset<T, chapterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chapter.
     * @param {chapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
     */
    upsert<T extends chapterUpsertArgs>(args: SelectSubset<T, chapterUpsertArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends chapterCountArgs>(
      args?: Subset<T, chapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChapterAggregateArgs>(args: Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>

    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chapterGroupByArgs} args - Group by arguments.
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
      T extends chapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chapterGroupByArgs['orderBy'] }
        : { orderBy?: chapterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chapter model
   */
  readonly fields: chapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lesson<T extends chapter$lessonArgs<ExtArgs> = {}>(args?: Subset<T, chapter$lessonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the chapter model
   */
  interface chapterFieldRefs {
    readonly id: FieldRef<"chapter", 'String'>
    readonly userId: FieldRef<"chapter", 'Int'>
    readonly courseId: FieldRef<"chapter", 'Int'>
    readonly chapterTitle: FieldRef<"chapter", 'String'>
    readonly created_at: FieldRef<"chapter", 'DateTime'>
    readonly updated_at: FieldRef<"chapter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * chapter findUnique
   */
  export type chapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * Filter, which chapter to fetch.
     */
    where: chapterWhereUniqueInput
  }

  /**
   * chapter findUniqueOrThrow
   */
  export type chapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * Filter, which chapter to fetch.
     */
    where: chapterWhereUniqueInput
  }

  /**
   * chapter findFirst
   */
  export type chapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * Filter, which chapter to fetch.
     */
    where?: chapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chapters to fetch.
     */
    orderBy?: chapterOrderByWithRelationInput | chapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chapters.
     */
    cursor?: chapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * chapter findFirstOrThrow
   */
  export type chapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * Filter, which chapter to fetch.
     */
    where?: chapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chapters to fetch.
     */
    orderBy?: chapterOrderByWithRelationInput | chapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chapters.
     */
    cursor?: chapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chapters.
     */
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * chapter findMany
   */
  export type chapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * Filter, which chapters to fetch.
     */
    where?: chapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chapters to fetch.
     */
    orderBy?: chapterOrderByWithRelationInput | chapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chapters.
     */
    cursor?: chapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chapters.
     */
    skip?: number
    distinct?: ChapterScalarFieldEnum | ChapterScalarFieldEnum[]
  }

  /**
   * chapter create
   */
  export type chapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * The data needed to create a chapter.
     */
    data: XOR<chapterCreateInput, chapterUncheckedCreateInput>
  }

  /**
   * chapter createMany
   */
  export type chapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chapters.
     */
    data: chapterCreateManyInput | chapterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chapter createManyAndReturn
   */
  export type chapterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * The data used to create many chapters.
     */
    data: chapterCreateManyInput | chapterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chapter update
   */
  export type chapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * The data needed to update a chapter.
     */
    data: XOR<chapterUpdateInput, chapterUncheckedUpdateInput>
    /**
     * Choose, which chapter to update.
     */
    where: chapterWhereUniqueInput
  }

  /**
   * chapter updateMany
   */
  export type chapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chapters.
     */
    data: XOR<chapterUpdateManyMutationInput, chapterUncheckedUpdateManyInput>
    /**
     * Filter which chapters to update
     */
    where?: chapterWhereInput
    /**
     * Limit how many chapters to update.
     */
    limit?: number
  }

  /**
   * chapter updateManyAndReturn
   */
  export type chapterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * The data used to update chapters.
     */
    data: XOR<chapterUpdateManyMutationInput, chapterUncheckedUpdateManyInput>
    /**
     * Filter which chapters to update
     */
    where?: chapterWhereInput
    /**
     * Limit how many chapters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chapter upsert
   */
  export type chapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * The filter to search for the chapter to update in case it exists.
     */
    where: chapterWhereUniqueInput
    /**
     * In case the chapter found by the `where` argument doesn't exist, create a new chapter with this data.
     */
    create: XOR<chapterCreateInput, chapterUncheckedCreateInput>
    /**
     * In case the chapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chapterUpdateInput, chapterUncheckedUpdateInput>
  }

  /**
   * chapter delete
   */
  export type chapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
    /**
     * Filter which chapter to delete.
     */
    where: chapterWhereUniqueInput
  }

  /**
   * chapter deleteMany
   */
  export type chapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chapters to delete
     */
    where?: chapterWhereInput
    /**
     * Limit how many chapters to delete.
     */
    limit?: number
  }

  /**
   * chapter.lesson
   */
  export type chapter$lessonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    where?: lessonsWhereInput
    orderBy?: lessonsOrderByWithRelationInput | lessonsOrderByWithRelationInput[]
    cursor?: lessonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonsScalarFieldEnum | LessonsScalarFieldEnum[]
  }

  /**
   * chapter without action
   */
  export type chapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chapter
     */
    select?: chapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chapter
     */
    omit?: chapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chapterInclude<ExtArgs> | null
  }


  /**
   * Model lessons
   */

  export type AggregateLessons = {
    _count: LessonsCountAggregateOutputType | null
    _avg: LessonsAvgAggregateOutputType | null
    _sum: LessonsSumAggregateOutputType | null
    _min: LessonsMinAggregateOutputType | null
    _max: LessonsMaxAggregateOutputType | null
  }

  export type LessonsAvgAggregateOutputType = {
    userId: number | null
    courseId: number | null
  }

  export type LessonsSumAggregateOutputType = {
    userId: number | null
    courseId: number | null
  }

  export type LessonsMinAggregateOutputType = {
    id: string | null
    userId: number | null
    courseId: number | null
    chapterId: string | null
    title: string | null
    content: string | null
    video_url: string | null
    is_completed: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LessonsMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    courseId: number | null
    chapterId: string | null
    title: string | null
    content: string | null
    video_url: string | null
    is_completed: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LessonsCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    chapterId: number
    title: number
    content: number
    video_url: number
    is_completed: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LessonsAvgAggregateInputType = {
    userId?: true
    courseId?: true
  }

  export type LessonsSumAggregateInputType = {
    userId?: true
    courseId?: true
  }

  export type LessonsMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    chapterId?: true
    title?: true
    content?: true
    video_url?: true
    is_completed?: true
    created_at?: true
    updated_at?: true
  }

  export type LessonsMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    chapterId?: true
    title?: true
    content?: true
    video_url?: true
    is_completed?: true
    created_at?: true
    updated_at?: true
  }

  export type LessonsCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    chapterId?: true
    title?: true
    content?: true
    video_url?: true
    is_completed?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LessonsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lessons to aggregate.
     */
    where?: lessonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lessons to fetch.
     */
    orderBy?: lessonsOrderByWithRelationInput | lessonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lessonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lessons
    **/
    _count?: true | LessonsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonsMaxAggregateInputType
  }

  export type GetLessonsAggregateType<T extends LessonsAggregateArgs> = {
        [P in keyof T & keyof AggregateLessons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessons[P]>
      : GetScalarType<T[P], AggregateLessons[P]>
  }




  export type lessonsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lessonsWhereInput
    orderBy?: lessonsOrderByWithAggregationInput | lessonsOrderByWithAggregationInput[]
    by: LessonsScalarFieldEnum[] | LessonsScalarFieldEnum
    having?: lessonsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonsCountAggregateInputType | true
    _avg?: LessonsAvgAggregateInputType
    _sum?: LessonsSumAggregateInputType
    _min?: LessonsMinAggregateInputType
    _max?: LessonsMaxAggregateInputType
  }

  export type LessonsGroupByOutputType = {
    id: string
    userId: number
    courseId: number
    chapterId: string
    title: string
    content: string
    video_url: string | null
    is_completed: boolean | null
    created_at: Date
    updated_at: Date
    _count: LessonsCountAggregateOutputType | null
    _avg: LessonsAvgAggregateOutputType | null
    _sum: LessonsSumAggregateOutputType | null
    _min: LessonsMinAggregateOutputType | null
    _max: LessonsMaxAggregateOutputType | null
  }

  type GetLessonsGroupByPayload<T extends lessonsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonsGroupByOutputType[P]>
            : GetScalarType<T[P], LessonsGroupByOutputType[P]>
        }
      >
    >


  export type lessonsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    chapterId?: boolean
    title?: boolean
    content?: boolean
    video_url?: boolean
    is_completed?: boolean
    created_at?: boolean
    updated_at?: boolean
    lessonProgress?: boolean | lessons$lessonProgressArgs<ExtArgs>
    users?: boolean | userDefaultArgs<ExtArgs>
    chapters?: boolean | chapterDefaultArgs<ExtArgs>
    courses?: boolean | courseDefaultArgs<ExtArgs>
    _count?: boolean | LessonsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessons"]>

  export type lessonsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    chapterId?: boolean
    title?: boolean
    content?: boolean
    video_url?: boolean
    is_completed?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | userDefaultArgs<ExtArgs>
    chapters?: boolean | chapterDefaultArgs<ExtArgs>
    courses?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessons"]>

  export type lessonsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    chapterId?: boolean
    title?: boolean
    content?: boolean
    video_url?: boolean
    is_completed?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | userDefaultArgs<ExtArgs>
    chapters?: boolean | chapterDefaultArgs<ExtArgs>
    courses?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessons"]>

  export type lessonsSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    chapterId?: boolean
    title?: boolean
    content?: boolean
    video_url?: boolean
    is_completed?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type lessonsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "chapterId" | "title" | "content" | "video_url" | "is_completed" | "created_at" | "updated_at", ExtArgs["result"]["lessons"]>
  export type lessonsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessonProgress?: boolean | lessons$lessonProgressArgs<ExtArgs>
    users?: boolean | userDefaultArgs<ExtArgs>
    chapters?: boolean | chapterDefaultArgs<ExtArgs>
    courses?: boolean | courseDefaultArgs<ExtArgs>
    _count?: boolean | LessonsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type lessonsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userDefaultArgs<ExtArgs>
    chapters?: boolean | chapterDefaultArgs<ExtArgs>
    courses?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type lessonsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userDefaultArgs<ExtArgs>
    chapters?: boolean | chapterDefaultArgs<ExtArgs>
    courses?: boolean | courseDefaultArgs<ExtArgs>
  }

  export type $lessonsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lessons"
    objects: {
      lessonProgress: Prisma.$lessonProgressPayload<ExtArgs>[]
      users: Prisma.$userPayload<ExtArgs>
      chapters: Prisma.$chapterPayload<ExtArgs>
      courses: Prisma.$coursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      courseId: number
      chapterId: string
      title: string
      content: string
      video_url: string | null
      is_completed: boolean | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["lessons"]>
    composites: {}
  }

  type lessonsGetPayload<S extends boolean | null | undefined | lessonsDefaultArgs> = $Result.GetResult<Prisma.$lessonsPayload, S>

  type lessonsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lessonsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonsCountAggregateInputType | true
    }

  export interface lessonsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lessons'], meta: { name: 'lessons' } }
    /**
     * Find zero or one Lessons that matches the filter.
     * @param {lessonsFindUniqueArgs} args - Arguments to find a Lessons
     * @example
     * // Get one Lessons
     * const lessons = await prisma.lessons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lessonsFindUniqueArgs>(args: SelectSubset<T, lessonsFindUniqueArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lessons that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lessonsFindUniqueOrThrowArgs} args - Arguments to find a Lessons
     * @example
     * // Get one Lessons
     * const lessons = await prisma.lessons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lessonsFindUniqueOrThrowArgs>(args: SelectSubset<T, lessonsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonsFindFirstArgs} args - Arguments to find a Lessons
     * @example
     * // Get one Lessons
     * const lessons = await prisma.lessons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lessonsFindFirstArgs>(args?: SelectSubset<T, lessonsFindFirstArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lessons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonsFindFirstOrThrowArgs} args - Arguments to find a Lessons
     * @example
     * // Get one Lessons
     * const lessons = await prisma.lessons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lessonsFindFirstOrThrowArgs>(args?: SelectSubset<T, lessonsFindFirstOrThrowArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lessons.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lessons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonsWithIdOnly = await prisma.lessons.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lessonsFindManyArgs>(args?: SelectSubset<T, lessonsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lessons.
     * @param {lessonsCreateArgs} args - Arguments to create a Lessons.
     * @example
     * // Create one Lessons
     * const Lessons = await prisma.lessons.create({
     *   data: {
     *     // ... data to create a Lessons
     *   }
     * })
     * 
     */
    create<T extends lessonsCreateArgs>(args: SelectSubset<T, lessonsCreateArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {lessonsCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lessons = await prisma.lessons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lessonsCreateManyArgs>(args?: SelectSubset<T, lessonsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {lessonsCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lessons = await prisma.lessons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonsWithIdOnly = await prisma.lessons.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lessonsCreateManyAndReturnArgs>(args?: SelectSubset<T, lessonsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lessons.
     * @param {lessonsDeleteArgs} args - Arguments to delete one Lessons.
     * @example
     * // Delete one Lessons
     * const Lessons = await prisma.lessons.delete({
     *   where: {
     *     // ... filter to delete one Lessons
     *   }
     * })
     * 
     */
    delete<T extends lessonsDeleteArgs>(args: SelectSubset<T, lessonsDeleteArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lessons.
     * @param {lessonsUpdateArgs} args - Arguments to update one Lessons.
     * @example
     * // Update one Lessons
     * const lessons = await prisma.lessons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lessonsUpdateArgs>(args: SelectSubset<T, lessonsUpdateArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {lessonsDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lessons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lessonsDeleteManyArgs>(args?: SelectSubset<T, lessonsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lessons = await prisma.lessons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lessonsUpdateManyArgs>(args: SelectSubset<T, lessonsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {lessonsUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lessons = await prisma.lessons.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonsWithIdOnly = await prisma.lessons.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends lessonsUpdateManyAndReturnArgs>(args: SelectSubset<T, lessonsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lessons.
     * @param {lessonsUpsertArgs} args - Arguments to update or create a Lessons.
     * @example
     * // Update or create a Lessons
     * const lessons = await prisma.lessons.upsert({
     *   create: {
     *     // ... data to create a Lessons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lessons we want to update
     *   }
     * })
     */
    upsert<T extends lessonsUpsertArgs>(args: SelectSubset<T, lessonsUpsertArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonsCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lessons.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends lessonsCountArgs>(
      args?: Subset<T, lessonsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonsAggregateArgs>(args: Subset<T, LessonsAggregateArgs>): Prisma.PrismaPromise<GetLessonsAggregateType<T>>

    /**
     * Group by Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonsGroupByArgs} args - Group by arguments.
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
      T extends lessonsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lessonsGroupByArgs['orderBy'] }
        : { orderBy?: lessonsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lessonsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lessons model
   */
  readonly fields: lessonsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lessons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lessonsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lessonProgress<T extends lessons$lessonProgressArgs<ExtArgs> = {}>(args?: Subset<T, lessons$lessonProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chapters<T extends chapterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, chapterDefaultArgs<ExtArgs>>): Prisma__chapterClient<$Result.GetResult<Prisma.$chapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courses<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the lessons model
   */
  interface lessonsFieldRefs {
    readonly id: FieldRef<"lessons", 'String'>
    readonly userId: FieldRef<"lessons", 'Int'>
    readonly courseId: FieldRef<"lessons", 'Int'>
    readonly chapterId: FieldRef<"lessons", 'String'>
    readonly title: FieldRef<"lessons", 'String'>
    readonly content: FieldRef<"lessons", 'String'>
    readonly video_url: FieldRef<"lessons", 'String'>
    readonly is_completed: FieldRef<"lessons", 'Boolean'>
    readonly created_at: FieldRef<"lessons", 'DateTime'>
    readonly updated_at: FieldRef<"lessons", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * lessons findUnique
   */
  export type lessonsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * Filter, which lessons to fetch.
     */
    where: lessonsWhereUniqueInput
  }

  /**
   * lessons findUniqueOrThrow
   */
  export type lessonsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * Filter, which lessons to fetch.
     */
    where: lessonsWhereUniqueInput
  }

  /**
   * lessons findFirst
   */
  export type lessonsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * Filter, which lessons to fetch.
     */
    where?: lessonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lessons to fetch.
     */
    orderBy?: lessonsOrderByWithRelationInput | lessonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lessons.
     */
    cursor?: lessonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lessons.
     */
    distinct?: LessonsScalarFieldEnum | LessonsScalarFieldEnum[]
  }

  /**
   * lessons findFirstOrThrow
   */
  export type lessonsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * Filter, which lessons to fetch.
     */
    where?: lessonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lessons to fetch.
     */
    orderBy?: lessonsOrderByWithRelationInput | lessonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lessons.
     */
    cursor?: lessonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lessons.
     */
    distinct?: LessonsScalarFieldEnum | LessonsScalarFieldEnum[]
  }

  /**
   * lessons findMany
   */
  export type lessonsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * Filter, which lessons to fetch.
     */
    where?: lessonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lessons to fetch.
     */
    orderBy?: lessonsOrderByWithRelationInput | lessonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lessons.
     */
    cursor?: lessonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lessons.
     */
    skip?: number
    distinct?: LessonsScalarFieldEnum | LessonsScalarFieldEnum[]
  }

  /**
   * lessons create
   */
  export type lessonsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * The data needed to create a lessons.
     */
    data: XOR<lessonsCreateInput, lessonsUncheckedCreateInput>
  }

  /**
   * lessons createMany
   */
  export type lessonsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lessons.
     */
    data: lessonsCreateManyInput | lessonsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lessons createManyAndReturn
   */
  export type lessonsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * The data used to create many lessons.
     */
    data: lessonsCreateManyInput | lessonsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * lessons update
   */
  export type lessonsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * The data needed to update a lessons.
     */
    data: XOR<lessonsUpdateInput, lessonsUncheckedUpdateInput>
    /**
     * Choose, which lessons to update.
     */
    where: lessonsWhereUniqueInput
  }

  /**
   * lessons updateMany
   */
  export type lessonsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lessons.
     */
    data: XOR<lessonsUpdateManyMutationInput, lessonsUncheckedUpdateManyInput>
    /**
     * Filter which lessons to update
     */
    where?: lessonsWhereInput
    /**
     * Limit how many lessons to update.
     */
    limit?: number
  }

  /**
   * lessons updateManyAndReturn
   */
  export type lessonsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * The data used to update lessons.
     */
    data: XOR<lessonsUpdateManyMutationInput, lessonsUncheckedUpdateManyInput>
    /**
     * Filter which lessons to update
     */
    where?: lessonsWhereInput
    /**
     * Limit how many lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * lessons upsert
   */
  export type lessonsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * The filter to search for the lessons to update in case it exists.
     */
    where: lessonsWhereUniqueInput
    /**
     * In case the lessons found by the `where` argument doesn't exist, create a new lessons with this data.
     */
    create: XOR<lessonsCreateInput, lessonsUncheckedCreateInput>
    /**
     * In case the lessons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lessonsUpdateInput, lessonsUncheckedUpdateInput>
  }

  /**
   * lessons delete
   */
  export type lessonsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * Filter which lessons to delete.
     */
    where: lessonsWhereUniqueInput
  }

  /**
   * lessons deleteMany
   */
  export type lessonsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lessons to delete
     */
    where?: lessonsWhereInput
    /**
     * Limit how many lessons to delete.
     */
    limit?: number
  }

  /**
   * lessons.lessonProgress
   */
  export type lessons$lessonProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessonProgress
     */
    select?: lessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessonProgress
     */
    omit?: lessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonProgressInclude<ExtArgs> | null
    where?: lessonProgressWhereInput
    orderBy?: lessonProgressOrderByWithRelationInput | lessonProgressOrderByWithRelationInput[]
    cursor?: lessonProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * lessons without action
   */
  export type lessonsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
  }


  /**
   * Model lessonProgress
   */

  export type AggregateLessonProgress = {
    _count: LessonProgressCountAggregateOutputType | null
    _avg: LessonProgressAvgAggregateOutputType | null
    _sum: LessonProgressSumAggregateOutputType | null
    _min: LessonProgressMinAggregateOutputType | null
    _max: LessonProgressMaxAggregateOutputType | null
  }

  export type LessonProgressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
  }

  export type LessonProgressSumAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
  }

  export type LessonProgressMinAggregateOutputType = {
    id: number | null
    userId: number | null
    lessonId: string | null
    courseId: number | null
    isCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonProgressMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    lessonId: string | null
    courseId: number | null
    isCompleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonProgressCountAggregateOutputType = {
    id: number
    userId: number
    lessonId: number
    courseId: number
    isCompleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LessonProgressAvgAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
  }

  export type LessonProgressSumAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
  }

  export type LessonProgressMinAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    courseId?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    courseId?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonProgressCountAggregateInputType = {
    id?: true
    userId?: true
    lessonId?: true
    courseId?: true
    isCompleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LessonProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lessonProgress to aggregate.
     */
    where?: lessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lessonProgresses to fetch.
     */
    orderBy?: lessonProgressOrderByWithRelationInput | lessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lessonProgresses
    **/
    _count?: true | LessonProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonProgressMaxAggregateInputType
  }

  export type GetLessonProgressAggregateType<T extends LessonProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonProgress[P]>
      : GetScalarType<T[P], AggregateLessonProgress[P]>
  }




  export type lessonProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lessonProgressWhereInput
    orderBy?: lessonProgressOrderByWithAggregationInput | lessonProgressOrderByWithAggregationInput[]
    by: LessonProgressScalarFieldEnum[] | LessonProgressScalarFieldEnum
    having?: lessonProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonProgressCountAggregateInputType | true
    _avg?: LessonProgressAvgAggregateInputType
    _sum?: LessonProgressSumAggregateInputType
    _min?: LessonProgressMinAggregateInputType
    _max?: LessonProgressMaxAggregateInputType
  }

  export type LessonProgressGroupByOutputType = {
    id: number
    userId: number
    lessonId: string
    courseId: number
    isCompleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: LessonProgressCountAggregateOutputType | null
    _avg: LessonProgressAvgAggregateOutputType | null
    _sum: LessonProgressSumAggregateOutputType | null
    _min: LessonProgressMinAggregateOutputType | null
    _max: LessonProgressMaxAggregateOutputType | null
  }

  type GetLessonProgressGroupByPayload<T extends lessonProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonProgressGroupByOutputType[P]>
            : GetScalarType<T[P], LessonProgressGroupByOutputType[P]>
        }
      >
    >


  export type lessonProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    courseId?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    lesson?: boolean | lessonsDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonProgress"]>

  export type lessonProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    courseId?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    lesson?: boolean | lessonsDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonProgress"]>

  export type lessonProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    courseId?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    lesson?: boolean | lessonsDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonProgress"]>

  export type lessonProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    lessonId?: boolean
    courseId?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type lessonProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "lessonId" | "courseId" | "isCompleted" | "createdAt" | "updatedAt", ExtArgs["result"]["lessonProgress"]>
  export type lessonProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    lesson?: boolean | lessonsDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type lessonProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    lesson?: boolean | lessonsDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type lessonProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    lesson?: boolean | lessonsDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }

  export type $lessonProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lessonProgress"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      lesson: Prisma.$lessonsPayload<ExtArgs>
      course: Prisma.$coursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      lessonId: string
      courseId: number
      isCompleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lessonProgress"]>
    composites: {}
  }

  type lessonProgressGetPayload<S extends boolean | null | undefined | lessonProgressDefaultArgs> = $Result.GetResult<Prisma.$lessonProgressPayload, S>

  type lessonProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lessonProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonProgressCountAggregateInputType | true
    }

  export interface lessonProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lessonProgress'], meta: { name: 'lessonProgress' } }
    /**
     * Find zero or one LessonProgress that matches the filter.
     * @param {lessonProgressFindUniqueArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lessonProgressFindUniqueArgs>(args: SelectSubset<T, lessonProgressFindUniqueArgs<ExtArgs>>): Prisma__lessonProgressClient<$Result.GetResult<Prisma.$lessonProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LessonProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lessonProgressFindUniqueOrThrowArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lessonProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, lessonProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lessonProgressClient<$Result.GetResult<Prisma.$lessonProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonProgressFindFirstArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lessonProgressFindFirstArgs>(args?: SelectSubset<T, lessonProgressFindFirstArgs<ExtArgs>>): Prisma__lessonProgressClient<$Result.GetResult<Prisma.$lessonProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonProgressFindFirstOrThrowArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lessonProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, lessonProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__lessonProgressClient<$Result.GetResult<Prisma.$lessonProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LessonProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonProgresses
     * const lessonProgresses = await prisma.lessonProgress.findMany()
     * 
     * // Get first 10 LessonProgresses
     * const lessonProgresses = await prisma.lessonProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonProgressWithIdOnly = await prisma.lessonProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lessonProgressFindManyArgs>(args?: SelectSubset<T, lessonProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LessonProgress.
     * @param {lessonProgressCreateArgs} args - Arguments to create a LessonProgress.
     * @example
     * // Create one LessonProgress
     * const LessonProgress = await prisma.lessonProgress.create({
     *   data: {
     *     // ... data to create a LessonProgress
     *   }
     * })
     * 
     */
    create<T extends lessonProgressCreateArgs>(args: SelectSubset<T, lessonProgressCreateArgs<ExtArgs>>): Prisma__lessonProgressClient<$Result.GetResult<Prisma.$lessonProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LessonProgresses.
     * @param {lessonProgressCreateManyArgs} args - Arguments to create many LessonProgresses.
     * @example
     * // Create many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lessonProgressCreateManyArgs>(args?: SelectSubset<T, lessonProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonProgresses and returns the data saved in the database.
     * @param {lessonProgressCreateManyAndReturnArgs} args - Arguments to create many LessonProgresses.
     * @example
     * // Create many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonProgresses and only return the `id`
     * const lessonProgressWithIdOnly = await prisma.lessonProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lessonProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, lessonProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LessonProgress.
     * @param {lessonProgressDeleteArgs} args - Arguments to delete one LessonProgress.
     * @example
     * // Delete one LessonProgress
     * const LessonProgress = await prisma.lessonProgress.delete({
     *   where: {
     *     // ... filter to delete one LessonProgress
     *   }
     * })
     * 
     */
    delete<T extends lessonProgressDeleteArgs>(args: SelectSubset<T, lessonProgressDeleteArgs<ExtArgs>>): Prisma__lessonProgressClient<$Result.GetResult<Prisma.$lessonProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LessonProgress.
     * @param {lessonProgressUpdateArgs} args - Arguments to update one LessonProgress.
     * @example
     * // Update one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lessonProgressUpdateArgs>(args: SelectSubset<T, lessonProgressUpdateArgs<ExtArgs>>): Prisma__lessonProgressClient<$Result.GetResult<Prisma.$lessonProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LessonProgresses.
     * @param {lessonProgressDeleteManyArgs} args - Arguments to filter LessonProgresses to delete.
     * @example
     * // Delete a few LessonProgresses
     * const { count } = await prisma.lessonProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lessonProgressDeleteManyArgs>(args?: SelectSubset<T, lessonProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lessonProgressUpdateManyArgs>(args: SelectSubset<T, lessonProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonProgresses and returns the data updated in the database.
     * @param {lessonProgressUpdateManyAndReturnArgs} args - Arguments to update many LessonProgresses.
     * @example
     * // Update many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LessonProgresses and only return the `id`
     * const lessonProgressWithIdOnly = await prisma.lessonProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends lessonProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, lessonProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LessonProgress.
     * @param {lessonProgressUpsertArgs} args - Arguments to update or create a LessonProgress.
     * @example
     * // Update or create a LessonProgress
     * const lessonProgress = await prisma.lessonProgress.upsert({
     *   create: {
     *     // ... data to create a LessonProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonProgress we want to update
     *   }
     * })
     */
    upsert<T extends lessonProgressUpsertArgs>(args: SelectSubset<T, lessonProgressUpsertArgs<ExtArgs>>): Prisma__lessonProgressClient<$Result.GetResult<Prisma.$lessonProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonProgressCountArgs} args - Arguments to filter LessonProgresses to count.
     * @example
     * // Count the number of LessonProgresses
     * const count = await prisma.lessonProgress.count({
     *   where: {
     *     // ... the filter for the LessonProgresses we want to count
     *   }
     * })
    **/
    count<T extends lessonProgressCountArgs>(
      args?: Subset<T, lessonProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonProgressAggregateArgs>(args: Subset<T, LessonProgressAggregateArgs>): Prisma.PrismaPromise<GetLessonProgressAggregateType<T>>

    /**
     * Group by LessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonProgressGroupByArgs} args - Group by arguments.
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
      T extends lessonProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lessonProgressGroupByArgs['orderBy'] }
        : { orderBy?: lessonProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lessonProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lessonProgress model
   */
  readonly fields: lessonProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lessonProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lessonProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lesson<T extends lessonsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lessonsDefaultArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the lessonProgress model
   */
  interface lessonProgressFieldRefs {
    readonly id: FieldRef<"lessonProgress", 'Int'>
    readonly userId: FieldRef<"lessonProgress", 'Int'>
    readonly lessonId: FieldRef<"lessonProgress", 'String'>
    readonly courseId: FieldRef<"lessonProgress", 'Int'>
    readonly isCompleted: FieldRef<"lessonProgress", 'Boolean'>
    readonly createdAt: FieldRef<"lessonProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"lessonProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * lessonProgress findUnique
   */
  export type lessonProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessonProgress
     */
    select?: lessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessonProgress
     */
    omit?: lessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which lessonProgress to fetch.
     */
    where: lessonProgressWhereUniqueInput
  }

  /**
   * lessonProgress findUniqueOrThrow
   */
  export type lessonProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessonProgress
     */
    select?: lessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessonProgress
     */
    omit?: lessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which lessonProgress to fetch.
     */
    where: lessonProgressWhereUniqueInput
  }

  /**
   * lessonProgress findFirst
   */
  export type lessonProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessonProgress
     */
    select?: lessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessonProgress
     */
    omit?: lessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which lessonProgress to fetch.
     */
    where?: lessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lessonProgresses to fetch.
     */
    orderBy?: lessonProgressOrderByWithRelationInput | lessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lessonProgresses.
     */
    cursor?: lessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lessonProgresses.
     */
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * lessonProgress findFirstOrThrow
   */
  export type lessonProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessonProgress
     */
    select?: lessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessonProgress
     */
    omit?: lessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which lessonProgress to fetch.
     */
    where?: lessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lessonProgresses to fetch.
     */
    orderBy?: lessonProgressOrderByWithRelationInput | lessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lessonProgresses.
     */
    cursor?: lessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lessonProgresses.
     */
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * lessonProgress findMany
   */
  export type lessonProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessonProgress
     */
    select?: lessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessonProgress
     */
    omit?: lessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which lessonProgresses to fetch.
     */
    where?: lessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lessonProgresses to fetch.
     */
    orderBy?: lessonProgressOrderByWithRelationInput | lessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lessonProgresses.
     */
    cursor?: lessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lessonProgresses.
     */
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * lessonProgress create
   */
  export type lessonProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessonProgress
     */
    select?: lessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessonProgress
     */
    omit?: lessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a lessonProgress.
     */
    data: XOR<lessonProgressCreateInput, lessonProgressUncheckedCreateInput>
  }

  /**
   * lessonProgress createMany
   */
  export type lessonProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lessonProgresses.
     */
    data: lessonProgressCreateManyInput | lessonProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lessonProgress createManyAndReturn
   */
  export type lessonProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessonProgress
     */
    select?: lessonProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lessonProgress
     */
    omit?: lessonProgressOmit<ExtArgs> | null
    /**
     * The data used to create many lessonProgresses.
     */
    data: lessonProgressCreateManyInput | lessonProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * lessonProgress update
   */
  export type lessonProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessonProgress
     */
    select?: lessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessonProgress
     */
    omit?: lessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a lessonProgress.
     */
    data: XOR<lessonProgressUpdateInput, lessonProgressUncheckedUpdateInput>
    /**
     * Choose, which lessonProgress to update.
     */
    where: lessonProgressWhereUniqueInput
  }

  /**
   * lessonProgress updateMany
   */
  export type lessonProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lessonProgresses.
     */
    data: XOR<lessonProgressUpdateManyMutationInput, lessonProgressUncheckedUpdateManyInput>
    /**
     * Filter which lessonProgresses to update
     */
    where?: lessonProgressWhereInput
    /**
     * Limit how many lessonProgresses to update.
     */
    limit?: number
  }

  /**
   * lessonProgress updateManyAndReturn
   */
  export type lessonProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessonProgress
     */
    select?: lessonProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lessonProgress
     */
    omit?: lessonProgressOmit<ExtArgs> | null
    /**
     * The data used to update lessonProgresses.
     */
    data: XOR<lessonProgressUpdateManyMutationInput, lessonProgressUncheckedUpdateManyInput>
    /**
     * Filter which lessonProgresses to update
     */
    where?: lessonProgressWhereInput
    /**
     * Limit how many lessonProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * lessonProgress upsert
   */
  export type lessonProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessonProgress
     */
    select?: lessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessonProgress
     */
    omit?: lessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the lessonProgress to update in case it exists.
     */
    where: lessonProgressWhereUniqueInput
    /**
     * In case the lessonProgress found by the `where` argument doesn't exist, create a new lessonProgress with this data.
     */
    create: XOR<lessonProgressCreateInput, lessonProgressUncheckedCreateInput>
    /**
     * In case the lessonProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lessonProgressUpdateInput, lessonProgressUncheckedUpdateInput>
  }

  /**
   * lessonProgress delete
   */
  export type lessonProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessonProgress
     */
    select?: lessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessonProgress
     */
    omit?: lessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonProgressInclude<ExtArgs> | null
    /**
     * Filter which lessonProgress to delete.
     */
    where: lessonProgressWhereUniqueInput
  }

  /**
   * lessonProgress deleteMany
   */
  export type lessonProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lessonProgresses to delete
     */
    where?: lessonProgressWhereInput
    /**
     * Limit how many lessonProgresses to delete.
     */
    limit?: number
  }

  /**
   * lessonProgress without action
   */
  export type lessonProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessonProgress
     */
    select?: lessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessonProgress
     */
    omit?: lessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonProgressInclude<ExtArgs> | null
  }


  /**
   * Model enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    userId: number | null
    courseId: number | null
    progress: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    userId: number | null
    courseId: number | null
    progress: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: string | null
    userId: number | null
    courseId: number | null
    paymentId: string | null
    is_enrolled: boolean | null
    progress: number | null
    status: $Enums.EnrollmentStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    courseId: number | null
    paymentId: string | null
    is_enrolled: boolean | null
    progress: number | null
    status: $Enums.EnrollmentStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    paymentId: number
    is_enrolled: number
    progress: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    userId?: true
    courseId?: true
    progress?: true
  }

  export type EnrollmentSumAggregateInputType = {
    userId?: true
    courseId?: true
    progress?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    paymentId?: true
    is_enrolled?: true
    progress?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    paymentId?: true
    is_enrolled?: true
    progress?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    paymentId?: true
    is_enrolled?: true
    progress?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrollment to aggregate.
     */
    where?: enrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type enrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enrollmentWhereInput
    orderBy?: enrollmentOrderByWithAggregationInput | enrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: enrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: string
    userId: number
    courseId: number
    paymentId: string
    is_enrolled: boolean
    progress: number
    status: $Enums.EnrollmentStatus
    created_at: Date
    updated_at: Date
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends enrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type enrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    paymentId?: boolean
    is_enrolled?: boolean
    progress?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type enrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    paymentId?: boolean
    is_enrolled?: boolean
    progress?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type enrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    paymentId?: boolean
    is_enrolled?: boolean
    progress?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type enrollmentSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    paymentId?: boolean
    is_enrolled?: boolean
    progress?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type enrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "paymentId" | "is_enrolled" | "progress" | "status" | "created_at" | "updated_at", ExtArgs["result"]["enrollment"]>
  export type enrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type enrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type enrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }

  export type $enrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enrollment"
    objects: {
      users: Prisma.$userPayload<ExtArgs>
      course: Prisma.$coursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      courseId: number
      paymentId: string
      is_enrolled: boolean
      progress: number
      status: $Enums.EnrollmentStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type enrollmentGetPayload<S extends boolean | null | undefined | enrollmentDefaultArgs> = $Result.GetResult<Prisma.$enrollmentPayload, S>

  type enrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface enrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enrollment'], meta: { name: 'enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {enrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enrollmentFindUniqueArgs>(args: SelectSubset<T, enrollmentFindUniqueArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, enrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enrollmentFindFirstArgs>(args?: SelectSubset<T, enrollmentFindFirstArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, enrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends enrollmentFindManyArgs>(args?: SelectSubset<T, enrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {enrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends enrollmentCreateArgs>(args: SelectSubset<T, enrollmentCreateArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {enrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enrollmentCreateManyArgs>(args?: SelectSubset<T, enrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {enrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends enrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, enrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {enrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends enrollmentDeleteArgs>(args: SelectSubset<T, enrollmentDeleteArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {enrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enrollmentUpdateArgs>(args: SelectSubset<T, enrollmentUpdateArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {enrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enrollmentDeleteManyArgs>(args?: SelectSubset<T, enrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enrollmentUpdateManyArgs>(args: SelectSubset<T, enrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {enrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends enrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, enrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {enrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends enrollmentUpsertArgs>(args: SelectSubset<T, enrollmentUpsertArgs<ExtArgs>>): Prisma__enrollmentClient<$Result.GetResult<Prisma.$enrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends enrollmentCountArgs>(
      args?: Subset<T, enrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enrollmentGroupByArgs} args - Group by arguments.
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
      T extends enrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enrollmentGroupByArgs['orderBy'] }
        : { orderBy?: enrollmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, enrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enrollment model
   */
  readonly fields: enrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the enrollment model
   */
  interface enrollmentFieldRefs {
    readonly id: FieldRef<"enrollment", 'String'>
    readonly userId: FieldRef<"enrollment", 'Int'>
    readonly courseId: FieldRef<"enrollment", 'Int'>
    readonly paymentId: FieldRef<"enrollment", 'String'>
    readonly is_enrolled: FieldRef<"enrollment", 'Boolean'>
    readonly progress: FieldRef<"enrollment", 'Float'>
    readonly status: FieldRef<"enrollment", 'EnrollmentStatus'>
    readonly created_at: FieldRef<"enrollment", 'DateTime'>
    readonly updated_at: FieldRef<"enrollment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * enrollment findUnique
   */
  export type enrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter, which enrollment to fetch.
     */
    where: enrollmentWhereUniqueInput
  }

  /**
   * enrollment findUniqueOrThrow
   */
  export type enrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter, which enrollment to fetch.
     */
    where: enrollmentWhereUniqueInput
  }

  /**
   * enrollment findFirst
   */
  export type enrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter, which enrollment to fetch.
     */
    where?: enrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrollments.
     */
    cursor?: enrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * enrollment findFirstOrThrow
   */
  export type enrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter, which enrollment to fetch.
     */
    where?: enrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enrollments.
     */
    cursor?: enrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * enrollment findMany
   */
  export type enrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter, which enrollments to fetch.
     */
    where?: enrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enrollments to fetch.
     */
    orderBy?: enrollmentOrderByWithRelationInput | enrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enrollments.
     */
    cursor?: enrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * enrollment create
   */
  export type enrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a enrollment.
     */
    data: XOR<enrollmentCreateInput, enrollmentUncheckedCreateInput>
  }

  /**
   * enrollment createMany
   */
  export type enrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enrollments.
     */
    data: enrollmentCreateManyInput | enrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enrollment createManyAndReturn
   */
  export type enrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many enrollments.
     */
    data: enrollmentCreateManyInput | enrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * enrollment update
   */
  export type enrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a enrollment.
     */
    data: XOR<enrollmentUpdateInput, enrollmentUncheckedUpdateInput>
    /**
     * Choose, which enrollment to update.
     */
    where: enrollmentWhereUniqueInput
  }

  /**
   * enrollment updateMany
   */
  export type enrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enrollments.
     */
    data: XOR<enrollmentUpdateManyMutationInput, enrollmentUncheckedUpdateManyInput>
    /**
     * Filter which enrollments to update
     */
    where?: enrollmentWhereInput
    /**
     * Limit how many enrollments to update.
     */
    limit?: number
  }

  /**
   * enrollment updateManyAndReturn
   */
  export type enrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * The data used to update enrollments.
     */
    data: XOR<enrollmentUpdateManyMutationInput, enrollmentUncheckedUpdateManyInput>
    /**
     * Filter which enrollments to update
     */
    where?: enrollmentWhereInput
    /**
     * Limit how many enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * enrollment upsert
   */
  export type enrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the enrollment to update in case it exists.
     */
    where: enrollmentWhereUniqueInput
    /**
     * In case the enrollment found by the `where` argument doesn't exist, create a new enrollment with this data.
     */
    create: XOR<enrollmentCreateInput, enrollmentUncheckedCreateInput>
    /**
     * In case the enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enrollmentUpdateInput, enrollmentUncheckedUpdateInput>
  }

  /**
   * enrollment delete
   */
  export type enrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
    /**
     * Filter which enrollment to delete.
     */
    where: enrollmentWhereUniqueInput
  }

  /**
   * enrollment deleteMany
   */
  export type enrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enrollments to delete
     */
    where?: enrollmentWhereInput
    /**
     * Limit how many enrollments to delete.
     */
    limit?: number
  }

  /**
   * enrollment without action
   */
  export type enrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enrollment
     */
    select?: enrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enrollment
     */
    omit?: enrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enrollmentInclude<ExtArgs> | null
  }


  /**
   * Model payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    userId: number | null
    courseId: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    userId: number | null
    courseId: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: number | null
    courseId: number | null
    enrollementId: string | null
    phone_Number: string | null
    amount: number | null
    currency: $Enums.Currency | null
    status: $Enums.PaymentStatus | null
    payment_method: $Enums.PaymentMethod | null
    isEnrolled: boolean | null
    transaction_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    courseId: number | null
    enrollementId: string | null
    phone_Number: string | null
    amount: number | null
    currency: $Enums.Currency | null
    status: $Enums.PaymentStatus | null
    payment_method: $Enums.PaymentMethod | null
    isEnrolled: boolean | null
    transaction_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    enrollementId: number
    phone_Number: number
    amount: number
    currency: number
    status: number
    payment_method: number
    isEnrolled: number
    transaction_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    userId?: true
    courseId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    userId?: true
    courseId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    enrollementId?: true
    phone_Number?: true
    amount?: true
    currency?: true
    status?: true
    payment_method?: true
    isEnrolled?: true
    transaction_date?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    enrollementId?: true
    phone_Number?: true
    amount?: true
    currency?: true
    status?: true
    payment_method?: true
    isEnrolled?: true
    transaction_date?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    enrollementId?: true
    phone_Number?: true
    amount?: true
    currency?: true
    status?: true
    payment_method?: true
    isEnrolled?: true
    transaction_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment to aggregate.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type paymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: paymentWhereInput
    orderBy?: paymentOrderByWithAggregationInput | paymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: paymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: number
    courseId: number
    enrollementId: string | null
    phone_Number: string
    amount: number
    currency: $Enums.Currency
    status: $Enums.PaymentStatus
    payment_method: $Enums.PaymentMethod
    isEnrolled: boolean
    transaction_date: Date
    created_at: Date
    updated_at: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends paymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type paymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    enrollementId?: boolean
    phone_Number?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    payment_method?: boolean
    isEnrolled?: boolean
    transaction_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    enrollementId?: boolean
    phone_Number?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    payment_method?: boolean
    isEnrolled?: boolean
    transaction_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    enrollementId?: boolean
    phone_Number?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    payment_method?: boolean
    isEnrolled?: boolean
    transaction_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type paymentSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    enrollementId?: boolean
    phone_Number?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    payment_method?: boolean
    isEnrolled?: boolean
    transaction_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type paymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "enrollementId" | "phone_Number" | "amount" | "currency" | "status" | "payment_method" | "isEnrolled" | "transaction_date" | "created_at" | "updated_at", ExtArgs["result"]["payment"]>
  export type paymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type paymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type paymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }

  export type $paymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      course: Prisma.$coursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      courseId: number
      enrollementId: string | null
      phone_Number: string
      amount: number
      currency: $Enums.Currency
      status: $Enums.PaymentStatus
      payment_method: $Enums.PaymentMethod
      isEnrolled: boolean
      transaction_date: Date
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type paymentGetPayload<S extends boolean | null | undefined | paymentDefaultArgs> = $Result.GetResult<Prisma.$paymentPayload, S>

  type paymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<paymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface paymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment'], meta: { name: 'payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {paymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends paymentFindUniqueArgs>(args: SelectSubset<T, paymentFindUniqueArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {paymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends paymentFindUniqueOrThrowArgs>(args: SelectSubset<T, paymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends paymentFindFirstArgs>(args?: SelectSubset<T, paymentFindFirstArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends paymentFindFirstOrThrowArgs>(args?: SelectSubset<T, paymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends paymentFindManyArgs>(args?: SelectSubset<T, paymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {paymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends paymentCreateArgs>(args: SelectSubset<T, paymentCreateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {paymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends paymentCreateManyArgs>(args?: SelectSubset<T, paymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {paymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends paymentCreateManyAndReturnArgs>(args?: SelectSubset<T, paymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {paymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends paymentDeleteArgs>(args: SelectSubset<T, paymentDeleteArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {paymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends paymentUpdateArgs>(args: SelectSubset<T, paymentUpdateArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {paymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends paymentDeleteManyArgs>(args?: SelectSubset<T, paymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends paymentUpdateManyArgs>(args: SelectSubset<T, paymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {paymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends paymentUpdateManyAndReturnArgs>(args: SelectSubset<T, paymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {paymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends paymentUpsertArgs>(args: SelectSubset<T, paymentUpsertArgs<ExtArgs>>): Prisma__paymentClient<$Result.GetResult<Prisma.$paymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends paymentCountArgs>(
      args?: Subset<T, paymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {paymentGroupByArgs} args - Group by arguments.
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
      T extends paymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: paymentGroupByArgs['orderBy'] }
        : { orderBy?: paymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, paymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment model
   */
  readonly fields: paymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__paymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the payment model
   */
  interface paymentFieldRefs {
    readonly id: FieldRef<"payment", 'String'>
    readonly userId: FieldRef<"payment", 'Int'>
    readonly courseId: FieldRef<"payment", 'Int'>
    readonly enrollementId: FieldRef<"payment", 'String'>
    readonly phone_Number: FieldRef<"payment", 'String'>
    readonly amount: FieldRef<"payment", 'Float'>
    readonly currency: FieldRef<"payment", 'Currency'>
    readonly status: FieldRef<"payment", 'PaymentStatus'>
    readonly payment_method: FieldRef<"payment", 'PaymentMethod'>
    readonly isEnrolled: FieldRef<"payment", 'Boolean'>
    readonly transaction_date: FieldRef<"payment", 'DateTime'>
    readonly created_at: FieldRef<"payment", 'DateTime'>
    readonly updated_at: FieldRef<"payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payment findUnique
   */
  export type paymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findUniqueOrThrow
   */
  export type paymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment findFirst
   */
  export type paymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findFirstOrThrow
   */
  export type paymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payment to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment findMany
   */
  export type paymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter, which payments to fetch.
     */
    where?: paymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payments to fetch.
     */
    orderBy?: paymentOrderByWithRelationInput | paymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payments.
     */
    cursor?: paymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * payment create
   */
  export type paymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to create a payment.
     */
    data: XOR<paymentCreateInput, paymentUncheckedCreateInput>
  }

  /**
   * payment createMany
   */
  export type paymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment createManyAndReturn
   */
  export type paymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * The data used to create many payments.
     */
    data: paymentCreateManyInput | paymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * payment update
   */
  export type paymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The data needed to update a payment.
     */
    data: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
    /**
     * Choose, which payment to update.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment updateMany
   */
  export type paymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
  }

  /**
   * payment updateManyAndReturn
   */
  export type paymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * The data used to update payments.
     */
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyInput>
    /**
     * Filter which payments to update
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * payment upsert
   */
  export type paymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * The filter to search for the payment to update in case it exists.
     */
    where: paymentWhereUniqueInput
    /**
     * In case the payment found by the `where` argument doesn't exist, create a new payment with this data.
     */
    create: XOR<paymentCreateInput, paymentUncheckedCreateInput>
    /**
     * In case the payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<paymentUpdateInput, paymentUncheckedUpdateInput>
  }

  /**
   * payment delete
   */
  export type paymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
    /**
     * Filter which payment to delete.
     */
    where: paymentWhereUniqueInput
  }

  /**
   * payment deleteMany
   */
  export type paymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payments to delete
     */
    where?: paymentWhereInput
    /**
     * Limit how many payments to delete.
     */
    limit?: number
  }

  /**
   * payment without action
   */
  export type paymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment
     */
    select?: paymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment
     */
    omit?: paymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: paymentInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    full_name: 'full_name',
    profilePhoto: 'profilePhoto',
    coverPhoto: 'coverPhoto',
    sex: 'sex',
    phone_number: 'phone_number',
    password: 'password',
    role: 'role',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    course_img: 'course_img',
    cover_img: 'cover_img',
    preview_course_url: 'preview_course_url',
    title: 'title',
    description: 'description',
    is_published: 'is_published',
    price: 'price',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const ChapterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    chapterTitle: 'chapterTitle',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ChapterScalarFieldEnum = (typeof ChapterScalarFieldEnum)[keyof typeof ChapterScalarFieldEnum]


  export const LessonsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    chapterId: 'chapterId',
    title: 'title',
    content: 'content',
    video_url: 'video_url',
    is_completed: 'is_completed',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LessonsScalarFieldEnum = (typeof LessonsScalarFieldEnum)[keyof typeof LessonsScalarFieldEnum]


  export const LessonProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    lessonId: 'lessonId',
    courseId: 'courseId',
    isCompleted: 'isCompleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LessonProgressScalarFieldEnum = (typeof LessonProgressScalarFieldEnum)[keyof typeof LessonProgressScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    paymentId: 'paymentId',
    is_enrolled: 'is_enrolled',
    progress: 'progress',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    enrollementId: 'enrollementId',
    phone_Number: 'phone_Number',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    payment_method: 'payment_method',
    isEnrolled: 'isEnrolled',
    transaction_date: 'transaction_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Sex'
   */
  export type EnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex'>
    


  /**
   * Reference to a field of type 'Sex[]'
   */
  export type ListEnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex[]'>
    


  /**
   * Reference to a field of type 'ROLE'
   */
  export type EnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE'>
    


  /**
   * Reference to a field of type 'ROLE[]'
   */
  export type ListEnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'EnrollmentStatus'
   */
  export type EnumEnrollmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnrollmentStatus'>
    


  /**
   * Reference to a field of type 'EnrollmentStatus[]'
   */
  export type ListEnumEnrollmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnrollmentStatus[]'>
    


  /**
   * Reference to a field of type 'Currency'
   */
  export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency'>
    


  /**
   * Reference to a field of type 'Currency[]'
   */
  export type ListEnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    username?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    full_name?: StringFilter<"user"> | string
    profilePhoto?: StringFilter<"user"> | string
    coverPhoto?: StringFilter<"user"> | string
    sex?: EnumSexNullableFilter<"user"> | $Enums.Sex | null
    phone_number?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: EnumROLEFilter<"user"> | $Enums.ROLE
    is_active?: BoolFilter<"user"> | boolean
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    courses?: CourseListRelationFilter
    lesson?: LessonsListRelationFilter
    lessonProgress?: LessonProgressListRelationFilter
    enrollements?: EnrollmentListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    profilePhoto?: SortOrder
    coverPhoto?: SortOrder
    sex?: SortOrderInput | SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    courses?: courseOrderByRelationAggregateInput
    lesson?: lessonsOrderByRelationAggregateInput
    lessonProgress?: lessonProgressOrderByRelationAggregateInput
    enrollements?: enrollmentOrderByRelationAggregateInput
    payments?: paymentOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    full_name?: StringFilter<"user"> | string
    profilePhoto?: StringFilter<"user"> | string
    coverPhoto?: StringFilter<"user"> | string
    sex?: EnumSexNullableFilter<"user"> | $Enums.Sex | null
    phone_number?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: EnumROLEFilter<"user"> | $Enums.ROLE
    is_active?: BoolFilter<"user"> | boolean
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    courses?: CourseListRelationFilter
    lesson?: LessonsListRelationFilter
    lessonProgress?: LessonProgressListRelationFilter
    enrollements?: EnrollmentListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "username" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    profilePhoto?: SortOrder
    coverPhoto?: SortOrder
    sex?: SortOrderInput | SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    username?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    full_name?: StringWithAggregatesFilter<"user"> | string
    profilePhoto?: StringWithAggregatesFilter<"user"> | string
    coverPhoto?: StringWithAggregatesFilter<"user"> | string
    sex?: EnumSexNullableWithAggregatesFilter<"user"> | $Enums.Sex | null
    phone_number?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    role?: EnumROLEWithAggregatesFilter<"user"> | $Enums.ROLE
    is_active?: BoolWithAggregatesFilter<"user"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type courseWhereInput = {
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    id?: IntFilter<"course"> | number
    userId?: IntFilter<"course"> | number
    course_img?: StringFilter<"course"> | string
    cover_img?: StringNullableFilter<"course"> | string | null
    preview_course_url?: StringFilter<"course"> | string
    title?: StringFilter<"course"> | string
    description?: StringNullableFilter<"course"> | string | null
    is_published?: BoolFilter<"course"> | boolean
    price?: FloatFilter<"course"> | number
    created_at?: DateTimeFilter<"course"> | Date | string
    updated_at?: DateTimeFilter<"course"> | Date | string
    users?: XOR<UserScalarRelationFilter, userWhereInput>
    chapters?: ChapterListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    lesson?: LessonsListRelationFilter
    lessonProgress?: LessonProgressListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type courseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    course_img?: SortOrder
    cover_img?: SortOrderInput | SortOrder
    preview_course_url?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    is_published?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: userOrderByWithRelationInput
    chapters?: chapterOrderByRelationAggregateInput
    enrollments?: enrollmentOrderByRelationAggregateInput
    lesson?: lessonsOrderByRelationAggregateInput
    lessonProgress?: lessonProgressOrderByRelationAggregateInput
    payments?: paymentOrderByRelationAggregateInput
  }

  export type courseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    userId?: IntFilter<"course"> | number
    course_img?: StringFilter<"course"> | string
    cover_img?: StringNullableFilter<"course"> | string | null
    preview_course_url?: StringFilter<"course"> | string
    title?: StringFilter<"course"> | string
    description?: StringNullableFilter<"course"> | string | null
    is_published?: BoolFilter<"course"> | boolean
    price?: FloatFilter<"course"> | number
    created_at?: DateTimeFilter<"course"> | Date | string
    updated_at?: DateTimeFilter<"course"> | Date | string
    users?: XOR<UserScalarRelationFilter, userWhereInput>
    chapters?: ChapterListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    lesson?: LessonsListRelationFilter
    lessonProgress?: LessonProgressListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id">

  export type courseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    course_img?: SortOrder
    cover_img?: SortOrderInput | SortOrder
    preview_course_url?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    is_published?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: courseCountOrderByAggregateInput
    _avg?: courseAvgOrderByAggregateInput
    _max?: courseMaxOrderByAggregateInput
    _min?: courseMinOrderByAggregateInput
    _sum?: courseSumOrderByAggregateInput
  }

  export type courseScalarWhereWithAggregatesInput = {
    AND?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    OR?: courseScalarWhereWithAggregatesInput[]
    NOT?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"course"> | number
    userId?: IntWithAggregatesFilter<"course"> | number
    course_img?: StringWithAggregatesFilter<"course"> | string
    cover_img?: StringNullableWithAggregatesFilter<"course"> | string | null
    preview_course_url?: StringWithAggregatesFilter<"course"> | string
    title?: StringWithAggregatesFilter<"course"> | string
    description?: StringNullableWithAggregatesFilter<"course"> | string | null
    is_published?: BoolWithAggregatesFilter<"course"> | boolean
    price?: FloatWithAggregatesFilter<"course"> | number
    created_at?: DateTimeWithAggregatesFilter<"course"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"course"> | Date | string
  }

  export type chapterWhereInput = {
    AND?: chapterWhereInput | chapterWhereInput[]
    OR?: chapterWhereInput[]
    NOT?: chapterWhereInput | chapterWhereInput[]
    id?: StringFilter<"chapter"> | string
    userId?: IntFilter<"chapter"> | number
    courseId?: IntFilter<"chapter"> | number
    chapterTitle?: StringFilter<"chapter"> | string
    created_at?: DateTimeFilter<"chapter"> | Date | string
    updated_at?: DateTimeFilter<"chapter"> | Date | string
    courses?: XOR<CourseScalarRelationFilter, courseWhereInput>
    lesson?: LessonsListRelationFilter
  }

  export type chapterOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    chapterTitle?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    courses?: courseOrderByWithRelationInput
    lesson?: lessonsOrderByRelationAggregateInput
  }

  export type chapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: chapterWhereInput | chapterWhereInput[]
    OR?: chapterWhereInput[]
    NOT?: chapterWhereInput | chapterWhereInput[]
    userId?: IntFilter<"chapter"> | number
    courseId?: IntFilter<"chapter"> | number
    chapterTitle?: StringFilter<"chapter"> | string
    created_at?: DateTimeFilter<"chapter"> | Date | string
    updated_at?: DateTimeFilter<"chapter"> | Date | string
    courses?: XOR<CourseScalarRelationFilter, courseWhereInput>
    lesson?: LessonsListRelationFilter
  }, "id">

  export type chapterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    chapterTitle?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: chapterCountOrderByAggregateInput
    _avg?: chapterAvgOrderByAggregateInput
    _max?: chapterMaxOrderByAggregateInput
    _min?: chapterMinOrderByAggregateInput
    _sum?: chapterSumOrderByAggregateInput
  }

  export type chapterScalarWhereWithAggregatesInput = {
    AND?: chapterScalarWhereWithAggregatesInput | chapterScalarWhereWithAggregatesInput[]
    OR?: chapterScalarWhereWithAggregatesInput[]
    NOT?: chapterScalarWhereWithAggregatesInput | chapterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"chapter"> | string
    userId?: IntWithAggregatesFilter<"chapter"> | number
    courseId?: IntWithAggregatesFilter<"chapter"> | number
    chapterTitle?: StringWithAggregatesFilter<"chapter"> | string
    created_at?: DateTimeWithAggregatesFilter<"chapter"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"chapter"> | Date | string
  }

  export type lessonsWhereInput = {
    AND?: lessonsWhereInput | lessonsWhereInput[]
    OR?: lessonsWhereInput[]
    NOT?: lessonsWhereInput | lessonsWhereInput[]
    id?: StringFilter<"lessons"> | string
    userId?: IntFilter<"lessons"> | number
    courseId?: IntFilter<"lessons"> | number
    chapterId?: StringFilter<"lessons"> | string
    title?: StringFilter<"lessons"> | string
    content?: StringFilter<"lessons"> | string
    video_url?: StringNullableFilter<"lessons"> | string | null
    is_completed?: BoolNullableFilter<"lessons"> | boolean | null
    created_at?: DateTimeFilter<"lessons"> | Date | string
    updated_at?: DateTimeFilter<"lessons"> | Date | string
    lessonProgress?: LessonProgressListRelationFilter
    users?: XOR<UserScalarRelationFilter, userWhereInput>
    chapters?: XOR<ChapterScalarRelationFilter, chapterWhereInput>
    courses?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }

  export type lessonsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    chapterId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    video_url?: SortOrderInput | SortOrder
    is_completed?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    lessonProgress?: lessonProgressOrderByRelationAggregateInput
    users?: userOrderByWithRelationInput
    chapters?: chapterOrderByWithRelationInput
    courses?: courseOrderByWithRelationInput
  }

  export type lessonsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: lessonsWhereInput | lessonsWhereInput[]
    OR?: lessonsWhereInput[]
    NOT?: lessonsWhereInput | lessonsWhereInput[]
    userId?: IntFilter<"lessons"> | number
    courseId?: IntFilter<"lessons"> | number
    chapterId?: StringFilter<"lessons"> | string
    title?: StringFilter<"lessons"> | string
    content?: StringFilter<"lessons"> | string
    video_url?: StringNullableFilter<"lessons"> | string | null
    is_completed?: BoolNullableFilter<"lessons"> | boolean | null
    created_at?: DateTimeFilter<"lessons"> | Date | string
    updated_at?: DateTimeFilter<"lessons"> | Date | string
    lessonProgress?: LessonProgressListRelationFilter
    users?: XOR<UserScalarRelationFilter, userWhereInput>
    chapters?: XOR<ChapterScalarRelationFilter, chapterWhereInput>
    courses?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }, "id">

  export type lessonsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    chapterId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    video_url?: SortOrderInput | SortOrder
    is_completed?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: lessonsCountOrderByAggregateInput
    _avg?: lessonsAvgOrderByAggregateInput
    _max?: lessonsMaxOrderByAggregateInput
    _min?: lessonsMinOrderByAggregateInput
    _sum?: lessonsSumOrderByAggregateInput
  }

  export type lessonsScalarWhereWithAggregatesInput = {
    AND?: lessonsScalarWhereWithAggregatesInput | lessonsScalarWhereWithAggregatesInput[]
    OR?: lessonsScalarWhereWithAggregatesInput[]
    NOT?: lessonsScalarWhereWithAggregatesInput | lessonsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"lessons"> | string
    userId?: IntWithAggregatesFilter<"lessons"> | number
    courseId?: IntWithAggregatesFilter<"lessons"> | number
    chapterId?: StringWithAggregatesFilter<"lessons"> | string
    title?: StringWithAggregatesFilter<"lessons"> | string
    content?: StringWithAggregatesFilter<"lessons"> | string
    video_url?: StringNullableWithAggregatesFilter<"lessons"> | string | null
    is_completed?: BoolNullableWithAggregatesFilter<"lessons"> | boolean | null
    created_at?: DateTimeWithAggregatesFilter<"lessons"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"lessons"> | Date | string
  }

  export type lessonProgressWhereInput = {
    AND?: lessonProgressWhereInput | lessonProgressWhereInput[]
    OR?: lessonProgressWhereInput[]
    NOT?: lessonProgressWhereInput | lessonProgressWhereInput[]
    id?: IntFilter<"lessonProgress"> | number
    userId?: IntFilter<"lessonProgress"> | number
    lessonId?: StringFilter<"lessonProgress"> | string
    courseId?: IntFilter<"lessonProgress"> | number
    isCompleted?: BoolFilter<"lessonProgress"> | boolean
    createdAt?: DateTimeFilter<"lessonProgress"> | Date | string
    updatedAt?: DateTimeFilter<"lessonProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    lesson?: XOR<LessonsScalarRelationFilter, lessonsWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }

  export type lessonProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    courseId?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userOrderByWithRelationInput
    lesson?: lessonsOrderByWithRelationInput
    course?: courseOrderByWithRelationInput
  }

  export type lessonProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_lessonId?: lessonProgressUserIdLessonIdCompoundUniqueInput
    AND?: lessonProgressWhereInput | lessonProgressWhereInput[]
    OR?: lessonProgressWhereInput[]
    NOT?: lessonProgressWhereInput | lessonProgressWhereInput[]
    userId?: IntFilter<"lessonProgress"> | number
    lessonId?: StringFilter<"lessonProgress"> | string
    courseId?: IntFilter<"lessonProgress"> | number
    isCompleted?: BoolFilter<"lessonProgress"> | boolean
    createdAt?: DateTimeFilter<"lessonProgress"> | Date | string
    updatedAt?: DateTimeFilter<"lessonProgress"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    lesson?: XOR<LessonsScalarRelationFilter, lessonsWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }, "id" | "userId_lessonId">

  export type lessonProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    courseId?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: lessonProgressCountOrderByAggregateInput
    _avg?: lessonProgressAvgOrderByAggregateInput
    _max?: lessonProgressMaxOrderByAggregateInput
    _min?: lessonProgressMinOrderByAggregateInput
    _sum?: lessonProgressSumOrderByAggregateInput
  }

  export type lessonProgressScalarWhereWithAggregatesInput = {
    AND?: lessonProgressScalarWhereWithAggregatesInput | lessonProgressScalarWhereWithAggregatesInput[]
    OR?: lessonProgressScalarWhereWithAggregatesInput[]
    NOT?: lessonProgressScalarWhereWithAggregatesInput | lessonProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"lessonProgress"> | number
    userId?: IntWithAggregatesFilter<"lessonProgress"> | number
    lessonId?: StringWithAggregatesFilter<"lessonProgress"> | string
    courseId?: IntWithAggregatesFilter<"lessonProgress"> | number
    isCompleted?: BoolWithAggregatesFilter<"lessonProgress"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"lessonProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"lessonProgress"> | Date | string
  }

  export type enrollmentWhereInput = {
    AND?: enrollmentWhereInput | enrollmentWhereInput[]
    OR?: enrollmentWhereInput[]
    NOT?: enrollmentWhereInput | enrollmentWhereInput[]
    id?: StringFilter<"enrollment"> | string
    userId?: IntFilter<"enrollment"> | number
    courseId?: IntFilter<"enrollment"> | number
    paymentId?: StringFilter<"enrollment"> | string
    is_enrolled?: BoolFilter<"enrollment"> | boolean
    progress?: FloatFilter<"enrollment"> | number
    status?: EnumEnrollmentStatusFilter<"enrollment"> | $Enums.EnrollmentStatus
    created_at?: DateTimeFilter<"enrollment"> | Date | string
    updated_at?: DateTimeFilter<"enrollment"> | Date | string
    users?: XOR<UserScalarRelationFilter, userWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }

  export type enrollmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    paymentId?: SortOrder
    is_enrolled?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: userOrderByWithRelationInput
    course?: courseOrderByWithRelationInput
  }

  export type enrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paymentId?: string
    AND?: enrollmentWhereInput | enrollmentWhereInput[]
    OR?: enrollmentWhereInput[]
    NOT?: enrollmentWhereInput | enrollmentWhereInput[]
    userId?: IntFilter<"enrollment"> | number
    courseId?: IntFilter<"enrollment"> | number
    is_enrolled?: BoolFilter<"enrollment"> | boolean
    progress?: FloatFilter<"enrollment"> | number
    status?: EnumEnrollmentStatusFilter<"enrollment"> | $Enums.EnrollmentStatus
    created_at?: DateTimeFilter<"enrollment"> | Date | string
    updated_at?: DateTimeFilter<"enrollment"> | Date | string
    users?: XOR<UserScalarRelationFilter, userWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }, "id" | "paymentId">

  export type enrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    paymentId?: SortOrder
    is_enrolled?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: enrollmentCountOrderByAggregateInput
    _avg?: enrollmentAvgOrderByAggregateInput
    _max?: enrollmentMaxOrderByAggregateInput
    _min?: enrollmentMinOrderByAggregateInput
    _sum?: enrollmentSumOrderByAggregateInput
  }

  export type enrollmentScalarWhereWithAggregatesInput = {
    AND?: enrollmentScalarWhereWithAggregatesInput | enrollmentScalarWhereWithAggregatesInput[]
    OR?: enrollmentScalarWhereWithAggregatesInput[]
    NOT?: enrollmentScalarWhereWithAggregatesInput | enrollmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"enrollment"> | string
    userId?: IntWithAggregatesFilter<"enrollment"> | number
    courseId?: IntWithAggregatesFilter<"enrollment"> | number
    paymentId?: StringWithAggregatesFilter<"enrollment"> | string
    is_enrolled?: BoolWithAggregatesFilter<"enrollment"> | boolean
    progress?: FloatWithAggregatesFilter<"enrollment"> | number
    status?: EnumEnrollmentStatusWithAggregatesFilter<"enrollment"> | $Enums.EnrollmentStatus
    created_at?: DateTimeWithAggregatesFilter<"enrollment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"enrollment"> | Date | string
  }

  export type paymentWhereInput = {
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    id?: StringFilter<"payment"> | string
    userId?: IntFilter<"payment"> | number
    courseId?: IntFilter<"payment"> | number
    enrollementId?: StringNullableFilter<"payment"> | string | null
    phone_Number?: StringFilter<"payment"> | string
    amount?: FloatFilter<"payment"> | number
    currency?: EnumCurrencyFilter<"payment"> | $Enums.Currency
    status?: EnumPaymentStatusFilter<"payment"> | $Enums.PaymentStatus
    payment_method?: EnumPaymentMethodFilter<"payment"> | $Enums.PaymentMethod
    isEnrolled?: BoolFilter<"payment"> | boolean
    transaction_date?: DateTimeFilter<"payment"> | Date | string
    created_at?: DateTimeFilter<"payment"> | Date | string
    updated_at?: DateTimeFilter<"payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }

  export type paymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    enrollementId?: SortOrderInput | SortOrder
    phone_Number?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    isEnrolled?: SortOrder
    transaction_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: userOrderByWithRelationInput
    course?: courseOrderByWithRelationInput
  }

  export type paymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: paymentWhereInput | paymentWhereInput[]
    OR?: paymentWhereInput[]
    NOT?: paymentWhereInput | paymentWhereInput[]
    userId?: IntFilter<"payment"> | number
    courseId?: IntFilter<"payment"> | number
    enrollementId?: StringNullableFilter<"payment"> | string | null
    phone_Number?: StringFilter<"payment"> | string
    amount?: FloatFilter<"payment"> | number
    currency?: EnumCurrencyFilter<"payment"> | $Enums.Currency
    status?: EnumPaymentStatusFilter<"payment"> | $Enums.PaymentStatus
    payment_method?: EnumPaymentMethodFilter<"payment"> | $Enums.PaymentMethod
    isEnrolled?: BoolFilter<"payment"> | boolean
    transaction_date?: DateTimeFilter<"payment"> | Date | string
    created_at?: DateTimeFilter<"payment"> | Date | string
    updated_at?: DateTimeFilter<"payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
  }, "id">

  export type paymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    enrollementId?: SortOrderInput | SortOrder
    phone_Number?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    isEnrolled?: SortOrder
    transaction_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: paymentCountOrderByAggregateInput
    _avg?: paymentAvgOrderByAggregateInput
    _max?: paymentMaxOrderByAggregateInput
    _min?: paymentMinOrderByAggregateInput
    _sum?: paymentSumOrderByAggregateInput
  }

  export type paymentScalarWhereWithAggregatesInput = {
    AND?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    OR?: paymentScalarWhereWithAggregatesInput[]
    NOT?: paymentScalarWhereWithAggregatesInput | paymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"payment"> | string
    userId?: IntWithAggregatesFilter<"payment"> | number
    courseId?: IntWithAggregatesFilter<"payment"> | number
    enrollementId?: StringNullableWithAggregatesFilter<"payment"> | string | null
    phone_Number?: StringWithAggregatesFilter<"payment"> | string
    amount?: FloatWithAggregatesFilter<"payment"> | number
    currency?: EnumCurrencyWithAggregatesFilter<"payment"> | $Enums.Currency
    status?: EnumPaymentStatusWithAggregatesFilter<"payment"> | $Enums.PaymentStatus
    payment_method?: EnumPaymentMethodWithAggregatesFilter<"payment"> | $Enums.PaymentMethod
    isEnrolled?: BoolWithAggregatesFilter<"payment"> | boolean
    transaction_date?: DateTimeWithAggregatesFilter<"payment"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"payment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"payment"> | Date | string
  }

  export type userCreateInput = {
    username: string
    email: string
    full_name: string
    profilePhoto: string
    coverPhoto: string
    sex?: $Enums.Sex | null
    phone_number: string
    password: string
    role?: $Enums.ROLE
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    courses?: courseCreateNestedManyWithoutUsersInput
    lesson?: lessonsCreateNestedManyWithoutUsersInput
    lessonProgress?: lessonProgressCreateNestedManyWithoutUserInput
    enrollements?: enrollmentCreateNestedManyWithoutUsersInput
    payments?: paymentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    full_name: string
    profilePhoto: string
    coverPhoto: string
    sex?: $Enums.Sex | null
    phone_number: string
    password: string
    role?: $Enums.ROLE
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    courses?: courseUncheckedCreateNestedManyWithoutUsersInput
    lesson?: lessonsUncheckedCreateNestedManyWithoutUsersInput
    lessonProgress?: lessonProgressUncheckedCreateNestedManyWithoutUserInput
    enrollements?: enrollmentUncheckedCreateNestedManyWithoutUsersInput
    payments?: paymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: courseUpdateManyWithoutUsersNestedInput
    lesson?: lessonsUpdateManyWithoutUsersNestedInput
    lessonProgress?: lessonProgressUpdateManyWithoutUserNestedInput
    enrollements?: enrollmentUpdateManyWithoutUsersNestedInput
    payments?: paymentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: courseUncheckedUpdateManyWithoutUsersNestedInput
    lesson?: lessonsUncheckedUpdateManyWithoutUsersNestedInput
    lessonProgress?: lessonProgressUncheckedUpdateManyWithoutUserNestedInput
    enrollements?: enrollmentUncheckedUpdateManyWithoutUsersNestedInput
    payments?: paymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    username: string
    email: string
    full_name: string
    profilePhoto: string
    coverPhoto: string
    sex?: $Enums.Sex | null
    phone_number: string
    password: string
    role?: $Enums.ROLE
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type userUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseCreateInput = {
    course_img: string
    cover_img?: string | null
    preview_course_url: string
    title: string
    description?: string | null
    is_published?: boolean
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    users: userCreateNestedOneWithoutCoursesInput
    chapters?: chapterCreateNestedManyWithoutCoursesInput
    enrollments?: enrollmentCreateNestedManyWithoutCourseInput
    lesson?: lessonsCreateNestedManyWithoutCoursesInput
    lessonProgress?: lessonProgressCreateNestedManyWithoutCourseInput
    payments?: paymentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateInput = {
    id?: number
    userId: number
    course_img: string
    cover_img?: string | null
    preview_course_url: string
    title: string
    description?: string | null
    is_published?: boolean
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    chapters?: chapterUncheckedCreateNestedManyWithoutCoursesInput
    enrollments?: enrollmentUncheckedCreateNestedManyWithoutCourseInput
    lesson?: lessonsUncheckedCreateNestedManyWithoutCoursesInput
    lessonProgress?: lessonProgressUncheckedCreateNestedManyWithoutCourseInput
    payments?: paymentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseUpdateInput = {
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUpdateOneRequiredWithoutCoursesNestedInput
    chapters?: chapterUpdateManyWithoutCoursesNestedInput
    enrollments?: enrollmentUpdateManyWithoutCourseNestedInput
    lesson?: lessonsUpdateManyWithoutCoursesNestedInput
    lessonProgress?: lessonProgressUpdateManyWithoutCourseNestedInput
    payments?: paymentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: chapterUncheckedUpdateManyWithoutCoursesNestedInput
    enrollments?: enrollmentUncheckedUpdateManyWithoutCourseNestedInput
    lesson?: lessonsUncheckedUpdateManyWithoutCoursesNestedInput
    lessonProgress?: lessonProgressUncheckedUpdateManyWithoutCourseNestedInput
    payments?: paymentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseCreateManyInput = {
    id?: number
    userId: number
    course_img: string
    cover_img?: string | null
    preview_course_url: string
    title: string
    description?: string | null
    is_published?: boolean
    price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type courseUpdateManyMutationInput = {
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chapterCreateInput = {
    id?: string
    userId: number
    chapterTitle: string
    created_at?: Date | string
    updated_at?: Date | string
    courses: courseCreateNestedOneWithoutChaptersInput
    lesson?: lessonsCreateNestedManyWithoutChaptersInput
  }

  export type chapterUncheckedCreateInput = {
    id?: string
    userId: number
    courseId: number
    chapterTitle: string
    created_at?: Date | string
    updated_at?: Date | string
    lesson?: lessonsUncheckedCreateNestedManyWithoutChaptersInput
  }

  export type chapterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    chapterTitle?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: courseUpdateOneRequiredWithoutChaptersNestedInput
    lesson?: lessonsUpdateManyWithoutChaptersNestedInput
  }

  export type chapterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    chapterTitle?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: lessonsUncheckedUpdateManyWithoutChaptersNestedInput
  }

  export type chapterCreateManyInput = {
    id?: string
    userId: number
    courseId: number
    chapterTitle: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type chapterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    chapterTitle?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chapterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    chapterTitle?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lessonsCreateInput = {
    id?: string
    title: string
    content: string
    video_url?: string | null
    is_completed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    lessonProgress?: lessonProgressCreateNestedManyWithoutLessonInput
    users: userCreateNestedOneWithoutLessonInput
    chapters: chapterCreateNestedOneWithoutLessonInput
    courses: courseCreateNestedOneWithoutLessonInput
  }

  export type lessonsUncheckedCreateInput = {
    id?: string
    userId: number
    courseId: number
    chapterId: string
    title: string
    content: string
    video_url?: string | null
    is_completed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    lessonProgress?: lessonProgressUncheckedCreateNestedManyWithoutLessonInput
  }

  export type lessonsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonProgress?: lessonProgressUpdateManyWithoutLessonNestedInput
    users?: userUpdateOneRequiredWithoutLessonNestedInput
    chapters?: chapterUpdateOneRequiredWithoutLessonNestedInput
    courses?: courseUpdateOneRequiredWithoutLessonNestedInput
  }

  export type lessonsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    chapterId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonProgress?: lessonProgressUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type lessonsCreateManyInput = {
    id?: string
    userId: number
    courseId: number
    chapterId: string
    title: string
    content: string
    video_url?: string | null
    is_completed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lessonsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lessonsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    chapterId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lessonProgressCreateInput = {
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutLessonProgressInput
    lesson: lessonsCreateNestedOneWithoutLessonProgressInput
    course: courseCreateNestedOneWithoutLessonProgressInput
  }

  export type lessonProgressUncheckedCreateInput = {
    id?: number
    userId: number
    lessonId: string
    courseId: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type lessonProgressUpdateInput = {
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutLessonProgressNestedInput
    lesson?: lessonsUpdateOneRequiredWithoutLessonProgressNestedInput
    course?: courseUpdateOneRequiredWithoutLessonProgressNestedInput
  }

  export type lessonProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    lessonId?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lessonProgressCreateManyInput = {
    id?: number
    userId: number
    lessonId: string
    courseId: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type lessonProgressUpdateManyMutationInput = {
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lessonProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    lessonId?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enrollmentCreateInput = {
    id?: string
    paymentId: string
    is_enrolled?: boolean
    progress?: number
    status?: $Enums.EnrollmentStatus
    created_at?: Date | string
    updated_at?: Date | string
    users: userCreateNestedOneWithoutEnrollementsInput
    course: courseCreateNestedOneWithoutEnrollmentsInput
  }

  export type enrollmentUncheckedCreateInput = {
    id?: string
    userId: number
    courseId: number
    paymentId: string
    is_enrolled?: boolean
    progress?: number
    status?: $Enums.EnrollmentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type enrollmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    is_enrolled?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUpdateOneRequiredWithoutEnrollementsNestedInput
    course?: courseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type enrollmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    paymentId?: StringFieldUpdateOperationsInput | string
    is_enrolled?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enrollmentCreateManyInput = {
    id?: string
    userId: number
    courseId: number
    paymentId: string
    is_enrolled?: boolean
    progress?: number
    status?: $Enums.EnrollmentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type enrollmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    is_enrolled?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enrollmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    paymentId?: StringFieldUpdateOperationsInput | string
    is_enrolled?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentCreateInput = {
    id?: string
    enrollementId?: string | null
    phone_Number: string
    amount: number
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    payment_method: $Enums.PaymentMethod
    isEnrolled?: boolean
    transaction_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    user: userCreateNestedOneWithoutPaymentsInput
    course: courseCreateNestedOneWithoutPaymentsInput
  }

  export type paymentUncheckedCreateInput = {
    id?: string
    userId: number
    courseId: number
    enrollementId?: string | null
    phone_Number: string
    amount: number
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    payment_method: $Enums.PaymentMethod
    isEnrolled?: boolean
    transaction_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type paymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrollementId?: NullableStringFieldUpdateOperationsInput | string | null
    phone_Number?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    isEnrolled?: BoolFieldUpdateOperationsInput | boolean
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutPaymentsNestedInput
    course?: courseUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type paymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    enrollementId?: NullableStringFieldUpdateOperationsInput | string | null
    phone_Number?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    isEnrolled?: BoolFieldUpdateOperationsInput | boolean
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentCreateManyInput = {
    id?: string
    userId: number
    courseId: number
    enrollementId?: string | null
    phone_Number: string
    amount: number
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    payment_method: $Enums.PaymentMethod
    isEnrolled?: boolean
    transaction_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type paymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrollementId?: NullableStringFieldUpdateOperationsInput | string | null
    phone_Number?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    isEnrolled?: BoolFieldUpdateOperationsInput | boolean
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    enrollementId?: NullableStringFieldUpdateOperationsInput | string | null
    phone_Number?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    isEnrolled?: BoolFieldUpdateOperationsInput | boolean
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumSexNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexNullableFilter<$PrismaModel> | $Enums.Sex | null
  }

  export type EnumROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEFilter<$PrismaModel> | $Enums.ROLE
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CourseListRelationFilter = {
    every?: courseWhereInput
    some?: courseWhereInput
    none?: courseWhereInput
  }

  export type LessonsListRelationFilter = {
    every?: lessonsWhereInput
    some?: lessonsWhereInput
    none?: lessonsWhereInput
  }

  export type LessonProgressListRelationFilter = {
    every?: lessonProgressWhereInput
    some?: lessonProgressWhereInput
    none?: lessonProgressWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: enrollmentWhereInput
    some?: enrollmentWhereInput
    none?: enrollmentWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: paymentWhereInput
    some?: paymentWhereInput
    none?: paymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type courseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lessonsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lessonProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type enrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type paymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    profilePhoto?: SortOrder
    coverPhoto?: SortOrder
    sex?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    profilePhoto?: SortOrder
    coverPhoto?: SortOrder
    sex?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    profilePhoto?: SortOrder
    coverPhoto?: SortOrder
    sex?: SortOrder
    phone_number?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumSexNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sex | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexNullableFilter<$PrismaModel>
    _max?: NestedEnumSexNullableFilter<$PrismaModel>
  }

  export type EnumROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEWithAggregatesFilter<$PrismaModel> | $Enums.ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLEFilter<$PrismaModel>
    _max?: NestedEnumROLEFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type ChapterListRelationFilter = {
    every?: chapterWhereInput
    some?: chapterWhereInput
    none?: chapterWhereInput
  }

  export type chapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type courseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    course_img?: SortOrder
    cover_img?: SortOrder
    preview_course_url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    is_published?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type courseAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type courseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    course_img?: SortOrder
    cover_img?: SortOrder
    preview_course_url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    is_published?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type courseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    course_img?: SortOrder
    cover_img?: SortOrder
    preview_course_url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    is_published?: SortOrder
    price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type courseSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CourseScalarRelationFilter = {
    is?: courseWhereInput
    isNot?: courseWhereInput
  }

  export type chapterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    chapterTitle?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type chapterAvgOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type chapterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    chapterTitle?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type chapterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    chapterTitle?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type chapterSumOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ChapterScalarRelationFilter = {
    is?: chapterWhereInput
    isNot?: chapterWhereInput
  }

  export type lessonsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    chapterId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    video_url?: SortOrder
    is_completed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lessonsAvgOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type lessonsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    chapterId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    video_url?: SortOrder
    is_completed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lessonsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    chapterId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    video_url?: SortOrder
    is_completed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type lessonsSumOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type LessonsScalarRelationFilter = {
    is?: lessonsWhereInput
    isNot?: lessonsWhereInput
  }

  export type lessonProgressUserIdLessonIdCompoundUniqueInput = {
    userId: number
    lessonId: string
  }

  export type lessonProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    courseId?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type lessonProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type lessonProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    courseId?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type lessonProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    courseId?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type lessonProgressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type EnumEnrollmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusFilter<$PrismaModel> | $Enums.EnrollmentStatus
  }

  export type enrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    paymentId?: SortOrder
    is_enrolled?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type enrollmentAvgOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
  }

  export type enrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    paymentId?: SortOrder
    is_enrolled?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type enrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    paymentId?: SortOrder
    is_enrolled?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type enrollmentSumOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
  }

  export type EnumEnrollmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EnrollmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
    _max?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
  }

  export type EnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type paymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    enrollementId?: SortOrder
    phone_Number?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    isEnrolled?: SortOrder
    transaction_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type paymentAvgOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
    amount?: SortOrder
  }

  export type paymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    enrollementId?: SortOrder
    phone_Number?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    isEnrolled?: SortOrder
    transaction_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type paymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    enrollementId?: SortOrder
    phone_Number?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    isEnrolled?: SortOrder
    transaction_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type paymentSumOrderByAggregateInput = {
    userId?: SortOrder
    courseId?: SortOrder
    amount?: SortOrder
  }

  export type EnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type courseCreateNestedManyWithoutUsersInput = {
    create?: XOR<courseCreateWithoutUsersInput, courseUncheckedCreateWithoutUsersInput> | courseCreateWithoutUsersInput[] | courseUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: courseCreateOrConnectWithoutUsersInput | courseCreateOrConnectWithoutUsersInput[]
    createMany?: courseCreateManyUsersInputEnvelope
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
  }

  export type lessonsCreateNestedManyWithoutUsersInput = {
    create?: XOR<lessonsCreateWithoutUsersInput, lessonsUncheckedCreateWithoutUsersInput> | lessonsCreateWithoutUsersInput[] | lessonsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: lessonsCreateOrConnectWithoutUsersInput | lessonsCreateOrConnectWithoutUsersInput[]
    createMany?: lessonsCreateManyUsersInputEnvelope
    connect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
  }

  export type lessonProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<lessonProgressCreateWithoutUserInput, lessonProgressUncheckedCreateWithoutUserInput> | lessonProgressCreateWithoutUserInput[] | lessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: lessonProgressCreateOrConnectWithoutUserInput | lessonProgressCreateOrConnectWithoutUserInput[]
    createMany?: lessonProgressCreateManyUserInputEnvelope
    connect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
  }

  export type enrollmentCreateNestedManyWithoutUsersInput = {
    create?: XOR<enrollmentCreateWithoutUsersInput, enrollmentUncheckedCreateWithoutUsersInput> | enrollmentCreateWithoutUsersInput[] | enrollmentUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutUsersInput | enrollmentCreateOrConnectWithoutUsersInput[]
    createMany?: enrollmentCreateManyUsersInputEnvelope
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
  }

  export type paymentCreateNestedManyWithoutUserInput = {
    create?: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput> | paymentCreateWithoutUserInput[] | paymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[]
    createMany?: paymentCreateManyUserInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type courseUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<courseCreateWithoutUsersInput, courseUncheckedCreateWithoutUsersInput> | courseCreateWithoutUsersInput[] | courseUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: courseCreateOrConnectWithoutUsersInput | courseCreateOrConnectWithoutUsersInput[]
    createMany?: courseCreateManyUsersInputEnvelope
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
  }

  export type lessonsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<lessonsCreateWithoutUsersInput, lessonsUncheckedCreateWithoutUsersInput> | lessonsCreateWithoutUsersInput[] | lessonsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: lessonsCreateOrConnectWithoutUsersInput | lessonsCreateOrConnectWithoutUsersInput[]
    createMany?: lessonsCreateManyUsersInputEnvelope
    connect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
  }

  export type lessonProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<lessonProgressCreateWithoutUserInput, lessonProgressUncheckedCreateWithoutUserInput> | lessonProgressCreateWithoutUserInput[] | lessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: lessonProgressCreateOrConnectWithoutUserInput | lessonProgressCreateOrConnectWithoutUserInput[]
    createMany?: lessonProgressCreateManyUserInputEnvelope
    connect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
  }

  export type enrollmentUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<enrollmentCreateWithoutUsersInput, enrollmentUncheckedCreateWithoutUsersInput> | enrollmentCreateWithoutUsersInput[] | enrollmentUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutUsersInput | enrollmentCreateOrConnectWithoutUsersInput[]
    createMany?: enrollmentCreateManyUsersInputEnvelope
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
  }

  export type paymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput> | paymentCreateWithoutUserInput[] | paymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[]
    createMany?: paymentCreateManyUserInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumSexFieldUpdateOperationsInput = {
    set?: $Enums.Sex | null
  }

  export type EnumROLEFieldUpdateOperationsInput = {
    set?: $Enums.ROLE
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type courseUpdateManyWithoutUsersNestedInput = {
    create?: XOR<courseCreateWithoutUsersInput, courseUncheckedCreateWithoutUsersInput> | courseCreateWithoutUsersInput[] | courseUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: courseCreateOrConnectWithoutUsersInput | courseCreateOrConnectWithoutUsersInput[]
    upsert?: courseUpsertWithWhereUniqueWithoutUsersInput | courseUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: courseCreateManyUsersInputEnvelope
    set?: courseWhereUniqueInput | courseWhereUniqueInput[]
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[]
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    update?: courseUpdateWithWhereUniqueWithoutUsersInput | courseUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: courseUpdateManyWithWhereWithoutUsersInput | courseUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[]
  }

  export type lessonsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<lessonsCreateWithoutUsersInput, lessonsUncheckedCreateWithoutUsersInput> | lessonsCreateWithoutUsersInput[] | lessonsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: lessonsCreateOrConnectWithoutUsersInput | lessonsCreateOrConnectWithoutUsersInput[]
    upsert?: lessonsUpsertWithWhereUniqueWithoutUsersInput | lessonsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: lessonsCreateManyUsersInputEnvelope
    set?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    disconnect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    delete?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    connect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    update?: lessonsUpdateWithWhereUniqueWithoutUsersInput | lessonsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: lessonsUpdateManyWithWhereWithoutUsersInput | lessonsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: lessonsScalarWhereInput | lessonsScalarWhereInput[]
  }

  export type lessonProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<lessonProgressCreateWithoutUserInput, lessonProgressUncheckedCreateWithoutUserInput> | lessonProgressCreateWithoutUserInput[] | lessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: lessonProgressCreateOrConnectWithoutUserInput | lessonProgressCreateOrConnectWithoutUserInput[]
    upsert?: lessonProgressUpsertWithWhereUniqueWithoutUserInput | lessonProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: lessonProgressCreateManyUserInputEnvelope
    set?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    disconnect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    delete?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    connect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    update?: lessonProgressUpdateWithWhereUniqueWithoutUserInput | lessonProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: lessonProgressUpdateManyWithWhereWithoutUserInput | lessonProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: lessonProgressScalarWhereInput | lessonProgressScalarWhereInput[]
  }

  export type enrollmentUpdateManyWithoutUsersNestedInput = {
    create?: XOR<enrollmentCreateWithoutUsersInput, enrollmentUncheckedCreateWithoutUsersInput> | enrollmentCreateWithoutUsersInput[] | enrollmentUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutUsersInput | enrollmentCreateOrConnectWithoutUsersInput[]
    upsert?: enrollmentUpsertWithWhereUniqueWithoutUsersInput | enrollmentUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: enrollmentCreateManyUsersInputEnvelope
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    update?: enrollmentUpdateWithWhereUniqueWithoutUsersInput | enrollmentUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: enrollmentUpdateManyWithWhereWithoutUsersInput | enrollmentUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
  }

  export type paymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput> | paymentCreateWithoutUserInput[] | paymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutUserInput | paymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: paymentCreateManyUserInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutUserInput | paymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutUserInput | paymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type courseUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<courseCreateWithoutUsersInput, courseUncheckedCreateWithoutUsersInput> | courseCreateWithoutUsersInput[] | courseUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: courseCreateOrConnectWithoutUsersInput | courseCreateOrConnectWithoutUsersInput[]
    upsert?: courseUpsertWithWhereUniqueWithoutUsersInput | courseUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: courseCreateManyUsersInputEnvelope
    set?: courseWhereUniqueInput | courseWhereUniqueInput[]
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[]
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    update?: courseUpdateWithWhereUniqueWithoutUsersInput | courseUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: courseUpdateManyWithWhereWithoutUsersInput | courseUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[]
  }

  export type lessonsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<lessonsCreateWithoutUsersInput, lessonsUncheckedCreateWithoutUsersInput> | lessonsCreateWithoutUsersInput[] | lessonsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: lessonsCreateOrConnectWithoutUsersInput | lessonsCreateOrConnectWithoutUsersInput[]
    upsert?: lessonsUpsertWithWhereUniqueWithoutUsersInput | lessonsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: lessonsCreateManyUsersInputEnvelope
    set?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    disconnect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    delete?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    connect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    update?: lessonsUpdateWithWhereUniqueWithoutUsersInput | lessonsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: lessonsUpdateManyWithWhereWithoutUsersInput | lessonsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: lessonsScalarWhereInput | lessonsScalarWhereInput[]
  }

  export type lessonProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<lessonProgressCreateWithoutUserInput, lessonProgressUncheckedCreateWithoutUserInput> | lessonProgressCreateWithoutUserInput[] | lessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: lessonProgressCreateOrConnectWithoutUserInput | lessonProgressCreateOrConnectWithoutUserInput[]
    upsert?: lessonProgressUpsertWithWhereUniqueWithoutUserInput | lessonProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: lessonProgressCreateManyUserInputEnvelope
    set?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    disconnect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    delete?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    connect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    update?: lessonProgressUpdateWithWhereUniqueWithoutUserInput | lessonProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: lessonProgressUpdateManyWithWhereWithoutUserInput | lessonProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: lessonProgressScalarWhereInput | lessonProgressScalarWhereInput[]
  }

  export type enrollmentUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<enrollmentCreateWithoutUsersInput, enrollmentUncheckedCreateWithoutUsersInput> | enrollmentCreateWithoutUsersInput[] | enrollmentUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutUsersInput | enrollmentCreateOrConnectWithoutUsersInput[]
    upsert?: enrollmentUpsertWithWhereUniqueWithoutUsersInput | enrollmentUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: enrollmentCreateManyUsersInputEnvelope
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    update?: enrollmentUpdateWithWhereUniqueWithoutUsersInput | enrollmentUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: enrollmentUpdateManyWithWhereWithoutUsersInput | enrollmentUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
  }

  export type paymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput> | paymentCreateWithoutUserInput[] | paymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutUserInput | paymentCreateOrConnectWithoutUserInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutUserInput | paymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: paymentCreateManyUserInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutUserInput | paymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutUserInput | paymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutCoursesInput = {
    create?: XOR<userCreateWithoutCoursesInput, userUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: userCreateOrConnectWithoutCoursesInput
    connect?: userWhereUniqueInput
  }

  export type chapterCreateNestedManyWithoutCoursesInput = {
    create?: XOR<chapterCreateWithoutCoursesInput, chapterUncheckedCreateWithoutCoursesInput> | chapterCreateWithoutCoursesInput[] | chapterUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: chapterCreateOrConnectWithoutCoursesInput | chapterCreateOrConnectWithoutCoursesInput[]
    createMany?: chapterCreateManyCoursesInputEnvelope
    connect?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
  }

  export type enrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput> | enrollmentCreateWithoutCourseInput[] | enrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutCourseInput | enrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: enrollmentCreateManyCourseInputEnvelope
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
  }

  export type lessonsCreateNestedManyWithoutCoursesInput = {
    create?: XOR<lessonsCreateWithoutCoursesInput, lessonsUncheckedCreateWithoutCoursesInput> | lessonsCreateWithoutCoursesInput[] | lessonsUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: lessonsCreateOrConnectWithoutCoursesInput | lessonsCreateOrConnectWithoutCoursesInput[]
    createMany?: lessonsCreateManyCoursesInputEnvelope
    connect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
  }

  export type lessonProgressCreateNestedManyWithoutCourseInput = {
    create?: XOR<lessonProgressCreateWithoutCourseInput, lessonProgressUncheckedCreateWithoutCourseInput> | lessonProgressCreateWithoutCourseInput[] | lessonProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: lessonProgressCreateOrConnectWithoutCourseInput | lessonProgressCreateOrConnectWithoutCourseInput[]
    createMany?: lessonProgressCreateManyCourseInputEnvelope
    connect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
  }

  export type paymentCreateNestedManyWithoutCourseInput = {
    create?: XOR<paymentCreateWithoutCourseInput, paymentUncheckedCreateWithoutCourseInput> | paymentCreateWithoutCourseInput[] | paymentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutCourseInput | paymentCreateOrConnectWithoutCourseInput[]
    createMany?: paymentCreateManyCourseInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type chapterUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: XOR<chapterCreateWithoutCoursesInput, chapterUncheckedCreateWithoutCoursesInput> | chapterCreateWithoutCoursesInput[] | chapterUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: chapterCreateOrConnectWithoutCoursesInput | chapterCreateOrConnectWithoutCoursesInput[]
    createMany?: chapterCreateManyCoursesInputEnvelope
    connect?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
  }

  export type enrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput> | enrollmentCreateWithoutCourseInput[] | enrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutCourseInput | enrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: enrollmentCreateManyCourseInputEnvelope
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
  }

  export type lessonsUncheckedCreateNestedManyWithoutCoursesInput = {
    create?: XOR<lessonsCreateWithoutCoursesInput, lessonsUncheckedCreateWithoutCoursesInput> | lessonsCreateWithoutCoursesInput[] | lessonsUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: lessonsCreateOrConnectWithoutCoursesInput | lessonsCreateOrConnectWithoutCoursesInput[]
    createMany?: lessonsCreateManyCoursesInputEnvelope
    connect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
  }

  export type lessonProgressUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<lessonProgressCreateWithoutCourseInput, lessonProgressUncheckedCreateWithoutCourseInput> | lessonProgressCreateWithoutCourseInput[] | lessonProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: lessonProgressCreateOrConnectWithoutCourseInput | lessonProgressCreateOrConnectWithoutCourseInput[]
    createMany?: lessonProgressCreateManyCourseInputEnvelope
    connect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
  }

  export type paymentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<paymentCreateWithoutCourseInput, paymentUncheckedCreateWithoutCourseInput> | paymentCreateWithoutCourseInput[] | paymentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutCourseInput | paymentCreateOrConnectWithoutCourseInput[]
    createMany?: paymentCreateManyCourseInputEnvelope
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type userUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<userCreateWithoutCoursesInput, userUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: userCreateOrConnectWithoutCoursesInput
    upsert?: userUpsertWithoutCoursesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCoursesInput, userUpdateWithoutCoursesInput>, userUncheckedUpdateWithoutCoursesInput>
  }

  export type chapterUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<chapterCreateWithoutCoursesInput, chapterUncheckedCreateWithoutCoursesInput> | chapterCreateWithoutCoursesInput[] | chapterUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: chapterCreateOrConnectWithoutCoursesInput | chapterCreateOrConnectWithoutCoursesInput[]
    upsert?: chapterUpsertWithWhereUniqueWithoutCoursesInput | chapterUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: chapterCreateManyCoursesInputEnvelope
    set?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
    disconnect?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
    delete?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
    connect?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
    update?: chapterUpdateWithWhereUniqueWithoutCoursesInput | chapterUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: chapterUpdateManyWithWhereWithoutCoursesInput | chapterUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: chapterScalarWhereInput | chapterScalarWhereInput[]
  }

  export type enrollmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput> | enrollmentCreateWithoutCourseInput[] | enrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutCourseInput | enrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: enrollmentUpsertWithWhereUniqueWithoutCourseInput | enrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: enrollmentCreateManyCourseInputEnvelope
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    update?: enrollmentUpdateWithWhereUniqueWithoutCourseInput | enrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: enrollmentUpdateManyWithWhereWithoutCourseInput | enrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
  }

  export type lessonsUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<lessonsCreateWithoutCoursesInput, lessonsUncheckedCreateWithoutCoursesInput> | lessonsCreateWithoutCoursesInput[] | lessonsUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: lessonsCreateOrConnectWithoutCoursesInput | lessonsCreateOrConnectWithoutCoursesInput[]
    upsert?: lessonsUpsertWithWhereUniqueWithoutCoursesInput | lessonsUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: lessonsCreateManyCoursesInputEnvelope
    set?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    disconnect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    delete?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    connect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    update?: lessonsUpdateWithWhereUniqueWithoutCoursesInput | lessonsUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: lessonsUpdateManyWithWhereWithoutCoursesInput | lessonsUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: lessonsScalarWhereInput | lessonsScalarWhereInput[]
  }

  export type lessonProgressUpdateManyWithoutCourseNestedInput = {
    create?: XOR<lessonProgressCreateWithoutCourseInput, lessonProgressUncheckedCreateWithoutCourseInput> | lessonProgressCreateWithoutCourseInput[] | lessonProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: lessonProgressCreateOrConnectWithoutCourseInput | lessonProgressCreateOrConnectWithoutCourseInput[]
    upsert?: lessonProgressUpsertWithWhereUniqueWithoutCourseInput | lessonProgressUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: lessonProgressCreateManyCourseInputEnvelope
    set?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    disconnect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    delete?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    connect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    update?: lessonProgressUpdateWithWhereUniqueWithoutCourseInput | lessonProgressUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: lessonProgressUpdateManyWithWhereWithoutCourseInput | lessonProgressUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: lessonProgressScalarWhereInput | lessonProgressScalarWhereInput[]
  }

  export type paymentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<paymentCreateWithoutCourseInput, paymentUncheckedCreateWithoutCourseInput> | paymentCreateWithoutCourseInput[] | paymentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutCourseInput | paymentCreateOrConnectWithoutCourseInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutCourseInput | paymentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: paymentCreateManyCourseInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutCourseInput | paymentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutCourseInput | paymentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type chapterUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<chapterCreateWithoutCoursesInput, chapterUncheckedCreateWithoutCoursesInput> | chapterCreateWithoutCoursesInput[] | chapterUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: chapterCreateOrConnectWithoutCoursesInput | chapterCreateOrConnectWithoutCoursesInput[]
    upsert?: chapterUpsertWithWhereUniqueWithoutCoursesInput | chapterUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: chapterCreateManyCoursesInputEnvelope
    set?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
    disconnect?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
    delete?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
    connect?: chapterWhereUniqueInput | chapterWhereUniqueInput[]
    update?: chapterUpdateWithWhereUniqueWithoutCoursesInput | chapterUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: chapterUpdateManyWithWhereWithoutCoursesInput | chapterUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: chapterScalarWhereInput | chapterScalarWhereInput[]
  }

  export type enrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput> | enrollmentCreateWithoutCourseInput[] | enrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: enrollmentCreateOrConnectWithoutCourseInput | enrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: enrollmentUpsertWithWhereUniqueWithoutCourseInput | enrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: enrollmentCreateManyCourseInputEnvelope
    set?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    disconnect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    delete?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    connect?: enrollmentWhereUniqueInput | enrollmentWhereUniqueInput[]
    update?: enrollmentUpdateWithWhereUniqueWithoutCourseInput | enrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: enrollmentUpdateManyWithWhereWithoutCourseInput | enrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
  }

  export type lessonsUncheckedUpdateManyWithoutCoursesNestedInput = {
    create?: XOR<lessonsCreateWithoutCoursesInput, lessonsUncheckedCreateWithoutCoursesInput> | lessonsCreateWithoutCoursesInput[] | lessonsUncheckedCreateWithoutCoursesInput[]
    connectOrCreate?: lessonsCreateOrConnectWithoutCoursesInput | lessonsCreateOrConnectWithoutCoursesInput[]
    upsert?: lessonsUpsertWithWhereUniqueWithoutCoursesInput | lessonsUpsertWithWhereUniqueWithoutCoursesInput[]
    createMany?: lessonsCreateManyCoursesInputEnvelope
    set?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    disconnect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    delete?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    connect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    update?: lessonsUpdateWithWhereUniqueWithoutCoursesInput | lessonsUpdateWithWhereUniqueWithoutCoursesInput[]
    updateMany?: lessonsUpdateManyWithWhereWithoutCoursesInput | lessonsUpdateManyWithWhereWithoutCoursesInput[]
    deleteMany?: lessonsScalarWhereInput | lessonsScalarWhereInput[]
  }

  export type lessonProgressUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<lessonProgressCreateWithoutCourseInput, lessonProgressUncheckedCreateWithoutCourseInput> | lessonProgressCreateWithoutCourseInput[] | lessonProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: lessonProgressCreateOrConnectWithoutCourseInput | lessonProgressCreateOrConnectWithoutCourseInput[]
    upsert?: lessonProgressUpsertWithWhereUniqueWithoutCourseInput | lessonProgressUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: lessonProgressCreateManyCourseInputEnvelope
    set?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    disconnect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    delete?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    connect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    update?: lessonProgressUpdateWithWhereUniqueWithoutCourseInput | lessonProgressUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: lessonProgressUpdateManyWithWhereWithoutCourseInput | lessonProgressUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: lessonProgressScalarWhereInput | lessonProgressScalarWhereInput[]
  }

  export type paymentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<paymentCreateWithoutCourseInput, paymentUncheckedCreateWithoutCourseInput> | paymentCreateWithoutCourseInput[] | paymentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: paymentCreateOrConnectWithoutCourseInput | paymentCreateOrConnectWithoutCourseInput[]
    upsert?: paymentUpsertWithWhereUniqueWithoutCourseInput | paymentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: paymentCreateManyCourseInputEnvelope
    set?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    disconnect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    delete?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    connect?: paymentWhereUniqueInput | paymentWhereUniqueInput[]
    update?: paymentUpdateWithWhereUniqueWithoutCourseInput | paymentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: paymentUpdateManyWithWhereWithoutCourseInput | paymentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: paymentScalarWhereInput | paymentScalarWhereInput[]
  }

  export type courseCreateNestedOneWithoutChaptersInput = {
    create?: XOR<courseCreateWithoutChaptersInput, courseUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: courseCreateOrConnectWithoutChaptersInput
    connect?: courseWhereUniqueInput
  }

  export type lessonsCreateNestedManyWithoutChaptersInput = {
    create?: XOR<lessonsCreateWithoutChaptersInput, lessonsUncheckedCreateWithoutChaptersInput> | lessonsCreateWithoutChaptersInput[] | lessonsUncheckedCreateWithoutChaptersInput[]
    connectOrCreate?: lessonsCreateOrConnectWithoutChaptersInput | lessonsCreateOrConnectWithoutChaptersInput[]
    createMany?: lessonsCreateManyChaptersInputEnvelope
    connect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
  }

  export type lessonsUncheckedCreateNestedManyWithoutChaptersInput = {
    create?: XOR<lessonsCreateWithoutChaptersInput, lessonsUncheckedCreateWithoutChaptersInput> | lessonsCreateWithoutChaptersInput[] | lessonsUncheckedCreateWithoutChaptersInput[]
    connectOrCreate?: lessonsCreateOrConnectWithoutChaptersInput | lessonsCreateOrConnectWithoutChaptersInput[]
    createMany?: lessonsCreateManyChaptersInputEnvelope
    connect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
  }

  export type courseUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: XOR<courseCreateWithoutChaptersInput, courseUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: courseCreateOrConnectWithoutChaptersInput
    upsert?: courseUpsertWithoutChaptersInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutChaptersInput, courseUpdateWithoutChaptersInput>, courseUncheckedUpdateWithoutChaptersInput>
  }

  export type lessonsUpdateManyWithoutChaptersNestedInput = {
    create?: XOR<lessonsCreateWithoutChaptersInput, lessonsUncheckedCreateWithoutChaptersInput> | lessonsCreateWithoutChaptersInput[] | lessonsUncheckedCreateWithoutChaptersInput[]
    connectOrCreate?: lessonsCreateOrConnectWithoutChaptersInput | lessonsCreateOrConnectWithoutChaptersInput[]
    upsert?: lessonsUpsertWithWhereUniqueWithoutChaptersInput | lessonsUpsertWithWhereUniqueWithoutChaptersInput[]
    createMany?: lessonsCreateManyChaptersInputEnvelope
    set?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    disconnect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    delete?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    connect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    update?: lessonsUpdateWithWhereUniqueWithoutChaptersInput | lessonsUpdateWithWhereUniqueWithoutChaptersInput[]
    updateMany?: lessonsUpdateManyWithWhereWithoutChaptersInput | lessonsUpdateManyWithWhereWithoutChaptersInput[]
    deleteMany?: lessonsScalarWhereInput | lessonsScalarWhereInput[]
  }

  export type lessonsUncheckedUpdateManyWithoutChaptersNestedInput = {
    create?: XOR<lessonsCreateWithoutChaptersInput, lessonsUncheckedCreateWithoutChaptersInput> | lessonsCreateWithoutChaptersInput[] | lessonsUncheckedCreateWithoutChaptersInput[]
    connectOrCreate?: lessonsCreateOrConnectWithoutChaptersInput | lessonsCreateOrConnectWithoutChaptersInput[]
    upsert?: lessonsUpsertWithWhereUniqueWithoutChaptersInput | lessonsUpsertWithWhereUniqueWithoutChaptersInput[]
    createMany?: lessonsCreateManyChaptersInputEnvelope
    set?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    disconnect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    delete?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    connect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    update?: lessonsUpdateWithWhereUniqueWithoutChaptersInput | lessonsUpdateWithWhereUniqueWithoutChaptersInput[]
    updateMany?: lessonsUpdateManyWithWhereWithoutChaptersInput | lessonsUpdateManyWithWhereWithoutChaptersInput[]
    deleteMany?: lessonsScalarWhereInput | lessonsScalarWhereInput[]
  }

  export type lessonProgressCreateNestedManyWithoutLessonInput = {
    create?: XOR<lessonProgressCreateWithoutLessonInput, lessonProgressUncheckedCreateWithoutLessonInput> | lessonProgressCreateWithoutLessonInput[] | lessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: lessonProgressCreateOrConnectWithoutLessonInput | lessonProgressCreateOrConnectWithoutLessonInput[]
    createMany?: lessonProgressCreateManyLessonInputEnvelope
    connect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutLessonInput = {
    create?: XOR<userCreateWithoutLessonInput, userUncheckedCreateWithoutLessonInput>
    connectOrCreate?: userCreateOrConnectWithoutLessonInput
    connect?: userWhereUniqueInput
  }

  export type chapterCreateNestedOneWithoutLessonInput = {
    create?: XOR<chapterCreateWithoutLessonInput, chapterUncheckedCreateWithoutLessonInput>
    connectOrCreate?: chapterCreateOrConnectWithoutLessonInput
    connect?: chapterWhereUniqueInput
  }

  export type courseCreateNestedOneWithoutLessonInput = {
    create?: XOR<courseCreateWithoutLessonInput, courseUncheckedCreateWithoutLessonInput>
    connectOrCreate?: courseCreateOrConnectWithoutLessonInput
    connect?: courseWhereUniqueInput
  }

  export type lessonProgressUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<lessonProgressCreateWithoutLessonInput, lessonProgressUncheckedCreateWithoutLessonInput> | lessonProgressCreateWithoutLessonInput[] | lessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: lessonProgressCreateOrConnectWithoutLessonInput | lessonProgressCreateOrConnectWithoutLessonInput[]
    createMany?: lessonProgressCreateManyLessonInputEnvelope
    connect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type lessonProgressUpdateManyWithoutLessonNestedInput = {
    create?: XOR<lessonProgressCreateWithoutLessonInput, lessonProgressUncheckedCreateWithoutLessonInput> | lessonProgressCreateWithoutLessonInput[] | lessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: lessonProgressCreateOrConnectWithoutLessonInput | lessonProgressCreateOrConnectWithoutLessonInput[]
    upsert?: lessonProgressUpsertWithWhereUniqueWithoutLessonInput | lessonProgressUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: lessonProgressCreateManyLessonInputEnvelope
    set?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    disconnect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    delete?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    connect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    update?: lessonProgressUpdateWithWhereUniqueWithoutLessonInput | lessonProgressUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: lessonProgressUpdateManyWithWhereWithoutLessonInput | lessonProgressUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: lessonProgressScalarWhereInput | lessonProgressScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutLessonNestedInput = {
    create?: XOR<userCreateWithoutLessonInput, userUncheckedCreateWithoutLessonInput>
    connectOrCreate?: userCreateOrConnectWithoutLessonInput
    upsert?: userUpsertWithoutLessonInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLessonInput, userUpdateWithoutLessonInput>, userUncheckedUpdateWithoutLessonInput>
  }

  export type chapterUpdateOneRequiredWithoutLessonNestedInput = {
    create?: XOR<chapterCreateWithoutLessonInput, chapterUncheckedCreateWithoutLessonInput>
    connectOrCreate?: chapterCreateOrConnectWithoutLessonInput
    upsert?: chapterUpsertWithoutLessonInput
    connect?: chapterWhereUniqueInput
    update?: XOR<XOR<chapterUpdateToOneWithWhereWithoutLessonInput, chapterUpdateWithoutLessonInput>, chapterUncheckedUpdateWithoutLessonInput>
  }

  export type courseUpdateOneRequiredWithoutLessonNestedInput = {
    create?: XOR<courseCreateWithoutLessonInput, courseUncheckedCreateWithoutLessonInput>
    connectOrCreate?: courseCreateOrConnectWithoutLessonInput
    upsert?: courseUpsertWithoutLessonInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutLessonInput, courseUpdateWithoutLessonInput>, courseUncheckedUpdateWithoutLessonInput>
  }

  export type lessonProgressUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<lessonProgressCreateWithoutLessonInput, lessonProgressUncheckedCreateWithoutLessonInput> | lessonProgressCreateWithoutLessonInput[] | lessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: lessonProgressCreateOrConnectWithoutLessonInput | lessonProgressCreateOrConnectWithoutLessonInput[]
    upsert?: lessonProgressUpsertWithWhereUniqueWithoutLessonInput | lessonProgressUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: lessonProgressCreateManyLessonInputEnvelope
    set?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    disconnect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    delete?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    connect?: lessonProgressWhereUniqueInput | lessonProgressWhereUniqueInput[]
    update?: lessonProgressUpdateWithWhereUniqueWithoutLessonInput | lessonProgressUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: lessonProgressUpdateManyWithWhereWithoutLessonInput | lessonProgressUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: lessonProgressScalarWhereInput | lessonProgressScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutLessonProgressInput = {
    create?: XOR<userCreateWithoutLessonProgressInput, userUncheckedCreateWithoutLessonProgressInput>
    connectOrCreate?: userCreateOrConnectWithoutLessonProgressInput
    connect?: userWhereUniqueInput
  }

  export type lessonsCreateNestedOneWithoutLessonProgressInput = {
    create?: XOR<lessonsCreateWithoutLessonProgressInput, lessonsUncheckedCreateWithoutLessonProgressInput>
    connectOrCreate?: lessonsCreateOrConnectWithoutLessonProgressInput
    connect?: lessonsWhereUniqueInput
  }

  export type courseCreateNestedOneWithoutLessonProgressInput = {
    create?: XOR<courseCreateWithoutLessonProgressInput, courseUncheckedCreateWithoutLessonProgressInput>
    connectOrCreate?: courseCreateOrConnectWithoutLessonProgressInput
    connect?: courseWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutLessonProgressNestedInput = {
    create?: XOR<userCreateWithoutLessonProgressInput, userUncheckedCreateWithoutLessonProgressInput>
    connectOrCreate?: userCreateOrConnectWithoutLessonProgressInput
    upsert?: userUpsertWithoutLessonProgressInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLessonProgressInput, userUpdateWithoutLessonProgressInput>, userUncheckedUpdateWithoutLessonProgressInput>
  }

  export type lessonsUpdateOneRequiredWithoutLessonProgressNestedInput = {
    create?: XOR<lessonsCreateWithoutLessonProgressInput, lessonsUncheckedCreateWithoutLessonProgressInput>
    connectOrCreate?: lessonsCreateOrConnectWithoutLessonProgressInput
    upsert?: lessonsUpsertWithoutLessonProgressInput
    connect?: lessonsWhereUniqueInput
    update?: XOR<XOR<lessonsUpdateToOneWithWhereWithoutLessonProgressInput, lessonsUpdateWithoutLessonProgressInput>, lessonsUncheckedUpdateWithoutLessonProgressInput>
  }

  export type courseUpdateOneRequiredWithoutLessonProgressNestedInput = {
    create?: XOR<courseCreateWithoutLessonProgressInput, courseUncheckedCreateWithoutLessonProgressInput>
    connectOrCreate?: courseCreateOrConnectWithoutLessonProgressInput
    upsert?: courseUpsertWithoutLessonProgressInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutLessonProgressInput, courseUpdateWithoutLessonProgressInput>, courseUncheckedUpdateWithoutLessonProgressInput>
  }

  export type userCreateNestedOneWithoutEnrollementsInput = {
    create?: XOR<userCreateWithoutEnrollementsInput, userUncheckedCreateWithoutEnrollementsInput>
    connectOrCreate?: userCreateOrConnectWithoutEnrollementsInput
    connect?: userWhereUniqueInput
  }

  export type courseCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<courseCreateWithoutEnrollmentsInput, courseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: courseCreateOrConnectWithoutEnrollmentsInput
    connect?: courseWhereUniqueInput
  }

  export type EnumEnrollmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.EnrollmentStatus
  }

  export type userUpdateOneRequiredWithoutEnrollementsNestedInput = {
    create?: XOR<userCreateWithoutEnrollementsInput, userUncheckedCreateWithoutEnrollementsInput>
    connectOrCreate?: userCreateOrConnectWithoutEnrollementsInput
    upsert?: userUpsertWithoutEnrollementsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutEnrollementsInput, userUpdateWithoutEnrollementsInput>, userUncheckedUpdateWithoutEnrollementsInput>
  }

  export type courseUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<courseCreateWithoutEnrollmentsInput, courseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: courseCreateOrConnectWithoutEnrollmentsInput
    upsert?: courseUpsertWithoutEnrollmentsInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutEnrollmentsInput, courseUpdateWithoutEnrollmentsInput>, courseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type userCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<userCreateWithoutPaymentsInput, userUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: userCreateOrConnectWithoutPaymentsInput
    connect?: userWhereUniqueInput
  }

  export type courseCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<courseCreateWithoutPaymentsInput, courseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: courseCreateOrConnectWithoutPaymentsInput
    connect?: courseWhereUniqueInput
  }

  export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.Currency
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type userUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<userCreateWithoutPaymentsInput, userUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: userCreateOrConnectWithoutPaymentsInput
    upsert?: userUpsertWithoutPaymentsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPaymentsInput, userUpdateWithoutPaymentsInput>, userUncheckedUpdateWithoutPaymentsInput>
  }

  export type courseUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<courseCreateWithoutPaymentsInput, courseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: courseCreateOrConnectWithoutPaymentsInput
    upsert?: courseUpsertWithoutPaymentsInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutPaymentsInput, courseUpdateWithoutPaymentsInput>, courseUncheckedUpdateWithoutPaymentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumSexNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexNullableFilter<$PrismaModel> | $Enums.Sex | null
  }

  export type NestedEnumROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEFilter<$PrismaModel> | $Enums.ROLE
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumSexNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sex | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexNullableFilter<$PrismaModel>
    _max?: NestedEnumSexNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEWithAggregatesFilter<$PrismaModel> | $Enums.ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLEFilter<$PrismaModel>
    _max?: NestedEnumROLEFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumEnrollmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusFilter<$PrismaModel> | $Enums.EnrollmentStatus
  }

  export type NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EnrollmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
    _max?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type courseCreateWithoutUsersInput = {
    course_img: string
    cover_img?: string | null
    preview_course_url: string
    title: string
    description?: string | null
    is_published?: boolean
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    chapters?: chapterCreateNestedManyWithoutCoursesInput
    enrollments?: enrollmentCreateNestedManyWithoutCourseInput
    lesson?: lessonsCreateNestedManyWithoutCoursesInput
    lessonProgress?: lessonProgressCreateNestedManyWithoutCourseInput
    payments?: paymentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutUsersInput = {
    id?: number
    course_img: string
    cover_img?: string | null
    preview_course_url: string
    title: string
    description?: string | null
    is_published?: boolean
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    chapters?: chapterUncheckedCreateNestedManyWithoutCoursesInput
    enrollments?: enrollmentUncheckedCreateNestedManyWithoutCourseInput
    lesson?: lessonsUncheckedCreateNestedManyWithoutCoursesInput
    lessonProgress?: lessonProgressUncheckedCreateNestedManyWithoutCourseInput
    payments?: paymentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutUsersInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutUsersInput, courseUncheckedCreateWithoutUsersInput>
  }

  export type courseCreateManyUsersInputEnvelope = {
    data: courseCreateManyUsersInput | courseCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type lessonsCreateWithoutUsersInput = {
    id?: string
    title: string
    content: string
    video_url?: string | null
    is_completed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    lessonProgress?: lessonProgressCreateNestedManyWithoutLessonInput
    chapters: chapterCreateNestedOneWithoutLessonInput
    courses: courseCreateNestedOneWithoutLessonInput
  }

  export type lessonsUncheckedCreateWithoutUsersInput = {
    id?: string
    courseId: number
    chapterId: string
    title: string
    content: string
    video_url?: string | null
    is_completed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    lessonProgress?: lessonProgressUncheckedCreateNestedManyWithoutLessonInput
  }

  export type lessonsCreateOrConnectWithoutUsersInput = {
    where: lessonsWhereUniqueInput
    create: XOR<lessonsCreateWithoutUsersInput, lessonsUncheckedCreateWithoutUsersInput>
  }

  export type lessonsCreateManyUsersInputEnvelope = {
    data: lessonsCreateManyUsersInput | lessonsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type lessonProgressCreateWithoutUserInput = {
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lesson: lessonsCreateNestedOneWithoutLessonProgressInput
    course: courseCreateNestedOneWithoutLessonProgressInput
  }

  export type lessonProgressUncheckedCreateWithoutUserInput = {
    id?: number
    lessonId: string
    courseId: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type lessonProgressCreateOrConnectWithoutUserInput = {
    where: lessonProgressWhereUniqueInput
    create: XOR<lessonProgressCreateWithoutUserInput, lessonProgressUncheckedCreateWithoutUserInput>
  }

  export type lessonProgressCreateManyUserInputEnvelope = {
    data: lessonProgressCreateManyUserInput | lessonProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type enrollmentCreateWithoutUsersInput = {
    id?: string
    paymentId: string
    is_enrolled?: boolean
    progress?: number
    status?: $Enums.EnrollmentStatus
    created_at?: Date | string
    updated_at?: Date | string
    course: courseCreateNestedOneWithoutEnrollmentsInput
  }

  export type enrollmentUncheckedCreateWithoutUsersInput = {
    id?: string
    courseId: number
    paymentId: string
    is_enrolled?: boolean
    progress?: number
    status?: $Enums.EnrollmentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type enrollmentCreateOrConnectWithoutUsersInput = {
    where: enrollmentWhereUniqueInput
    create: XOR<enrollmentCreateWithoutUsersInput, enrollmentUncheckedCreateWithoutUsersInput>
  }

  export type enrollmentCreateManyUsersInputEnvelope = {
    data: enrollmentCreateManyUsersInput | enrollmentCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type paymentCreateWithoutUserInput = {
    id?: string
    enrollementId?: string | null
    phone_Number: string
    amount: number
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    payment_method: $Enums.PaymentMethod
    isEnrolled?: boolean
    transaction_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    course: courseCreateNestedOneWithoutPaymentsInput
  }

  export type paymentUncheckedCreateWithoutUserInput = {
    id?: string
    courseId: number
    enrollementId?: string | null
    phone_Number: string
    amount: number
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    payment_method: $Enums.PaymentMethod
    isEnrolled?: boolean
    transaction_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type paymentCreateOrConnectWithoutUserInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
  }

  export type paymentCreateManyUserInputEnvelope = {
    data: paymentCreateManyUserInput | paymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type courseUpsertWithWhereUniqueWithoutUsersInput = {
    where: courseWhereUniqueInput
    update: XOR<courseUpdateWithoutUsersInput, courseUncheckedUpdateWithoutUsersInput>
    create: XOR<courseCreateWithoutUsersInput, courseUncheckedCreateWithoutUsersInput>
  }

  export type courseUpdateWithWhereUniqueWithoutUsersInput = {
    where: courseWhereUniqueInput
    data: XOR<courseUpdateWithoutUsersInput, courseUncheckedUpdateWithoutUsersInput>
  }

  export type courseUpdateManyWithWhereWithoutUsersInput = {
    where: courseScalarWhereInput
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyWithoutUsersInput>
  }

  export type courseScalarWhereInput = {
    AND?: courseScalarWhereInput | courseScalarWhereInput[]
    OR?: courseScalarWhereInput[]
    NOT?: courseScalarWhereInput | courseScalarWhereInput[]
    id?: IntFilter<"course"> | number
    userId?: IntFilter<"course"> | number
    course_img?: StringFilter<"course"> | string
    cover_img?: StringNullableFilter<"course"> | string | null
    preview_course_url?: StringFilter<"course"> | string
    title?: StringFilter<"course"> | string
    description?: StringNullableFilter<"course"> | string | null
    is_published?: BoolFilter<"course"> | boolean
    price?: FloatFilter<"course"> | number
    created_at?: DateTimeFilter<"course"> | Date | string
    updated_at?: DateTimeFilter<"course"> | Date | string
  }

  export type lessonsUpsertWithWhereUniqueWithoutUsersInput = {
    where: lessonsWhereUniqueInput
    update: XOR<lessonsUpdateWithoutUsersInput, lessonsUncheckedUpdateWithoutUsersInput>
    create: XOR<lessonsCreateWithoutUsersInput, lessonsUncheckedCreateWithoutUsersInput>
  }

  export type lessonsUpdateWithWhereUniqueWithoutUsersInput = {
    where: lessonsWhereUniqueInput
    data: XOR<lessonsUpdateWithoutUsersInput, lessonsUncheckedUpdateWithoutUsersInput>
  }

  export type lessonsUpdateManyWithWhereWithoutUsersInput = {
    where: lessonsScalarWhereInput
    data: XOR<lessonsUpdateManyMutationInput, lessonsUncheckedUpdateManyWithoutUsersInput>
  }

  export type lessonsScalarWhereInput = {
    AND?: lessonsScalarWhereInput | lessonsScalarWhereInput[]
    OR?: lessonsScalarWhereInput[]
    NOT?: lessonsScalarWhereInput | lessonsScalarWhereInput[]
    id?: StringFilter<"lessons"> | string
    userId?: IntFilter<"lessons"> | number
    courseId?: IntFilter<"lessons"> | number
    chapterId?: StringFilter<"lessons"> | string
    title?: StringFilter<"lessons"> | string
    content?: StringFilter<"lessons"> | string
    video_url?: StringNullableFilter<"lessons"> | string | null
    is_completed?: BoolNullableFilter<"lessons"> | boolean | null
    created_at?: DateTimeFilter<"lessons"> | Date | string
    updated_at?: DateTimeFilter<"lessons"> | Date | string
  }

  export type lessonProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: lessonProgressWhereUniqueInput
    update: XOR<lessonProgressUpdateWithoutUserInput, lessonProgressUncheckedUpdateWithoutUserInput>
    create: XOR<lessonProgressCreateWithoutUserInput, lessonProgressUncheckedCreateWithoutUserInput>
  }

  export type lessonProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: lessonProgressWhereUniqueInput
    data: XOR<lessonProgressUpdateWithoutUserInput, lessonProgressUncheckedUpdateWithoutUserInput>
  }

  export type lessonProgressUpdateManyWithWhereWithoutUserInput = {
    where: lessonProgressScalarWhereInput
    data: XOR<lessonProgressUpdateManyMutationInput, lessonProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type lessonProgressScalarWhereInput = {
    AND?: lessonProgressScalarWhereInput | lessonProgressScalarWhereInput[]
    OR?: lessonProgressScalarWhereInput[]
    NOT?: lessonProgressScalarWhereInput | lessonProgressScalarWhereInput[]
    id?: IntFilter<"lessonProgress"> | number
    userId?: IntFilter<"lessonProgress"> | number
    lessonId?: StringFilter<"lessonProgress"> | string
    courseId?: IntFilter<"lessonProgress"> | number
    isCompleted?: BoolFilter<"lessonProgress"> | boolean
    createdAt?: DateTimeFilter<"lessonProgress"> | Date | string
    updatedAt?: DateTimeFilter<"lessonProgress"> | Date | string
  }

  export type enrollmentUpsertWithWhereUniqueWithoutUsersInput = {
    where: enrollmentWhereUniqueInput
    update: XOR<enrollmentUpdateWithoutUsersInput, enrollmentUncheckedUpdateWithoutUsersInput>
    create: XOR<enrollmentCreateWithoutUsersInput, enrollmentUncheckedCreateWithoutUsersInput>
  }

  export type enrollmentUpdateWithWhereUniqueWithoutUsersInput = {
    where: enrollmentWhereUniqueInput
    data: XOR<enrollmentUpdateWithoutUsersInput, enrollmentUncheckedUpdateWithoutUsersInput>
  }

  export type enrollmentUpdateManyWithWhereWithoutUsersInput = {
    where: enrollmentScalarWhereInput
    data: XOR<enrollmentUpdateManyMutationInput, enrollmentUncheckedUpdateManyWithoutUsersInput>
  }

  export type enrollmentScalarWhereInput = {
    AND?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
    OR?: enrollmentScalarWhereInput[]
    NOT?: enrollmentScalarWhereInput | enrollmentScalarWhereInput[]
    id?: StringFilter<"enrollment"> | string
    userId?: IntFilter<"enrollment"> | number
    courseId?: IntFilter<"enrollment"> | number
    paymentId?: StringFilter<"enrollment"> | string
    is_enrolled?: BoolFilter<"enrollment"> | boolean
    progress?: FloatFilter<"enrollment"> | number
    status?: EnumEnrollmentStatusFilter<"enrollment"> | $Enums.EnrollmentStatus
    created_at?: DateTimeFilter<"enrollment"> | Date | string
    updated_at?: DateTimeFilter<"enrollment"> | Date | string
  }

  export type paymentUpsertWithWhereUniqueWithoutUserInput = {
    where: paymentWhereUniqueInput
    update: XOR<paymentUpdateWithoutUserInput, paymentUncheckedUpdateWithoutUserInput>
    create: XOR<paymentCreateWithoutUserInput, paymentUncheckedCreateWithoutUserInput>
  }

  export type paymentUpdateWithWhereUniqueWithoutUserInput = {
    where: paymentWhereUniqueInput
    data: XOR<paymentUpdateWithoutUserInput, paymentUncheckedUpdateWithoutUserInput>
  }

  export type paymentUpdateManyWithWhereWithoutUserInput = {
    where: paymentScalarWhereInput
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutUserInput>
  }

  export type paymentScalarWhereInput = {
    AND?: paymentScalarWhereInput | paymentScalarWhereInput[]
    OR?: paymentScalarWhereInput[]
    NOT?: paymentScalarWhereInput | paymentScalarWhereInput[]
    id?: StringFilter<"payment"> | string
    userId?: IntFilter<"payment"> | number
    courseId?: IntFilter<"payment"> | number
    enrollementId?: StringNullableFilter<"payment"> | string | null
    phone_Number?: StringFilter<"payment"> | string
    amount?: FloatFilter<"payment"> | number
    currency?: EnumCurrencyFilter<"payment"> | $Enums.Currency
    status?: EnumPaymentStatusFilter<"payment"> | $Enums.PaymentStatus
    payment_method?: EnumPaymentMethodFilter<"payment"> | $Enums.PaymentMethod
    isEnrolled?: BoolFilter<"payment"> | boolean
    transaction_date?: DateTimeFilter<"payment"> | Date | string
    created_at?: DateTimeFilter<"payment"> | Date | string
    updated_at?: DateTimeFilter<"payment"> | Date | string
  }

  export type userCreateWithoutCoursesInput = {
    username: string
    email: string
    full_name: string
    profilePhoto: string
    coverPhoto: string
    sex?: $Enums.Sex | null
    phone_number: string
    password: string
    role?: $Enums.ROLE
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    lesson?: lessonsCreateNestedManyWithoutUsersInput
    lessonProgress?: lessonProgressCreateNestedManyWithoutUserInput
    enrollements?: enrollmentCreateNestedManyWithoutUsersInput
    payments?: paymentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCoursesInput = {
    id?: number
    username: string
    email: string
    full_name: string
    profilePhoto: string
    coverPhoto: string
    sex?: $Enums.Sex | null
    phone_number: string
    password: string
    role?: $Enums.ROLE
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    lesson?: lessonsUncheckedCreateNestedManyWithoutUsersInput
    lessonProgress?: lessonProgressUncheckedCreateNestedManyWithoutUserInput
    enrollements?: enrollmentUncheckedCreateNestedManyWithoutUsersInput
    payments?: paymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCoursesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCoursesInput, userUncheckedCreateWithoutCoursesInput>
  }

  export type chapterCreateWithoutCoursesInput = {
    id?: string
    userId: number
    chapterTitle: string
    created_at?: Date | string
    updated_at?: Date | string
    lesson?: lessonsCreateNestedManyWithoutChaptersInput
  }

  export type chapterUncheckedCreateWithoutCoursesInput = {
    id?: string
    userId: number
    chapterTitle: string
    created_at?: Date | string
    updated_at?: Date | string
    lesson?: lessonsUncheckedCreateNestedManyWithoutChaptersInput
  }

  export type chapterCreateOrConnectWithoutCoursesInput = {
    where: chapterWhereUniqueInput
    create: XOR<chapterCreateWithoutCoursesInput, chapterUncheckedCreateWithoutCoursesInput>
  }

  export type chapterCreateManyCoursesInputEnvelope = {
    data: chapterCreateManyCoursesInput | chapterCreateManyCoursesInput[]
    skipDuplicates?: boolean
  }

  export type enrollmentCreateWithoutCourseInput = {
    id?: string
    paymentId: string
    is_enrolled?: boolean
    progress?: number
    status?: $Enums.EnrollmentStatus
    created_at?: Date | string
    updated_at?: Date | string
    users: userCreateNestedOneWithoutEnrollementsInput
  }

  export type enrollmentUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: number
    paymentId: string
    is_enrolled?: boolean
    progress?: number
    status?: $Enums.EnrollmentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type enrollmentCreateOrConnectWithoutCourseInput = {
    where: enrollmentWhereUniqueInput
    create: XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput>
  }

  export type enrollmentCreateManyCourseInputEnvelope = {
    data: enrollmentCreateManyCourseInput | enrollmentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type lessonsCreateWithoutCoursesInput = {
    id?: string
    title: string
    content: string
    video_url?: string | null
    is_completed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    lessonProgress?: lessonProgressCreateNestedManyWithoutLessonInput
    users: userCreateNestedOneWithoutLessonInput
    chapters: chapterCreateNestedOneWithoutLessonInput
  }

  export type lessonsUncheckedCreateWithoutCoursesInput = {
    id?: string
    userId: number
    chapterId: string
    title: string
    content: string
    video_url?: string | null
    is_completed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    lessonProgress?: lessonProgressUncheckedCreateNestedManyWithoutLessonInput
  }

  export type lessonsCreateOrConnectWithoutCoursesInput = {
    where: lessonsWhereUniqueInput
    create: XOR<lessonsCreateWithoutCoursesInput, lessonsUncheckedCreateWithoutCoursesInput>
  }

  export type lessonsCreateManyCoursesInputEnvelope = {
    data: lessonsCreateManyCoursesInput | lessonsCreateManyCoursesInput[]
    skipDuplicates?: boolean
  }

  export type lessonProgressCreateWithoutCourseInput = {
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutLessonProgressInput
    lesson: lessonsCreateNestedOneWithoutLessonProgressInput
  }

  export type lessonProgressUncheckedCreateWithoutCourseInput = {
    id?: number
    userId: number
    lessonId: string
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type lessonProgressCreateOrConnectWithoutCourseInput = {
    where: lessonProgressWhereUniqueInput
    create: XOR<lessonProgressCreateWithoutCourseInput, lessonProgressUncheckedCreateWithoutCourseInput>
  }

  export type lessonProgressCreateManyCourseInputEnvelope = {
    data: lessonProgressCreateManyCourseInput | lessonProgressCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type paymentCreateWithoutCourseInput = {
    id?: string
    enrollementId?: string | null
    phone_Number: string
    amount: number
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    payment_method: $Enums.PaymentMethod
    isEnrolled?: boolean
    transaction_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    user: userCreateNestedOneWithoutPaymentsInput
  }

  export type paymentUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: number
    enrollementId?: string | null
    phone_Number: string
    amount: number
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    payment_method: $Enums.PaymentMethod
    isEnrolled?: boolean
    transaction_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type paymentCreateOrConnectWithoutCourseInput = {
    where: paymentWhereUniqueInput
    create: XOR<paymentCreateWithoutCourseInput, paymentUncheckedCreateWithoutCourseInput>
  }

  export type paymentCreateManyCourseInputEnvelope = {
    data: paymentCreateManyCourseInput | paymentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutCoursesInput = {
    update: XOR<userUpdateWithoutCoursesInput, userUncheckedUpdateWithoutCoursesInput>
    create: XOR<userCreateWithoutCoursesInput, userUncheckedCreateWithoutCoursesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCoursesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCoursesInput, userUncheckedUpdateWithoutCoursesInput>
  }

  export type userUpdateWithoutCoursesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: lessonsUpdateManyWithoutUsersNestedInput
    lessonProgress?: lessonProgressUpdateManyWithoutUserNestedInput
    enrollements?: enrollmentUpdateManyWithoutUsersNestedInput
    payments?: paymentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: lessonsUncheckedUpdateManyWithoutUsersNestedInput
    lessonProgress?: lessonProgressUncheckedUpdateManyWithoutUserNestedInput
    enrollements?: enrollmentUncheckedUpdateManyWithoutUsersNestedInput
    payments?: paymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type chapterUpsertWithWhereUniqueWithoutCoursesInput = {
    where: chapterWhereUniqueInput
    update: XOR<chapterUpdateWithoutCoursesInput, chapterUncheckedUpdateWithoutCoursesInput>
    create: XOR<chapterCreateWithoutCoursesInput, chapterUncheckedCreateWithoutCoursesInput>
  }

  export type chapterUpdateWithWhereUniqueWithoutCoursesInput = {
    where: chapterWhereUniqueInput
    data: XOR<chapterUpdateWithoutCoursesInput, chapterUncheckedUpdateWithoutCoursesInput>
  }

  export type chapterUpdateManyWithWhereWithoutCoursesInput = {
    where: chapterScalarWhereInput
    data: XOR<chapterUpdateManyMutationInput, chapterUncheckedUpdateManyWithoutCoursesInput>
  }

  export type chapterScalarWhereInput = {
    AND?: chapterScalarWhereInput | chapterScalarWhereInput[]
    OR?: chapterScalarWhereInput[]
    NOT?: chapterScalarWhereInput | chapterScalarWhereInput[]
    id?: StringFilter<"chapter"> | string
    userId?: IntFilter<"chapter"> | number
    courseId?: IntFilter<"chapter"> | number
    chapterTitle?: StringFilter<"chapter"> | string
    created_at?: DateTimeFilter<"chapter"> | Date | string
    updated_at?: DateTimeFilter<"chapter"> | Date | string
  }

  export type enrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: enrollmentWhereUniqueInput
    update: XOR<enrollmentUpdateWithoutCourseInput, enrollmentUncheckedUpdateWithoutCourseInput>
    create: XOR<enrollmentCreateWithoutCourseInput, enrollmentUncheckedCreateWithoutCourseInput>
  }

  export type enrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: enrollmentWhereUniqueInput
    data: XOR<enrollmentUpdateWithoutCourseInput, enrollmentUncheckedUpdateWithoutCourseInput>
  }

  export type enrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: enrollmentScalarWhereInput
    data: XOR<enrollmentUpdateManyMutationInput, enrollmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type lessonsUpsertWithWhereUniqueWithoutCoursesInput = {
    where: lessonsWhereUniqueInput
    update: XOR<lessonsUpdateWithoutCoursesInput, lessonsUncheckedUpdateWithoutCoursesInput>
    create: XOR<lessonsCreateWithoutCoursesInput, lessonsUncheckedCreateWithoutCoursesInput>
  }

  export type lessonsUpdateWithWhereUniqueWithoutCoursesInput = {
    where: lessonsWhereUniqueInput
    data: XOR<lessonsUpdateWithoutCoursesInput, lessonsUncheckedUpdateWithoutCoursesInput>
  }

  export type lessonsUpdateManyWithWhereWithoutCoursesInput = {
    where: lessonsScalarWhereInput
    data: XOR<lessonsUpdateManyMutationInput, lessonsUncheckedUpdateManyWithoutCoursesInput>
  }

  export type lessonProgressUpsertWithWhereUniqueWithoutCourseInput = {
    where: lessonProgressWhereUniqueInput
    update: XOR<lessonProgressUpdateWithoutCourseInput, lessonProgressUncheckedUpdateWithoutCourseInput>
    create: XOR<lessonProgressCreateWithoutCourseInput, lessonProgressUncheckedCreateWithoutCourseInput>
  }

  export type lessonProgressUpdateWithWhereUniqueWithoutCourseInput = {
    where: lessonProgressWhereUniqueInput
    data: XOR<lessonProgressUpdateWithoutCourseInput, lessonProgressUncheckedUpdateWithoutCourseInput>
  }

  export type lessonProgressUpdateManyWithWhereWithoutCourseInput = {
    where: lessonProgressScalarWhereInput
    data: XOR<lessonProgressUpdateManyMutationInput, lessonProgressUncheckedUpdateManyWithoutCourseInput>
  }

  export type paymentUpsertWithWhereUniqueWithoutCourseInput = {
    where: paymentWhereUniqueInput
    update: XOR<paymentUpdateWithoutCourseInput, paymentUncheckedUpdateWithoutCourseInput>
    create: XOR<paymentCreateWithoutCourseInput, paymentUncheckedCreateWithoutCourseInput>
  }

  export type paymentUpdateWithWhereUniqueWithoutCourseInput = {
    where: paymentWhereUniqueInput
    data: XOR<paymentUpdateWithoutCourseInput, paymentUncheckedUpdateWithoutCourseInput>
  }

  export type paymentUpdateManyWithWhereWithoutCourseInput = {
    where: paymentScalarWhereInput
    data: XOR<paymentUpdateManyMutationInput, paymentUncheckedUpdateManyWithoutCourseInput>
  }

  export type courseCreateWithoutChaptersInput = {
    course_img: string
    cover_img?: string | null
    preview_course_url: string
    title: string
    description?: string | null
    is_published?: boolean
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    users: userCreateNestedOneWithoutCoursesInput
    enrollments?: enrollmentCreateNestedManyWithoutCourseInput
    lesson?: lessonsCreateNestedManyWithoutCoursesInput
    lessonProgress?: lessonProgressCreateNestedManyWithoutCourseInput
    payments?: paymentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutChaptersInput = {
    id?: number
    userId: number
    course_img: string
    cover_img?: string | null
    preview_course_url: string
    title: string
    description?: string | null
    is_published?: boolean
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    enrollments?: enrollmentUncheckedCreateNestedManyWithoutCourseInput
    lesson?: lessonsUncheckedCreateNestedManyWithoutCoursesInput
    lessonProgress?: lessonProgressUncheckedCreateNestedManyWithoutCourseInput
    payments?: paymentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutChaptersInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutChaptersInput, courseUncheckedCreateWithoutChaptersInput>
  }

  export type lessonsCreateWithoutChaptersInput = {
    id?: string
    title: string
    content: string
    video_url?: string | null
    is_completed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    lessonProgress?: lessonProgressCreateNestedManyWithoutLessonInput
    users: userCreateNestedOneWithoutLessonInput
    courses: courseCreateNestedOneWithoutLessonInput
  }

  export type lessonsUncheckedCreateWithoutChaptersInput = {
    id?: string
    userId: number
    courseId: number
    title: string
    content: string
    video_url?: string | null
    is_completed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    lessonProgress?: lessonProgressUncheckedCreateNestedManyWithoutLessonInput
  }

  export type lessonsCreateOrConnectWithoutChaptersInput = {
    where: lessonsWhereUniqueInput
    create: XOR<lessonsCreateWithoutChaptersInput, lessonsUncheckedCreateWithoutChaptersInput>
  }

  export type lessonsCreateManyChaptersInputEnvelope = {
    data: lessonsCreateManyChaptersInput | lessonsCreateManyChaptersInput[]
    skipDuplicates?: boolean
  }

  export type courseUpsertWithoutChaptersInput = {
    update: XOR<courseUpdateWithoutChaptersInput, courseUncheckedUpdateWithoutChaptersInput>
    create: XOR<courseCreateWithoutChaptersInput, courseUncheckedCreateWithoutChaptersInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutChaptersInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutChaptersInput, courseUncheckedUpdateWithoutChaptersInput>
  }

  export type courseUpdateWithoutChaptersInput = {
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUpdateOneRequiredWithoutCoursesNestedInput
    enrollments?: enrollmentUpdateManyWithoutCourseNestedInput
    lesson?: lessonsUpdateManyWithoutCoursesNestedInput
    lessonProgress?: lessonProgressUpdateManyWithoutCourseNestedInput
    payments?: paymentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutChaptersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: enrollmentUncheckedUpdateManyWithoutCourseNestedInput
    lesson?: lessonsUncheckedUpdateManyWithoutCoursesNestedInput
    lessonProgress?: lessonProgressUncheckedUpdateManyWithoutCourseNestedInput
    payments?: paymentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type lessonsUpsertWithWhereUniqueWithoutChaptersInput = {
    where: lessonsWhereUniqueInput
    update: XOR<lessonsUpdateWithoutChaptersInput, lessonsUncheckedUpdateWithoutChaptersInput>
    create: XOR<lessonsCreateWithoutChaptersInput, lessonsUncheckedCreateWithoutChaptersInput>
  }

  export type lessonsUpdateWithWhereUniqueWithoutChaptersInput = {
    where: lessonsWhereUniqueInput
    data: XOR<lessonsUpdateWithoutChaptersInput, lessonsUncheckedUpdateWithoutChaptersInput>
  }

  export type lessonsUpdateManyWithWhereWithoutChaptersInput = {
    where: lessonsScalarWhereInput
    data: XOR<lessonsUpdateManyMutationInput, lessonsUncheckedUpdateManyWithoutChaptersInput>
  }

  export type lessonProgressCreateWithoutLessonInput = {
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutLessonProgressInput
    course: courseCreateNestedOneWithoutLessonProgressInput
  }

  export type lessonProgressUncheckedCreateWithoutLessonInput = {
    id?: number
    userId: number
    courseId: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type lessonProgressCreateOrConnectWithoutLessonInput = {
    where: lessonProgressWhereUniqueInput
    create: XOR<lessonProgressCreateWithoutLessonInput, lessonProgressUncheckedCreateWithoutLessonInput>
  }

  export type lessonProgressCreateManyLessonInputEnvelope = {
    data: lessonProgressCreateManyLessonInput | lessonProgressCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutLessonInput = {
    username: string
    email: string
    full_name: string
    profilePhoto: string
    coverPhoto: string
    sex?: $Enums.Sex | null
    phone_number: string
    password: string
    role?: $Enums.ROLE
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    courses?: courseCreateNestedManyWithoutUsersInput
    lessonProgress?: lessonProgressCreateNestedManyWithoutUserInput
    enrollements?: enrollmentCreateNestedManyWithoutUsersInput
    payments?: paymentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutLessonInput = {
    id?: number
    username: string
    email: string
    full_name: string
    profilePhoto: string
    coverPhoto: string
    sex?: $Enums.Sex | null
    phone_number: string
    password: string
    role?: $Enums.ROLE
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    courses?: courseUncheckedCreateNestedManyWithoutUsersInput
    lessonProgress?: lessonProgressUncheckedCreateNestedManyWithoutUserInput
    enrollements?: enrollmentUncheckedCreateNestedManyWithoutUsersInput
    payments?: paymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutLessonInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLessonInput, userUncheckedCreateWithoutLessonInput>
  }

  export type chapterCreateWithoutLessonInput = {
    id?: string
    userId: number
    chapterTitle: string
    created_at?: Date | string
    updated_at?: Date | string
    courses: courseCreateNestedOneWithoutChaptersInput
  }

  export type chapterUncheckedCreateWithoutLessonInput = {
    id?: string
    userId: number
    courseId: number
    chapterTitle: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type chapterCreateOrConnectWithoutLessonInput = {
    where: chapterWhereUniqueInput
    create: XOR<chapterCreateWithoutLessonInput, chapterUncheckedCreateWithoutLessonInput>
  }

  export type courseCreateWithoutLessonInput = {
    course_img: string
    cover_img?: string | null
    preview_course_url: string
    title: string
    description?: string | null
    is_published?: boolean
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    users: userCreateNestedOneWithoutCoursesInput
    chapters?: chapterCreateNestedManyWithoutCoursesInput
    enrollments?: enrollmentCreateNestedManyWithoutCourseInput
    lessonProgress?: lessonProgressCreateNestedManyWithoutCourseInput
    payments?: paymentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutLessonInput = {
    id?: number
    userId: number
    course_img: string
    cover_img?: string | null
    preview_course_url: string
    title: string
    description?: string | null
    is_published?: boolean
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    chapters?: chapterUncheckedCreateNestedManyWithoutCoursesInput
    enrollments?: enrollmentUncheckedCreateNestedManyWithoutCourseInput
    lessonProgress?: lessonProgressUncheckedCreateNestedManyWithoutCourseInput
    payments?: paymentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutLessonInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutLessonInput, courseUncheckedCreateWithoutLessonInput>
  }

  export type lessonProgressUpsertWithWhereUniqueWithoutLessonInput = {
    where: lessonProgressWhereUniqueInput
    update: XOR<lessonProgressUpdateWithoutLessonInput, lessonProgressUncheckedUpdateWithoutLessonInput>
    create: XOR<lessonProgressCreateWithoutLessonInput, lessonProgressUncheckedCreateWithoutLessonInput>
  }

  export type lessonProgressUpdateWithWhereUniqueWithoutLessonInput = {
    where: lessonProgressWhereUniqueInput
    data: XOR<lessonProgressUpdateWithoutLessonInput, lessonProgressUncheckedUpdateWithoutLessonInput>
  }

  export type lessonProgressUpdateManyWithWhereWithoutLessonInput = {
    where: lessonProgressScalarWhereInput
    data: XOR<lessonProgressUpdateManyMutationInput, lessonProgressUncheckedUpdateManyWithoutLessonInput>
  }

  export type userUpsertWithoutLessonInput = {
    update: XOR<userUpdateWithoutLessonInput, userUncheckedUpdateWithoutLessonInput>
    create: XOR<userCreateWithoutLessonInput, userUncheckedCreateWithoutLessonInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLessonInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLessonInput, userUncheckedUpdateWithoutLessonInput>
  }

  export type userUpdateWithoutLessonInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: courseUpdateManyWithoutUsersNestedInput
    lessonProgress?: lessonProgressUpdateManyWithoutUserNestedInput
    enrollements?: enrollmentUpdateManyWithoutUsersNestedInput
    payments?: paymentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: courseUncheckedUpdateManyWithoutUsersNestedInput
    lessonProgress?: lessonProgressUncheckedUpdateManyWithoutUserNestedInput
    enrollements?: enrollmentUncheckedUpdateManyWithoutUsersNestedInput
    payments?: paymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type chapterUpsertWithoutLessonInput = {
    update: XOR<chapterUpdateWithoutLessonInput, chapterUncheckedUpdateWithoutLessonInput>
    create: XOR<chapterCreateWithoutLessonInput, chapterUncheckedCreateWithoutLessonInput>
    where?: chapterWhereInput
  }

  export type chapterUpdateToOneWithWhereWithoutLessonInput = {
    where?: chapterWhereInput
    data: XOR<chapterUpdateWithoutLessonInput, chapterUncheckedUpdateWithoutLessonInput>
  }

  export type chapterUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    chapterTitle?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: courseUpdateOneRequiredWithoutChaptersNestedInput
  }

  export type chapterUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    chapterTitle?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseUpsertWithoutLessonInput = {
    update: XOR<courseUpdateWithoutLessonInput, courseUncheckedUpdateWithoutLessonInput>
    create: XOR<courseCreateWithoutLessonInput, courseUncheckedCreateWithoutLessonInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutLessonInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutLessonInput, courseUncheckedUpdateWithoutLessonInput>
  }

  export type courseUpdateWithoutLessonInput = {
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUpdateOneRequiredWithoutCoursesNestedInput
    chapters?: chapterUpdateManyWithoutCoursesNestedInput
    enrollments?: enrollmentUpdateManyWithoutCourseNestedInput
    lessonProgress?: lessonProgressUpdateManyWithoutCourseNestedInput
    payments?: paymentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: chapterUncheckedUpdateManyWithoutCoursesNestedInput
    enrollments?: enrollmentUncheckedUpdateManyWithoutCourseNestedInput
    lessonProgress?: lessonProgressUncheckedUpdateManyWithoutCourseNestedInput
    payments?: paymentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type userCreateWithoutLessonProgressInput = {
    username: string
    email: string
    full_name: string
    profilePhoto: string
    coverPhoto: string
    sex?: $Enums.Sex | null
    phone_number: string
    password: string
    role?: $Enums.ROLE
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    courses?: courseCreateNestedManyWithoutUsersInput
    lesson?: lessonsCreateNestedManyWithoutUsersInput
    enrollements?: enrollmentCreateNestedManyWithoutUsersInput
    payments?: paymentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutLessonProgressInput = {
    id?: number
    username: string
    email: string
    full_name: string
    profilePhoto: string
    coverPhoto: string
    sex?: $Enums.Sex | null
    phone_number: string
    password: string
    role?: $Enums.ROLE
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    courses?: courseUncheckedCreateNestedManyWithoutUsersInput
    lesson?: lessonsUncheckedCreateNestedManyWithoutUsersInput
    enrollements?: enrollmentUncheckedCreateNestedManyWithoutUsersInput
    payments?: paymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutLessonProgressInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLessonProgressInput, userUncheckedCreateWithoutLessonProgressInput>
  }

  export type lessonsCreateWithoutLessonProgressInput = {
    id?: string
    title: string
    content: string
    video_url?: string | null
    is_completed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    users: userCreateNestedOneWithoutLessonInput
    chapters: chapterCreateNestedOneWithoutLessonInput
    courses: courseCreateNestedOneWithoutLessonInput
  }

  export type lessonsUncheckedCreateWithoutLessonProgressInput = {
    id?: string
    userId: number
    courseId: number
    chapterId: string
    title: string
    content: string
    video_url?: string | null
    is_completed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lessonsCreateOrConnectWithoutLessonProgressInput = {
    where: lessonsWhereUniqueInput
    create: XOR<lessonsCreateWithoutLessonProgressInput, lessonsUncheckedCreateWithoutLessonProgressInput>
  }

  export type courseCreateWithoutLessonProgressInput = {
    course_img: string
    cover_img?: string | null
    preview_course_url: string
    title: string
    description?: string | null
    is_published?: boolean
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    users: userCreateNestedOneWithoutCoursesInput
    chapters?: chapterCreateNestedManyWithoutCoursesInput
    enrollments?: enrollmentCreateNestedManyWithoutCourseInput
    lesson?: lessonsCreateNestedManyWithoutCoursesInput
    payments?: paymentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutLessonProgressInput = {
    id?: number
    userId: number
    course_img: string
    cover_img?: string | null
    preview_course_url: string
    title: string
    description?: string | null
    is_published?: boolean
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    chapters?: chapterUncheckedCreateNestedManyWithoutCoursesInput
    enrollments?: enrollmentUncheckedCreateNestedManyWithoutCourseInput
    lesson?: lessonsUncheckedCreateNestedManyWithoutCoursesInput
    payments?: paymentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutLessonProgressInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutLessonProgressInput, courseUncheckedCreateWithoutLessonProgressInput>
  }

  export type userUpsertWithoutLessonProgressInput = {
    update: XOR<userUpdateWithoutLessonProgressInput, userUncheckedUpdateWithoutLessonProgressInput>
    create: XOR<userCreateWithoutLessonProgressInput, userUncheckedCreateWithoutLessonProgressInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLessonProgressInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLessonProgressInput, userUncheckedUpdateWithoutLessonProgressInput>
  }

  export type userUpdateWithoutLessonProgressInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: courseUpdateManyWithoutUsersNestedInput
    lesson?: lessonsUpdateManyWithoutUsersNestedInput
    enrollements?: enrollmentUpdateManyWithoutUsersNestedInput
    payments?: paymentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLessonProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: courseUncheckedUpdateManyWithoutUsersNestedInput
    lesson?: lessonsUncheckedUpdateManyWithoutUsersNestedInput
    enrollements?: enrollmentUncheckedUpdateManyWithoutUsersNestedInput
    payments?: paymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type lessonsUpsertWithoutLessonProgressInput = {
    update: XOR<lessonsUpdateWithoutLessonProgressInput, lessonsUncheckedUpdateWithoutLessonProgressInput>
    create: XOR<lessonsCreateWithoutLessonProgressInput, lessonsUncheckedCreateWithoutLessonProgressInput>
    where?: lessonsWhereInput
  }

  export type lessonsUpdateToOneWithWhereWithoutLessonProgressInput = {
    where?: lessonsWhereInput
    data: XOR<lessonsUpdateWithoutLessonProgressInput, lessonsUncheckedUpdateWithoutLessonProgressInput>
  }

  export type lessonsUpdateWithoutLessonProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUpdateOneRequiredWithoutLessonNestedInput
    chapters?: chapterUpdateOneRequiredWithoutLessonNestedInput
    courses?: courseUpdateOneRequiredWithoutLessonNestedInput
  }

  export type lessonsUncheckedUpdateWithoutLessonProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    chapterId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type courseUpsertWithoutLessonProgressInput = {
    update: XOR<courseUpdateWithoutLessonProgressInput, courseUncheckedUpdateWithoutLessonProgressInput>
    create: XOR<courseCreateWithoutLessonProgressInput, courseUncheckedCreateWithoutLessonProgressInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutLessonProgressInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutLessonProgressInput, courseUncheckedUpdateWithoutLessonProgressInput>
  }

  export type courseUpdateWithoutLessonProgressInput = {
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUpdateOneRequiredWithoutCoursesNestedInput
    chapters?: chapterUpdateManyWithoutCoursesNestedInput
    enrollments?: enrollmentUpdateManyWithoutCourseNestedInput
    lesson?: lessonsUpdateManyWithoutCoursesNestedInput
    payments?: paymentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutLessonProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: chapterUncheckedUpdateManyWithoutCoursesNestedInput
    enrollments?: enrollmentUncheckedUpdateManyWithoutCourseNestedInput
    lesson?: lessonsUncheckedUpdateManyWithoutCoursesNestedInput
    payments?: paymentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type userCreateWithoutEnrollementsInput = {
    username: string
    email: string
    full_name: string
    profilePhoto: string
    coverPhoto: string
    sex?: $Enums.Sex | null
    phone_number: string
    password: string
    role?: $Enums.ROLE
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    courses?: courseCreateNestedManyWithoutUsersInput
    lesson?: lessonsCreateNestedManyWithoutUsersInput
    lessonProgress?: lessonProgressCreateNestedManyWithoutUserInput
    payments?: paymentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutEnrollementsInput = {
    id?: number
    username: string
    email: string
    full_name: string
    profilePhoto: string
    coverPhoto: string
    sex?: $Enums.Sex | null
    phone_number: string
    password: string
    role?: $Enums.ROLE
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    courses?: courseUncheckedCreateNestedManyWithoutUsersInput
    lesson?: lessonsUncheckedCreateNestedManyWithoutUsersInput
    lessonProgress?: lessonProgressUncheckedCreateNestedManyWithoutUserInput
    payments?: paymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutEnrollementsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutEnrollementsInput, userUncheckedCreateWithoutEnrollementsInput>
  }

  export type courseCreateWithoutEnrollmentsInput = {
    course_img: string
    cover_img?: string | null
    preview_course_url: string
    title: string
    description?: string | null
    is_published?: boolean
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    users: userCreateNestedOneWithoutCoursesInput
    chapters?: chapterCreateNestedManyWithoutCoursesInput
    lesson?: lessonsCreateNestedManyWithoutCoursesInput
    lessonProgress?: lessonProgressCreateNestedManyWithoutCourseInput
    payments?: paymentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    userId: number
    course_img: string
    cover_img?: string | null
    preview_course_url: string
    title: string
    description?: string | null
    is_published?: boolean
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    chapters?: chapterUncheckedCreateNestedManyWithoutCoursesInput
    lesson?: lessonsUncheckedCreateNestedManyWithoutCoursesInput
    lessonProgress?: lessonProgressUncheckedCreateNestedManyWithoutCourseInput
    payments?: paymentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutEnrollmentsInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutEnrollmentsInput, courseUncheckedCreateWithoutEnrollmentsInput>
  }

  export type userUpsertWithoutEnrollementsInput = {
    update: XOR<userUpdateWithoutEnrollementsInput, userUncheckedUpdateWithoutEnrollementsInput>
    create: XOR<userCreateWithoutEnrollementsInput, userUncheckedCreateWithoutEnrollementsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutEnrollementsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutEnrollementsInput, userUncheckedUpdateWithoutEnrollementsInput>
  }

  export type userUpdateWithoutEnrollementsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: courseUpdateManyWithoutUsersNestedInput
    lesson?: lessonsUpdateManyWithoutUsersNestedInput
    lessonProgress?: lessonProgressUpdateManyWithoutUserNestedInput
    payments?: paymentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutEnrollementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: courseUncheckedUpdateManyWithoutUsersNestedInput
    lesson?: lessonsUncheckedUpdateManyWithoutUsersNestedInput
    lessonProgress?: lessonProgressUncheckedUpdateManyWithoutUserNestedInput
    payments?: paymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type courseUpsertWithoutEnrollmentsInput = {
    update: XOR<courseUpdateWithoutEnrollmentsInput, courseUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<courseCreateWithoutEnrollmentsInput, courseUncheckedCreateWithoutEnrollmentsInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutEnrollmentsInput, courseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type courseUpdateWithoutEnrollmentsInput = {
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUpdateOneRequiredWithoutCoursesNestedInput
    chapters?: chapterUpdateManyWithoutCoursesNestedInput
    lesson?: lessonsUpdateManyWithoutCoursesNestedInput
    lessonProgress?: lessonProgressUpdateManyWithoutCourseNestedInput
    payments?: paymentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: chapterUncheckedUpdateManyWithoutCoursesNestedInput
    lesson?: lessonsUncheckedUpdateManyWithoutCoursesNestedInput
    lessonProgress?: lessonProgressUncheckedUpdateManyWithoutCourseNestedInput
    payments?: paymentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type userCreateWithoutPaymentsInput = {
    username: string
    email: string
    full_name: string
    profilePhoto: string
    coverPhoto: string
    sex?: $Enums.Sex | null
    phone_number: string
    password: string
    role?: $Enums.ROLE
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    courses?: courseCreateNestedManyWithoutUsersInput
    lesson?: lessonsCreateNestedManyWithoutUsersInput
    lessonProgress?: lessonProgressCreateNestedManyWithoutUserInput
    enrollements?: enrollmentCreateNestedManyWithoutUsersInput
  }

  export type userUncheckedCreateWithoutPaymentsInput = {
    id?: number
    username: string
    email: string
    full_name: string
    profilePhoto: string
    coverPhoto: string
    sex?: $Enums.Sex | null
    phone_number: string
    password: string
    role?: $Enums.ROLE
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    courses?: courseUncheckedCreateNestedManyWithoutUsersInput
    lesson?: lessonsUncheckedCreateNestedManyWithoutUsersInput
    lessonProgress?: lessonProgressUncheckedCreateNestedManyWithoutUserInput
    enrollements?: enrollmentUncheckedCreateNestedManyWithoutUsersInput
  }

  export type userCreateOrConnectWithoutPaymentsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPaymentsInput, userUncheckedCreateWithoutPaymentsInput>
  }

  export type courseCreateWithoutPaymentsInput = {
    course_img: string
    cover_img?: string | null
    preview_course_url: string
    title: string
    description?: string | null
    is_published?: boolean
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    users: userCreateNestedOneWithoutCoursesInput
    chapters?: chapterCreateNestedManyWithoutCoursesInput
    enrollments?: enrollmentCreateNestedManyWithoutCourseInput
    lesson?: lessonsCreateNestedManyWithoutCoursesInput
    lessonProgress?: lessonProgressCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutPaymentsInput = {
    id?: number
    userId: number
    course_img: string
    cover_img?: string | null
    preview_course_url: string
    title: string
    description?: string | null
    is_published?: boolean
    price: number
    created_at?: Date | string
    updated_at?: Date | string
    chapters?: chapterUncheckedCreateNestedManyWithoutCoursesInput
    enrollments?: enrollmentUncheckedCreateNestedManyWithoutCourseInput
    lesson?: lessonsUncheckedCreateNestedManyWithoutCoursesInput
    lessonProgress?: lessonProgressUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutPaymentsInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutPaymentsInput, courseUncheckedCreateWithoutPaymentsInput>
  }

  export type userUpsertWithoutPaymentsInput = {
    update: XOR<userUpdateWithoutPaymentsInput, userUncheckedUpdateWithoutPaymentsInput>
    create: XOR<userCreateWithoutPaymentsInput, userUncheckedCreateWithoutPaymentsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPaymentsInput, userUncheckedUpdateWithoutPaymentsInput>
  }

  export type userUpdateWithoutPaymentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: courseUpdateManyWithoutUsersNestedInput
    lesson?: lessonsUpdateManyWithoutUsersNestedInput
    lessonProgress?: lessonProgressUpdateManyWithoutUserNestedInput
    enrollements?: enrollmentUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: StringFieldUpdateOperationsInput | string
    coverPhoto?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumSexFieldUpdateOperationsInput | $Enums.Sex | null
    phone_number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: courseUncheckedUpdateManyWithoutUsersNestedInput
    lesson?: lessonsUncheckedUpdateManyWithoutUsersNestedInput
    lessonProgress?: lessonProgressUncheckedUpdateManyWithoutUserNestedInput
    enrollements?: enrollmentUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type courseUpsertWithoutPaymentsInput = {
    update: XOR<courseUpdateWithoutPaymentsInput, courseUncheckedUpdateWithoutPaymentsInput>
    create: XOR<courseCreateWithoutPaymentsInput, courseUncheckedCreateWithoutPaymentsInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutPaymentsInput, courseUncheckedUpdateWithoutPaymentsInput>
  }

  export type courseUpdateWithoutPaymentsInput = {
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUpdateOneRequiredWithoutCoursesNestedInput
    chapters?: chapterUpdateManyWithoutCoursesNestedInput
    enrollments?: enrollmentUpdateManyWithoutCourseNestedInput
    lesson?: lessonsUpdateManyWithoutCoursesNestedInput
    lessonProgress?: lessonProgressUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: chapterUncheckedUpdateManyWithoutCoursesNestedInput
    enrollments?: enrollmentUncheckedUpdateManyWithoutCourseNestedInput
    lesson?: lessonsUncheckedUpdateManyWithoutCoursesNestedInput
    lessonProgress?: lessonProgressUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseCreateManyUsersInput = {
    id?: number
    course_img: string
    cover_img?: string | null
    preview_course_url: string
    title: string
    description?: string | null
    is_published?: boolean
    price: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lessonsCreateManyUsersInput = {
    id?: string
    courseId: number
    chapterId: string
    title: string
    content: string
    video_url?: string | null
    is_completed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lessonProgressCreateManyUserInput = {
    id?: number
    lessonId: string
    courseId: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type enrollmentCreateManyUsersInput = {
    id?: string
    courseId: number
    paymentId: string
    is_enrolled?: boolean
    progress?: number
    status?: $Enums.EnrollmentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type paymentCreateManyUserInput = {
    id?: string
    courseId: number
    enrollementId?: string | null
    phone_Number: string
    amount: number
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    payment_method: $Enums.PaymentMethod
    isEnrolled?: boolean
    transaction_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type courseUpdateWithoutUsersInput = {
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: chapterUpdateManyWithoutCoursesNestedInput
    enrollments?: enrollmentUpdateManyWithoutCourseNestedInput
    lesson?: lessonsUpdateManyWithoutCoursesNestedInput
    lessonProgress?: lessonProgressUpdateManyWithoutCourseNestedInput
    payments?: paymentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chapters?: chapterUncheckedUpdateManyWithoutCoursesNestedInput
    enrollments?: enrollmentUncheckedUpdateManyWithoutCourseNestedInput
    lesson?: lessonsUncheckedUpdateManyWithoutCoursesNestedInput
    lessonProgress?: lessonProgressUncheckedUpdateManyWithoutCourseNestedInput
    payments?: paymentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    course_img?: StringFieldUpdateOperationsInput | string
    cover_img?: NullableStringFieldUpdateOperationsInput | string | null
    preview_course_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_published?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lessonsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonProgress?: lessonProgressUpdateManyWithoutLessonNestedInput
    chapters?: chapterUpdateOneRequiredWithoutLessonNestedInput
    courses?: courseUpdateOneRequiredWithoutLessonNestedInput
  }

  export type lessonsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    chapterId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonProgress?: lessonProgressUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type lessonsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    chapterId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lessonProgressUpdateWithoutUserInput = {
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: lessonsUpdateOneRequiredWithoutLessonProgressNestedInput
    course?: courseUpdateOneRequiredWithoutLessonProgressNestedInput
  }

  export type lessonProgressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lessonProgressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enrollmentUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    is_enrolled?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: courseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type enrollmentUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    paymentId?: StringFieldUpdateOperationsInput | string
    is_enrolled?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enrollmentUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    paymentId?: StringFieldUpdateOperationsInput | string
    is_enrolled?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrollementId?: NullableStringFieldUpdateOperationsInput | string | null
    phone_Number?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    isEnrolled?: BoolFieldUpdateOperationsInput | boolean
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: courseUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type paymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    enrollementId?: NullableStringFieldUpdateOperationsInput | string | null
    phone_Number?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    isEnrolled?: BoolFieldUpdateOperationsInput | boolean
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    enrollementId?: NullableStringFieldUpdateOperationsInput | string | null
    phone_Number?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    isEnrolled?: BoolFieldUpdateOperationsInput | boolean
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type chapterCreateManyCoursesInput = {
    id?: string
    userId: number
    chapterTitle: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type enrollmentCreateManyCourseInput = {
    id?: string
    userId: number
    paymentId: string
    is_enrolled?: boolean
    progress?: number
    status?: $Enums.EnrollmentStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lessonsCreateManyCoursesInput = {
    id?: string
    userId: number
    chapterId: string
    title: string
    content: string
    video_url?: string | null
    is_completed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lessonProgressCreateManyCourseInput = {
    id?: number
    userId: number
    lessonId: string
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type paymentCreateManyCourseInput = {
    id?: string
    userId: number
    enrollementId?: string | null
    phone_Number: string
    amount: number
    currency: $Enums.Currency
    status?: $Enums.PaymentStatus
    payment_method: $Enums.PaymentMethod
    isEnrolled?: boolean
    transaction_date?: Date | string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type chapterUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    chapterTitle?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: lessonsUpdateManyWithoutChaptersNestedInput
  }

  export type chapterUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    chapterTitle?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: lessonsUncheckedUpdateManyWithoutChaptersNestedInput
  }

  export type chapterUncheckedUpdateManyWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    chapterTitle?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enrollmentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    is_enrolled?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUpdateOneRequiredWithoutEnrollementsNestedInput
  }

  export type enrollmentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    paymentId?: StringFieldUpdateOperationsInput | string
    is_enrolled?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type enrollmentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    paymentId?: StringFieldUpdateOperationsInput | string
    is_enrolled?: BoolFieldUpdateOperationsInput | boolean
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lessonsUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonProgress?: lessonProgressUpdateManyWithoutLessonNestedInput
    users?: userUpdateOneRequiredWithoutLessonNestedInput
    chapters?: chapterUpdateOneRequiredWithoutLessonNestedInput
  }

  export type lessonsUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    chapterId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonProgress?: lessonProgressUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type lessonsUncheckedUpdateManyWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    chapterId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lessonProgressUpdateWithoutCourseInput = {
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutLessonProgressNestedInput
    lesson?: lessonsUpdateOneRequiredWithoutLessonProgressNestedInput
  }

  export type lessonProgressUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    lessonId?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lessonProgressUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    lessonId?: StringFieldUpdateOperationsInput | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrollementId?: NullableStringFieldUpdateOperationsInput | string | null
    phone_Number?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    isEnrolled?: BoolFieldUpdateOperationsInput | boolean
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type paymentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    enrollementId?: NullableStringFieldUpdateOperationsInput | string | null
    phone_Number?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    isEnrolled?: BoolFieldUpdateOperationsInput | boolean
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type paymentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    enrollementId?: NullableStringFieldUpdateOperationsInput | string | null
    phone_Number?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    isEnrolled?: BoolFieldUpdateOperationsInput | boolean
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lessonsCreateManyChaptersInput = {
    id?: string
    userId: number
    courseId: number
    title: string
    content: string
    video_url?: string | null
    is_completed?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type lessonsUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonProgress?: lessonProgressUpdateManyWithoutLessonNestedInput
    users?: userUpdateOneRequiredWithoutLessonNestedInput
    courses?: courseUpdateOneRequiredWithoutLessonNestedInput
  }

  export type lessonsUncheckedUpdateWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonProgress?: lessonProgressUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type lessonsUncheckedUpdateManyWithoutChaptersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    video_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_completed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lessonProgressCreateManyLessonInput = {
    id?: number
    userId: number
    courseId: number
    isCompleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type lessonProgressUpdateWithoutLessonInput = {
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutLessonProgressNestedInput
    course?: courseUpdateOneRequiredWithoutLessonProgressNestedInput
  }

  export type lessonProgressUncheckedUpdateWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lessonProgressUncheckedUpdateManyWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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