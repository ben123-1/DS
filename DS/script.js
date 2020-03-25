$(document).ready(function(){	
			
	});
// Обработка страниц при нажатии на кнопку/ярычок таба 
	function OpenTab(evt, tabName) {
		var i, tabcontent, tablinks;

		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}

		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}

		document.getElementById(tabName).style.display = "block";
		evt.currentTarget.className += " active";
	}
	// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// --------------------------------------------------------------------------------

// Круглая кнопочка для возврата на верх страницы
	jQuery(document).ready(function($){
		var
		//скорость прокрутки к началу страницы
		speed = 500,
		//html-разметка кнопки
		$scrollTop = $('<a href="#" title="Быстро вернуться наверх" class="scrollTop"><i class="fa fa-angle-double-up"></i></a>').appendTo('body');        
		$scrollTop.click(function(e){
			e.preventDefault();
			$( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
		});
		//настройка режима появления кнопки
		function show_scrollTop(){
			( $(window).scrollTop() > 300 ) ? $scrollTop.fadeIn(600) : $scrollTop.fadeOut(600);
		}
		$(window).scroll( function(){ show_scrollTop(); } );
		show_scrollTop();
		});
		// ------------------------------------------------------------------------------------------
// Обработка АККАРДИОНА
		var acc = document.getElementsByClassName("accord");
		var i;
		
		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function() {
				/* Toggle between adding and removing the "active" class,
				to highlight the button that controls the panel */
				this.classList.toggle("active");
		
				/* Toggle between hiding and showing the active panel */
				var hide = this.nextElementSibling;
				if (hide.style.maxHeight){
					hide.style.maxHeight = null;
				  } else {
					hide.style.maxHeight = hide.scrollHeight + "px";
				  } 
				
			});
		} 
		// Первая вкладка аккардиона при загрузке страницы уже раскрыта.
		document.getElementById("openMain").click();
		// -------------------------------------------------------------------------------

// ---------Считывание файла .xls не .xlsx---------------------------------------------------
	
// --------------------------------------------------------------