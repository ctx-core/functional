import { curry_ } from './curry_';
export function flip(append) {
    return (curry_((local, arg_a) => Array.prototype.unshift.apply(local, arg_a)))(append);
}
export { flip as curry__flip };
//# sourceMappingURL=src/flip.js.map