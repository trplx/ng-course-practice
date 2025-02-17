import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add-device-form',
  imports: [MatInputModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './add-device-form.component.html',
  styleUrl: './add-device-form.component.scss'
})
export class AddDeviceFormComponent {

}
