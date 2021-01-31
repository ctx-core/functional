import { curry } from './curry'
/**
 * map :: Monad m => (a -> b) -> m a -> m b
 */
export const map = curry((fn, m)=>{
	return m.map(fn)
})
