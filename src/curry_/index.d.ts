import type { append_current_T, resolver_curry_T } from '../_types'
/**
 * @param append
 * @returns {function(*=): *}
 * @see {@link https://medium.com/@kevincennis/currying-in-javascript-c66080543528}
 */
export declare function curry_<
	ResolverArg extends unknown = unknown
>(
	append:append_current_T<ResolverArg>
):(fn:Function)=>resolver_curry_T<ResolverArg>
