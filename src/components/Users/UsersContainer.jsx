import {connect} from 'react-redux';
import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
} from '../../redux/usersReducer';
import Users from './Users';

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch (followActionCreator (userId));
    },
    unfollow: userId => {
      dispatch (unfollowActionCreator (userId));
    },
    setUsers: users => {
      dispatch (setUsersActionCreator (users));
    },
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (Users);
