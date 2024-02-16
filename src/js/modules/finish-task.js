const finishTask = (target) => {
  const parentItem = target.closest(`[data-filter-status]`);
  /* eslint-disable-next-line */
  parentItem.dataset?.filterStatus === `finished`
    ? parentItem.setAttribute(`data-filter-status`, `active`) : parentItem.setAttribute(`data-filter-status`, `finished`);
};

export default finishTask;
