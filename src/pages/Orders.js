import React from 'react';
//Components
import {Header} from "../components/index";
//Lib
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
//Data
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';

const Orders = () => {
    const editing = { allowDeleting: true, allowEditing: true };
    return (
        <div className="m-4 md:m-10 mt-24 p-4 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-xl">
            <Header category="Pages" title="Orders"/>
               <div className="mt-8">
                   <GridComponent id="gridcomp" height="505px" dataSource={ordersData} allowPaging allowSorting allowExcelExport allowPdfExport contextMenuItems={contextMenuItems} editSettings={editing}>
                       <ColumnsDirective>
                           {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                       </ColumnsDirective>
                       <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
                   </GridComponent>
               </div>
        </div>
    );
};

export default Orders;
