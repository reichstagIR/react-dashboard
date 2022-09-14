import React from 'react';
//Lib
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize, Inject } from '@syncfusion/ej2-react-schedule';
//Components
import {Header} from "../components/index";
//Data
import {scheduleData} from "../data/dummy";


const Calendar = () => {
    return (
        <div className="m-4 md:m-10 mt-24 p-4 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-xl">
            <Header category="App" title="Calendar"/>
            <div className="mt-10">
                <ScheduleComponent height='590px' selectedDate={new Date(2021 , 0 , 10)} eventSettings={{dataSource: scheduleData}}>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]}/>
                </ScheduleComponent>
            </div>
        </div>
        );
};

export default Calendar;
