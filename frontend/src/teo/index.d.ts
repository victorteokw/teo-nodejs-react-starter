import Decimal from "decimal.js"


export type ExistKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
}[keyof T]

type HasSelect = {
    select: any
}

type HasInclude = {
    include: any
}

export type CheckSelectInclude<T, S, U> = T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

export type SelectSubset<T, U> = U extends HasSelect
    ? {
        [K in ExistKeys<U['select']>]: K extends keyof T ? T[K] : never
    }
    : T

export type Enumerable<T> = T | Array<T>

export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
}

export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
} : never

type Teo__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}

type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Teo__Pick<T, MaybeTupleToUnion<K>>

export type Boolean = True | False

export type True = 1

export type False = 0

export type Not<B extends Boolean> = {
  0: 1
  1: 0
}[B]

type NoExpand<T> = T extends unknown ? T : never;

type Key = string | number | symbol;
type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];

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

export type ComputeRaw<A extends any> = A extends Function ? A : {
  [K in keyof A]: A[K];
} & {};

export type OptionalFlat<O> = {
  [K in keyof O]?: O[K];
} & {};

type _Record<K extends keyof any, T> = {
  [P in K]: T;
};

type AtLeast<O extends object, K extends string> = NoExpand<
  O extends unknown
  ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
    | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
  : never>;

type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

export type Strict<U extends object> = ComputeRaw<_Strict<U>>;

export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

export type Union = any

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


type IsObject<T extends any> = T extends Array<any>
? False
: T extends Date
? False
: T extends Uint8Array
? False
: T extends object
? True
: False

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

export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

export type SubsetIntersection<T, U, K> = {
  [key in keyof T]: key extends keyof U ? T[key] : never
} & K

type _TupleToUnion<T> = T extends (infer E)[] ? E : never
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T



export declare class TeoError extends Error {

    type: string

    fields: {[key: string]: string} | null

    constructor(responseError: std.ResponseError)

    get name(): string
}


    /**
     * **Example scalar fields**
     *
     * This synthesized enum doesn't have a description.
     */
    export type ExampleScalarFields = "datetime" | "float" | "id" | "int" | "string"

    /**
     * **Example serializable scalar fields**
     *
     * This synthesized enum doesn't have a description.
     */
    export type ExampleSerializableScalarFields = "datetime" | "float" | "id" | "int" | "string"

    /**
     * **Example relations**
     *
     * This synthesized enum doesn't have a description.
     */
    export type ExampleRelations = undefined

    /**
     * **Example direct relations**
     *
     * This synthesized enum doesn't have a description.
     */
    export type ExampleDirectRelations = undefined

    /**
     * **Example indirect relations**
     *
     * This synthesized enum doesn't have a description.
     */
    export type ExampleIndirectRelations = undefined

/// ## Example scalar fields
///
/// This synthesized enum doesn't have a description.
export const enum ExampleScalarFieldsEnumType {
    /// ### Datetime
    ///
    /// This synthesized enum member doesn't have a description.
    datetime = "datetime",
    /// ### Float
    ///
    /// This synthesized enum member doesn't have a description.
    float = "float",
    /// ### Id
    ///
    /// This synthesized enum member doesn't have a description.
    id = "id",
    /// ### Int
    ///
    /// This synthesized enum member doesn't have a description.
    int = "int",
    /// ### String
    ///
    /// This synthesized enum member doesn't have a description.
    string = "string",
}
/// ## Example serializable scalar fields
///
/// This synthesized enum doesn't have a description.
export const enum ExampleSerializableScalarFieldsEnumType {
    /// ### Datetime
    ///
    /// This synthesized enum member doesn't have a description.
    datetime = "datetime",
    /// ### Float
    ///
    /// This synthesized enum member doesn't have a description.
    float = "float",
    /// ### Id
    ///
    /// This synthesized enum member doesn't have a description.
    id = "id",
    /// ### Int
    ///
    /// This synthesized enum member doesn't have a description.
    int = "int",
    /// ### String
    ///
    /// This synthesized enum member doesn't have a description.
    string = "string",
}
/// ## Example relations
///
/// This synthesized enum doesn't have a description.
export const enum ExampleRelationsEnumType {
}
/// ## Example direct relations
///
/// This synthesized enum doesn't have a description.
export const enum ExampleDirectRelationsEnumType {
}
/// ## Example indirect relations
///
/// This synthesized enum doesn't have a description.
export const enum ExampleIndirectRelationsEnumType {
}


/**
 * **Example select**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleSelect = {
    
    /**
     * **Datetime**
     *
     * This synthesized field doesn't have a description.
     */
     datetime?: boolean
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: boolean
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: boolean
    
}

