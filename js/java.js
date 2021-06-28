$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__menu,.header__burger').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__link_lang').click(function(event) {
		$('.header__link_lang').removeClass('active');
		$(this).toggleClass('active');
	});
});
$('.menus__image').addClass('ibg');
$(window).resize(function(event) {
	daptive__function();
});
// daptive__header
function daptive__header(w,h) {
	var headerMenu =$('.header__menu');
	var headerLogo =$('.header__bottom__logo');
	var headerBody =$('.header__body');
	var headerBottom =$('.header__bottom');
	var columnLogo =$('.bottom__column__logo');
	var bottomColumn=$('.header__bottom__column');
	var headerTag =$('.header__tag');
	var headerTop =$('.header__top')
	if (w < 768) {
		$('.header__bottom,.header__tag').prependTo(headerMenu);
		$('.header__top,.header__tag').prependTo(headerMenu);
		$('.header__bottom__logo,.header__tag').prependTo(headerBody);
	}else{
		$('.header__bottom').prependTo(headerBody);
		$('.header__top').prependTo(headerBody);
		$('.header__bottom__logo').prependTo(columnLogo);
		$('.header__tag').prependTo(headerTop);
	}
}
// daptive__function
function daptive__function() {
	const windowInnerWidth = window.innerWidth;
	const windowInnerHeight = window.innerHeight;
	daptive__header(windowInnerWidth,windowInnerHeight);
}
daptive__function();

// Функция ibg для того чтоб елемент фото перенести в background
function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();

// JS-функция записи информации в fonts.scss

function fontsStyle(params) {
	let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
	if (file_content == '') {
		fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
			let fontname = items[i].split('.');
			fontname = fontname[0];
			if (c_fontname != fontname) {
				fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
			}
			c_fontname = fontname;
			}
		}
	})
	}
}

function cb() { }



// JS-функция которая определяет браузер



