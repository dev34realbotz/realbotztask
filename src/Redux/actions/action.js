import axios from "axios";
export const UserDetailsFetch = () => async (dispatch) => {
  try {
    const UserDetailsData = await axios.get(
      "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f"
    );
    // dispatch({
    //   type: FETCH_USER_DATA,
    //   payload: UserDetailsData.data.result.auditLog,
    // });
    return UserDetailsData.data.result.auditLog;
  } catch (error) {
    console.log(error);
  }
};
