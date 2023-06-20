import ListItem from "./List";

export interface IList {
  list: ListItem[],
  load(): void,
  save(): void,
  clearList(): void,
  addItem(obj: ListItem): void,
  removeItem(id: string): void,

}

export default class FullList implements IList {

  static instance: FullList = new FullList()

  constructor(
    private _list: ListItem[] = []
    
  ){}

  public get list(): ListItem[] {
    return this._list
  }

  load(): void {
    // 1st get the list from localstorage
    const storedList: string | null = localStorage.getItem('myList')
    // 2nd type and parse the list 
    if (typeof storedList !== 'string') return
    const parsedList: {_id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList)
    // 3rd for each element on the list, put it into a new list and
    // instanciate it
    parsedList.forEach((elem) => {
      const newList = new ListItem(elem._id, elem._item, elem._checked)
      FullList.instance.addItem(newList)
    })
  }

  save(): void {
    localStorage.setItem('myList', JSON.stringify(this._list))
  }

  clearList(): void {
    this._list = []
    this.save()
  }

  addItem(obj: ListItem): void {
    this._list.push(obj)
    this.save()
  }

  removeItem(id: string): void {
    this._list = this._list.filter( elem => elem.id !== id)
    this.save()
  }
}