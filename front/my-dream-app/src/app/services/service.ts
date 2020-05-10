import {Content} from "../model/content";
import {MyText} from "../model/myText";
import {MyStyle} from "../model/myStyle";


export interface Service {

  getId(id: any);

  edit(body: any);

  add(body: any);

  getAll();

  removeId(id: any);


}
