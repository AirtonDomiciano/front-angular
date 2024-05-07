import { ApisModel } from './model/apis.model';

export const apisMock: ApisModel[] = [
  {
    id: 1,
    nome: 'Google Translate',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
    rapidApiHost: 'google-translate1.p.rapidapi.com',
    ativo: true,
  },
  {
    id: 2,
    nome: 'API-FOOTBALL',
    url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
    rapidApiHost: 'api-football-v1.p.rapidapi.com',
    ativo: true,
  },
  {
    id: 3,
    nome: 'Movie Database Alternative',
    url: 'https://movie-database-alternative.p.rapidapi.com/',
    rapidApiHost: 'movie-database-alternative.p.rapidapi.com',
    ativo: true,
  },
];
