const createTask = (target) => {
  // тут создаем новый таск, просто берем разметку и вставляем в конец [data-items-list], и сбрасываем форму

  const markup = (arr) => {
    return `
                  <li class="todo-list__item" data-filter-status="active">
                    <div class="task" data-task>
                      <button class="btn task__checkbox" type="button" data-task-checkbox="" data-dymanic-element="" aria-label="завершить задачу"></button>
                      <div class="task__wrapper">
                        <span class="task__title">${arr[0]}</span>
                        <span class="task__text">${arr[1]}</span>
                      </div>
                      <button class="btn task__delete" type="button" data-delete-task=""  data-dymanic-element><span class="btn__icon"><span class="btn__icon-wrp">
                            <svg width="25" height="25" aria-hidden="true">
                              <use xlink:href="img/sprite_auto.svg#delete"></use>
                            </svg></span></span>
                      </button>
                    </div>
                  </li>
                `
  }

  const taskList = target.closest(`[data-check-list]`).querySelector(`[data-items-list]`);

  const form = target.closest(`[data-create-task-form]`);

  const formData = new FormData(form);

  const arrOfString = [];
  for(let [name, value] of formData) {
    arrOfString.push(value)
  }

  taskList.insertAdjacentHTML( `beforeend`, markup(arrOfString));
  form.reset();
}

export default createTask
