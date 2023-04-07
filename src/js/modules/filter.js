const filter = () => {
  const parentBtns = document.querySelector('.portfolio-menu'),
    allBtns = parentBtns.querySelectorAll('li'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    allPhoto = wrapper.querySelectorAll('.portfolio-block'),
    noContent = document.querySelector('.portfolio-no');

  const typeFilter = markTypeSelector => {
    const markType = wrapper.querySelectorAll(markTypeSelector);

    allPhoto.forEach(item => {
      item.style.display = 'none';
      item.classList.remove('animated', 'fadeIn');
    });

    noContent.style.display = 'none';
    noContent.classList.remove('animated', 'fadeIn');

    if (!markType.length > 0) {
      noContent.style.display = 'block';
      noContent.classList.add('animated', 'fadeIn');
    } else {
      markType.forEach(item => {
        item.style.display = 'block';
        item.classList.add('animated', 'fadeIn');
      });
    }
  };

  parentBtns.addEventListener('click', e => {
    const target = e.target;

    if (target && target.tagName === 'LI') {
      typeFilter(`.${target.className.replace(/active/, '')}`);
    }
  });

  parentBtns.addEventListener('click', e => {
    const target = e.target;

    if (target && target.tagName === 'LI') {
      allBtns.forEach(item => {
        item.classList.remove('active');
        target.classList.add('active');
      });
    }
  });
};

export default filter;
