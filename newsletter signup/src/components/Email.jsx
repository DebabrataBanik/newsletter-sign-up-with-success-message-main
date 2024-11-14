import useForm from "../context/form"
import { useState } from "react"

function Email() {

  const { setValid, setMail } = useForm()

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validate = e => {
    e.preventDefault()
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let isValid = email.trim() && re.test(email.trim())
    if (!isValid) {
      setError('Valid email required')
    } else {
      setError('')
      e.target.reset()
      setMail(email)
      setValid(true)
    }
  }

  return (
    <form
      onSubmit={e => validate(e)}>
      <label htmlFor="email">Email address</label>
      <input type="text" aria-label="Enter email address" placeholder="email@company.com" id="email" className={`email ${error ? 'error' : ''}`}
        onChange={e => setEmail(e.target.value)} />

      {
        error && (
          <span className="error-msg" aria-label="Enter valid email">
            {error}
          </span>
        )
      }
      <button type="submit" aria-label="submit" className="submit"
      >Subscribe to monthly newsletter</button>
    </form>
  )
}

export default Email