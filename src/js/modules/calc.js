const calc = (
  sizeSelector,
  materialSelector,
  optionsSelector,
  promocodeSelector,
  priceSelector,
  calcState
) => {
  const sizeElem = document.querySelector(sizeSelector),
    materialElem = document.querySelector(materialSelector),
    optionsElem = document.querySelector(optionsSelector),
    promocode = document.querySelector(promocodeSelector),
    priceInputElem = document.querySelector(priceSelector);

  let sum;

  const calcPrice = () => {
    sum = +sizeElem.value * +materialElem.value + +optionsElem.value;
    if (!sizeElem.value || !materialElem.value) {
      priceInputElem.textContent = 'Пожалуйста, выберите размер и материал картины';
      return;
    }

    if (/iwantpopart/i.test(promocode.value)) {
      priceInputElem.textContent = `Итоговая сумма с учетом промокода составляет: ${sum * 0.7}`;
      calcState.result = sum * 0.7;
    } else {
      priceInputElem.textContent = `Итоговая сумма ${sum}`;
      calcState.result = sum;
    }
  };

  sizeElem.addEventListener('change', calcPrice);
  materialElem.addEventListener('change', calcPrice);
  optionsElem.addEventListener('change', calcPrice);
  promocode.addEventListener('input', () => {
    promocode.value = promocode.value.replace(/\W/g, '');
  });
  promocode.addEventListener('input', calcPrice);
};

export default calc;
