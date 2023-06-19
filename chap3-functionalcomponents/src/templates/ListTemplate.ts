import FullList from "../model/FullList";

export interface ITemplate {
  ul: HTMLUListElement
  clear(): void,
  render(fullList: FullList): void,
}

export default class ListTemplate implements ITemplate {

  static instance: ListTemplate = new ListTemplate()

  ul:HTMLUListElement

  private constructor(){
    this.ul = document.querySelector('#listItems') as HTMLUListElement
  }

  clear(): void {
    this.ul.textContent = ''
  }

  render(fullList: FullList): void {
    
    this.clear()

    fullList.list.forEach((elem) => {
      /*
      as in line 36 and 38, elem.id and elem.checked are used
      instead of elem._id / elem._checked because
      it uses the getters and setter from the fullList(which is FullList class)
       */
      const li = document.createElement('li') as HTMLLIElement
      li.className = 'item'

      const check = document.createElement('input') as HTMLInputElement
      check.type = 'checkbox'
      check.id = elem.id
      check.tabIndex = 0
      check.checked = elem.checked
      li.append(check)

      check.addEventListener('change', ():void => {
        elem.checked = !elem.checked
        fullList.save()
      })

      const label = document.createElement('label') as HTMLLabelElement
      label.htmlFor= elem.id
      label.textContent = elem.item
      li.append(label)

      const btn = document.createElement('button') as HTMLButtonElement
      btn.className = 'button'
      btn.textContent = 'X'
      li.append(btn)

      btn.addEventListener('click', ():void => {
        fullList.removeItem(elem.id)
        this.render(fullList)
      })

      this.ul.append(li)
    })
  }
}