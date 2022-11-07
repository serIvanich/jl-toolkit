import { useDispatch } from 'react-redux'
import type { rootReducer } from '../bll/redusers'
import type { store } from '../bll/store'

// redux common types
export type RootReducerType = typeof rootReducer

export const useAppDispatch = () => useDispatch<AppDispatchType>()
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch
export type ThunkError = {
  rejectValue: { error: string }
}
