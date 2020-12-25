import { curry } from './curry'
/**
 * chain :: Monad m => (a -> m b) -> m a -> m b
 */
export const chain = curry((fn, m)=>{
	return m.chain(fn)
})
