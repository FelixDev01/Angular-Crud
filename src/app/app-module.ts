import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { CriarIdeias } from './shared/ideias/criar-ideias/criar-ideias';
import { FormsModule } from '@angular/forms';
import { ListarIdeia } from './shared/ideias/listar-ideia/listar-ideia';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    CriarIdeias,
    ListarIdeia
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
