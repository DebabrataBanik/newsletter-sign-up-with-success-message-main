import { useContext, createContext } from "react";

export const FormContext = createContext()
// setting anything inside the context is set as default. 
// inside your provider all value mentioned is what matters and gets passed down to the children

export const FormProvider = FormContext.Provider

export default function useForm() {
  return useContext(FormContext)
}