const createCheckList = () => {
  // тут создаем новый check-list, просто берем разметку и вставляем в конец [data-to-do]
  // на форме preventDefault делаем сразу
  const parent = document.querySelector(`[data-to-do]`);
  const id = new Date().valueOf(); // дату в виде мс, как id можно использовать.
  const markup = `<div class="todo-list__check-list" data-check-list="">
              <div class="todo-list__info" data-title-editable="">
                <form class="create-task-form" data-edit-title-form="" data-dymanic-element="" action="#" method="post">
                  <div class="custom-input create-task-form__input" data-validate-type="text">
                    <label>
                      <input type="text" id="${id}" name="list-title" placeholder="Чек-лист" required="">
                    </label>
                  </div>
                  <button class="btn btn--blue btn--big" type="submit"><span class="btn__title">добавить</span>
                  </button>
                </form>
                <div class="todo-list__wrapper">
                  <h3 class="todo-list__sub-title"><span class="todo-list__title-text" data-title=""> Чек-лист 1</span>
                    <button class="btn btn--opacity" type="button" data-active-element="" data-edit-title="" aria-label="Изменить заголовок"><span class="btn__icon"><span class="btn__icon-wrp">
                          <svg width="20" height="20" aria-hidden="true">
                            <use xlink:href="img/sprite_auto.svg#edit"></use>
                          </svg></span></span>
                    </button>
                  </h3>
                  <button class="btn todo-list__btn" type="button" data-delete-check-list="" data-dymanic-element=""><span class="btn__title">Удалить чек-лист</span>
                  </button>
                </div>
              </div>
              <ul class="todo-list__items" data-items-list="">
              </ul>
              <form class="create-task-form" data-create-task-form="" data-dymanic-element="" action="#" method="post">
                <div class="custom-input create-task-form__input" data-validate-type="text">
                  <label>
                    <input type="text" id="${id}1" name="title" placeholder="Заголовок" required="">
                  </label>
                </div>
                <div class="custom-input create-task-form__input" data-validate-type="text">
                  <label>
                    <input type="text" id="${id}2" name="description" placeholder="Описание" required="">
                  </label>
                </div>
                <button class="btn btn--blue btn--big" type="submit"><span class="btn__title">добавить</span>
                </button>
              </form>
              <button class="btn btn--blue todo-list__show-form" type="button" data-show-form="" data-dymanic-element=""><span class="btn__icon"><span class="btn__icon-wrp">
                    <svg width="25" height="25" aria-hidden="true">
                      <use xlink:href="img/sprite_auto.svg#plus"></use>
                    </svg></span></span><span class="btn__title">добавить пункт</span><span class="btn__subtext">скрыть</span>
              </button>
            </div>`;

  parent.insertAdjacentHTML(`beforeend`, markup);

  parent.querySelector(`[data-check-list]:last-child`).querySelector(`[data-create-task-form]`).addEventListener(`submit`, (e) => {
    e.preventDefault();
  });
};

export default createCheckList;
