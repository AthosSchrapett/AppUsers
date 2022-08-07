import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fonte } from 'src/app/models/fonte.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fonte: Fonte = new Fonte();
  validaLista: boolean = false;

  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
}
