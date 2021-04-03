import DashboardData from "../services/DashboardData";

export const fetchDetails = () => async (dispatch) => {
  const response = await DashboardData.get();
  dispatch({ type: "FETCH_DETAILS", payload: response.data });
};
