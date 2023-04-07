import modal from './modules/modal';
import sliders from './modules/slider';
import forms from './modules/forms';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const calcState = {};

  modal();
  sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', 'vertical');
  forms(calcState);
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  showMoreStyles('.button-styles', '#styles .row');
  calc('#size', '#material', '#options', '.promocode', '.calc-price', calcState);
});
