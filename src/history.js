import { createHashHistory } from 'history';

const history = createHashHistory({
    hashType: 'slash' // the default
});

const formatRouteParamsValue = (key, value) => {
    switch (key) {
        case 'PATH':
            return value.replace(/\/+$/, '');
        default:
            return value;
    }
}

const prepareRoute = (routeObj) => {
    let route = routeObj.route;
    let params = routeObj.params;

    if (params) {
        for (let i = 0; i < params.length; i++) {
            for (var key in params[i]) {
                if (params[i].hasOwnProperty(key)) {
                    params[i][key] = formatRouteParamsValue(key, params[i][key]);
                    route = route.replace(key, params[i][key]);
                }
            }
        }

    }
    return route;
}

const updateRoute = (routeObj) => {
    const route = prepareRoute(routeObj);
    history.push(route);
}

export const goBackOnePage = () => {
    history.goBack()
}

export default updateRoute;
