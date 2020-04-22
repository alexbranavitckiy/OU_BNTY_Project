export class SideBar {

  private _id: number;
  private _name: string;
  private _level: number;
  private _status: boolean;
  private _parentId: number;

  constructor(parentId: number, id: number, name: string, level: number, status: boolean) {
    this._id = id;
    this._name = name;
    this._level = level;
    this._status = status;
    this._parentId = parentId;
  }


  get parentId(): number {
    return this._parentId;
  }

  set parentId(value: number) {
    this._parentId = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get level(): number {
    return this._level;
  }

  set level(value: number) {
    this._level = value;
  }

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }
}
