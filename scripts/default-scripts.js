window.addEventListener('DOMContentLoaded', () => {

	const womenMenu = document.querySelector('.women'),
 		  manMenu = document.querySelector('.man'),
		  menu = document.querySelector('.second_level'),
          fullMenu = document.querySelector('.third_level'),
          menuPhoto = document.querySelector('.image_watch_all'),
          iconUser = document.querySelector('.icon_user'),
          extraUserData = document.querySelector('.extra_user_data');

    function thirdLevelMenu(link){
		menuPhoto.src = link;

		menu.classList.toggle('hide');
		menu.classList.toggle('fade');
		fullMenu.onmouseleave = function(e){ menu.classList.toggle('hide'); }
    }

	womenMenu.addEventListener('mouseover', () => {
		thirdLevelMenu('image/watch_all_promotions_women.jpg');
	});

	manMenu.addEventListener('mouseover', () => {
		thirdLevelMenu('image/watch_all_promotions_man.webp');
	});

	iconUser.addEventListener('mouseover', () => {
		extraUserData.classList.toggle('hide');
		extraUserData.onmouseleave = function(e){ extraUserData.classList.toggle('hide'); }
	});

});
