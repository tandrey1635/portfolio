$(".gallery__box").owlCarousel({
	loop: true,
	margin: 16,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		481: {
			items: 2,
		},
		991: {
			items: 3,
		},
	},
});

const owlPhoto = $(".gallery__box_photo");
const owlVideo = $(".gallery__box_video");

const changeOwlNavigationListener = function (
	selector,
	parentSelector,
	navigationDirection
) {
	selector.click(function () {
		const changeOwlNavigations = function (
			parentSelector,
			navigationDirection
		) {
			parentSelector.trigger(navigationDirection);
		};
		changeOwlNavigations(parentSelector, navigationDirection);
	});
};

changeOwlNavigationListener(
	$(".gallery__arrows__photo-left"),
	owlPhoto,
	"prev.owl.carousel"
);
changeOwlNavigationListener(
	$(".gallery__arrows__photo-right"),
	owlPhoto,
	"next.owl.carousel"
);

export { owlVideo };
export { changeOwlNavigationListener };