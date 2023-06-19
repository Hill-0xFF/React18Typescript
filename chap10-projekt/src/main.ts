import './css/style.css';
import ListItem from './model/List';
import FullList from './model/FullList';
import ListTemplate from './templates/ListTemplate';

const initApp = (): void => {
  const fullList = FullList.instance;
  const listTemplate = ListTemplate.instance;
  console.log('initApp');

  // const btn = document.querySelector('#addItem') as HTMLButtonElement
  
  
  // import the models and templates
  //add listener to new entry form submit x
  //in other words, grab the form id/class, grab the input id/class value
  //calculate item ID
  //add the given item/todo to the list and render it
  //implement the SUBMIT logic
  // const inp = document.getElementById('newItem') as HTMLInputElement;
  // inp.addEventListener('change', ():void => {
  //   if(inp.value.length ) !btn.disabled
  // })

  const form = document.querySelector('#itemEntryForm') as HTMLFormElement;
  form.addEventListener('submit', (evt: SubmitEvent): void => {
    evt.preventDefault();

    const input = document.querySelector('#newItem') as HTMLInputElement;
    const trimmedInput: string = input.value.trim();
    if (!trimmedInput.length) return; //don't add empty values to the list[]

    const calcId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;

    const task = new ListItem(calcId.toString(), trimmedInput);
    input.value = ''
    fullList.addItem(task)
    listTemplate.render(fullList)

    // const btnAdd = document.querySelector('#addItem') as HTMLButtonElement;
    // btnAdd.addEventListener('click', (): void => {
    //   fullList.addItem(task);
    // });
    // this is not right: even with a empty input, values from the 
    // localstorage will be 're-added'
  });

    const clearAll = document.querySelector(
      '#clearItemsButton'
    ) as HTMLButtonElement;
    clearAll.addEventListener('click', (): void => {
      fullList.clearList();
      listTemplate.clear();
    });

  // load initial data and render it
  fullList.load();
  listTemplate.render(fullList);
};

document.addEventListener('DOMContentLoaded', initApp);
