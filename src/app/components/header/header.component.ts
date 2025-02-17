import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-header',
  imports: [MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    public title = 'Device manager';

}
