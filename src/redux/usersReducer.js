import {useReducer} from 'react';
import Users from '../components/Users/User';
import {FOLLOW, SET_USERS, UNFOLLOW} from './actionTypes';

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      fullName: 'name',
      status: 'boss',
      location: {city: 'dnepr', country: 'Ukraine'},
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map ((user, idx) => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map ((user, idx) => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default: {
      return state;
    }
  }
};

export const followActionCreator = userId => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollowActionCreator = userId => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsersActionCreator = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export default usersReducer;
