import { createContext } from 'react'
import type { User } from '../types/types'
import { user } from '../utils/defaults'

export interface UserContext {
  user: User
  setUser: (user: User) => void
}

export const userContext = createContext<UserContext>({
  user: user,
  setUser: () => {},
})
