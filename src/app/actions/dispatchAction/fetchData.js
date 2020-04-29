import {
    initialiseSource,
    initialisMunicipals,
    initialiseNepalSummary,
    initialiseAllDistrict,
    initialiseDistrictData,
    setTotalData,
    setActiveData,
    setRecoveredData,
   } from '../actionApi';
const axios = require('axios');

export const fetchCoronaSource = () => (dispatch) =>{
  axios.get('https://nepalcorona.info/api/v1/data/nepal',).then(res => {
    dispatch(initialiseSource(res));
  }).catch(err => 
   console.log(err)
)}


export const fetchNepalMunicipals = () => (dispatch) =>{
  axios.get('https://data.nepalcorona.info/api/v1/municipals',).then(res => {
    dispatch(initialisMunicipals(res));
  }).catch(err => 
   console.log(err)
)}


export const fetchNepalCoronaSummary = () => (dispatch) =>{
  axios.get('https://data.nepalcorona.info/api/v1/covid/summary',).then(res => {
        dispatch(initialiseNepalSummary(res));
      }).catch(err => 
       console.log(err)
  )}


export const fetchAllDistricts = () => (dispatch) =>{
  axios.get('https://data.nepalcorona.info/api/v1/districts',).then(res => {
        dispatch(initialiseAllDistrict(res));
      }).catch(err => 
       console.log(err)
  )}

export const fetchDataOfDistrict = (districtId) => (dispatch) =>{
  axios.get('https://data.nepalcorona.info/api/v1/districts/'+districtId,).then(res => {
        dispatch(initialiseDistrictData(res,districtId));
      }).catch(err => 
       console.log(err)
  )}


export const setTotal = (value) =>  (dispatch) => dispatch(setTotalData(value))


export const setActive = (value) =>  (dispatch) => dispatch(setActiveData(value))


export const setRecovered = (value) =>  (dispatch) => dispatch(setRecoveredData(value))
