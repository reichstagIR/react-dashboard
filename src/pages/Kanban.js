import React from 'react';
//Lib
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
//Component
import {Header} from "../components";
//Data
import {kanbanData , kanbanGrid} from "../data/dummy";

const Kanban = () => {
    return (
        <div className="m-4 md:m-10 mt-24 p-4 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-xl">
            <Header title="Kanban" category="App"/>
            <div className="mt-10">
                <KanbanComponent id="kanban" keyField="Status" dataSource={kanbanData} cardSettings={{ contentField: "Summary", headerField: "Id" }}>
                    <ColumnsDirective>
                        {kanbanGrid.map(item => (
                            <ColumnDirective key={item.headerText} {...item}/>
                        ))}
                    </ColumnsDirective>
                </KanbanComponent>
            </div>
        </div>
    );
};

export default Kanban;
