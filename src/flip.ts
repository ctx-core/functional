import { append_current_T, curry_, resolver_curry_T } from './curry_.js'
export function flip<ResolverArg extends unknown = unknown>(
	append:append_current_T<ResolverArg>
):resolver_curry_T<ResolverArg> {
	return (
		curry_(
			(local, arg_a)=>
				Array.prototype.unshift.apply(local, arg_a)
		)
	)(append)
}
export {
	flip as curry__flip
}
