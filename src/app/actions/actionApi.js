
const initialiseSource = (payload) =>{
    return {
        type: "source",
        payload
    };
}

const initialisMunicipals = (payload) =>{
    return {
        type: "municipals",
        payload
    };
}

const initialiseNepalSummary = (payload) =>{
    return {
        type: "allDistrictsSummary",
        payload
    };
}


const initialiseAllDistrict = (payload) =>{
    return {
        type: "allDistricts",
        payload
    };
}


const initialiseDistrictData = (payload, districtId) =>{
    return {
        type: "districtData",
        payload,
        districtId
    };
}

const setTotalData = (payload) =>{
    return {
        type: "total",
        payload
    };
}

const setActiveData = (payload) =>{
    return {
        type: "active",
        payload
    };
}

const setRecoveredData = (payload) =>{
    return {
        type: "recovered",
        payload
    };
}

export {
    initialiseSource,
    initialisMunicipals,
    initialiseNepalSummary,
    initialiseAllDistrict,
    initialiseDistrictData,
    setTotalData,
    setActiveData,
    setRecoveredData
}
