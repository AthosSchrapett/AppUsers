import { User } from './../../../models/user.model';
import { UserService } from './../../../services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  users: User[] = [];
  user: User = new User();
  listening = true;

  cols = [
    { colName: 'Nome'},
    { colName: 'Sobrenome'},
    { colName: 'E-mail'},
    { colName: 'Data de Nascimento' },
    { colName: 'Escolaridade'},
    { colName: 'Ações' }
  ];

  constructor(
    private userService: UserService
  ) { }

  ngOnDestroy(): void {
    this.listening = false;
  }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios(): void{
    this.userService.getUsers()
    .pipe(takeWhile(() => this.listening))
    .subscribe(
      (res: User[]) => {
        this.users = res;
      }
    );
  }

  buscarUsuarioPorId(id: number): void{
    this.userService.getUserById(id)
    .pipe(takeWhile(() => this.listening))
    .subscribe(
      (res: User) => {
        this.user = res;
      }
    );
  }

}
