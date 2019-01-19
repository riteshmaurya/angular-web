import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { 
    
  }
  getCourse(){
    return ["Course1", "course2", "course3"];
  }
}
