'use strict';

/**
 * @ngdoc service
 * @name geeGeeApp.Point
 * @description
 * # Point
 * Factory in the geeGeeApp.
 */
angular.module('geeGeeApp')
    .factory('Point', function () {

        var points = 0;

        return {
            getPoints: function () {
                return points;
            },

            addPoints: function (pointsToAdd) {
                points += pointsToAdd;
            },

            // FIXME: @Deprecated
            remove: function (pointsToRemove) {
                this.removePoints(pointsToRemove);
            },

            removePoints: function (pointsToRemove) {
                points -= pointsToRemove;
            }
        };
    });
