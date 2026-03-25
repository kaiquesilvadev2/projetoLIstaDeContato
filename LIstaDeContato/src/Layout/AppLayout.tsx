import NavBar from "../components/NavBar";

export default function AppLayout() {

    return (
        <div className="grid grid-cols-4 md:grid-cols-10 lg:grid-cols-10 h-[100dvh] ">
            <NavBar className="col-start-1 col-span-4 md:col-span-2 lg:col-span-1" />
        </div>
    )
}