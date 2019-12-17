(function () {

	function thrasherMain() {
		checkThrasherOnScreen();

		window.addEventListener('scroll', function () {
			checkThrasherOnScreen();
		});
	}

	function checkThrasherOnScreen() {
		var tree = document.querySelector('.charity-appeal-tree-2019')
		var r = onScreenRatio(tree);
		// r = 1 when the the thrasher at the bottom or further
		// r = 0.5 when the thrasher is in the middle
		// r = 0 when the thrasher hits the top of the screen
		// this uses the vertical middle of the thrasher as a
		// reference point (i.e 140px down the top on a 280px thrasher)

		if (r > 0.55) {
			tree.classList.add('step1');
			tree.classList.remove('step2');
			tree.classList.remove('step3');
		} else if (r > 0.4) {
			tree.classList.add('step2');
			tree.classList.remove('step1');
			tree.classList.remove('step3');
		} else {
			tree.classList.add('step3');
			tree.classList.remove('step1');
			tree.classList.remove('step2');
		}
	}

	function onScreenRatio(el) {
		var viewportHeight = window.innerHeight,
			scrollTop = window.scrollY,
			elementOffsetTop = el.getBoundingClientRect().top,
			elementHeight = el.offsetHeight,
			elementOffsetMiddle = (elementOffsetTop + (elementHeight / 2));

		if (elementOffsetMiddle > (viewportHeight)) {
			return 1;
		} else if (elementOffsetMiddle < 0) {
			return 0;
		} else {
			var ratio = (elementOffsetMiddle / viewportHeight);
			return ratio;
		}
	}


	function checkExists(startThrasherFunction) {
		var checkInterval = setInterval(function () {
			if (document.querySelector('.charity-appeal-tree-2019')) {
                console.log('tree');
				startThrasherFunction();
				clearInterval(checkInterval);
			}
		}, 100);
	}

	checkExists(thrasherMain);

})();