/**
 * **Example include**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleInclude = {
    
}

/**
 * **Example where input**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleWhereInput = {
    
    /**
     * **And**
     *
     * This synthesized field doesn't have a description.
     */
     AND?: ExampleWhereInput[]
    
    /**
     * **Not**
     *
     * This synthesized field doesn't have a description.
     */
     NOT?: ExampleWhereInput
    
    /**
     * **Or**
     *
     * This synthesized field doesn't have a description.
     */
     OR?: ExampleWhereInput[]
    
    /**
     * **Datetime**
     *
     * This synthesized field doesn't have a description.
     */
     datetime?: Date | null | std.NullableFilter<Date>
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number | null | std.NullableFilter<number>
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number | std.Filter<number>
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number | null | std.NullableFilter<number>
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: string | null | std.StringNullableFilter
    
}

/**
 * **Example where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleWhereUniqueInput = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id: number
    
}

/**
 * **Example scalar where with aggregates input**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleScalarWhereWithAggregatesInput = {
    
    /**
     * **And**
     *
     * This synthesized field doesn't have a description.
     */
     AND?: ExampleWhereInput[]
    
    /**
     * **Not**
     *
     * This synthesized field doesn't have a description.
     */
     NOT?: ExampleWhereInput
    
    /**
     * **Or**
     *
     * This synthesized field doesn't have a description.
     */
     OR?: ExampleWhereInput[]
    
    /**
     * **Datetime**
     *
     * This synthesized field doesn't have a description.
     */
     datetime?: Date | null | std.NullableAggregatesFilter<Date>
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number | null | std.FloatNumberNullableWithAggregatesFilter<number>
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number | std.IntNumberWithAggregatesFilter<number>
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number | null | std.IntNumberNullableWithAggregatesFilter<number>
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: string | null | std.StringNullableWithAggregatesFilter
    
}

/**
 * **Example relation filter**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleRelationFilter = {
    
    /**
     * **Is**
     *
     * This synthesized field doesn't have a description.
     */
     is: ExampleWhereInput
    
    /**
     * **Is Not**
     *
     * This synthesized field doesn't have a description.
     */
     isNot: ExampleWhereInput
    
}

/**
 * **Example list relation filter**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleListRelationFilter = {
    
    /**
     * **Every**
     *
     * This synthesized field doesn't have a description.
     */
     every: ExampleWhereInput
    
    /**
     * **None**
     *
     * This synthesized field doesn't have a description.
     */
     none: ExampleWhereInput
    
    /**
     * **Some**
     *
     * This synthesized field doesn't have a description.
     */
     some: ExampleWhereInput
    
}

/**
 * **Example order by input**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleOrderByInput = {
    
    /**
     * **Datetime**
     *
     * This synthesized field doesn't have a description.
     */
     datetime?: std.Sort
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: std.Sort
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: std.Sort
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: std.Sort
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: std.Sort
    
}

/**
 * **Example count aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleCountAggregateInputType = {
    
    /**
     * **All**
     *
     * This synthesized field doesn't have a description.
     */
     _all?: boolean
    
    /**
     * **Datetime**
     *
     * This synthesized field doesn't have a description.
     */
     datetime?: boolean
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: boolean
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: boolean
    
}

/**
 * **Example sum aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleSumAggregateInputType = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
}

/**
 * **Example avg aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleAvgAggregateInputType = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
}

/**
 * **Example min aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleMinAggregateInputType = {
    
    /**
     * **Datetime**
     *
     * This synthesized field doesn't have a description.
     */
     datetime?: boolean
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: boolean
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: boolean
    
}

/**
 * **Example max aggregate input type**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleMaxAggregateInputType = {
    
    /**
     * **Datetime**
     *
     * This synthesized field doesn't have a description.
     */
     datetime?: boolean
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: boolean
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: boolean
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: boolean
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: boolean
    
}

/**
 * **Example create input**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleCreateInput = {
    
    /**
     * **Datetime**
     *
     * This synthesized field doesn't have a description.
     */
     datetime?: Date
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: string
    
}

/**
 * **Example update input**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleUpdateInput = {
    
    /**
     * **Datetime**
     *
     * This synthesized field doesn't have a description.
     */
     datetime?: Date
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: string
    
}

/**
 * **Example create nested one input**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleCreateNestedOneInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: ExampleWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: ExampleConnectOrCreateInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: ExampleCreateInput
    
}

/**
 * **Example create nested many input**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleCreateNestedManyInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<ExampleWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<ExampleConnectOrCreateInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<ExampleCreateInput>
    
}

/**
 * **Example update nested one input**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleUpdateNestedOneInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: ExampleWhereUniqueInput
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: ExampleConnectOrCreateInput
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: ExampleCreateInput
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: boolean
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: boolean
    
    /**
     * **Set**
     *
     * This synthesized field doesn't have a description.
     */
     set?: ExampleWhereUniqueInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: ExampleUpdateWithWhereUniqueInput
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: ExampleUpsertWithWhereUniqueInput
    
}

