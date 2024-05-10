interface User {
  name: string;
  email: string;
}

interface Userstate {
  user: User | null;
}

const initialState: Userstate = {
  user: null,
};

interface UserAction {
  type: string;
  payload?: User;
}

export function userReducer(state = initialState, action: UserAction) {}
