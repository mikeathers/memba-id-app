import {create} from 'zustand'

interface UserFormStore {
  emailAddress: string
  setEmailAddress: (emailAddress: string) => void
  password: string
  setPassword: (password: string) => void
  fullName: string
  setFullName: (fullName: string) => void
}

export const useUserFormStore = create<UserFormStore>((set) => ({
  emailAddress: '',
  setEmailAddress: (emailAddress: string) => {
    set({emailAddress})
  },
  password: '',
  setPassword: (password: string) => {
    set({password})
  },
  fullName: '',
  setFullName: (fullName: string) => {
    set({fullName})
  },
}))
