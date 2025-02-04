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

import { Component } from '@angular/core';
import { stackedSeriesChartDemoDataCoffee } from '../stacked-series-chart-demo-data';
import { DtStackedSeriesChartValueContinuousAxisMap } from '@dynatrace/barista-components/stacked-series-chart';

@Component({
  selector: 'dt-example-stacked-series-chart-date-barista',
  templateUrl: './stacked-series-chart-linear-example.html',
})
export class DtExampleStackedSeriesChartLinear {
  series = stackedSeriesChartDemoDataCoffee;
  mode: 'bar' | 'column' = 'column';

  continuousAxisFormat = '$,f';
  continuousAxisMap: DtStackedSeriesChartValueContinuousAxisMap = (_, index) =>
    index * 0.5;
}
