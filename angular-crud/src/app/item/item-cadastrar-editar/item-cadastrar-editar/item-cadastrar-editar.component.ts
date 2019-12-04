import { ItemService } from './../../item.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-cadastrar-editar',
  templateUrl: './item-cadastrar-editar.component.html',
  styleUrls: ['./item-cadastrar-editar.component.scss']
})
export class ItemCadastrarEditarComponent implements OnInit {
  
  formGroup: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
              private itemService: ItemService,
              private router: Router ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nome: [
        "", 
        Validators.required
      ]
    })
  }

  salvar()
  {
      this.itemService.cadastrar(this.formGroup.value).subscribe(
        itemCadastrado => {
            this.router.navigateByUrl("/itens");
        },
        error => {
          alert("Erro ao cadastrar" + JSON.stringify(error));
        }
      );
  }

}
