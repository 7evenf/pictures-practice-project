import modal from './modules/modal';
import sliders from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	modal();
	sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
	sliders('.main-slider-item', 'vertical');
});
