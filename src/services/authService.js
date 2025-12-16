import { api } from "./api";
import { saveToken } from "../utils/tokenStorage";

export async function login(email, senha) {
  const response = await api.post("/usuarios/login", {
    email,
    senha,
  });


  const authHeader = response.headers["authorization"];

  if (authHeader) {
    const token = authHeader.replace("Bearer ", "");
    saveToken(token);
  }

  return response.data;
}