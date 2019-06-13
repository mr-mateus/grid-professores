import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorComponent } from './professor.component';
import { SharedModule } from '../shared/shared.module';
import { PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { RTL } from '@progress/kendo-angular-l10n';

@NgModule({
  declarations: [ProfessorComponent],
  imports: [
    CommonModule,
    SharedModule,
    PDFModule,
    ExcelModule,
    ProfessorRoutingModule
  ],
  providers: [
    // { provide: RTL, useValue: true }
  ]
})
export class ProfessorModule { }
