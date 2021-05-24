import { _curry } from './_curry';
export function flip(append) {
    return (_curry((local, arg_a1) => Array.prototype.unshift.apply(local, arg_a1)))(append);
}
export { flip as curry__flip };
