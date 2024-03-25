import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor(){
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor")
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        //Problema: O .pop remove o último elemento da lista fazendo com que ela fique sempre vazia. O Lista() é um método criado apenas para listar o conteúdo do array mas está frágil
        // e dando acesso ao método pop. Solucionando com ReadOnlyArray no retorno do método this.negociacoes.lista() a linha de baixo não compila indicando problema em tempo de 
        //desenvolvimento
        //this.negociacoes.lista().pop();  
        console.log(this.negociacoes);
        this.limparFormulário();
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao(date, quantidade, valor);
        return negociacao;
    }

    limparFormulário(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}