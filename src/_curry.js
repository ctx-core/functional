/**
 * @param append
 * @returns {function(*=): *}
 * @private
 * @see {@link https://medium.com/@kevincennis/currying-in-javascript-c66080543528}
 */
export function _curry(append) {
    return (fn) => {
        const arity = fn.length;
        return resolver;
        function resolver(...resolver_arg_a1) {
            const memory = Array.prototype.slice.call(resolver_arg_a1);
            return resolver2;
            function resolver2(...arg_a1) {
                const local = memory.slice();
                const remaining = Math.max(arity - local.length, 0);
                append(local, arg_a1.slice(0, remaining));
                const next = (local.length >= arity ? fn : resolver);
                return next(...local);
            }
        }
    };
}
