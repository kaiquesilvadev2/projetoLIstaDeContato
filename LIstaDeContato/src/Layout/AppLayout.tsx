import NavBar from "../components/NavBar";
import ListaContatos from "../pages/ListaContatos";

export default function AppLayout() {

    const contatosTeste = [
        { id: 1, nome: "João Kaiqu safafwfv csfjfmvmdvf fdfldfdldf fdpfdf, df dfdofdf dfddfldmfld dfdfkdfmdlfmdfsdsds ", email: "joao@email.com", img: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 2, nome: "Maria Silva", email: "maria@email.com", img: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 2, nome: "Maria Silva", email: "maria@email.commaria@email.commaria@email.com", img: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 3, nome: "Carlos Souza", email: "carlos@email.com", img: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 1, nome: "João Kaique", email: "joao@email.com", img: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 2, nome: "Maria Silva", email: "maria@email.com", img: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 2, nome: "Maria Silva", email: "maria@email.com", img: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 3, nome: "Carlos Souza", email: "carlos@email.com", img: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 1, nome: "João Kaique", email: "joao@email.com", img: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 2, nome: "Maria Silva", email: "maria@email.com", img: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 2, nome: "Maria Silva", email: "maria@email.com", img: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 3, nome: "Carlos Souza", email: "carlos@email.com", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    ];

    return (
        <div className="grid h-screen
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
                listaContatos={contatosTeste}
            />

        </div>
    )
}