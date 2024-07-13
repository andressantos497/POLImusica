import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router'
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      tittle: "Titulo de slide 1",
      icon: "beer-outline",
      avatar: "https://i.pinimg.com/736x/9b/0d/a2/9b0da29b8cf529c80f503064699b255d.jpg",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpMHrmXCI7fo5ooA909SCkPeYe3WFo7Yaxw&s",
      description: "Este es el avatar real"
    },
    {
      tittle: "Titulo de slide 2",
      icon: "beer-outline",
      avatar: "https://i.pinimg.com/736x/9b/0d/a2/9b0da29b8cf529c80f503064699b255d.jpg",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpMHrmXCI7fo5ooA909SCkPeYe3WFo7Yaxw&s",
      description: "Este es el avatar real"
    },
    {
      tittle: "Titulo de slide 3",
      icon: "beer-outline",
      avatar: "https://i.pinimg.com/736x/9b/0d/a2/9b0da29b8cf529c80f503064699b255d.jpg",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpMHrmXCI7fo5ooA909SCkPeYe3WFo7Yaxw&s",
      description: "Este es el avatar real"
    }
    
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

close(){
  //console.log("estoy intentando cerrar la intro")
  this.router.navigateByUrl("/home")
}

}
