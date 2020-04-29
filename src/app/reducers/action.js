const initialState = {
    source: "",
    municipals: [],
    districtSummary: null,
    allDistricts: [],
    districtData : [],
    total: 0,
    active: 0,
    recovered: 0,
}

const action = (state = initialState , action = {}) =>{

    switch(action.type){
        case "source":
            return { 
                ...state,
                source : action.payload
            };

        case "municipals":
            return { 
                ...state,
                municipals : action.payload
            };
        case "allDistrictsSummary":
            return { 
                ...state,
                districtSummary : action.payload
            };
        case "allDistricts":
            return { 
                ...state,
                allDistricts : action.payload
            };
        case "districtData": 
            let { id, title, covid_cases} = action.payload;
            let obj = { id, title, covid_cases }
            initialState.districtData.push(obj)

        case "total":
            return { 
                ...state,
                total : action.payload
            };

        case "active":
        return { 
            ...state,
            active : action.payload
        };

        case "recovered":
        return { 
            ...state,
            recovered : action.payload
        };
        default:
            return state;
    }
}

export default action;