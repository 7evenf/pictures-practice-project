const sliders = (slidesSelector, dir, prev, next) => {
	let indexSlide = 1;
	let pause;
	const slides = document.querySelectorAll(slidesSelector);

	const showSlide = n => {
		if (n > slides.length) {
			indexSlide = 1;
		}
		if (n < 1) {
			indexSlide = slides.length;
		}

		for (let slide of slides) {
			slide.classList.add('animated');
			slide.style.display = 'none';
		}

		slides[indexSlide - 1].style.display = 'block';
	};

	showSlide(indexSlide);

	const addIndex = n => {
		indexSlide += n;
		showSlide(indexSlide);
	};

	const activateAnimation = () => {
		if (dir === 'vertical') {
			pause = setInterval(() => {
				addIndex(1);
				slides[indexSlide - 1].classList.add('slideInUp');
			}, 3500);
		} else {
			pause = setInterval(() => {
				addIndex(1);
				slides[indexSlide - 1].classList.remove('slideInLeft');
				slides[indexSlide - 1].classList.add('slideInRight');
			}, 4000);
		}
	};

	activateAnimation();

	slides[0].parentNode.addEventListener('mouseenter', () =>
		clearInterval(pause)
	);
	slides[0].parentNode.addEventListener('mouseleave', activateAnimation);

	try {
		const prevBtn = document.querySelector(prev),
			nextBtn = document.querySelector(next);

		prevBtn.addEventListener('click', () => {
			addIndex(-1);
			slides[indexSlide - 1].classList.remove('slideInRight');
			slides[indexSlide - 1].classList.add('slideInLeft');
		});

		nextBtn.addEventListener('click', () => {
			addIndex(1);
			slides[indexSlide - 1].classList.remove('slideInLeft');
			slides[indexSlide - 1].classList.add('slideInRight');
		});
	} catch (e) {}
};

export default sliders;
