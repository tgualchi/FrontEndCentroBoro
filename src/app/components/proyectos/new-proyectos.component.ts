import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {

  nombreP: string = '';
  descripcionP: string = '';
  imgP: string = '';
  proyectos: Proyectos = null;



  
  constructor( 
    private sProyectos: SProyectosService, 
    private router: Router,
    private activatedRouter: ActivatedRoute,
    public imageService: ImageService) { }
    
  
  ngOnInit(): void {
   
  }

  onCreate(): void{
    const proyectos = new Proyectos(this.nombreP, this.descripcionP, this.imgP);
    this.proyectos.imgP = this.imageService.url
    this.sProyectos.save(proyectos).subscribe(
      data => {
        alert("Proyecto creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la Proyecto");
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

