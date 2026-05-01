import { useState, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ComponentSection } from '../components-page/ComponentSection.jsx'

const CODE = `import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  function validate() {
    const next = {}
    if (!email.includes('@')) next.email = 'Enter a valid email'
    if (password.length < 8) next.password = 'At least 8 characters'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function onSubmit(e) {
    e.preventDefault()
    if (validate()) {
      // submit...
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
          {errors.email && <p role="alert">{errors.email}</p>}

          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          {errors.password && <p role="alert">{errors.password}</p>}

          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>

          <Button type="submit">Sign in</Button>
        </form>
      </CardContent>
    </Card>
  )
}`

export function LoginFormPattern() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  function validate() {
    const next = {}
    if (!email.includes('@')) next.email = 'Enter a valid email address'
    if (password.length < 8) next.password = 'Password must be at least 8 characters'
    setErrors(next)
    return next
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      if (errs.email) emailRef.current?.focus()
      else if (errs.password) passwordRef.current?.focus()
      return
    }
    setSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 800))
    setSubmitting(false)
  }

  function handleBlur(field) {
    return () => {
      const next = { ...errors }
      if (field === 'email' && email && !email.includes('@')) {
        next.email = 'Enter a valid email address'
      } else {
        delete next.email
      }
      if (field === 'password' && password && password.length < 8) {
        next.password = 'Password must be at least 8 characters'
      } else if (field === 'password') {
        delete next.password
      }
      setErrors(next)
    }
  }

  return (
    <ComponentSection
      slug="login-form"
      category="Patterns"
      label="Login Form"
      description="Composed example: Card, Input, Label, Checkbox, Button. Blur validation, role='alert' errors, autofocus on first invalid field."
      code={CODE}
    >
      <Card style={{ width: '380px', maxWidth: '100%', backgroundColor: 'var(--color-bg-elevated)' }}>
        <CardHeader>
          <CardTitle style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-primary)' }}>
            Sign in
          </CardTitle>
          <CardDescription style={{ color: 'var(--color-text-muted)' }}>
            Welcome back. Sign in to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Label htmlFor="login-email" style={{ color: 'var(--color-text-secondary)' }}>
                  Email
                </Label>
                <Input
                  id="login-email"
                  ref={emailRef}
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onBlur={handleBlur('email')}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'login-email-error' : undefined}
                />
                {errors.email && (
                  <p
                    id="login-email-error"
                    role="alert"
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-primary)',
                      fontSize: '13px',
                      color: 'var(--color-error)',
                    }}
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Label htmlFor="login-password" style={{ color: 'var(--color-text-secondary)' }}>
                  Password
                </Label>
                <Input
                  id="login-password"
                  ref={passwordRef}
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onBlur={handleBlur('password')}
                  autoComplete="current-password"
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? 'login-password-error' : undefined}
                />
                {errors.password && (
                  <p
                    id="login-password-error"
                    role="alert"
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-primary)',
                      fontSize: '13px',
                      color: 'var(--color-error)',
                    }}
                  >
                    {errors.password}
                  </p>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Checkbox id="login-remember" />
                <Label htmlFor="login-remember" style={{ color: 'var(--color-text-secondary)' }}>
                  Remember me
                </Label>
              </div>

              <Button type="submit" disabled={submitting}>
                {submitting ? 'Signing in…' : 'Sign in'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </ComponentSection>
  )
}
