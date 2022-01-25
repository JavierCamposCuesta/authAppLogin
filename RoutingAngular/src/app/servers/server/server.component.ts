import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { Server } from '../interfaces/server.interface';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
  ]
})
export class ServerComponent implements OnInit {
  server!: Server;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // this.server = this.serversService.getServer(1);

  //   const id = +this.route.snapshot.params['id'];
  //   this.server = this.serversService.getServer(id);
 
  //   this.route.params.subscribe((params: Params) => {
  //   this.server = this.serversService.getServer(+params['id'])
  // })
  this.route.data.subscribe(
    (data: Data) => {
      this.server = data['server'];
    }
  )
}

onEdit() {
  this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
}
}


