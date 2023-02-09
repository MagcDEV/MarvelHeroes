import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Pruebas en el authReducer", () => {
  test("Debe de retornarel estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("debe de llamar el login auntenticas y establecer el user", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Juan",
        id: 123,
      },
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("Probar el logout", () => {
    const state = {
      logged: true,
      user: { id: "123", name: "Juan" },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({ logged: false });
  });
});
