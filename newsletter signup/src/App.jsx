import SuccessCard from "./components/SuccessCard"
import Signup from "./components/Signup"
import { useState } from "react"

function App() {

  const [isFormValid, setIsFormValid] = useState(false)
  const [mail, setMail] = useState('')
  return (
    <main className="wrapper">

      {
        !isFormValid ? (
          <Signup setIsFormValid={setIsFormValid} setMail={setMail} />
        ) : <SuccessCard mail={mail} />
      }

    </main>
  )
}

export default App