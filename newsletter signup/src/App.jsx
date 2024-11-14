import SuccessCard from "./components/SuccessCard"
import Signup from "./components/Signup"
import { useState } from "react"
import { FormProvider } from "./context/form"

function App() {

  const [isValid, setValid] = useState(false)
  const [mail, setMail] = useState('')

  return (
    <FormProvider value={{ mail, setValid, setMail }}>
      <main className="wrapper">

        {
          !isValid ? (
            <Signup />
          ) : <SuccessCard />
        }

      </main>
    </FormProvider>
  )
}

export default App