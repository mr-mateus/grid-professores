import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudService } from './crud.service';

export const SCHOOL_CLASS_URI = `schoolClasses`;

export class SchoolClassService extends CrudService<any> {
  initializeEndpoint(): void {
    this.endpoint = SCHOOL_CLASS_URI;
  }

  findByDescriptionContaining(description: string, page: string, size: string): Observable<any> {
    const params = new HttpParams().set('description', description).set('page', page).set('size', size);
    return this.http.get<any>(`${this.getUri()}`, { params: params });
  }

  getEmptySchoolClass() {
    return  {
      description: null,
      period: null,
      vacancies: null,
      year: null
    };

  }
}
