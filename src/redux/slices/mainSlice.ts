import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { UserList } from "../../types/user-list";
import axios from "axios";

let baseURL = process.env.NEXT_PUBLIC_API_URL;

// Define the interface for the state managed by this slice
interface CardState {
  cardDetails: UserList;
  loading: boolean;
  error: string | null;
}

// Define the initial state for this slice
const initialState: CardState = {
  cardDetails: {
    users: [],
    total: 0,
    limit: 0,
    skip: 0,
  },
  loading: false,
  error: null,
};

// Create a Redux slice for managing card data
const cardSlice = createSlice({
  name: "cards", // Name of the slice
  initialState, // Initial state
  reducers: {
    // Define a reducer for a successful resource fetch
    getResourcesSuccess(state, action) {
      const resources = action.payload;
      state.cardDetails = resources;
    },
  },
});

// Export the action creator for getResourcesSuccess
export const { getResourcesSuccess } = cardSlice.actions;

// Export the reducer
export default cardSlice.reducer;

// Define an asynchronous action creator to fetch card resources from an API
export function getResources() {
  return async (dispatch: Dispatch) => {
    try {
      // Make an HTTP GET request to the API
      const response = await axios.get(`${baseURL}users`);

      // Extract card resources from the API response
      const resources: UserList = response.data;

      // Dispatch the getResourcesSuccess action to update the Redux state
      dispatch(getResourcesSuccess(resources));
    } catch (error) {
      console.log(error);
    }
  };
}
