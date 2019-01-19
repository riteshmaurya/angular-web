import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    console.log(id);

    this.activatedRouter.snapshot.queryParamMap.get('page');

    this.activatedRouter.paramMap.subscribe(response => {
      console.log("sdffdfa");
      console.log(response);
      let id = response.get('id');
      console.log(id);
    })
  }

}
