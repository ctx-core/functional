import { _curry } from './_curry'
export const curry =
	_curry(
		(local, arg_a1)=>
			Array.prototype.push.apply(local, arg_a1))
