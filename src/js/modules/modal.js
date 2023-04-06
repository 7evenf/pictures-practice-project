const modal = () => {
	let modalState;
	const bindModal = (
		triggerSelector,
		modalSelector,
		crossSelector,
		giftSelector,
		destroy = false
	) => {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			gift = document.querySelector(giftSelector),
			scroll = calcScroll();

		const showModal = () => {
			modal.classList.add('animated', 'fadeIn');
			modal.style.display = 'block';
			document.body.classList.add('modal-open');
			document.body.style.marginRight = `${scroll}px`;
			gift.style.marginRight = `${scroll}px`;
		};

		const closeModal = () => {
			modal.style.display = 'none';
			document.body.classList.remove('modal-open');
			document.body.style.marginRight = '0px';
			gift.style.marginRight = ``;
		};

		trigger.forEach(elem =>
			elem.addEventListener('click', e => {
				if (destroy) e.target.remove();
				showModal();
				modalState = true;
			})
		);
		modal.addEventListener('click', e => {
			if (
				e.target == modal ||
				e.target.classList.contains(crossSelector.replace(/^\./, ''))
			)
				closeModal();
		});
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

	const showModalByTime = (modalSelector, giftSelector, time) => {
		setTimeout(() => {
			const modal = document.querySelector(modalSelector),
				modals = [...document.querySelectorAll('[data-modal]')],
				gift = document.querySelector(giftSelector);

			if (modals.some(element => getComputedStyle(element).display == 'block'))
				return;

			modal.style.display = 'block';
			document.body.classList.add('modal-open');
			let scroll = calcScroll();
			document.body.style.marginRight = `${scroll}px`;
			if (gift) {
				gift.style.marginRight = `${scroll}px`;
			}
		}, time);
	};

	const openByScroll = giftSelector => {
		window.addEventListener('scroll', () => {
			let scrollHeight = Math.max(
				document.documentElement.scrollHeight,
				document.body.scrollHeight
			);
			if (
				scrollHeight <=
					window.scrollY + document.documentElement.clientHeight &&
				!modalState
			) {
				document.querySelector(giftSelector).click();
			}
		});
	};

	bindModal('.button-design', '.popup-design', '.popup-close', '.fixed-gift');
	bindModal(
		'.card-block .button-consultation',
		'.popup-consultation',
		'.popup-close',
		'.fixed-gift'
	);
	bindModal('.fixed-gift', '.popup-gift', '.popup-close', '.fixed-gift', true);
	openByScroll('.fixed-gift');
	showModalByTime('.popup-design', '.fixed-gift', 60000);
};

export default modal;
