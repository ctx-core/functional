import { _current_append_T, _curry } from './_curry'
export function flip<ResolverArg extends unknown = unknown>(append:_current_append_T<ResolverArg>) {
	return (
		_curry(
			(local, arg_a1)=>
				Array.prototype.unshift.apply(local, arg_a1)
		)
	)(append)
}
export {
	flip as curry__flip
}
