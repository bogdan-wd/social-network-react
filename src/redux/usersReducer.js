import {useReducer} from 'react';
import {FOLLOW, SET_CURRENT_PAGE, SET_USERS, UNFOLLOW} from './actionTypes';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 100,
  currentPage: 1,
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
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
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

export const setUsersActionCreator = users => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPageActionCreator = page => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: page,
  };
};

export default usersReducer;
