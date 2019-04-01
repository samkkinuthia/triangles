function $(selector) {
  return document.querySelector(selector);
}

const hypForm = $("#hyp");
const adjForm = $("#adj");
const oppForm = $("#opp");
const btn = $("#btn");

const render = $("#type");

function toNum(str) {
  return parseInt(str);
}

btn.addEventListener('click', (ev) => {
  ev.preventDefault();

  const hyp = toNum(hypForm.value);
  const adj = toNum(adjForm.value);
  const opp = toNum(oppForm.value);


  let a = [hyp, adj, opp];
  const o = a.sort((a, b) => b - a);
  const largest = o[0];

  const sum = o[1] + o[2]

  if (sum <= largest) {
    return render.innerHTML = "Not a triangle";
  }


  if ((hyp === adj) && (hyp === opp) && (adj === opp)) {
    render.innerHTML = "Equilateral triangle";
  }
  else if ((hyp === adj) || (hyp === opp) || (adj === opp)) {
    render.innerHTML = "Isocelese triangle";
  }
  else {
    render.innerHTML = "Scalene triangle";
  }
})


