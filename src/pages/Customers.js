import React from 'react';
//Components
import {Header} from "../components/index";
//Lib
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit , Toolbar , Inject } from '@syncfusion/ej2-react-grids';
//Data
import { customersData, contextMenuItems, customersGrid } from '../data/dummy';

const Customers = () => {
    const editing = { allowDeleting: true, allowEditing: true };
    return (
        <div className="m-4 md:m-10 mt-24 p-4 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-xl">
            <Header category="Pages" title="Customers"/>
            <div className="mt-8">
                <GridComponent height="475px" dataSource={customersData} allowPaging allowSorting allowExcelExport toolbar={["Delete"]} allowPdfExport contextMenuItems={contextMenuItems} editSettings={editing}>
                    <ColumnsDirective>
                        {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                    </ColumnsDirective>
                    <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport , Toolbar]} />
                </GridComponent>
            </div>
        </div>
    );
};

export default Customers;
