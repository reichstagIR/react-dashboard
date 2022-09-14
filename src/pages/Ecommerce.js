import React , {useContext} from 'react';
//Icons
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
//Components
import {Button , SparkLine , Stacked} from "../components";
//Data
import { earningData , SparklineAreaData} from '../data/dummy';
//Context
import {ContextState} from "../Context/ContextProvider";
//Styles
import "bootstrap/dist/css/bootstrap-grid.min.css";

const Ecommerce = () => {

    const {state} = useContext(ContextState);

    return (
        <div className="mt-24">
            <div className="container-lg">
                <div className="row">
                    <div className="col-12 col-xxl-3">
                        <div className="dark:bg-secondary-dark-bg bg-white rounded-xl p-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-gray-400 font-bold">Earnings</p>
                                    <span className="mt-2 text-2xl dark:text-white">$63,448.78</span>
                                    <Button padding="0.8rem 0.6rem" textSize="md" color={state.colorTheme} text="Download" textColor="#fff" borderRadius="xl" customStyle={{display : "block" , marginTop : "1.3rem"}}/>
                                </div>
                                <Button padding="1.1rem" textSize="2xl" color={state.colorTheme} text={<BsCurrencyDollar />} textColor="#fff" borderRadius="full" customStyle={{display : "block"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xxl-9 mt-4 xl:mt-0">
                        <div className="container">
                            <div className="row g-1">
                                {earningData.map((item) => (
                                    <div className="col-12 col-md-6 col-xxl-3" key={item.title}>
                                        <div className="dark:bg-secondary-dark-bg bg-white rounded-xl p-4 flex flex-col items-center md:block">
                                            <Button padding="1.1rem" textSize="2xl" color={item.iconBg} text={item.icon} textColor={item.iconColor} borderRadius="full" customStyle={{display : "block"}}/>
                                            <p className="mt-2 dark:text-white text-lg font-semibold">{item.amount}<span className={`text-${item.pcColor} font-normal text-sm ml-2`}>{item.percentage}</span></p>
                                            <p className="mt-2 text-gray-400">{item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-7 flex justify-center">
                    <div className="col-12 col-xxl-10">
                        <div className="bg-white dark:bg-secondary-dark-bg rounded-xl p-3">
                            <div className="flex items-center justify-between">
                                <p className="text-lg lg:text-xl font-semibold dark:text-white">Revenue Updates</p>
                                <div className="flex items-center justify-center gap-3">
                                    <div className="flex items-center justify-center text-gray-600  gap-2">
                                        <GoPrimitiveDot />
                                        <span>Expense</span>
                                    </div>
                                    <div className="flex items-center justify-center text-green-400 gap-2">
                                        <GoPrimitiveDot />
                                        <span>Budget</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 block md:flex lg:space-y-0 space-y-8 justify-center lg:divide-x md:divide-x divide-x-0">
                                <div className="flex items-center justify-center">
                                    <div className="space-y-6  mr-0 md:mr-10 lg:mr-2 xl:mr-16">
                                        <div>
                                            <div className="flex items-end justify-start gap-4">
                                                <p className="text-black dark:text-white text-3xl font-semibold">$93,438</p>
                                                <Button padding="0.2rem 0.3rem" textSize="sm" color="#4ADE80" text="23%" textColor="#FFF" borderRadius="xl" customStyle={{display : "blobk"}}/>
                                            </div>
                                            <p className="text-gray-500 dark:text-white text-lg">Budget</p>
                                        </div>
                                        <div>
                                            <p className="text-black dark:text-white text-3xl font-semibold">$48,487</p>
                                            <p className="text-gray-500 dark:text-white text-lg">Expense</p>
                                        </div>
                                        <div>
                                            <SparkLine currentColor="blue" id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color="blue" />
                                        </div>
                                        <Button padding="0.8rem 0.6rem" textSize="md" color={state.colorTheme} text="Download Report" textColor="#fff" borderRadius="xl" customStyle={{display : "block" , marginTop : "2rem"}}/>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="space-y-6 ml-0 md:ml-10 lg:ml-2 xl:ml-16">
                                        <Stacked width="320px" height="360px" color={state.colorTheme}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ecommerce;
