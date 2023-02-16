import type { append_current_T, resolver_curry_T } from '../_types'
export declare function curry<
	ResolverArg extends unknown = unknown
>(append:append_current_T<ResolverArg>):resolver_curry_T<ResolverArg>
