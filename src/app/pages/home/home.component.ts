import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'src/app/services/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: Auth
  ) {
      this.route.queryParams.subscribe(params => console.log(params));
   }

  ngOnInit() {}
  logout() {
  // this.auth.logout();
  // this.router.navigateByUrl('/login');
  this.auth.logout();
  this.router.navigate(['/login'], { replaceUrl: true });
}
}
