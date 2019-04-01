import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'honours';
  constructor(private router: Router){}
  ngOnInit() {
    // do init at here for current route.

    setTimeout(() => {
        this.router.navigate(['cover']);
    }, 3000);  //3s
}
  
}