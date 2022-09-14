import React from 'react';

import { Header, LineChart } from '../components';

const Line = () => (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-xl">
        <Header category="Line" title="Inflation Rate" />
        <div className="my-10">
            <LineChart />
        </div>
    </div>
);

export default Line;