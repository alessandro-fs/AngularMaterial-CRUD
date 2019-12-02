import { Component, OnInit } from '@angular/core';
import { ItemService } from './../../item.service';
import { Item } from '../../item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-listar',
  templateUrl: './item-listar.component.html',
  styleUrls: ['./item-listar.component.scss']
})
export class ItemListarComponent implements OnInit {
  
  itens$: Observable<Item[]>;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.listItens();
  }

  listItens()
  {
    this.itens$ = this.itemService.listar();
  }

}
