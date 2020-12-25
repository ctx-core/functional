import { curry } from './curry'
/**
 * orElse :: Monad m => m a -> a -> m a
 */
export const orElse = curry((val, m)=>{
	return m.orElse(val)
})
