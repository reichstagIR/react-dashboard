import React from 'react';
//Components
import {Header} from "../components/index";
//Lib
import { GridComponent , ColumnsDirective , ColumnDirective , Sort , Page , Inject , Toolbar , Search , ContextMenu , Edit} from '@syncfusion/ej2-react-grids';
//Data
import {contextMenuItems, employeesData, employeesGrid} from '../data/dummy';

const Employees = () => {
    const editing = { allowDeleting: true, allowEditing: true };
    return (
        <div className="m-4 md:m-10 mt-24 p-4 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-xl">
            <Header category="Pages" title="Employees"/>
            <div className="mt-8">
                <GridComponent dataSource={employeesData} height="463px" allowPaging allowSorting allowEditing toolbar={["Search"]} contextMenuItems={contextMenuItems} editSettings={editing} width="auto">
                    <ColumnsDirective>
                        {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                    </ColumnsDirective>
                    <Inject services={[Sort , Page , Search, Toolbar , ContextMenu , Edit]} />
                </GridComponent>
            </div>
        </div>
    );
};

export default Employees;
