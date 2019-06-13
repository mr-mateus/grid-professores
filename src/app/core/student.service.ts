import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudService } from './crud.service';

export const STUDENTS_URI = `students`;

export class StudentService extends CrudService<any> {
  initializeEndpoint(): void {
    this.endpoint = STUDENTS_URI;
  }
  findByNameContaining(name: string, page: number, size: number): Observable<any> {
    const params = new HttpParams().set('name', name).set('page', page.toString()).set('size', size.toString());
    return this.http.get<any>(`${this.getUri()}`, { params: params });
  }
}
