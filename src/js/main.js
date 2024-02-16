import filter from './modules/filter';
import showCreateTargetForm from './modules/show-create-target-form';
import createCheckList from './modules/create-check-list';
import deleteElement from './modules/delete-element';
import finishTask from './modules/finish-task';
import createTask from './modules/create-task';
import editTitle from './modules/edit-title';
import showEditTitleForm from './modules/show-edit-title-from';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener(`DOMContentLoaded`, () => {
  // Utils
  // ---------------------------------

  window.addEventListener(`load`, () => {
    document.addEventListener(`click`, (e) => {
      // так как меняем разметку, то проще слушать клики на документе
      const target = e.target;

      if (target.closest(`[data-show-form]`)) {
        showCreateTargetForm(target.closest(`[data-show-form]`));
      }

      if (target.closest(`[data-delete-task]`)) {
        deleteElement(true, target);
      }

      if (target.closest(`[data-delete-check-list]`)) {
        deleteElement(false, target);
      }

      if (target.closest(`[data-task-checkbox]`)) {
        finishTask(target);
      }

      if (target.closest(`[data-create-check-list]`)) {
        createCheckList();
      }

      if (target.closest(`[type="submit"]`) && target.closest(`[data-create-task-form]`)) {
        createTask(target);
      }

      if (target.closest(`[type="submit"]`) && target.closest(`[data-edit-title-form]`)) {
        editTitle(target);
      }

      if (target.closest(`[data-edit-title]`)) {
        showEditTitleForm(target);
      }
    });

    const forms = document.querySelectorAll(`[data-create-task-form], [data-edit-title-form]`);
    if (forms.length) {
      forms.forEach((form) => {
        form.addEventListener(`submit`, (e) => {
          e.preventDefault();
        });
      });
    }

    filter();
  });
});
