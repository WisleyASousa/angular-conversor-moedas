import { Component } from '@angular/core';
import HistoryInterface from '../../shared/interfaces/coin-history';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../../shared/alert/alert.component';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})

export class HistoricComponent {
  history: HistoryInterface[] = [];
  filtroOrdenacao: string = 'TimeAsc';
  historyDelete: boolean = false;
  conversionDelete: boolean = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.obterHistorico();
  }


  obterHistorico() {
    const historyData = this.getData('historico_info');
    if (Array.isArray(historyData)) {
      this.history = historyData;
    } else {
      this.history = [];
    }
  }

  OrdenarHistorico(filtro: string) {
    this.filtroOrdenacao = filtro;
    if (filtro === "TimeAsc") {
      this.history.sort((a, b) => a.time.localeCompare(b.time))
    } else if (filtro === "TimeDesc") {
      this.history.sort((a, b) => b.time.localeCompare(a.time))
    } else if (filtro === "OutputAsc") {
      this.history.sort((a, b) => a.output - b.output);
    } else if (filtro === "OutputDesc") {
      this.history.sort((a, b) => b.output - a.output);
    }

  }

  getData(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  exibirDialogoExclusaoConversao(index: number) {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: 'Confirma Exclusão da Conversão?',
    });

    dialogRef.afterClosed().subscribe((resultado: boolean) => {
      if (resultado) {
        this.excluir(index);
      }
    });
  }

  exibirDialogoExclusaoTodo() {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: 'Confirma Excluir todo o histórico?',
    });

    dialogRef.afterClosed().subscribe((resultado: boolean) => {
      if (resultado) {
        this.excluirTudo();
      }
    });
  }

  excluir(index: number) {
    this.history.splice(index, 1);
    localStorage.setItem('historico_info', JSON.stringify(this.history));
    this.conversionDelete = true;
    setTimeout(() => {
      this.conversionDelete = false;
    }, 2000);
    console.log("Conversão removida com sucesso!")
  }

  excluirTudo() {
    localStorage.removeItem('historico_info');
    this.obterHistorico();
    this.historyDelete = true;
    setTimeout(() => {
      this.historyDelete = false;
    }, 2000);
    console.log("Histórico de conversão apagado com sucesso!")
  }

}
