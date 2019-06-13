import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ThfModule } from '@totvs/thf-ui';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThfModule,
    GridModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ThfModule,
    GridModule
  ]
})
export class SharedModule { }
