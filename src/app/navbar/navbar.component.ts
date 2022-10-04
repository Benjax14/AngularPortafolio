import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

    items: MenuItem[] = [];
    ngOnInit(): void {
        this.items = [
            {
                label:'Sobre mi',
                icon:'pi pi-fw',
                items:[
                    {
                        label:'Educación',
                        icon:'pi pi-fw pi-book'
                    },
                    {
                        label:'Experiencia',
                        icon:'pi pi-fw pi-briefcase'
                    },
                    {
                        label:'Tecnologias',
                        icon:'pi pi-fw pi-tag'                  },
                    {
                        label:'Contacto',
                        icon:'pi pi-fw pi-share-alt'
                    },
                ]
            },
            {
                label:'Proyectos',
                icon:'pi pi-fw',
                items:[
                    {
                        label:'Left',
                        icon:'pi pi-fw pi-align-left'
                    },
                    {
                        label:'Right',
                        icon:'pi pi-fw pi-align-right'
                    },
                    {
                        label:'Center',
                        icon:'pi pi-fw pi-align-center'
                    },
                    {
                        label:'Justify',
                        icon:'pi pi-fw pi-align-justify'
                    },

                ]
            },
        ];
    }
}
