import ButtonContato from "../components/ButtonContatos"
import deleteIcon from "../assets/img/delete.png"
import editIcon from "../assets/img/edit.png"

interface Contatos {
    id: number,
    nome: string,
    email: string,
    img: string
}

interface IListaContatosProps extends React.ComponentProps<"ul"> {
    listaContatos: Contatos[]
}

export default function ListaContatos({ listaContatos, className, children, ...props }: IListaContatosProps) {
    return (
        <ul className={`${className}`} {...props}>
            {listaContatos.map(itens => (

                <li key={itens.id}>
                    <img src={itens.img} alt="" />
                    <div>
                        <p>{itens.nome}</p>
                        <p>{itens.email}</p>
                    </div>
                    <div>
                        <ButtonContato imgIcon={deleteIcon} descricao="deletar" />
                        <ButtonContato imgIcon={editIcon} descricao="editar" />
                    </div>

                </li>
            ))}
        </ul>
    )
}