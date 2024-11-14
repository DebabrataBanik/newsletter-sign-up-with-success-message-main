import { useContext, createContext } from "react";

export const FormContext = createContext()

export const FormProvider = FormContext.Provider

export default function useForm() {
  return useContext(FormContext)
}