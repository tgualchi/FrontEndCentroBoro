import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit{
  proyectos: Proyectos = null;
 
  constructor(
    private activatedRouter: ActivatedRoute,
    private sProyectos : SProyectosService,
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sProyectos.detail(id).subscribe(
        data =>{
          this.proyectos = data;
        }, err =>{
           alert("Error al modificar");
           this.router.navigate(['']);
        }
      )

  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectos.imgP = this.imageService.url
    this.sProyectos.update(id, this.proyectos).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la imagen");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyectoproyecto" + id;
    this.imageService.uploadImage($event, name)
  }

}
