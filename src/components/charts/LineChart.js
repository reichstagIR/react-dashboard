import React from 'react';
//Lib
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
//Data
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';

const LineChart = () => {

    return (
        <ChartComponent id="line-chart" height="420px" primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true }} background={"transparent"} legendSettings={{ background: 'white' }}>
            <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
            <SeriesCollectionDirective>
                {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};

export default LineChart;
