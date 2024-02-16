const filter = () => {
  // фильтруем таски по data-filter-status у них, совпадающему с data-filter-type у кнопки фильтра
  const filterBtns = document.querySelectorAll(`[data-filter-type]`);

  if (!filterBtns.length) return;

  const filterItems = (type) => {
    const itemsToFilter = document.querySelectorAll(`[data-filter-status]`);

    if (itemsToFilter.length) {
      itemsToFilter.forEach((item) => {
        if (item.dataset.filterStatus === type || type === `all`) { // немного хардкода, но в таком случае оправдано
          item.classList.remove(`is-hidden`);
        } else {
          item.classList.add(`is-hidden`);
        }
      });
    }
  };

  filterBtns.forEach((btn) => {
    btn.addEventListener(`click`, (e) => {
      const target = e.target;
      if (!target.classList.contains(`is-active`)) {
        const btnType = target.dataset.filterType;
        document.querySelector(`[data-filter-type].is-active`).classList.remove(`is-active`);
        target.classList.add(`is-active`);
        filterItems(btnType);
      }
    });
  });
};

export default filter;
