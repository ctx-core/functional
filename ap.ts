import { curry } from './curry'
/**
 * ap :: Monad m => m (a -> b) -> m a -> m b
 */
export const ap = curry((mf, m)=>{ // mf, not fn, because this is a wrapped function
	return mf.ap(m)
})
