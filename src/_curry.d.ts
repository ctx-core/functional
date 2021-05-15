/**
 * @param append
 * @returns {function(*=): *}
 * @private
 * @see {@link https://medium.com/@kevincennis/currying-in-javascript-c66080543528}
 */
export declare function _curry<ResolverArg extends unknown = unknown>(append: _current_append_T<ResolverArg>): (fn: Function) => _curry_resolver_T<ResolverArg>;
export declare type _curry_resolver_T<ResolverArg extends unknown = unknown> = (...resolver_arg_a1: ResolverArg[]) => _curry_resolver_T<ResolverArg>;
export declare type _current_append_T<ResolverArg extends unknown = unknown> = (local: ResolverArg[], arg_a1: ResolverArg[]) => any;
