import React, { Fragment } from "react";
import { connect } from "react-redux";
import DashboardComponent from "../components/dashboardComponent";
import updateRoute from '../../history';

import { 
    fetchCoronaSource,
    fetchNepalMunicipals,
    fetchAllDistricts,
    fetchNepalCoronaSummary,
    fetchDataOfDistrict,
    setTotal,
    setActive,
    setRecovered,
} from "../actions/dispatchAction/fetchData";

class DashboardContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCoronaSource();
        this.props.fetchNepalMunicipals();
        this.props.fetchAllDistricts();
        this.props.fetchNepalCoronaSummary();
    }

    fetchDataOfDistrict = (districtId) => {
        this.props.fetchDataOfDistrict(districtId);
    };

    setTotal = (val) => {
        this.props.setTotal(val);
    };

    setActive = (val) => {
        this.props.setActive(val);
    };

    setRecovered = (val) => {
        this.props.setRecovered(val);
    };



    render() {
        return (
            <DashboardComponent {...this.props}
                                setTotal1= {this.setTotal}
                                setActive1= {this.setActive}
                                setRecovered1= {this.setRecovered}
                                fetchDataOfDistrict={this.fetchDataOfDistrict} 
                            />
        );
    }
}
DashboardContainer.propTypes = {};
DashboardContainer.defaultProps = {};
const mapStateToProps = state => {
    return state
};
const mapDispatchToProps = dispatch => ({
    fetchCoronaSource:() => {
        dispatch(fetchCoronaSource());
      },

    fetchNepalMunicipals:() => {
        dispatch(fetchNepalMunicipals());
    },
    fetchAllDistricts:() => {
        dispatch(fetchAllDistricts());
      },
    fetchNepalCoronaSummary:() => {
        dispatch(fetchNepalCoronaSummary());
      },
    fetchDataOfDistrict1: (districtId) => {
        dispatch(fetchDataOfDistrict(districtId));
      },

      setTotal: (val) => {
        dispatch(setTotal(val));
      },

      setActive: (val) => {
        dispatch(setActive(val));
      },

      setRecovered: (val) => {
        dispatch(setRecovered(val));
      },
});
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);