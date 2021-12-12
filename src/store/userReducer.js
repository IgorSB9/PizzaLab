const addNewUser = "addNewUser";

let initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case addNewUser:
      state.push({
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
      });
      return state;
    default:
      return state;
  }
};

export default userReducer;
