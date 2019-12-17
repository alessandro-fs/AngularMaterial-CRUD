import { QueryBuilder, Page } from './../_util/Pagination';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost:3000';
  private endpoint = 'itens';
  
  constructor(private httpClient: HttpClient) { }
    
  listar(queryBuilder: QueryBuilder): Observable<Page<Item>> {

    return this.httpClient
    .get<Item[]>(`${this.baseUrl}/${this.endpoint}?${queryBuilder.buildQueryString()}`, {observe: 'response'})
    .pipe(
        map(response => <Page<Item>>Page.fromResponse(response))
    );

}

    cadastrar(item: Item):Observable<Item>{
      return this.httpClient.post<Item>(`${this.baseUrl}/${this.endpoint}`, item);
    }

    pesquisarPorId(id: string): Observable<Item>{
      return this.httpClient.get<Item>(`${this.baseUrl}/${this.endpoint}/${id}`);
    }

    atualizar(item: Item): Observable<Item>{
      return this.httpClient.put<Item>(`${this.baseUrl}/${this.endpoint}/${item.id}`, item);
    }

    deletar(item: Item):Observable<{}> {
      return this.httpClient.delete(`${this.baseUrl}/${this.endpoint}/${item.id}`);
  }
}
