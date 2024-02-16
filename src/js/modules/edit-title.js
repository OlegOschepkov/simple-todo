const editTitle = (target) => {
  // правим заголовок списка
  const parent = target.closest(`[data-title-editable]`);

  if (parent) {
    const title = parent.querySelector(`[data-title]`);
    const form = parent.querySelector(`[data-edit-title-form]`);

    const formData = new FormData(form);

    let string = ``;

    for(let [name, value] of formData) {
      string = value
    }

    title.innerText = string;
    form.reset();
  }
}

export default editTitle
