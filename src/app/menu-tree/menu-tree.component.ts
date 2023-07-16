import { Component,} from '@angular/core';
// import { MenuService } from '../menu.service';



@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.css']
})
export class MenuTreeComponent {
  menuData: any[] = [];
// ------Tree / Node structure Code-------//

// constructor(private menuService: MenuService) { }

//   ngOnInit() {
//     this.menuService.getMenuData().subscribe(data => {
//       this.menuData = this.buildTree(data);
//     });
//   }

//   buildTree(data: any[]): MenuItem[] {
//     const map = new Map<number, MenuItem>();
//     const tree: MenuItem[] = [];
  
//     data.forEach(item => {
//       map.set(item.id, { id: item.id, name: item.title, refMenuId: item.refMenuId, children: [] });
//     });
  
//     data.forEach(item => {
//       const menuItem = map.get(item.id);
//       if (menuItem) {
//         const parentMenuItem = map.get(item.refMenuId);
//         if (parentMenuItem) {
//           if (!parentMenuItem.children) {
//             parentMenuItem.children = [];
//           }
//           parentMenuItem.children.push(menuItem);
//         }
//       }
//     });
  
//     data.forEach(item => {
//       const menuItem = map.get(item.id);
//       if (menuItem && item.refMenuId === null) {
//         tree.push(menuItem);
//       }
//     });
  
//     return tree;
//   }
}







