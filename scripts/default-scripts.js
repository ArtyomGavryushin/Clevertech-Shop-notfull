window.addEventListener('DOMContentLoaded', () => {

	const womenMenu = document.querySelector('.women'),
 		  manMenu = document.querySelector('.man'),
		  menu = document.querySelector('.second_level'),
          fullMenu = document.querySelector('.third_level'),
          menuPhoto = document.querySelector('.image_watch_all');

    function thirdLevelMenu(target){
		menu.classList.toggle('hide');
		menu.classList.toggle('fade');
		fullMenu.onmouseleave = function(e){ menu.classList.toggle('hide'); }
    }

	womenMenu.addEventListener('mouseover', () => {
		menuPhoto.src = 'image/watch_all_promotions_women.jpg';
		thirdLevelMenu();
	});

	manMenu.addEventListener('mouseover', () => {
		menuPhoto.src = 'image/watch_all_promotions_man.webp';
		thirdLevelMenu();
	});

});