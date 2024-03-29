import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

export const CONTEXT_PATH = 'api';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudService<T> {

  protected endpoint: string;

  constructor(protected http: HttpClient) {
    this.initializeEndpoint();
  }

  abstract initializeEndpoint(): void;

  getEndpoint(): string {
    if (!this.endpoint) {
      throw Error('Endpoint deve ser initializado');
    }
    return this.endpoint;
  }

  getUri(): string {
    return `${environment.apiUri}/${CONTEXT_PATH}/${this.endpoint}`;
  }

  findAllPaging(page: string, size: string): Observable<any> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<any>(this.getUri(), { params: params });
  }

  findAll(): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.getUri());
  }

  findById(id: number): Observable<T> {
    return this.http.get<T>(`${this.getUri()}/${id}`);
  }

  create(object: T): Observable<T> {
    return this.http.post<T>(`${this.getUri()}`, object);
  }

  update(object: T): Observable<T> {
    return this.http.put<T>(`${this.getUri()}`, object);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.getUri()}/${id}`);
  }

}
