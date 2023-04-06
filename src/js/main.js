import modal from './modules/modal';
import sliders from './modules/slider';
import sendForms from './modules/forms';
import checkTextInputs from './modules/checkTextInputs';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	modal();
	sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
	sliders('.main-slider-item', 'vertical');
	sendForms();
	checkTextInputs('[name="name"]');
	checkTextInputs('[name="message"]');
});
