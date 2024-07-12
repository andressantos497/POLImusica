import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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

  constructor() {}

}
