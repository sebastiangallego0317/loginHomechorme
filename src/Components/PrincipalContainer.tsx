import { Card } from "./Card"
import { OpenButton } from "../Constants/OpenButton"
import { StatusContextProvider } from "../Context/StatusContext"
export default () => {
    const path = location.toString().split("?")[1]

    const info = path.split("-")
    return (
        <article className="flex flex-col w-screen h-screen justify-center items-center">
            <StatusContextProvider>
                <Card name={info[0]} account={info[1]} />
            </StatusContextProvider>
            <section className="flex font-[100] text-gray-600 text-sm w-[500px] h-12 items-center justify-between pr-5">
                <div className="flex items-center cursor-pointer py-2 justify-center rounded-md gap-2 px-5 hover:bg-gray-100">
                    <span>Español(Latinoamerica)</span>
                    <OpenButton />
                </div>
                <section className="flex gap-1">
                    <a target="_blank" className="py-2 px-3 rounded-md focus:bg-gray-100" href="https://support.google.com/accounts?hl=es-419&visit_id=638313626185478051-659548536&rd=2&p=account_iph">Ayuda</a>
                    <a target="_blank" className="py-2 px-3 rounded-md focus:bg-gray-100" href="https://policies.google.com/privacy?gl=CO&hl=es-419">Privacidad</a>
                    <a target="_blank" className="py-2 px-3 rounded-md focus:bg-gray-100" href="https://policies.google.com/terms?gl=CO&hl=es-419">Condiciones</a>
                </section>
            </section>
        </article>
    )
}
