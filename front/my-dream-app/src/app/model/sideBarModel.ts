export class SideBarModel {

  id?: number;
  text: string;
  comments?: SideBarModel[]
  flag?: boolean;
  router_link?: string;
  massContent?: number[];

  constructor(id: number, text: string, comments: SideBarModel[], flag: boolean, router_link: string, massContent: number[]) {
    this.id = id;
    this.text = text;
    this.comments = comments;
    this.flag = flag;
    this.router_link = router_link;
    this.massContent = massContent;
  }

}










