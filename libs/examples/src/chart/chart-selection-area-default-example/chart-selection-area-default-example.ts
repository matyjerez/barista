/**
 * @license
 * Copyright 2021 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// tslint:disable no-magic-numbers
import { Component } from '@angular/core';
import { generateData } from '../chart-data-utils';

@Component({
  selector: 'dt-example-chart-selection-area-default',
  templateUrl: 'chart-selection-area-default-example.html',
})
export class DtExampleChartSelectionAreaDefault {
  validRange = false;
  rangeValidChanges(valid: boolean): void {
    this.validRange = valid;
  }

  closed(): void {
    // emits when the selection gets closed
  }

  valueChanges(_value: number | [number, number]): void {
    // emits when the value changes
  }

  /** Chart options and series */
  options: Highcharts.Options = {
    xAxis: {
      type: 'datetime',
    },
    yAxis: [
      {
        title: undefined,
        labels: {
          format: '{value}',
        },
        tickInterval: 10,
      },
      {
        title: undefined,
        labels: {
          format: '{value}/min',
        },
        opposite: true,
        tickInterval: 50,
      },
    ],
    plotOptions: {
      column: {
        stacking: 'normal',
      },
      series: {
        marker: {
          enabled: false,
        },
      },
    },
  };
  series: Highcharts.SeriesOptionsType[] = [
    {
      name: 'Requests',
      type: 'column',
      yAxis: 1,
      data: generateData(40, 0, 200, 1370304000000, 900000),
    },
  ];
}
