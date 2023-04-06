import { getResources } from '../services/requests';

const showMoreStyles = (trigger, wrapperSelector) => {
	const btn = document.querySelector(trigger),
		wrapper = document.querySelector(wrapperSelector);

	const createCards = response => {
		response.forEach(({ src, title, link }) => {
			const cards = document.createElement('div');

			cards.classList.add(
				'animated',
				'fadeInUp',
				'col-sm-3',
				'col-sm-offset-0',
				'col-xs-10',
				'col-xs-offset-1'
			);
			cards.innerHTML = `
        <div class=styles-block>
          <img src=${src} alt>
          <h4>${title}</h4>
          <a href=${link}>Подробнее</a>
        </div>
      `;
			wrapper.appendChild(cards);
		});
	};

	btn.addEventListener('click', function () {
		getResources('http://localhost:3000/styles')
			.then(data => createCards(data))
			.catch(err => {
				throw new Error();
			});

		this.remove();
	});
};

export default showMoreStyles;
