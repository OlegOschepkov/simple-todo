const beautifulDeletion = (el) => {
  // сначала красиво прячем, а после того как анимация отработает удаляем.
  // Можно слушать анимацию через JS, но это сложнее.
  el.classList.add(`is-hidden`);
  setTimeout(() => {
    el.remove();
  }, 400);
};

const deleteElement = (isTask, target) => {
  if (isTask) {
    const parent = target.closest(`[data-filter-status]`);
    beautifulDeletion(parent);
  } else {
    const parent = target.closest(`[data-check-list]`);
    beautifulDeletion(parent);
  }
};

export default deleteElement;
