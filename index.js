function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('.target');
}

function increaseRankBy(n) {
  const rankList = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankList.length; i++) {
    rankList[i].innerHTML = (i + n).toString()
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}
