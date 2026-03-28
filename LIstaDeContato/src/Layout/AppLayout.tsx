import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ListaContatos from "../pages/ListaContatos";
import { ContatoApi } from "../services/api/ContatoApi";
import type { ContatoType } from "../services/types/ContatoType";

export default function AppLayout() {

    const [listContatos, setListaContatos] = useState<ContatoType[]>([])

    useEffect(() => {

        async function buscaTodos() {
            const resutado = await ContatoApi.bustaTodos();
            setListaContatos(resutado)
        };

        buscaTodos();
    }, ([]));

    return (
        <div className="grid h-dvh
                grid-cols-4 
                sm:grid-cols-6 
                md:grid-cols-10">

            <NavBar className="
        col-start-1 col-span-4
        row-start-1
        sm:col-span-2 sm:row-span-full
        lg:col-span-1
    " />

            <ListaContatos
                className="
        col-start-1 col-span-4
        row-start-2
        sm:col-start-3 sm:col-span-full sm:row-start-1 sm:row-span-full
        lg:col-start-2
        h-full
        "
                listaContatos={[...listContatos]}
            />
        </div>
    )
}