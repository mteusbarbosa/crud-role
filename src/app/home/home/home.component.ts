import { Roles } from '../model/roles.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @Input()
  data!: Roles;

  roles: Roles[] = [
    {_id: '1',
      titulo: 'De volta ao Orkut',
      local: 'Casa da mãe joana',
      descricao: 'lorem ipsum',
      roleUrl: 'https://www.cmu.edu/brand/brand-guidelines/images/colors-carnegie-red-600x600.png'},
    {_id: '2',
      titulo: 'Whiskritorio',
      local: 'Whiskritorio',
      descricao: 'lorem ipsum',
      roleUrl: 'https://www.cmu.edu/brand/brand-guidelines/images/colors-black-600x600.png'},
    {_id: '3',
      titulo: 'Camarãozada',
      local: 'Camarões',
      descricao: 'lorem ipsum',
      roleUrl: 'https://www.cmu.edu/brand/brand-guidelines/images/colors-steel-gray-600x600.png'},
      {_id: '4',
      titulo: 'Camarãozada',
      local: 'Camarões',
      descricao: 'lorem ipsum',
      roleUrl: 'https://www.cmu.edu/brand/brand-guidelines/images/colors-steel-gray-600x600.png'},
      {_id: '5',
      titulo: 'De volta ao Orkut',
      local: 'Casa da mãe joana',
      descricao: 'lorem ipsum',
      roleUrl: 'https://www.cmu.edu/brand/brand-guidelines/images/colors-carnegie-red-600x600.png'},
    {_id: '6',
      titulo: 'Whiskritorio',
      local: 'Whiskritorio',
      descricao: 'lorem ipsum',
      roleUrl: 'https://www.cmu.edu/brand/brand-guidelines/images/colors-black-600x600.png'},
    {_id: '7',
      titulo: 'Camarãozada',
      local: 'Camarões',
      descricao: 'lorem ipsum',
      roleUrl: 'https://www.cmu.edu/brand/brand-guidelines/images/colors-steel-gray-600x600.png'},
      {_id: '8',
      titulo: 'Camarãozada',
      local: 'Camarões',
      descricao: 'lorem ipsum',
      roleUrl: 'https://www.cmu.edu/brand/brand-guidelines/images/colors-steel-gray-600x600.png'}
  ];

  constructor() { /* TODO document why this constructor is empty */
 }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty

  }

}
