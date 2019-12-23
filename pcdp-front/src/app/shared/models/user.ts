import { Unit } from './unit';

export class User {
    public nome: string;
    public cpf: string;
    public telefone: string;
    public unidadePrincipal: Unit;
    public unidadeSecundaria: Unit;
    public email: string;
    public realizouCurso: boolean;
    public password: string;
}
