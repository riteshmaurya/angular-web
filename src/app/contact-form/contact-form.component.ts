import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
            .subscribe(params => {
              console.log(params);
            });
  }

  logEvent(firstName){
    console.log(firstName);
  }

  submit(f:NgForm){
    console.log(f);
  }

  contactMethods = [
    {id:"01", name: "email"},
    {id:"02", name: "Phone"},
    {id:"03", name: "Postal"}
  ]
  profileTypes = [
    {id:"01", name: "Private"},
    {id:"02", name: "Public"},
  ]
  

}
