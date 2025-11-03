import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-ideias',
  standalone: false,
  templateUrl: './criar-ideias.html',
  styleUrl: './criar-ideias.css',
})
export class CriarIdeias implements OnInit {
  ideia = {
    id: '1',
    conteudo: 'teste',
    autoria: 'Felix',
    modelo: 'modelo1',
  }

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

    criarIdeia() {
      alert("feliuis pntta")
    }

    cancelarIdeia() {
      this.router.navigate([''])
    }
}
