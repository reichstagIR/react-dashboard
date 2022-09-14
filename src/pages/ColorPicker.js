import React , {useRef} from 'react';
//Lib
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
//Components
import {Header} from "../components";

const ColorPicker = () => {

    const previewSelectedColor = useRef();

    const changeHandler = (args) => {
        previewSelectedColor.current.style.backgroundColor = args.currentValue.hex;
    }

    return (
        <div className="m-4 md:m-10 mt-24 p-4 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-xl">
            <Header title="ColorPicker" category="App"/>
            <div className="flex flex-col items-center justify-center my-10">
                <div id="preview" ref={previewSelectedColor}/>
                <div className="mt-4 block md:flex justify-center space-x-0 xl:space-x-20 lg:space-x-3 md:space-x-20">
                    <div className="text-center">
                        <p className="text-black text-2xl font-semibold dark:text-white">Inline palette</p>
                        <div className="mt-4">
                            <ColorPickerComponent inline={true} id="inline-Palette" showButtons={false} mode="Palette" modeSwitcher={false} change={changeHandler}></ColorPickerComponent>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-black text-2xl font-semibold dark:text-white">Inline Picker</p>
                        <div className="mt-4">
                            <ColorPickerComponent inline={true} id="inline-picker" showButtons={false} mode="Picker" modeSwitcher={false} change={changeHandler}></ColorPickerComponent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColorPicker;
