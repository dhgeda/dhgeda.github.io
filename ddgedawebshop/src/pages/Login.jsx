import { useState } from "react"
import Layout from "../components/Layout"
import AuthForm from "../components/AuthForm"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin() {
    console.log("Login attempt:", { email, password })

    // later:
    // authenticate user
    // redirect to home/profile
  }

  return (
    <Layout>
      <AuthForm
        title="Login"
        onSubmit={handleLogin}
        footer={
          <>
            Don't have an account? <a href="/signup">Sign up here</a>
          </>
        }
      >
        <label htmlFor="login-email">Email Address</label>
        <input
          id="login-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </AuthForm>
    </Layout>
  )
}
