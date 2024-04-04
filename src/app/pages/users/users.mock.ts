import { UserModel } from "../user/user.model"

export const UsersMock: UserModel[] = [
    { id: 1, nome: 'Airton', sobrenome: 'Domiciano', idade: 50, email: 'lolzeiro@xpert.com', cep: '83477721', funcao: 'Desenvolvedor sênior full-stack' },
    { id: 2, nome: 'Cauã', sobrenome: 'Kelly', idade: 18, email: 'caua@xpert.com', cep: '87734721', funcao: 'Hackerman' },
    { id: 3, nome: 'Pedro', sobrenome: 'Ribeiro', idade: 17, email: 'mutante@xpert.com', cep: '83477721', funcao: 'dev estagiário' },
    { id: 4, nome: 'Yuri', sobrenome: 'Schenkel', idade: 18, email: 'nome-impronunciavel@xpert.com', cep: '87734721', funcao: 'dev estagiário'},
]