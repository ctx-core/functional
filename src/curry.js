import { curry_ } from './curry_';
export function curry(append) {
    return (curry_((local, arg_a) => Array.prototype.push.apply(local, arg_a)))(append);
}
//# sourceMappingURL=src/curry.js.map