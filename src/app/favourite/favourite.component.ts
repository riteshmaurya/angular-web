import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  
})
export class FavouriteComponent implements OnInit {
  @Input('isFavourite') isSelected: boolean;
  @Output('change') change = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isSelected = !this.isSelected;
    this.change.emit({newValue: this.isSelected});
  }
}
