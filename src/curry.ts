import { append_current_T, curry_ } from './curry_.js'
export function curry<ResolverArg extends unknown = unknown>(append:append_current_T<ResolverArg>) {
	return (
		curry_<ResolverArg>(
			(local:ResolverArg[], arg_a:ResolverArg[])=>
				Array.prototype.push.apply(local, arg_a)
		)
	)(append)
}
