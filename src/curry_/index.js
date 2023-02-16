/**
 * @param append{import('../_types').append_current_T}
 * @returns {(fn:Function)=>import('../_types').resolver_curry_T}
 * @see {@link https://medium.com/@kevincennis/currying-in-javascript-c66080543528}
 */
export function curry_(append) {
	return (fn)=>{
		const arity = fn.length
		return resolver
		function resolver(...resolver_arg_a) {
			const memory = Array.prototype.slice.call(resolver_arg_a)
			return resolver2
			function resolver2(...arg_a) {
				const local = memory.slice()
				const remaining = Math.max(arity - local.length, 0)
				append(local, arg_a.slice(0, remaining))
				const next =
					local.length >= arity
					? fn
					: resolver
				return next(...local)
			}
		}
	}
}
