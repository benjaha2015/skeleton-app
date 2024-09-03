import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuarioCorreo: string = "";
  usuarioContrasena: string = "";
  
  constructor(private router: Router) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state){
      const { correo, contrasena } = navigation.extras.state as any;
      this.usuarioCorreo = correo;
      this.usuarioContrasena = contrasena
    }

    console.log(this.usuarioCorreo);
    console.log(this.usuarioContrasena);
  }

}
