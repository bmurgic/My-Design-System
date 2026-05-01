import { createContext, useContext, useState } from 'react'

const TypeModeContext = createContext(undefined)

export const TYPE_MODES = {
  current: {
    id: 'current',
    label: 'Current',
    display: { weight: 400, letterSpacing: '-0.02em' },
    h1:      { weight: 400, letterSpacing: '-0.02em' },
    h2:      { weight: 400, letterSpacing: '-0.02em' },
    h3:      { weight: 500, letterSpacing: '-0.01em' },
  },
  proposed: {
    id: 'proposed',
    label: 'Proposed',
    display: { weight: 300, letterSpacing: '-0.03em' },
    h1:      { weight: 300, letterSpacing: '-0.03em' },
    h2:      { weight: 300, letterSpacing: '-0.025em' },
    h3:      { weight: 400, letterSpacing: '-0.015em' },
  },
}

export function TypeModeProvider({ children }) {
  const [mode, setMode] = useState('current')

  function toggleMode() {
    setMode(prev => prev === 'current' ? 'proposed' : 'current')
  }

  return (
    <TypeModeContext.Provider value={{ mode, toggleMode, tokens: TYPE_MODES[mode] }}>
      {children}
    </TypeModeContext.Provider>
  )
}

export function useTypeMode() {
  const ctx = useContext(TypeModeContext)
  if (!ctx) throw new Error('useTypeMode must be used within TypeModeProvider')
  return ctx
}
