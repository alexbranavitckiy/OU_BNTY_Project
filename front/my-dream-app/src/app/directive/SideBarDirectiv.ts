import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";


@Directive({ selector: '[outputSetBarOne]' })
export class SideBarDirectiv {


  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }




//  @Input() set  outputSetBarOne(sideBar:SideBar) {
//
//     if (sideBar.parentId===0) {
//       this.viewContainer.createEmbeddedView(this.templateRef);
//     } else {
//       this.viewContainer.clear();
//     }
//   }

}
