import { CrudService } from './crud.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

export const DISCIPLINES_URI = `disciplines`;

export class DisciplineService extends CrudService<any> {

  initializeEndpoint(): void {
    this.endpoint = DISCIPLINES_URI;
  }

  findByInitialsContaining(initials: string, page: string, size: string): Observable<any> {
    const params = new HttpParams().set('name', initials).set('page', page).set('size', size);
    return this.http.get<any>(`${this.getUri()}`, { params: params });
  }

}