/**
 * **Example update nested many input**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleUpdateNestedManyInput = {
    
    /**
     * **Connect**
     *
     * This synthesized field doesn't have a description.
     */
     connect?: Enumerable<ExampleWhereUniqueInput>
    
    /**
     * **Connect Or Create**
     *
     * This synthesized field doesn't have a description.
     */
     connectOrCreate?: Enumerable<ExampleConnectOrCreateInput>
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create?: Enumerable<ExampleCreateInput>
    
    /**
     * **Delete**
     *
     * This synthesized field doesn't have a description.
     */
     delete?: Enumerable<ExampleWhereUniqueInput>
    
    /**
     * **Delete Many**
     *
     * This synthesized field doesn't have a description.
     */
     deleteMany?: Enumerable<ExampleWhereInput>
    
    /**
     * **Disconnect**
     *
     * This synthesized field doesn't have a description.
     */
     disconnect?: Enumerable<ExampleWhereUniqueInput>
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update?: Enumerable<ExampleUpdateWithWhereUniqueInput>
    
    /**
     * **Update Many**
     *
     * This synthesized field doesn't have a description.
     */
     updateMany?: Enumerable<ExampleUpdateManyWithWhereInput>
    
    /**
     * **Upsert**
     *
     * This synthesized field doesn't have a description.
     */
     upsert?: Enumerable<ExampleUpsertWithWhereUniqueInput>
    
}

/**
 * **Example connect or create input**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleConnectOrCreateInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: ExampleCreateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ExampleWhereUniqueInput
    
}

/**
 * **Example update with where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleUpdateWithWhereUniqueInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ExampleUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ExampleWhereUniqueInput
    
}

/**
 * **Example upsert with where unique input**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleUpsertWithWhereUniqueInput = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: ExampleCreateInput
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ExampleUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ExampleWhereUniqueInput
    
}

/**
 * **Example update many with where input**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleUpdateManyWithWhereInput = {
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ExampleUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ExampleWhereInput
    
}

/**
 * **Example**
 *
 * This synthesized interface doesn't have a description
 */
export type Example = {
    
    /**
     * **Datetime**
     *
     * This synthesized field doesn't have a description.
     */
     datetime?: Date
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: string
    
}
export type ExampleGetPayload<S extends boolean | null | undefined | ExampleArgs, U = keyof S> = S extends true
    ? Example
    : S extends undefined
        ? never
        : S extends ExampleArgs | ExampleFindManyArgs
            ? 'include' extends U
                ? SelectSubset<Example, S> & {
                    [P in ExistKeys<S['include']>]:
                    never
                }
                : SelectSubset<Example, S>
            : Example

export type GetExampleAggregateType<T extends ExampleAggregateArgs> = {
    [P in keyof T & keyof ExampleAggregateResult]: P extends '_count' | 'count'
  ? T[P] extends true
    ? number
    : GetScalarType<T[P], ExampleAggregateResult[P]>
  : GetScalarType<T[P], ExampleAggregateResult[P]>
}

export type GetExampleGroupByPayload<T extends ExampleGroupByArgs> =
  Array<
    PickEnumerable<ExampleGroupByResult, T['by']> &
      {
        [P in ((keyof T) & (keyof ExampleGroupByResult))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ExampleGroupByResult[P]>
          : GetScalarType<T[P], ExampleGroupByResult[P]>
      }
    >

/**
 * **Example count aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleCountAggregateResult = {
    
    /**
     * **All**
     *
     * This synthesized field doesn't have a description.
     */
     _all?: number
    
    /**
     * **Datetime**
     *
     * This synthesized field doesn't have a description.
     */
     datetime?: number
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: number
    
}

/**
 * **Example sum aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleSumAggregateResult = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}

/**
 * **Example avg aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleAvgAggregateResult = {
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
}

/**
 * **Example min aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleMinAggregateResult = {
    
    /**
     * **Datetime**
     *
     * This synthesized field doesn't have a description.
     */
     datetime?: Date
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: string
    
}

/**
 * **Example max aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleMaxAggregateResult = {
    
    /**
     * **Datetime**
     *
     * This synthesized field doesn't have a description.
     */
     datetime?: Date
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: string
    
}

/**
 * **Example aggregate result**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleAggregateResult = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: ExampleAvgAggregateResult
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: ExampleCountAggregateResult
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: ExampleMaxAggregateResult
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: ExampleMinAggregateResult
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: ExampleSumAggregateResult
    
}

/**
 * **Example group by result**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleGroupByResult = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: ExampleAvgAggregateResult
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: ExampleCountAggregateResult
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: ExampleMaxAggregateResult
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: ExampleMinAggregateResult
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: ExampleSumAggregateResult
    
    /**
     * **Datetime**
     *
     * This synthesized field doesn't have a description.
     */
     datetime?: Date
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: string
    
}

