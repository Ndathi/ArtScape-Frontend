import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import DiscoverPage from "./pages/Discover/discover.component.jsx";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/Registration/registration.component";
import CheckoutPage from "./pages/checkout/checkout.component.jsx";

import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/User/user.actions";

import { selectCurrentUser } from "./redux/User/user.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />

        <Routes>
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/sign"
            element={
              this.props.currentUser ? (
                <Navigate to="/discover" replace={true} />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
