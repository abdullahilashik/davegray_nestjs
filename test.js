jQuery(document).ready(function ($) {
    const $wrapper = $('.track_car .swiper-wrapper');
    const $slides = $wrapper.find('.swiper-slide');

    const gap = 16;
//     const totalWrapperWidth = 1400; // 1714
	const totalWrapperWidth = $wrapper.width(); // dynamically calculate width

    const expandedWidth = 660;
    const slideCount = $slides.length;
    const slidesPerView = 3;

    const totalGaps = gap * (slidesPerView - 1);
    const defaultWidth = (totalWrapperWidth - totalGaps) / slidesPerView;

    const shrinkWidth = (totalWrapperWidth - expandedWidth - totalGaps) / (slidesPerView - 1);

    // Set default widths on load
    $slides.each(function () {
        $(this).css({
            width: defaultWidth,
            marginRight: gap,
            opacity: 1
        });
    });

    // Last slide shouldn't have extra margin
    $slides.last().css('marginRight', 0);

    $slides.on('mouseenter', function () {
        const $hovered = $(this);

        $slides.each(function () {
            const $slide = $(this);

            if ($slide.is($hovered)) {
                $slide.stop(true).animate({
                    width: expandedWidth,
                    opacity: 1
                }, 200);
            } else {
                $slide.stop(true).animate({
                    width: shrinkWidth,
                    opacity: 0.6
                }, 200);
            }
        });
    });

    $wrapper.on('mouseleave', function () {
        $slides.each(function () {
            $(this).stop(true).animate({
                width: defaultWidth,
                opacity: 1
            }, 200);
        });
    });
});