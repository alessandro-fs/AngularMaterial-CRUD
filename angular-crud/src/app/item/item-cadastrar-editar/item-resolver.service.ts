import { ItemService } from './../item.service';
import { Injectable } from '@angular/core';
import { Item } from '../item.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemResolverService implements Resolve<Item> {

  constructor(private itemService: ItemService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const id = route.params["id"];
    if (id){
      return this.itemService.pesquisarPorId(id);
    }
    return empty();
  }
}
