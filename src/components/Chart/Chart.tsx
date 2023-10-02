import React from 'react'
import { Progressbar } from "./Progressbar"

export function Chart(){
    return (
        <div>
            <div className="bg-gray-800 text-gray-400 rounded shadow-xl py-5 px-5 w-1/3 mx-auto">
                <div className="flex w-full">
                    <h2 className="text-lg font-semibold leading-tight flex-1">Total de contratos</h2>
                </div>

                <div className="pb-4">
                    <h4 className="text-2xl lg:text-3xl text-white font-semibold leading-tight inline-block">4</h4>
                </div>

                <div>
                    <Progressbar/>
                </div>

                
                <div className="flex flex-row pt-4">
                    <div className="w-[500px]">
                        <div className="text-sm">
                            <ul>
                                Manutenção
                            </ul>
                        </div>  
                        <div className="font-medium text-sm text-white">
                            <span>0</span>%
                        </div>
                    </div>
                    <div className="w-[400px]">
                        <div className="text-sm">
                            <ul>
                                Software
                            </ul>
                        </div>  
                        <div className="font-medium text-sm text-white">
                            <span>0</span>%
                        </div>
                    </div>
                    <div className="w-1/6">
                        <div className="text-sm">
                            <ul>
                                Obras
                            </ul>
                        </div>  
                        <div className="font-medium text-sm text-white">
                            <span>0</span>%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}