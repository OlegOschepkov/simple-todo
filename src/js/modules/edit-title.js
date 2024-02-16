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

if (! window.mainTracker) { window.mainTracker = 'tilda'; }
setTimeout(function(){ (function (d, w, k, o, g) { var n=d.getElementsByTagName(o)[0],s=d.createElement(o),f=function(){n.parentNode.insertBefore(s,n);}; s.type = "text/javascript"; s.async = true; s.key = k; s.id = "tildastatscript"; s.src=g; if (w.opera=="[object Opera]") {d.addEventListener("DOMContentLoaded", f, false);} else { f(); } })(document, window, 'ad533bd511ce8e4094259cfbbc0ce1db','script','https://static.tildacdn.com/js/tilda-stat-1.0.min.js');
}, 2000);
