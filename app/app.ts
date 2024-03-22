import { Negociacao } from "./models/negociacao.js";

const negocicacao = new Negociacao(new Date, 100, 100);
console.log(negocicacao.volume);
