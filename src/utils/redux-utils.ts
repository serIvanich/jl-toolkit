import type { ActionCreatorsMapObject } from '@reduxjs/toolkit'
import { bindActionCreators } from '@reduxjs/toolkit'
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
