/**
 * @param append
 * @returns {function(*=): *}
 * @private
 * @see {@link https://medium.com/@kevincennis/currying-in-javascript-c66080543528}
 */
export declare function curry_<ResolverArg extends unknown = unknown>(append: current__append_T<ResolverArg>): (fn: Function) => curry__resolver_T<ResolverArg>;
export declare type curry__resolver_T<ResolverArg extends unknown = unknown> = (...resolver_arg_a: ResolverArg[]) => curry__resolver_T<ResolverArg>;
export declare type current__append_T<ResolverArg extends unknown = unknown> = (local: ResolverArg[], arg_a: ResolverArg[]) => any;
