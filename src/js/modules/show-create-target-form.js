const showCreateTargetForm = (target) => {
  const parent = target.closest(`[data-check-list]`);
  const form = parent.querySelector(`[data-create-task-form]`);

  target.classList.toggle(`is-active`);
  form.classList.toggle(`is-active`);
}

export default showCreateTargetForm
