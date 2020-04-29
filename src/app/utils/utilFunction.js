const filterDataCount = (arr, key, value) => {
    let data = arr.filter(function(itm){
        return itm[key] == value;
    });
    data = data.length > 0 ? data[0].count : 0;
    return data;
}


const filterData = (arr, key, value) => {
    let data = arr.filter(function(itm){
        return itm[key] == value;
    });

    return data[0];
}

export {
    filterData,
    filterDataCount
};