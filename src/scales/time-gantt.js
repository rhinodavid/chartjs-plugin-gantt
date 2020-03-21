'use strict';

import {ScaleUtils} from "./scale-utils";

export function TimeGanttScale(Chart) {

    const scale = Chart.scaleService.getScaleConstructor('time').extend({
        isTime: true,

        getRightValue: function (rawValue) {
            return ScaleUtils.getRightValue(this, rawValue);
        },

        // Remove because it doesn't play well with time axis unless you want to only show data bounds
        // determineDataLimits: function () {
        //     this.__proto__.__proto__.determineDataLimits.call(this);
        //     ScaleUtils.determineDataLimits(this);
        // },

        getLabelForIndex: function (index, datasetIndex) {
            return ScaleUtils.getLabelForIndex(this, index, datasetIndex);
        }
    });
    ScaleUtils.extendScale(Chart, 'time', 'time-gantt', scale);
}