/**
 * **Example args**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ExampleInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ExampleSelect
    
}

/**
 * **Example find many args**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleFindManyArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: ExampleWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: ExampleSerializableScalarFields
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ExampleInclude
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<ExampleOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ExampleSelect
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: ExampleWhereInput
    
}

/**
 * **Example find first args**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleFindFirstArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: ExampleWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: ExampleSerializableScalarFields
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ExampleInclude
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<ExampleOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ExampleSelect
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: ExampleWhereInput
    
}

/**
 * **Example find unique args**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleFindUniqueArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ExampleInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ExampleSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ExampleWhereUniqueInput
    
}

/**
 * **Example create args**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleCreateArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: ExampleCreateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ExampleInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ExampleSelect
    
}

/**
 * **Example update args**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleUpdateArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ExampleInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ExampleSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ExampleUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ExampleWhereUniqueInput
    
}

/**
 * **Example upsert args**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleUpsertArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: ExampleCreateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ExampleInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ExampleSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ExampleUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ExampleWhereUniqueInput
    
}

/**
 * **Example copy args**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleCopyArgs = {
    
    /**
     * **Copy**
     *
     * This synthesized field doesn't have a description.
     */
     copy: ExampleUpdateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ExampleInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ExampleSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ExampleWhereUniqueInput
    
}

/**
 * **Example delete args**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleDeleteArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ExampleInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ExampleSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ExampleWhereUniqueInput
    
}

/**
 * **Example create many args**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleCreateManyArgs = {
    
    /**
     * **Create**
     *
     * This synthesized field doesn't have a description.
     */
     create: Enumerable<ExampleCreateInput>
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ExampleInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ExampleSelect
    
}

/**
 * **Example update many args**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleUpdateManyArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ExampleInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ExampleSelect
    
    /**
     * **Update**
     *
     * This synthesized field doesn't have a description.
     */
     update: ExampleUpdateInput
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ExampleWhereInput
    
}

/**
 * **Example delete many args**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleDeleteManyArgs = {
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ExampleInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ExampleSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ExampleWhereInput
    
}

/**
 * **Example copy many args**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleCopyManyArgs = {
    
    /**
     * **Copy**
     *
     * This synthesized field doesn't have a description.
     */
     copy: ExampleUpdateInput
    
    /**
     * **Include**
     *
     * This synthesized field doesn't have a description.
     */
     include?: ExampleInclude
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ExampleSelect
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where: ExampleWhereInput
    
}

/**
 * **Example count args**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleCountArgs = {
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: ExampleWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: ExampleSerializableScalarFields
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<ExampleOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Select**
     *
     * This synthesized field doesn't have a description.
     */
     select?: ExampleCountAggregateInputType
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: ExampleWhereInput
    
}

/**
 * **Example aggregate args**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleAggregateArgs = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: ExampleAvgAggregateInputType
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: ExampleCountAggregateInputType
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: ExampleMaxAggregateInputType
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: ExampleMinAggregateInputType
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: ExampleSumAggregateInputType
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: ExampleWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: ExampleSerializableScalarFields
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<ExampleOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: ExampleWhereInput
    
}

/**
 * **Example group by args**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleGroupByArgs = {
    
    /**
     * **Avg**
     *
     * This synthesized field doesn't have a description.
     */
     _avg?: ExampleAvgAggregateInputType
    
    /**
     * **Count**
     *
     * This synthesized field doesn't have a description.
     */
     _count?: ExampleCountAggregateInputType
    
    /**
     * **Max**
     *
     * This synthesized field doesn't have a description.
     */
     _max?: ExampleMaxAggregateInputType
    
    /**
     * **Min**
     *
     * This synthesized field doesn't have a description.
     */
     _min?: ExampleMinAggregateInputType
    
    /**
     * **Sum**
     *
     * This synthesized field doesn't have a description.
     */
     _sum?: ExampleSumAggregateInputType
    
    /**
     * **By**
     *
     * This synthesized field doesn't have a description.
     */
     by: Enumerable<ExampleSerializableScalarFields>
    
    /**
     * **Cursor**
     *
     * This synthesized field doesn't have a description.
     */
     cursor?: ExampleWhereUniqueInput
    
    /**
     * **Distinct**
     *
     * This synthesized field doesn't have a description.
     */
     distinct?: ExampleSerializableScalarFields
    
    /**
     * **Having**
     *
     * This synthesized field doesn't have a description.
     */
     having?: ExampleScalarWhereWithAggregatesInput
    
    /**
     * **Order By**
     *
     * This synthesized field doesn't have a description.
     */
     orderBy?: Enumerable<ExampleOrderByInput>
    
    /**
     * **Page Number**
     *
     * This synthesized field doesn't have a description.
     */
     pageNumber?: number
    
    /**
     * **Page Size**
     *
     * This synthesized field doesn't have a description.
     */
     pageSize?: number
    
    /**
     * **Skip**
     *
     * This synthesized field doesn't have a description.
     */
     skip?: number
    
    /**
     * **Take**
     *
     * This synthesized field doesn't have a description.
     */
     take?: number
    
    /**
     * **Where**
     *
     * This synthesized field doesn't have a description.
     */
     where?: ExampleWhereInput
    
}

