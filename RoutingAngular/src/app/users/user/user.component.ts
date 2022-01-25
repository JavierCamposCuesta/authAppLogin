import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {
  user!: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
     	name: this.route.snapshot.params['name']
    }

    this.route.params
  .subscribe(
    (updatedParams) => {
      this.user.id = updatedParams['id'];
      this.user.name = updatedParams['name'];
    }
  )

}
}

