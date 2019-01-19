import { FavouriteChangedEventArgs } from './favourite-changed-event-args';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  post = {
    title : "Title",
    isFavourite: true
  }

  courses = [
    {id: 1, name:"acb"},
    {id: 2, name:"dfgdfs"},
    {id: 3, name:"etw"},
    {id: 4, name:"uiyoy"},
    {id: 5, name:"wxfw"},
  ]
  newIDVal=5;

  onAdd(){
    console.log("onAdd");
    this.newIDVal++;
    this.courses.push({id:this.newIDVal, name:"dsg"})
  }

  onRemove(course: any){
    console.log("onRemove");
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  courses1;
  loadCourses(){
     this.courses1 = [
      {id: 1, name:"acb"},
      {id: 2, name:"dfgdfs"},
      {id: 3, name:"etw"},
      {id: 4, name:"uiyoy"},
      {id: 5, name:"wxfw"},
    ]
  }

  trackCourse(index, course){
    return (course) ? course.id: undefined;
  }

  viewMode = 'list';

  onFavouriteChange(eventArgs : FavouriteChangedEventArgs){
    console.log("on favourite change ", eventArgs);
  }
}
