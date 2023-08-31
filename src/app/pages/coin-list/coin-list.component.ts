import { Component, OnInit } from '@angular/core';
import { Coin } from '../../shared/interfaces/coin-list';
import { CoinListService } from '../../service/consulta-coin-list.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss'],
  animations: [trigger('hoverShow', [
    state('default', style({ })),
    state('show', style({
      border: '2px solid black',
      filter: 'brightness(0.9)'
    })),
    transition('default => hoverShow', [
      animate('200ms ease-out', style({
        transform: 'scale(1.2)'
      })),

      animate(200)

    ])

  ])]
})
export class CoinListComponent implements OnInit {
  coinList: Coin[] = [];
  coinListCompleta: Coin[] = [];
  totalMoedas: number = 0;
  paginaAtual = 1;
  itensPorPagina = 5
  busca: string = '';
  campoOrdenacao: string = 'code';
  filtroOrdenacao: string = 'symbolAsc'
  loading = true;
  indexHover: number = -1;
  
  constructor(private coinService: CoinListService) { }

  ngOnInit(): void {
    this.carregarCoinList();
  }

  carregarCoinList() {
    this.coinService.getCoins().subscribe({
      next: (coins: Coin[]) => {
        this.coinListCompleta = coins;
        this.coinList = this.coinListCompleta.slice();
        this.totalMoedas = this.coinList.length;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  buscarCoins() {
    const valorBusca = this.busca.trim().toLowerCase();

    if (!valorBusca) {
      this.coinList = this.coinListCompleta.slice(); // para restaurar a lista completa
      this.totalMoedas = this.coinListCompleta.length; //para atualizar o total de moedas
    } else {
      this.coinList = this.coinListCompleta.filter(coin =>
        this.verificarTexto(coin.code, valorBusca) ||
        this.verificarTexto(coin.description, valorBusca)
      );
      this.totalMoedas = this.coinList.length; // para atualizar o total de moedas depois da busca
    }

    // Verificando se a página atual está fora dos limites depois da busca
    if (this.paginaAtual > Math.ceil(this.totalMoedas / this.itensPorPagina)) {
      this.paginaAtual = Math.max(1, Math.ceil(this.totalMoedas / this.itensPorPagina));
    }

    this.ordenarPor(this.filtroOrdenacao);
  }

  private verificarTexto(texto: string, valorBusca: string): boolean {
    return texto.toLowerCase().includes(valorBusca);
  }

  limparBusca() {
    this.busca = '';
    this.coinList = this.coinListCompleta.slice();
    this.totalMoedas = this.coinListCompleta.length;
    this.ordenarPor(this.filtroOrdenacao);
  }

  ordenarPor(opcao: string) {
    this.filtroOrdenacao = opcao;
    switch (opcao) {
      case 'symbolAsc':
        this.coinList.sort((a, b) => a.code.localeCompare(b.code));
        break;
      case 'symbolDesc':
        this.coinList.sort((a, b) => b.code.localeCompare(a.code));
        break;
      case 'descriptionAsc':
        this.coinList.sort((a, b) => a.description.localeCompare(b.description));
        break;
      case 'descriptionDesc':
        this.coinList.sort((a, b) => b.description.localeCompare(a.description));
        break;
      default:
        break;
    }
  }

  atualizarPaginacao(pagina: number) {
    this.paginaAtual = pagina;
    if (!this.itensPorPagina) {
      this.itensPorPagina = 5;
    }
  }
}
