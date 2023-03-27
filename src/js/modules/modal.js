const modal = () => {
	const bindModal = (triggerSelector, modalSelector, crossSelector) => {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			cross = document.querySelector(crossSelector),
			scroll = calcScroll();

		const showModal = () => {
			modal.style.display = 'block';
			document.body.classList.add('modal-open');
			document.body.style.marginRight = `${scroll}px`;
		};

		const closeModal = () => {
			modal.style.display = 'none';
			document.body.classList.remove('modal-open');
			document.body.style.marginRight = '0px';
		};

		trigger.forEach(elem => elem.addEventListener('click', showModal));
		modal.addEventListener('click', e => {
			if (e.target == modal || e.target == cross) closeModal();
		});
	};

	const showModalByTime = (selector, time) => {
		setTimeout(() => {
			const modal = document.querySelector(selector);
			const modals = [...document.querySelectorAll('[data-modal]')];

			if (modals.some(element => getComputedStyle(element).display == 'block'))
				return;

			modal.style.display = 'block';
			document.body.classList.add('modal-open');
			document.body.style.marginRight = `${scroll}px`;
		}, time);
	};

	const calcScroll = () => {
		const div = document.createElement('div');

		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'hidden';

		document.body.appendChild(div);
		const scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
	};

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
	bindModal(
		'.card-block .button-consultation',
		'.popup-consultation',
		'.popup-consultation .popup-close'
	);
	showModalByTime('.popup-design', 60000);
};

export default modal;
