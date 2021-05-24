import { _curry } from './_curry';
export function curry(append) {
    return (_curry((local, arg_a1) => Array.prototype.push.apply(local, arg_a1)))(append);
}
