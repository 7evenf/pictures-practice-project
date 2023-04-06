import modal from './modules/modal';
import sliders from './modules/slider';
import sendForms from './modules/forms';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';

document.addEventListener('DOMContentLoaded', () => {
	'use strict';

	modal();
	sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
	sliders('.main-slider-item', 'vertical');
	sendForms();
	checkTextInputs('[name="name"]');
	checkTextInputs('[name="message"]');
	showMoreStyles('.button-styles', '#styles .row');
});
