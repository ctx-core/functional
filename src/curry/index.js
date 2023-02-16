import { curry_ } from '../curry_/index.js'
/**
 * @param append{import('../_types').append_current_T}
 * @returns {import('../_types').resolver_curry_T}
 */
export function curry(append) {
	return curry_((local, arg_a)=>Array.prototype.push.apply(local, arg_a))(append)
}
