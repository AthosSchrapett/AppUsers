import { Router } from '@angular/router';
import { Escolaridade } from './../../../models/escolaridade.enum';
import { User } from './../../../models/user.model';
import { UserService } from './../../../services/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  users: User[] = [];
  user: User = new User();
  userEdicao: User = new User();
  confirmaExclusao: boolean = false;
  editaValidacao: boolean = false;
  listening: boolean = true;

  displayStyleExclusao: string = "none";

  idExclusao: number = 0;

  cols = [
    { colName: 'Nome'},
    { colName: 'Sobrenome'},
    { colName: 'E-mail'},
    { colName: 'Data de Nascimento' },
    { colName: 'Escolaridade'},
    { colName: 'Ações' }
  ];

  escolaridades = [
    { classificacao: 'Infantil', valor: Escolaridade.Infantil },
    { classificacao: 'Fundamental', valor: Escolaridade.Fundamental },
    { classificacao: 'Médio', valor: Escolaridade.Medio },
    { classificacao: 'Superior', valor: Escolaridade.Superior }
  ]

  constructor(
    private userService: UserService,
    private router: Router
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

  abrirModalExclusao(id: number) {
    this.displayStyleExclusao = "block";
    this.idExclusao = id;
  }

  fecharModalExclusao() {
    this.displayStyleExclusao = "none";
  }

  abrirTelaEdicao(user: User) {
    this.editaValidacao = true;
    this.userEdicao = user;
  }

  fecharTelaEdicao() {
    this.editaValidacao = false;
  }

  excluiUsuario(id: number): void {
    this.userService.DeleteUser(id)
    .pipe(takeWhile(() => this.listening))
    .subscribe(
      () => {
        this.displayStyleExclusao = "none";
        this.router.navigate(['/user']);
      }
    );
  }

  editaUsuario(user: User): void {
    this.userService.putUser(user.id, user)
    .pipe(takeWhile(() => this.listening))
    .subscribe(
      () => {
        this.fecharTelaEdicao();
        this.router.navigate(['/user']);
      }
    );
  }

  formUsuario = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    sobrenome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dataNascimento: new FormControl('', [Validators.required]),
    escolaridade: new FormControl('', [Validators.required])
  });

  get form(): any {
    return this.formUsuario.controls;
  }

  validaData: any = null;

  dateValidator(dataNascimento: Date): void {

    const dataAtual = new Date();
    const dataInput = new Date(dataNascimento);

    if (dataInput.getDay() === NaN || dataInput.getMonth() === NaN || dataInput.getFullYear() === NaN) {
      this.validaData = null
    }

    if (dataInput.getDay() !== NaN && dataInput.getMonth() !== NaN && dataInput.getFullYear() !== NaN) {
      if (dataAtual > dataInput) {
        this.validaData = false
      }
      else {
        this.validaData = true;
      }
    }

    console.log(dataInput.getDate())
  }

  retornaEscolaridade(valor: number): string {
    let escolaridade = '';
    this.escolaridades.forEach(x => {
      if(valor === x.valor){
        escolaridade = x.classificacao;
      }
    });
    return escolaridade;
  }

}
