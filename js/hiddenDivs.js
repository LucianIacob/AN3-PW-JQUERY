$(document).ready(function () {

    var $interval = setInterval(function () {
        run(700);
    }, 3000);

    var $numDivs = $('#slideshow li').length;
    var $divCount = 1;
    var $firstDiv = $('#slideshow li:first');
    var $lastDiv = $('#slideshow li:last');
    var $currSlide = $('#slideshow li.current-slide');
    var $inChanging = false;

    function run(time) {
        if ($inChanging == true)
            return;
        $inChanging = true;
        $currSlide.fadeOut(time, function () {
            $currSlide.removeClass('current-slide');
            if ($divCount < $numDivs) {
                $currSlide.next().fadeIn(time, function () {
                    $currSlide.next().addClass('current-slide');
                    $currSlide = $('#slideshow li.current-slide');
                    $inChanging = false;
                });
                $divCount += 1;
            } else {
                $firstDiv.fadeIn(time, function () {
                    $firstDiv.addClass('current-slide');
                    $currSlide = $('#slideshow li.current-slide');
                    $inChanging = false;
                });
                $divCount = 1;
            }
        });
    }

    $("#prevButton").click(function () {

        if ($inChanging == true)
            return;
        else {
            $inChanging = true;
            window.clearInterval($interval);

            $currSlide.fadeOut(0, function () {
                $currSlide.removeClass('current-slide');
                if ($divCount > 1) {

                    $currSlide.prev().fadeIn(0, function () {
                        $currSlide.prev().addClass('current-slide');
                        $currSlide = $('#slideshow li.current-slide');
                        $inChanging = false;
                    });
                    $divCount -= 1;
                } else {
                    $lastDiv.fadeIn(0, function () {
                        $lastDiv.addClass('current-slide');
                        $currSlide = $('#slideshow li.current-slide');
                        $inChanging = false;
                    });
                    $divCount = $numDivs;
                }
            });
            $interval = setInterval(function () {
                run(700);
            }, 3000);

        }
    });

    $("#nextButton").click(function () {

        window.clearInterval($interval);
        run(0);
        $interval = setInterval(function () {
            run(700);
        }, 3000);
    });

});