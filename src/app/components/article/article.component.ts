import { Component } from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

}
