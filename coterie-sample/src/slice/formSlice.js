import { createSlice } from '@reduxjs/toolkit';

//Intial redux store state
const initialState = {
  formObject: {
    //for form data
    bussinessName: null,
    contactEmail: null,
    grossAnnualSales: null,
    annualPayroll: null,
    numEmployees: null,
    industryId: null,
    locations: [{ zip: null }],
  },
  webState: {
    //for general web state
    disableBack: true,
    disableNext: true,
    currentPage: 0,
    showButtons: true,
  },
  apiResponse: {}, //for API response
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    //reducers for loading data to specific part of the store
    loadApiResponse: (state, action) => {
      state.apiResponse = action.payload;
    },
    loadCurrentPage: (state, action) => {
      state.webState.currentPage = action.payload;
    },
    loadShowButtons: (state, action) => {
      state.webState.showButtons = action.payload;
    },
    loadDisableBack: (state, action) => {
      state.webState.disableBack = action.payload;
    },
    loadDisableNext: (state, action) => {
      state.webState.disableNext = action.payload;
    },
    loadIndustryId: (state, action) => {
      state.formObject.industryId = action.payload;
    },
    loadBussinessName: (state, action) => {
      state.formObject.bussinessName = action.payload;
    },
    loadContactEmail: (state, action) => {
      state.formObject.contactEmail = action.payload;
    },
    loadZipcode: (state, action) => {
      state.formObject.locations[0].zip = action.payload;
    },
    loadAnnualSales: (state, action) => {
      state.formObject.grossAnnualSales = action.payload;
    },
    loadAnnualPayroll: (state, action) => {
      state.formObject.annualPayroll = action.payload;
    },
    loadEmployees: (state, action) => {
      state.formObject.numEmployees = action.payload;
    },

    clearForm: (state) => {
      state.formObject = initialState;
    },
  },
});

//Exporting the methods
export const {
  loadShowButtons,
  loadApiResponse,
  loadCurrentPage,
  loadDisableBack,
  loadDisableNext,
  loadBussinessName,
  loadIndustryId,
  loadContactEmail,
  loadZipcode,
  loadAnnualPayroll,
  loadAnnualSales,
  loadEmployees,
  clearForm,
} = formSlice.actions;

// Selectors for selectcing the data from redux store
export const selectFormObject = (state) => state.form.formObject;
export const selectNavigate = (state) => state.form.webState;
export const selectApiResponse = (state) => state.form.apiResponse;
export const selectZipcode = (state) => state.form.formObject.locations[0].zip;

export default formSlice.reducer;
