import { current__append_T, curry_ } from './curry_.js'
export function flip<ResolverArg extends unknown = unknown>(append:current__append_T<ResolverArg>) {
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
