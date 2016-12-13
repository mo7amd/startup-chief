'use strict';

angular.module('IndexOfApp', ['firebase'])

.controller('IndexController', ['$scope', '$location', '$anchorScroll',
        function($scope, $location, $anchorScroll) {

            $scope.showHellow = false;
            $scope.message = 'Loading ...';
            $scope.isNavCollapsed = true;

            // *************************************************************************
            $scope.gotoContact = function() {
                // console.log('goto contact');
                $location.hash('contact');
                $anchorScroll();
            };
            $scope.gotoAbout = function() {
                // console.log('goto about');
                $location.hash('about');
                $anchorScroll();
            };

        }
    ])
    .controller('FeedbackController', ['$scope',
        function($scope) {

            // $scope.sendFeedback = function() {

            //     // console.log($scope.feedback);

            //     if (($scope.feedback.agree) && ($scope.feedback.mychannel === '')) {
            //         $scope.invalidChannelSelection = true;
            //         // console.log('incorrect');
            //     } else {
            //         feedbackFactory.savefeedback().save($scope.feedback);
            //         $scope.invalidChannelSelection = false;
            //         $scope.feedback = {
            //             mychannel: '',
            //             firstName: '',
            //             lastName: '',
            //             agree: false,
            //             email: ''
            //         };
            //         $scope.feedback.mychannel = '';
            //         $scope.feedbackForm.$setPristine();
            // console.log($scope.feedback);
            //     }
            // };
        }
    ])

.controller('subscribeController', ['$scope',
    function($scope) {

        //     $scope.sendSubscribe = function() {

        //         // console.log($scope.subscribe);

        //         if (($scope.subscribe.agree) && ($scope.subscribe.mychannel === '')) {
        //             $scope.invalidChannelSelection = true;
        //             // console.log('incorrect');
        //         } else {
        //             subscribeFactory.saveSubscribe().save($scope.subscribe);
        //             $scope.invalidChannelSelection = false;
        //             $scope.subscribe = {
        //                 email: '',
        //                 choice: {
        //                     Marketing: false,
        //                     Business: false,
        //                     Financial: false
        //                 },
        //                 other: ''
        //             };
        //             $scope.subscribeForm.$setPristine();
        //             // console.log($scope.subscribe);
        //             $scope.showSubscribe = true;
        //             $scope.toggleSubscribe = function() {
        //                 $scope.showSubscribe = !$scope.showSubscribe;
        //                 // console.log('here');
        //             };
        //         }
        //     };
    }
]);