import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"
type Status = {
    Status:Boolean,
    SetStatus:Dispatch<SetStateAction<boolean>>
}
type Props = {
    children:ReactNode
}

const StatusContext = createContext({} as Status)


export const StatusContextProvider = ({children}:Props) => {
    const [Status, SetStatus] = useState(true)
  
  return (
    <StatusContext.Provider value={{Status: Status, SetStatus: SetStatus}}>
      {children}
    </StatusContext.Provider>
  )
}
export default StatusContext
