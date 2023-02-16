import { curry_ } from '../curry_/index.js'
/**
 * @param append{import('../_types').append_current_T}
 * @returns {import('../_types').resolver_curry_T<unknown>}
 */
export function flip(append) {
	return curry_((local, arg_a)=>
		Array.prototype.unshift.apply(local, arg_a))(append)
}
export { flip as curry__flip }
