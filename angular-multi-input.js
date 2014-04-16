(function() {

    "use strict";

    multiInputModule = angular.module('pep.multi-input', []);

    multiInputModule.directive('multiInput', function () {

        return {
            link: function postLink (scope, element, attrs) {
                scope.code = [];

                scope.onKeyUp = function (e) {
                    var $target = $(e.currentTarget),
                        $nextTarget, $previousTarget,
                        maxLength = parseInt($target[0].attributes['maxlength'].value, 10),
                        inputLength = $target[0].value.length;

                    if (inputLength >= maxLength) {
                        $nextTarget = $target.next();
                        if ($nextTarget.is('input')) {
                            $nextTarget.focus().val("");
                        }
                    } else if (inputLength === 0 && e.keyCode === 8) {
                        $previousTarget = $target.prev();
                        if ($previousTarget.is('input')) {
                            $previousTarget.focus().val("");
                        }
                    }
                };
            }
        }

    });

});