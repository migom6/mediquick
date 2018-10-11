// export function CreateTodo(todo) {
//   return (dispatch, getState) => {
//     return TodoApi.createTodo(todo).then(res => {
//       dispatch(CreateTodoSuccess(res.data.data));
//     });
//   };
// }

export function set_gender(gender) {
  return {
    type: "SET_GENDER",
    gender
  };
}

export function set_age(age) {
  return {
    type: "SET_AGE",
    age
  };
}
export function set_name(name) {
  return {
    type: "SET_NAME",
    name
  };
}
export function set_symptoms(symptoms) {
  return {
    type: "SET_SYMPTOMS",
    symptoms
  };
}
export function set_diagnosis(diagnosis) {
  return {
    type: "SET_DIAGNOSIS",
    diagnosis
  };
}
export function set_toggle(toggle) {
  return {
    type: "SET_TOGGLE",
    toggle
  };
}
// export function get_symptoms() {
//   return (dispatch, getState) => {

//     dispatch({
//       type: "GET_SYMPTOMS",
//       todo
//     });
//     TodoApi.updateTodo(todo).then(res => {
//       dispatch(UpdateTodoSuccess(res.data.data));
//     });
//   };
// }

// //Delete
// export function DeleteTodo(todo) {
//   return (dispatch, getState) => {
//     dispatch({
//       type: DELETE_TODO,
//       todo
//     });
//     TodoApi.removeTodo(todo).then(res => {
//       if (res.status == 204) {
//         dispatch(DeleteTodoSuccess(todo));
//       }
//     });
//   };
// }
