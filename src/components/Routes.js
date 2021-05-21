import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const LoggedInRoutes = () => (                  //로그인 이후 접근 가능
  <Switch>
    <Route exact path="/" component={} />       // 메인화면
    <Route path="/rank" component={} />         // 랭킹
    <Route path="/notice/:id" component={} />   // 공지사항 아이디 Detail
    <Route path="/profile" component={} />      // 유저 페이지
    <Route path="/ctf" component={} />          //ctf 문제리스트 페이지
    <Route path="/ctf/:id" component={} />      //ctf 문제 Detail페이지
    <Route path="/wargame" component={} />      //wargame 페이지
    <Route path="/wargame/:id" component={} />  //wargame 문제사이트
    <Route path="/administration" component={} /> //admin 페이지
    <Route path="/notification" component={} /> //공지, 이벤트 작성 페이지
    <Route path="/quest" component={} />        //문제 관리 리스트
    <Route path="/users" component={} />        //회원 관리 리스트
    <Redirect from="*" to="/" />                //리다이렉션
  </Switch>
);

const LoggedOutRoutes = () => (                 //로그인 이전 접근 경로
  <Switch>
    <Route exact path="/" component={} />       //로그인 이전 메인화면
    <Route path="/signup" component={} />       //회원가입 페이지
    <Route path="/login" component={} />        //로그인 페이지
    <Route path="/administration" component={} /> //admin 로그인 페이지
    <Redirect from="*" to="/" />                //다른 경로로 접근시 리다이렉션 경로
  </Switch>
);

const AppRouter = ({ isLoggedIn }) => 
  isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

export default AppRouter;