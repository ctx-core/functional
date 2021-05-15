import { _current_append_T, _curry } from './_curry'
export function curry<ResolverArg extends unknown = unknown>(append:_current_append_T<ResolverArg>) {
	return (
		_curry<ResolverArg>(
			(local:ResolverArg[], arg_a1:ResolverArg[])=>
				Array.prototype.push.apply(local, arg_a1)
		)
	)(append)
}
