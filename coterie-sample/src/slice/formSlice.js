import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formObject: {
    bussinessName: null,
    contactEmail: null,
    grossAnnualSales: null,
    annualPayroll: null,
    numEmployees: null,
    industryId: null,
    locations: [{ zip: null }],
  },
  webState: {
    disableBack: true,
    disableNext: true,
    currentPage: 0,
    showButtons: true,
  },
  apiResponse: {},
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
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

// Selectors - This is how we pull information from the Global store slice
export const selectFormObject = (state) => state.form.formObject;
export const selectNavigate = (state) => state.form.webState;
export const selectApiResponse = (state) => state.form.apiResponse;

export default formSlice.reducer;
