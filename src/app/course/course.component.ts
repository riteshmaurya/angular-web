import { CourseService } from './../services/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses;
  course = {
    name: "hellow angular guide",
    price: 123.44,
    students: 2333,
    rating: 4.9876,
    releaseDate: new Date(2019,1,1)
  }
  title = "Hello buddy";
  imageUrl = "http://lorempixel.com/400/200";
  colSpan = 2;
  isActive = false;
  story = "fg fgsdg dsgdsgsd dfgsdg gfs gsdfggds dfgdfgh vjg j ftv bfdgcdh jtftjyyhv yhf yhv tfjcurth cf hed h j gfjjyrt t uyjytu jyrty hf yhvdtry hvyt rvhrtvjty jyvf ";

  constructor(service: CourseService) { 
    this.courses = service.getCourse();
  }

  onSave($event){
    console.log($event);
   // $event.stopPropagation();
    alert("button clicked");
  }

  onDivClick(){
    console.log("div clicked");
  }

  email = "ritesaurya@gmail.com";
  keypressed(){
    console.log(this.email);
  }
  ngOnInit() {
  }

}
