// 一覧画面から詳細画面へ
const buttonOpen = document.querySelector('.button-open');
buttonOpen.addEventListener('click', () => {
  document.startViewTransition(() => {
    document.querySelector('#view-index').hidden = true;
    document.querySelector('#view-detail').hidden = false;
  });
});

// 詳細画面から一覧画面へ
const buttonClose = document.querySelector('.button-close');
buttonClose.addEventListener('click', () => {
  document.startViewTransition(() => {
    document.querySelector('#view-index').hidden = false;
    document.querySelector('#view-detail').hidden = true;
  });
});