/**
 * **Example scalar update input**
 *
 * This synthesized interface doesn't have a description
 */
export type ExampleScalarUpdateInput = {
    
    /**
     * **Datetime**
     *
     * This synthesized field doesn't have a description.
     */
     datetime?: Date
    
    /**
     * **Float**
     *
     * This synthesized field doesn't have a description.
     */
     float?: number
    
    /**
     * **Id**
     *
     * This synthesized field doesn't have a description.
     */
     id?: number
    
    /**
     * **Int**
     *
     * This synthesized field doesn't have a description.
     */
     int?: number
    
    /**
     * **String**
     *
     * This synthesized field doesn't have a description.
     */
     string?: string
    
}



export namespace std {

        /**
         * **Sort**
         *
         * @name Sort Order Represents the sort order
         */
        export type Sort = "asc" | "desc"

    /// ## Sort
    ///
    /// @name Sort Order Represents the sort order
    export const enum SortEnumType {
        /// ### Asc
        ///
        /// This enum member doesn't have a description.
        asc = "asc",
        /// ### Desc
        ///
        /// This enum member doesn't have a description.
        desc = "desc",
    }


    /**
     * **Aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type AggregatesFilter<T> = std.Filter<T> & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.Filter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.Filter<T>
        
    }

    /**
     * **Array atomic update operation input**
     *
     * This interface doesn't have a description.
     */
    export type ArrayAtomicUpdateOperationInput<T> = {
        
        /**
         * **Push**
         *
         * This interface field doesn't have a description.
         */
         push?: T
        
    }

    /**
     * **Array filter**
     *
     * This interface doesn't have a description.
     */
    export type ArrayFilter<T> = {
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: T[]
        
        /**
         * **Has**
         *
         * This interface field doesn't have a description.
         */
         has?: T
        
        /**
         * **Has every**
         *
         * This interface field doesn't have a description.
         */
         hasEvery?: T[]
        
        /**
         * **Has some**
         *
         * This interface field doesn't have a description.
         */
         hasSome?: T[]
        
        /**
         * **Is empty**
         *
         * This interface field doesn't have a description.
         */
         isEmpty?: boolean
        
        /**
         * **Length**
         *
         * This interface field doesn't have a description.
         */
         length?: number
        
    }

    /**
     * **Array nullable filter**
     *
     * This interface doesn't have a description.
     */
    export type ArrayNullableFilter<T> = {
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: T[] | null
        
        /**
         * **Has**
         *
         * This interface field doesn't have a description.
         */
         has?: T
        
        /**
         * **Has every**
         *
         * This interface field doesn't have a description.
         */
         hasEvery?: T[]
        
        /**
         * **Has some**
         *
         * This interface field doesn't have a description.
         */
         hasSome?: T[]
        
        /**
         * **Is empty**
         *
         * This interface field doesn't have a description.
         */
         isEmpty?: boolean
        
        /**
         * **Length**
         *
         * This interface field doesn't have a description.
         */
         length?: number
        
    }

    /**
     * **Array nullable with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type ArrayNullableWithAggregatesFilter<T> = std.ArrayNullableFilter<T> & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.ArrayNullableFilter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.ArrayNullableFilter<T>
        
    }

    /**
     * **Array with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type ArrayWithAggregatesFilter<T> = std.ArrayFilter<T> & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.ArrayFilter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.ArrayFilter<T>
        
    }

    /**
     * **Bool filter**
     *
     * This interface doesn't have a description.
     */
    export type BoolFilter = {
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: boolean
        
        /**
         * **Not**
         *
         * This interface field doesn't have a description.
         */
         not?: boolean | std.BoolFilter
        
    }

    /**
     * **Bool nullable filter**
     *
     * This interface doesn't have a description.
     */
    export type BoolNullableFilter = {
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: boolean | null
        
        /**
         * **Not**
         *
         * This interface field doesn't have a description.
         */
         not?: boolean | null | std.BoolNullableFilter
        
    }

    /**
     * **Bool nullable with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type BoolNullableWithAggregatesFilter = std.BoolNullableFilter & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.BoolNullableFilter
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.BoolNullableFilter
        
    }

    /**
     * **Bool with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type BoolWithAggregatesFilter = std.BoolFilter & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.BoolFilter
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.BoolFilter
        
    }

    /**
     * **Data**
     *
     * @name Data This interface is common for action output
     */
    export type Data<T> = {
        
        /**
         * **Data**
         *
         * This interface field doesn't have a description.
         */
         data: T
        
    }

