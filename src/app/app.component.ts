import { Component } from '@angular/core';
import{ register } from 'swiper/element/bundle';
import { Storage } from '@ionic/storage-angular';
register();
import Swiper from 'swiper';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage) {}
  async ngOnInit() {
    await this.storage.create();
  }
}
