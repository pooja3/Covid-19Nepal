import React from 'react';
import styles from './dashboardComponent.module.scss';
import applyWrappers from '../../wrappers/ComponentWrapper';
import DashboardTableComponent  from '../dashboardTableComponent ';
import {
    filterData, 
    filterDataCount
} from '../../utils/utilFunction';

const DashboardComponent = (props) => {
    let summary = 0;
    let total  = 0, active = 0, recovered = 0;
    let districtsData = [];
    let dataForMuncipalties = [];
    if(props.action.districtSummary && 
            props.action.districtSummary.data 
        ){
            summary = props.action.districtSummary.data;
            total = summary.total;
            for(let i=0; i< 2; i++){
                if(summary.current_state[i].currentState == "recovered"){
                  recovered = summary.current_state[i].count;
                }else if(summary.current_state[i].currentState == "active"){
                    active = summary.current_state[i].count;
                }
            }
            let municipalityData = props.action.municipals.data;
            let municipalityCases = summary.municipality.cases;
            if(municipalityData && municipalityData.length >0){
                for(let j=0; j< municipalityCases.length; j++){
                    let res = filterData(municipalityData,"id",municipalityCases[j].municipality);
                    let totalCases = municipalityCases[j].count;
                    let totalActive = filterDataCount(summary.municipality.active,"municipality",municipalityCases[j].municipality);
                    let totalRecovered = filterDataCount(summary.municipality.recovered,"municipality",municipalityCases[j].municipality);
                    let totalDeath = filterData(summary.municipality.deaths,"municipality",municipalityCases[j].municipality);
                    dataForMuncipalties.push({
                        title: res.title,
                        districtId: res.district,
                        totalCases,
                        totalActive,
                        totalRecovered,
                        totalDeath
                    });
                }
            }

            if(props.action.allDistricts && props.action.allDistricts.data){
                let dstData = props.action.allDistricts.data;
                for(let i=0 ; i < dstData.length; i++){
                    let totalCases = filterDataCount(summary.district.cases,"district",dstData[i].id);
                    let totalActive = filterDataCount(summary.district.active,"district",dstData[i].id);
                    let totalRecovered = filterDataCount(summary.district.recovered,"district",dstData[i].id);
                    let totalDeath = filterData(summary.district.deaths,"district",dstData[i].id);
                    let title = dstData[i].title;

                    let municipality;
                    if(dataForMuncipalties && dataForMuncipalties.length >0){
                        municipality = filterData(dataForMuncipalties,"districtId",dstData[i].id);
                    }
                    if(totalCases || totalActive || totalRecovered){
                        let eachDistrictObj = {
                            title,
                             totalCases, 
                             totalActive,
                             totalRecovered, 
                             totalDeath, 
                             municipality 
                        }
                        districtsData.push(eachDistrictObj);
                    }
                } 
            }
        }

        console.log(districtsData);

    return (
        <div>
            <div>Updated At: {props.action.source.data && props.action.source.data.updated_at}</div>
            <div>Total Cases: {total}</div>
            <div>Active Cases: {active} </div>
            <div>Recovered Cases: {recovered}</div>
            <DashboardTableComponent data={districtsData}/>
        </div>
    );
}
export default applyWrappers(DashboardComponent, styles);