import { _curry } from './_curry'
export const flip =
	_curry(
		(local, arg_a1)=>
			Array.prototype.unshift.apply(local, arg_a1))
export {
	flip as curry__flip
}
