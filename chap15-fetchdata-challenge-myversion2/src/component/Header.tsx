// import Users from './Users';
// import Posts from './Posts';
// import Comments from './Comments';
import Button from './Button';

import '../css/style.css';
import React from 'react';
// import { TypeComments, TypePosts, TypeUsers } from '../types/FetchTypes';

type HeaderProps = {
  reqType: string,
  setReqType: React.Dispatch<React.SetStateAction<string | undefined>>,
}

const Header = ({reqType, setReqType}: HeaderProps) => {
  return (
    <header>
      {/* <Users fetchUsers={fetchUsers}/>
      <Posts fetchPosts={fetchPosts}/>
      <Comments fetchComments={fetchComments}/> */}
      <Button buttonText='users' reqType={reqType} setReqType={setReqType}/>
      <Button buttonText='posts' reqType={reqType} setReqType={setReqType}/>
      <Button buttonText='comments' reqType={reqType} setReqType={setReqType}/>
    </header>
  );
};

export default Header;
1