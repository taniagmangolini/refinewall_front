import { 
  Component, 
  OnInit,
  Input
} from '@angular/core';

import { menuHome } from './items/menu-home';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() type: string;
  menuItems: any[] = [];

  constructor() { 
  }

  ngOnInit() {
    switch(this.type) {
      default:
        this.menuItems = menuHome;
        break;
    }
  }

}
