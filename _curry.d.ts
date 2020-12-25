/**
 * @param append
 * @returns {function(*=): *}
 * @private
 * @see {@link https://medium.com/@kevincennis/currying-in-javascript-c66080543528}
 */
export declare function _curry(append: any): (fn: any) => (...resolver_arg_a1: unknown[]) => (...arg_a1: unknown[]) => any;
