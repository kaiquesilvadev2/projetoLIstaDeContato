import axios from "axios";
import type { ContatoType } from "../types/ContatoType";

const api = axios.create({
    baseURL: "https://genal-oralia-minimally.ngrok-free.dev/"
})

export const ContatoApi = {
    async bustaTodos(): Promise<ContatoType[]> {
        const { data } = await api.get("/contatos")
        return data
    }
}