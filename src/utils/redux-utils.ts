import type { ActionCreatorsMapObject } from 'redux'
import { bindActionCreators } from 'redux'
import { useMemo } from 'react'
import { useAppDispatch } from './types'

export function useActions<T extends ActionCreatorsMapObject<any>>(actions: T) {
  const dispatch = useAppDispatch()

  const boundActions = useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch],
  )

  return boundActions
}
