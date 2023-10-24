import StatusContext from "../Context/StatusContext"
import { useContext, useEffect } from "react"
import { useRef } from "react"

const alertMessage = "La contraseña es incorrecta. Vuelve a intentarlo o haz clic en \n ¿Olvidaste la contraseña? para restablecerla."

export const Input = () => {
    const {Status} = useContext(StatusContext)

    useEffect(() => {
        if(!Status) {
            (passInput.current! as HTMLInputElement).style.outline = "rgb(217,48,37) solid 2px";
            (InputPassPlaceHolder.current! as HTMLSpanElement).style.color ="rgb(217,48,37)"
        }        
    } ,[Status])



    const passInput = useRef(null)
    const InputPassPlaceHolder = useRef(null)
    const handleChange = () => {
        let current = (passInput.current! as HTMLInputElement);
        current.type = current.type === "password" ? "text" : "password";
    }
    const handleFocus = () => {
        let currentInput = (passInput.current! as HTMLInputElement);
        let current = (InputPassPlaceHolder.current! as HTMLSpanElement);
        current.style.top = "10px"
        currentInput.style.outline = !Status?"rgb(217,48,37) solid 2px":"#4285f4 solid 2px"
        current.style.color = !Status?"rgb(217,48,37)":"#4285f4"
        current.style.fontSize = "0.8rem"
        setTimeout(() => {
            current.style.backgroundColor = "#fff"
        }, 50)
    }
    const handleFocusOff = () => {
        let currentInput = (passInput.current! as HTMLInputElement);
        let current = (InputPassPlaceHolder.current! as HTMLSpanElement);
        currentInput.style.outline = !Status?"rgb(217,48,37) solid 2px":""
        current.style.color = !Status?"rgb(217,48,37)":"rgb(156 163 175)"
        if (currentInput.value.length) return;
        current.style.top = "50%"
        current.style.fontSize = ""
        current.style.backgroundColor = "transparent"
    }
    return (
        <section className="w-full flex flex-col gap-3">

            <section className=" relative">
                <section className="border w-full rounded-md mt-5 flex items-center ">
                    <span ref={InputPassPlaceHolder} className="transition-all pointer-events-none absolute px-2 top-[50%] left-3 text-gray-600">Ingresa tu contraseña</span>
                    <input id="ActualPass" ref={passInput} type="password" onBlur={handleFocusOff} onFocus={handleFocus} className=" px-3 py-4 rounded-md w-full h-full" />
                </section>
            </section>
            {!Status && <section className="flex justify-between">
                <AlertIcon/>
                <p className="w-[94%] text-[13px] text-[rgb(217,48,37);]">{alertMessage}</p>
            </section>}
            <div className="flex gap-2 h-8 w-full items-center ">
                <small className="h-8 w-8 p-2 hover:brightness-90 bg-white rounded-2xl">
                    <input className=" cursor-pointer w-full h-full color-[#4285f4] " onChange={handleChange} type="checkbox" />
                </small>
                <span className="cursor-pointer text-sm" onClick={handleChange}>Mostrar Contraseña</span>
            </div>
        </section>
    )
}

const AlertIcon = () => {
    return (
        <svg aria-hidden="true" fill="rgb(217,48,37)" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
    )
}