    /**
     * **Data meta**
     *
     * @name Data and Meta This interface is common for action output with meta information
     */
    export type DataMeta<T, U> = {
        
        /**
         * **Data**
         *
         * This interface field doesn't have a description.
         */
         data: T
        
        /**
         * **Meta**
         *
         * This interface field doesn't have a description.
         */
         meta: U
        
    }

    /**
     * **Decimal nullable with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type DecimalNullableWithAggregatesFilter<T> = std.NullableFilter<T> & {
        
        /**
         * **Avg**
         *
         * This interface field doesn't have a description.
         */
         _avg?: std.NullableFilter<Decimal>
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.NullableFilter<Decimal>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.NullableFilter<Decimal>
        
        /**
         * **Sum**
         *
         * This interface field doesn't have a description.
         */
         _sum?: std.NullableFilter<Decimal>
        
    }

    /**
     * **Decimal with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type DecimalWithAggregatesFilter = std.Filter<Decimal> & {
        
        /**
         * **Avg**
         *
         * This interface field doesn't have a description.
         */
         _avg?: std.Filter<Decimal>
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.Filter<Decimal>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.Filter<Decimal>
        
        /**
         * **Sum**
         *
         * This interface field doesn't have a description.
         */
         _sum?: std.Filter<Decimal>
        
    }

    /**
     * **Enum filter**
     *
     * This interface doesn't have a description.
     */
    export type EnumFilter<T> = {
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: T
        
        /**
         * **In**
         *
         * This interface field doesn't have a description.
         */
         in?: T[]
        
        /**
         * **Not**
         *
         * This interface field doesn't have a description.
         */
         not?: T | std.EnumFilter<T>
        
        /**
         * **Not in**
         *
         * This interface field doesn't have a description.
         */
         notIn?: T[]
        
    }

    /**
     * **Enum nullable filter**
     *
     * This interface doesn't have a description.
     */
    export type EnumNullableFilter<T> = {
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: T | null
        
        /**
         * **In**
         *
         * This interface field doesn't have a description.
         */
         in?: (T | null)[]
        
        /**
         * **Not**
         *
         * This interface field doesn't have a description.
         */
         not?: T | null | std.EnumNullableFilter<T>
        
        /**
         * **Not in**
         *
         * This interface field doesn't have a description.
         */
         notIn?: (T | null)[]
        
    }

    /**
     * **Enum nullable with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type EnumNullableWithAggregatesFilter<T> = std.EnumNullableFilter<T> & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.EnumNullableFilter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.EnumNullableFilter<T>
        
    }

    /**
     * **Enum with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type EnumWithAggregatesFilter<T> = std.EnumFilter<T> & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.EnumFilter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.EnumFilter<T>
        
    }

    /**
     * **Filter**
     *
     * This interface doesn't have a description.
     */
    export type Filter<T> = {
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: T
        
        /**
         * **Gt**
         *
         * This interface field doesn't have a description.
         */
         gt?: T
        
        /**
         * **Gte**
         *
         * This interface field doesn't have a description.
         */
         gte?: T
        
        /**
         * **In**
         *
         * This interface field doesn't have a description.
         */
         in?: T[]
        
        /**
         * **Lt**
         *
         * This interface field doesn't have a description.
         */
         lt?: T
        
        /**
         * **Lte**
         *
         * This interface field doesn't have a description.
         */
         lte?: T
        
        /**
         * **Not**
         *
         * This interface field doesn't have a description.
         */
         not?: T | std.Filter<T>
        
        /**
         * **Not in**
         *
         * This interface field doesn't have a description.
         */
         notIn?: T[]
        
    }

    /**
     * **Float number nullable with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type FloatNumberNullableWithAggregatesFilter<T> = std.NullableFilter<T> & {
        
        /**
         * **Avg**
         *
         * This interface field doesn't have a description.
         */
         _avg?: std.NullableFilter<number>
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.NullableFilter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.NullableFilter<T>
        
        /**
         * **Sum**
         *
         * This interface field doesn't have a description.
         */
         _sum?: std.NullableFilter<number>
        
    }

    /**
     * **Float number with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type FloatNumberWithAggregatesFilter<T> = std.Filter<T> & {
        
        /**
         * **Avg**
         *
         * This interface field doesn't have a description.
         */
         _avg?: std.Filter<number>
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.Filter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.Filter<T>
        
        /**
         * **Sum**
         *
         * This interface field doesn't have a description.
         */
         _sum?: std.Filter<number>
        
    }

    /**
     * **Int number nullable with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type IntNumberNullableWithAggregatesFilter<T> = std.NullableFilter<T> & {
        
        /**
         * **Avg**
         *
         * This interface field doesn't have a description.
         */
         _avg?: std.NullableFilter<number>
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.NullableFilter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.NullableFilter<T>
        
        /**
         * **Sum**
         *
         * This interface field doesn't have a description.
         */
         _sum?: std.NullableFilter<number>
        
    }

    /**
     * **Int number with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type IntNumberWithAggregatesFilter<T> = std.Filter<T> & {
        
        /**
         * **Avg**
         *
         * This interface field doesn't have a description.
         */
         _avg?: std.Filter<number>
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.Filter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.Filter<T>
        
        /**
         * **Sum**
         *
         * This interface field doesn't have a description.
         */
         _sum?: std.Filter<number>
        
    }

    /**
     * **Nullable aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type NullableAggregatesFilter<T> = std.NullableFilter<T> & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.NullableFilter<T>
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.NullableFilter<T>
        
    }

    /**
     * **Nullable filter**
     *
     * This interface doesn't have a description.
     */
    export type NullableFilter<T> = {
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: T | null
        
        /**
         * **Gt**
         *
         * This interface field doesn't have a description.
         */
         gt?: T
        
        /**
         * **Gte**
         *
         * This interface field doesn't have a description.
         */
         gte?: T
        
        /**
         * **In**
         *
         * This interface field doesn't have a description.
         */
         in?: (T | null)[]
        
        /**
         * **Lt**
         *
         * This interface field doesn't have a description.
         */
         lt?: T
        
        /**
         * **Lte**
         *
         * This interface field doesn't have a description.
         */
         lte?: T
        
        /**
         * **Not**
         *
         * This interface field doesn't have a description.
         */
         not?: T | null | std.NullableFilter<T>
        
        /**
         * **Not in**
         *
         * This interface field doesn't have a description.
         */
         notIn?: (T | null)[]
        
    }

    /**
     * **Number atomic update operation input**
     *
     * This interface doesn't have a description.
     */
    export type NumberAtomicUpdateOperationInput<T> = {
        
        /**
         * **Decrement**
         *
         * This interface field doesn't have a description.
         */
         decrement?: T
        
        /**
         * **Divide**
         *
         * This interface field doesn't have a description.
         */
         divide?: T
        
        /**
         * **Increment**
         *
         * This interface field doesn't have a description.
         */
         increment?: T
        
        /**
         * **Multiply**
         *
         * This interface field doesn't have a description.
         */
         multiply?: T
        
    }

    /**
     * **Paging info**
     *
     * This interface doesn't have a description.
     */
    export type PagingInfo = {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         count: number
        
        /**
         * **Number of pages**
         *
         * This interface field doesn't have a description.
         */
         numberOfPages?: number
        
    }

    /**
     * **Response error**
     *
     * This interface doesn't have a description.
     */
    export type ResponseError = {
        
        /**
         * **Fields**
         *
         * This interface field doesn't have a description.
         */
         fields: {[key: string]: string} | null
        
        /**
         * **Message**
         *
         * This interface field doesn't have a description.
         */
         message: string
        
        /**
         * **Type**
         *
         * This interface field doesn't have a description.
         */
         type: string
        
    }

    /**
     * **String filter**
     *
     * This interface doesn't have a description.
     */
    export type StringFilter = {
        
        /**
         * **Contains**
         *
         * This interface field doesn't have a description.
         */
         contains?: string
        
        /**
         * **Ends with**
         *
         * This interface field doesn't have a description.
         */
         endsWith?: string
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: string
        
        /**
         * **Gt**
         *
         * This interface field doesn't have a description.
         */
         gt?: string
        
        /**
         * **Gte**
         *
         * This interface field doesn't have a description.
         */
         gte?: string
        
        /**
         * **In**
         *
         * This interface field doesn't have a description.
         */
         in?: string[]
        
        /**
         * **Lt**
         *
         * This interface field doesn't have a description.
         */
         lt?: string
        
        /**
         * **Lte**
         *
         * This interface field doesn't have a description.
         */
         lte?: string
        
        /**
         * **Matches**
         *
         * This interface field doesn't have a description.
         */
         matches?: string
        
        /**
         * **Not**
         *
         * This interface field doesn't have a description.
         */
         not?: string | std.StringFilter
        
        /**
         * **Not in**
         *
         * This interface field doesn't have a description.
         */
         notIn?: string[]
        
        /**
         * **Starts with**
         *
         * This interface field doesn't have a description.
         */
         startsWith?: string
        
    }

    /**
     * **String nullable filter**
     *
     * This interface doesn't have a description.
     */
    export type StringNullableFilter = {
        
        /**
         * **Contains**
         *
         * This interface field doesn't have a description.
         */
         contains?: string
        
        /**
         * **Ends with**
         *
         * This interface field doesn't have a description.
         */
         endsWith?: string
        
        /**
         * **Equals**
         *
         * This interface field doesn't have a description.
         */
         equals?: string | null
        
        /**
         * **Gt**
         *
         * This interface field doesn't have a description.
         */
         gt?: string
        
        /**
         * **Gte**
         *
         * This interface field doesn't have a description.
         */
         gte?: string
        
        /**
         * **In**
         *
         * This interface field doesn't have a description.
         */
         in?: (string | null)[]
        
        /**
         * **Lt**
         *
         * This interface field doesn't have a description.
         */
         lt?: string
        
        /**
         * **Lte**
         *
         * This interface field doesn't have a description.
         */
         lte?: string
        
        /**
         * **Matches**
         *
         * This interface field doesn't have a description.
         */
         matches?: string
        
        /**
         * **Not**
         *
         * This interface field doesn't have a description.
         */
         not?: string | null | std.StringNullableFilter
        
        /**
         * **Not in**
         *
         * This interface field doesn't have a description.
         */
         notIn?: (string | null)[]
        
        /**
         * **Starts with**
         *
         * This interface field doesn't have a description.
         */
         startsWith?: string
        
    }

    /**
     * **String nullable with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type StringNullableWithAggregatesFilter = std.StringNullableFilter & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.StringNullableFilter
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.StringNullableFilter
        
    }

    /**
     * **String with aggregates filter**
     *
     * This interface doesn't have a description.
     */
    export type StringWithAggregatesFilter = std.StringFilter & {
        
        /**
         * **Count**
         *
         * This interface field doesn't have a description.
         */
         _count?: number
        
        /**
         * **Max**
         *
         * This interface field doesn't have a description.
         */
         _max?: std.StringFilter
        
        /**
         * **Min**
         *
         * This interface field doesn't have a description.
         */
         _min?: std.StringFilter
        
    }






    export interface StdNamespaceDelegate {

        

        

        

        /**
         * Get a new client altered with `headers`.
         * @param {headers?} headers - The new headers.
         */
        $headers(headers?: {[key: string]: string} | undefined): Teo
    }





}




