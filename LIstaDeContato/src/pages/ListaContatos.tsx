import ButtonContato from "../components/ButtonContatos"
import deleteIcon from "../assets/img/delete.png"
import editIcon from "../assets/img/edit.png"
import type { ContatoType } from "../services/types/ContatoType"

interface IListaContatosProps extends React.ComponentProps<"div"> {
    listaContatos: ContatoType[]
}

export default function ListaContatos({ listaContatos, className, children, ...props }: IListaContatosProps) {
    return (
        <div className={` ${className}`} {...props}>
            <ul className=" overflow-auto flex flex-col justify-center h-full ">
                {listaContatos.map(itens => (
                    <li key={itens.id} className="flex flex-row justify-between 
                                            max-w-[40.1rem] w-full mx-auto p-3 border-b-[1px] border-gray-300/60">
                        <img className="rounded-full h-20 w-20 hover:scale-110 transition-transform duration-200" src={itens.img} alt="" />
                        <div className="flex flex-col grow ml-4.5 min-w-0">
                            <div className="flex flex-col">
                                <p className="text-2xl truncate ">{itens.nome}</p>
                                <p className="text-[#aaa] truncate">{itens.email}</p>
                            </div>
                        </div>
                        <div className="flex gap-3 m-1.5">
                            <ButtonContato className="opacity-50" imgIcon={deleteIcon} descricao="deletar" />
                            <ButtonContato className="opacity-50" imgIcon={editIcon} descricao="editar" />
                        </div>

                    </li>
                ))}
            </ul>

        </div>

    )
}