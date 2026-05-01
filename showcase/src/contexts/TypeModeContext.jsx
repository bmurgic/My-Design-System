import { createContext, useContext, useState } from 'react'

const TypeModeContext = createContext(undefined)

export const TYPE_MODES = {
  current: {
    id: 'current',
    label: 'Current',
    display: 400,
    h1: 400,
    h2: 400,
    h3: 500,
  },
  proposed: {
    id: 'proposed',
    label: 'Proposed',
    display: 400,
    h1: 400,
    h2: 500,
    h3: 600,
  },
}

export function TypeModeProvider({ children }) {
  const [mode, setMode] = useState('current')

  function toggleMode() {
    setMode(prev => prev === 'current' ? 'proposed' : 'current')
  }

  return (
    <TypeModeContext.Provider value={{ mode, toggleMode, weights: TYPE_MODES[mode] }}>
      {children}
    </TypeModeContext.Provider>
  )
}

export function useTypeMode() {
  const ctx = useContext(TypeModeContext)
  if (!ctx) throw new Error('useTypeMode must be used within TypeModeProvider')
  return ctx
}
