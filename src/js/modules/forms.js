import { postData } from '../services/requests';

const forms = calcState => {
  const formsElem = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    textarea = document.querySelectorAll('textarea'),
    upload = document.querySelectorAll('[name="upload"]'),
    selects = document.querySelectorAll('select');

  const phrases = {
    loading: 'Загрузка',
    success: 'Ваш запрос успешно отправлен',
    err: 'Возникла ошибка',
    spinner: '/assets/img/spinner.gif',
    ok: '/assets/img/ok.png',
    fail: '/assets/img/fail.png',
  };

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });

    textarea.forEach(item => {
      item.value = '';
    });

    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    });

    selects.forEach(item => {
      item.value = '';
    });

    document.querySelector('.calc-price').textContent =
      'Для расчета нужно выбрать размер картины и материал картины';
  };

  upload.forEach(item => {
    item.addEventListener('input', () => {
      const arr = item.files[0].name.split('.');
      let dots;

      arr[0].length > 10 ? (dots = '....') : (dots = '.');
      const name = arr[0].slice(0, 6) + dots + arr[1];

      item.previousElementSibling.textContent = name;
    });
  });

  formsElem.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const alertWrapper = document.createElement('div');
      alertWrapper.classList.add('status');
      alertWrapper.classList.add('animated', 'fadeInUp');
      form.parentNode.appendChild(alertWrapper);

      form.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        form.style.display = 'none';
      }, 500);

      const img = document.createElement('img');
      img.src = phrases.spinner;
      img.alt = 'spinner';
      alertWrapper.append(img);

      const textMessage = document.createElement('div');
      textMessage.textContent = phrases.loading;
      alertWrapper.append(textMessage);

      const path = {
        designer: '/assets/server.php',
        question: '/assets/question.php',
      };
      let api;
      form.closest('.popup-design') || form.classList.contains('calc-form')
        ? (api = path.designer)
        : (api = path.question);

      const formData = new FormData(form);
      if (form.classList.contains('calc-form')) formData.append('result', calcState.result);

      postData(api, formData)
        .then(res => {
          console.log(res);
          img.src = phrases.ok;
          img.alt = 'ok';

          textMessage.textContent = phrases.success;
        })
        .catch(err => {
          img.src = phrases.fail;
          img.alt = 'fail';

          textMessage.textContent = phrases.err;
        })
        .finally(() => {
          clearInputs();
          if (form.classList.contains('calc-form')) {
            delete calcState.result;
          }
          setTimeout(() => {
            alertWrapper.classList.remove('fadeInUp');
            alertWrapper.classList.add('fadeOutUp');
            alertWrapper.remove();

            form.classList.remove('fadeOutUp');
            form.classList.add('fadeInUp');
            form.style.display = 'block';
          }, 7000);
        });
    });
  });
};

export default forms;
