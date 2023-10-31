import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styleUrls: ['./lista-imagenes.component.css']
})
export class ListaImagenesComponent implements OnInit {
  imagenes = [
    {
      titulo: 'Imagen 1',
      descripcion: 'Descripción de la Imagen 1',
      url: 'https://th.bing.com/th/id/OIP.4LrWM2SoZ_6mUiEsJUv4aQHaEK?pid=ImgDet&rs=1'
    },
    {
      titulo: 'Imagen 2',
      descripcion: 'Descripción de la Imagen 2',
      url: 'https://th.bing.com/th/id/OIP.eyxU00AFLOrGOqfIYH7RXgHaEo?pid=ImgDet&rs=1'
    },
    {
      titulo: 'Imagen 3',
      descripcion: 'Descripción de la Imagen 3',
      url: 'https://4.bp.blogspot.com/-Imh-wjTJoLQ/UtL0ednyuQI/AAAAAAAAY2g/YPkh9qzvlbU/s1600/240773.jpg'
    },
    {
      titulo: 'Imagen 4',
      descripcion: 'Descripción de la Imagen 4',
      url: 'https://2.bp.blogspot.com/_EZ16vWYvHHg/THvzhO04ciI/AAAAAAAARaA/bXGoIPNpnZ0/s1600/www.BancodeImagenesGratuitas.com-IER-1.jpg'
    },

    {
      titulo: 'Imagen 5',
      descripcion: 'Descripción de la Imagen 5',
      url: 'https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg'
    },
    {
      titulo: 'Imagen 6',
      descripcion: 'Descripción de la Imagen 6',
      url: 'https://th.bing.com/th/id/R.d9c2773b1c241854571d1bdad23af4a5?rik=Au1AINhvAWZmRg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-QMGOoEe7ORo%2fUictQ1DRsJI%2fAAAAAAAB4ow%2fQ3F1jbR67fo%2fs1600%2fcerca-del-cielo-y-los-planetas-im%C3%A1genes-de-fantas%C3%ADa-close-to-sky-landscape-1920x1200-wallpaper-.jpg&ehk=7N3VXXUF7ESxVu%2fJqYAG2lwflwMsjAwn7hdRxBGsJms%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      titulo: 'Imagen 7',
      descripcion: 'Descripción de la Imagen 7',
      url: 'https://th.bing.com/th/id/R.3fb61ee0572271fae99f4c413e8f4bc7?rik=HXdtlOM6DTXrtQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-s5nlQK14mDc%2fUtL0TEeJ9RI%2fAAAAAAAAY2U%2fLYDmcixgR1M%2fs1600%2f187959.jpg&ehk=VBm5hE%2bzVkY0sWWRjlJMX%2f0K83eiG9M9yOEWs6NumFo%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      titulo: 'Imagen 8',
      descripcion: 'Descripción de la Imagen 8',
      url: 'https://th.bing.com/th/id/R.70659ea0f4fdba2e09598ae4f4349a41?rik=Sj2GGGrViYn99g&riu=http%3a%2f%2f3.bp.blogspot.com%2f-AsLdW2Mcjig%2fUtL71YiY2zI%2fAAAAAAAAY5g%2fo2zmYBKKWqY%2fs1600%2f360681.jpg&ehk=SxPqRVy8AI4%2burvA%2frZIog6jAXfklQdDsJBpKqkWGuA%3d&risl=&pid=ImgRaw&r=0'
    },
    {
      titulo: 'Imagen 9',
      descripcion: 'Descripción de la Imagen 9',
      url: 'https://imagenesdepaisajes.org/wp-content/uploads/2016/07/imagenes-de-paisajes-sorprendentes-amanecer.jpg'
    },
    {
      titulo: 'Imagen 10',
      descripcion: 'Descripción de la Imagen 10',
      url: 'https://3.bp.blogspot.com/-e4rYTSwn8Fg/UYGHHTzFX4I/AAAAAAABwKk/CoymthQWNKs/s1600/hermoso-atardecer-amazing-sunset.jpg'
    },
    {
      titulo: 'Imagen 11',
      descripcion: 'Descripción de la Imagen 11',
      url: 'https://4.bp.blogspot.com/-Ev-kcQEilas/V3uq8an1J3I/AAAAAAAAAus/lu_AhBNoEmsjMGB2L9SyiXse1JkY4UOVwCLcB/s1600/paisajes%2Bpara%2Bfondo%2Bde%2Bpantalla%2Bde%2Bcomputadora%2Bgratis.jpg'
    },
    {
      titulo: 'Imagen 12',
      descripcion: 'Descripción de la Imagen 12',
      url: 'https://3.bp.blogspot.com/-qdm0SFLx1YU/U7Wv1FdgLCI/AAAAAAACPb0/6qbiw-aNGSA/s1600/imagenes+y+fondos+para+compartir+en+facebook+como+banco+de+imagenes+gratis+(5).jpg'
    },
  ];

  ngOnInit(): void {
  }

}
