import { api } from "./api";

export async function cadastrarUsuario(dadosCadastro) {
  const response = await api.post("/usuarios/cadastro", dadosCadastro);
  return response.data;
}