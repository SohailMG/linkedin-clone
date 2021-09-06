import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, seletUser } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { auth } from "./firebase";
import RightWidget from "./RightWidget";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./Loading";

function App() {
  // const user = useSelector(seletUser);
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // USER IS LOGGED IN
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // USER IS NOT LOGGED OUT
        dispatch(logout());
      }
    });
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Sidebar />
          <Feed />
          {/* TODO: RIGHT WIDGET */}
          <RightWidget />
        </div>
      )}
    </div>
  );
}

export default App;
