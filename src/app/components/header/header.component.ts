import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    public title = 'Device manager';

    protected router: Router = inject(Router);

    protected sidnIn(): void {
        localStorage.setItem('token', 'jwt qsjhdinjsxiqo123');
        this.router.navigate(['/']);
    }
}
