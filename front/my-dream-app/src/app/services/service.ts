import {Content} from "../contentModel/content";
import {MyText} from "../contentModel/myText";
import {MyStyle} from "../contentModel/myStyle";


export interface Service {

  getId(id: any);

  edit(body: any);

  add(body: any);

  getAll();

  removeId(id: any);


}
