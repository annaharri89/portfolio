/**
 * Created by ETASpare on 8/7/2017.
 */
angular.module('AnnasPortfolio').controller('StitchCounterCarouselCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlides = function() {
        var images = [
            'stitch_counter_single_counter.png',
            'stitch_counter_double_counter.png',
            'stitch_counter_double_counter_tablet_7_inch.png',
            'stitch_counter_single_counter_landscape.png',
            'stitch_counter_double_counter_landscape.png'
        ];
        for (var i = 0; i < images.length; i++) {
            slides.push({
            image: 'images/' + images[i],
            text: ['Single Counter', 'Double Counter', 'Themed Tablet', 'Themed Single Counter Landscape',
                'Themed Double Counter Landscape'][slides.length % 5],
            id: currIndex++
        });
        }
    };

    $scope.addSlides();
});