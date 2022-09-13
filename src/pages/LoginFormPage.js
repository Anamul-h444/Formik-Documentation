import React, { Fragment, lazy, Suspense } from "react";
import MasterLayout from "../Components/MasterLayout";
import LazyLoader from "../Components/ShowLoader/LazyLoader";
const LoginForm = lazy(() => import("../Components/LoginForm"));

const LoginFormPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <LoginForm />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};
export default LoginFormPage;
