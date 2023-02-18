import { createSlice } from '@reduxjs/toolkit';

export const countrysSlice = createSlice({
    name: 'countrys',
    initialState:{
        isActive: false,
        isLoading: true,
        isSelectRegion: 'Americas',
        Africa:[],
        Americas:[], 
        Asia:[], 
        Europe:[],
        Oceania:[],
        countryActive:null
    },
    reducers: {
        setLoadingCountrys:(state)=>{
            state.isLoading = false
        },
        setCountrysAfrica:(state, {payload})=>{
            state.Africa = [...state.Africa, payload]
        },
        setCountrysAmericas:(state, {payload})=>{
            state.Americas = [...state.Americas, payload]
        },
         setCountrysAsia:(state, {payload})=>{
            state.Asia = [...state.Asia, payload]
        },
        setCountrysEurope:(state, {payload})=>{
            state.Europe = [...state.Europe, payload]
        },
        setCountrysOceania:(state, {payload})=>{
            state.Oceania = [...state.Oceania, payload]
        },
        setIsActive:(state, {payload}) => {
            state.isActive = payload
        },
        setIsSelectRegion: (state, {payload}) => {
            state.isSelectRegion = payload
        },
        setCountryActive:(state, {payload})=>{
            state.countryActive = payload
        },
    },
})

export const { 
    setIsActive,
    setLoadingCountrys,
    setIsSelectRegion,
    setCountrysAfrica,
    setCountrysAmericas,
    setCountrysAsia,
    setCountrysEurope,
    setCountrysOceania,
    setCountryActive
} = countrysSlice.actions