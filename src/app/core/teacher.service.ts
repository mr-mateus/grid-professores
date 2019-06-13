import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CrudService } from './crud.service';

export const TEACHER_URI = `teachers`;
@Injectable({
  providedIn: 'root'
})
export class TeacherService extends CrudService<any> {
  initializeEndpoint(): void {
    this.endpoint = TEACHER_URI;
  }

  findByNameContaining(name: string, page: string, size: string): Observable<any> {
    const params = new HttpParams().set('name', name).set('page', page).set('size', size);
    return this.http.get<any>(`${this.getUri()}`, { params: params });
  }

  findAllPaging(page: string, size: string): Observable<any> {
    return of(
      {'hasNext': false,
      'items': [
        {'name': 'Jose', 'email': 'jose@teste.com', 'cpf': '01234567890', 'id': 1, 'academicDegree': 'MESTRE'},
        {'name': 'Carlos', 'email': 'carlos@teste.com', 'cpf': '01234567891', 'id': 2, 'academicDegree': 'MESTRE'},
        {'name': 'Joana', 'email': 'joana@teste.com', 'cpf': '01234567892', 'id': 3, 'academicDegree': 'DOUTOR'},
        {'name': 'Carlas', 'email': 'carlas@teste.com', 'cpf': '01234567893', 'id': 4, 'academicDegree': 'DOUTOR'},
        {'name': 'Ana', 'email': 'ana@teste.com', 'cpf': '01234567894', 'id': 5, 'academicDegree': 'PHD'},
        {'name': 'Andre', 'email': 'andre@teste.com', 'cpf': '01234567895', 'id': 6, 'academicDegree': 'PHD'},
         {'name': 'Josias', 'email': 'josias@teste.com', 'cpf': '01234567896', 'id': 7, 'academicDegree': 'DOUTOR'},
         {'name': 'Julia', 'email': 'julia@teste.com', 'cpf': '01234567897', 'id': 8, 'academicDegree': 'DOUTOR'},
         {'name': 'Beatriz', 'email': 'beatriz@teste.com', 'cpf': '01234567898', 'id': 9, 'academicDegree': 'MESTRE'},
         {'name': 'Bruno', 'email': 'bruno@teste.com', 'cpf': '01234567899', 'id': 10, 'academicDegree': 'MESTRE'},
         {'name': 'Djames', 'email': 'djames@teste.com', 'cpf': '012345678910', 'id': 11, 'academicDegree': 'DOUTOR'},
         {'name': 'Darla', 'email': 'darla@teste.com', 'cpf': '012345678911', 'id': 12, 'academicDegree': 'DOUTOR'},
         {'name': 'Egon', 'email': 'egon@teste.com', 'cpf': '012345678912', 'id': 13, 'academicDegree': 'PHD'},
         {'name': 'Elza', 'email': 'elza@teste.com', 'cpf': '012345678913', 'id': 14, 'academicDegree': 'PHD'},
         {'name': 'Fernanda', 'email': 'fernanda@teste.com', 'cpf': '012345678914', 'id': 15, 'academicDegree': 'DOUTOR'},
          {'name': 'Fernando', 'email': 'fernando@teste.com', 'cpf': '012345678915', 'id': 16, 'academicDegree': 'DOUTOR'},
           {'name': 'Gustavo', 'email': 'gustavo@teste.com', 'cpf': '012345678916', 'id': 17, 'academicDegree': 'MESTRE'},
           {'name': 'Giulia', 'email': 'giulia@teste.com', 'cpf': '012345678917', 'id': 18, 'academicDegree': 'MESTRE'},
           {'name': 'Henrique', 'email': 'henrique@teste.com', 'cpf': '012345678918', 'id': 19, 'academicDegree': 'PHD'},
           {'name': 'Heloisa', 'email': 'heloisa@teste.com', 'cpf': '012345678919', 'id': 20, 'academicDegree': 'PHD'}]});
  }

}
