import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-layout-auth',
  standalone: true,
  imports: [MatToolbar, RouterOutlet, MatIcon, MatIconButton],
  templateUrl: './layout-auth.component.html',
  styleUrl: './layout-auth.component.scss'
})
export class LayoutAuthComponent {

}
