/**
 * @param append
 * @returns {function(*=): *}
 * @private
 * @see {@link https://medium.com/@kevincennis/currying-in-javascript-c66080543528}
 */
export function curry_<ResolverArg extends unknown = unknown>(
	append:append_current_T<ResolverArg>
):(fn:Function)=>resolver_curry_T<ResolverArg> {
	return (fn:Function)=>{
		const arity = fn.length
		return resolver as resolver_curry_T<ResolverArg>
		function resolver(...resolver_arg_a:ResolverArg[]) {
			const memory = Array.prototype.slice.call(resolver_arg_a) as ResolverArg[]
			return resolver2 as resolver_curry_T<ResolverArg>
			function resolver2(...arg_a:ResolverArg[]) {
				const local = memory.slice()
				const remaining = Math.max(arity - local.length, 0)
				append(local, arg_a.slice(0, remaining))
				const next = (local.length >= arity ? fn : resolver) as resolver_curry_T<ResolverArg>
				return next(...local)
			}
		}
	}
}
export type resolver_curry_T<ResolverArg extends unknown = unknown> =
	(...resolver_arg_a:ResolverArg[])=>resolver_curry_T<ResolverArg>
export type append_current_T<ResolverArg extends unknown = unknown> =
	(local:ResolverArg[], arg_a:ResolverArg[])=>any
