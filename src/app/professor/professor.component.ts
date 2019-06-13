import { Component, OnInit, ViewChild } from '@angular/core';
import { TeacherService } from '../core/teacher.service';
import { PageChangeEvent, GridDataResult, DataStateChangeEvent, GridComponent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { process, State } from '@progress/kendo-data-query';
import { finalize } from 'rxjs/operators';
import { ThfPopupAction } from '@totvs/thf-ui';
@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  @ViewChild(GridComponent) grid: GridComponent;
  private todosOsProfessores;

  public professores: GridDataResult = { data: [], total: 0 };

  /** Options */
  public state: State = {
    skip: 0,
    take: 7,
  };
  public height = '300';
  public skip = 0;
  public pagination = true;

  public opcoesDeOrdenacao;
  public sort;

  public loading = false;
  public loadEnabled = true;
  public loadingTime = 2;
  public groupable = false;
  public filterOption: any = false;
  public filter;

  public menuExternoPosition = 'top';

  public resizable = true;

  public reorderable = true;

  public columnMenu = false;

  public detailEnabled = true;

  public popupActionsExport: Array<ThfPopupAction> = [
    {
      label: 'PDF',
      action: this.exportAsPDF
    },
    {
      label: 'Excel',
      action: this.exportAsExcel
    }
  ];

  public hiddenColumns = [];
  constructor(private teacherService: TeacherService) { }



  ngOnInit() {
    this.loadProfessores();
  }

  loadProfessores() {
    if (this.loadEnabled) {
      this.loading = true;
    }
    setTimeout(() => {
      this.teacherService.findAllPaging('' + 0, '' + 50).pipe(
        finalize(() => { this.loading = false; })).subscribe(professores => {
          this.todosOsProfessores = professores;
          this.professores = {
            data: this.todosOsProfessores.items.slice(this.skip, this.skip + this.state.take),
            total: 20
          };

        });
    }, this.loadingTime * 1000);
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.professores = {
      data: this.todosOsProfessores.items.slice(this.skip, this.skip + this.state.take),
      total: 20
    };
  }

  public permiteNaoOrdernar() {
    return this.opcoesDeOrdenacao && this.opcoesDeOrdenacao.some(option => option === 'sort');
  }

  public permiteMultiplaSelecao() {
    return this.opcoesDeOrdenacao && this.opcoesDeOrdenacao.some(option => option === 'multi-sort') ? 'multiple' : 'single';
  }


  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.process(state);
  }

  private process(state) {
    this.professores = process(this.todosOsProfessores.items, state);

  }

  public exportAsPDF(): void {
    this.grid.saveAsPDF();
  }

  public exportAsExcel(): void {
    this.grid.saveAsExcel();
  }

  public getTipo(academicDegree) {
    let type = 'info';
    switch (academicDegree) {
      case 'MESTRE': {
        type = 'warning';
        break;
      }

      case 'DOUTOR': {
        type = 'success';
        break;
      }

      case 'PHD': {
        type = 'danger';
        break;
      }
    }
    return type;
  }

}

