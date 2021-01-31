/**
 * m1.map(fn).ap(m2)
 * @param {function} m1
 * @param {module:ctx-core/functional/lib~maybe} m1 - subject `maybe`
 * @param {module:ctx-core/functional/lib~maybe} m2 - applied `maybe`
 * @returns {module:ctx-core/functional/lib~maybe}
 * @see {@link http://jrsinclair.com/articles/2016/marvellously-mysterious-javascript-maybe-monad/}
 */
export declare const liftA2: (...resolver_arg_a1: unknown[]) => (...arg_a1: unknown[]) => any;
