const showEditTitleForm = (target) => {
  const parent = target.closest(`[data-title-editable]`);

  if (parent) {
    const form = parent.querySelector(`[data-edit-title-form]`);

    form.classList.toggle(`is-active`);
  }
};

export default showEditTitleForm;
