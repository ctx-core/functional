import { current__append_T, curry_ } from './curry_'
export function curry<ResolverArg extends unknown = unknown>(append:current__append_T<ResolverArg>) {
	return (
		curry_<ResolverArg>(
			(local:ResolverArg[], arg_a:ResolverArg[])=>
				Array.prototype.push.apply(local, arg_a)
		)
	)(append)
}
