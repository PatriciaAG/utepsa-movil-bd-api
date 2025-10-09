import { Component, OnInit, signal } from '@angular/core';
import { GoogleBook } from 'src/app/models/google-book.model';
import { FormsModule } from '@angular/forms';
import {IonContent, IonInfiniteScroll, IonItem, IonLabel, IonList, IonSearchbar, IonicModule} from '@ionic/angular';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss'],
})
export class LibrosComponent  implements OnInit {
  query: string = '';
  loading = signal(false);
  results = signal<GoogleBook[]>([]);
  error = signal<string | null>(null);

  constructor() { }

  ngOnInit() {}

}