export interface ExampleDelegate {

    
    findUnique<T extends ExampleFindUniqueArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Example, ExampleGetPayload<T>>>>
    
    findFirst<T extends ExampleFindFirstArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Example, ExampleGetPayload<T>>>>
    
    findMany<T extends ExampleFindManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Example, ExampleGetPayload<T>>[], std.PagingInfo>>
    
    create<T extends ExampleCreateArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Example, ExampleGetPayload<T>>>>
    
    update<T extends ExampleUpdateArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Example, ExampleGetPayload<T>>>>
    
    upsert<T extends ExampleUpsertArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Example, ExampleGetPayload<T>>>>
    
    copy<T extends ExampleCopyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Example, ExampleGetPayload<T>>>>
    
    delete<T extends ExampleDeleteArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<CheckSelectInclude<T, Example, ExampleGetPayload<T>>>>
    
    createMany<T extends ExampleCreateManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Example, ExampleGetPayload<T>>[], std.PagingInfo>>
    
    updateMany<T extends ExampleUpdateManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Example, ExampleGetPayload<T>>[], std.PagingInfo>>
    
    copyMany<T extends ExampleCopyManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Example, ExampleGetPayload<T>>[], std.PagingInfo>>
    
    deleteMany<T extends ExampleDeleteManyArgs>(body: T,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.DataMeta<CheckSelectInclude<T, Example, ExampleGetPayload<T>>[], std.PagingInfo>>
    
    count<T extends ExampleCountArgs>(body: Subset<T, ExampleCountArgs>,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<T extends Record<'select', any>
       ? T['select'] extends true
         ? number
         : GetScalarType<T['select'], ExampleCountAggregateResult>
       : number>>
    
    aggregate<T extends ExampleAggregateArgs>(body: Subset<T, ExampleAggregateArgs>,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<GetExampleAggregateType<T>>>
    
    groupBy<T extends ExampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExampleGroupByArgs['orderBy'] }
        : { orderBy?: ExampleGroupByArgs['orderBy'] },
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
        }[OrderFields]>(body: SubsetIntersection<T, ExampleGroupByArgs, OrderByArg> & InputErrors,headers?: {[key: string]: string} | undefined, queryString?: string | undefined): Promise<std.Data<{} extends InputErrors ? GetExampleGroupByPayload<T> : InputErrors>>
    

    

    

    /**
     * Get a new client altered with `headers`.
     * @param {headers?} headers - The new headers.
     */
    $headers(headers?: {[key: string]: string} | undefined): Teo
}

export interface Teo {

    

    
    std: std.StdNamespaceDelegate
    

    
    example: ExampleDelegate
    

    /**
     * Get a new client altered with `headers`.
     * @param {headers?} headers - The new headers.
     */
    $headers(headers?: {[key: string]: string} | undefined): Teo
}



/**
 * ## Teo API Client
 *
 * Teo API client for TypeScript & javaScript. It supports both browser and
 * node.js. It's generated by the fantastic Teo framework.
 *
 */
export const teo: Teo


