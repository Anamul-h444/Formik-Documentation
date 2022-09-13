import React, { Fragment, lazy, Suspense } from "react";
import MasterLayout from "../Components/MasterLayout";
import LazyLoader from "../Components/ShowLoader/LazyLoader";
const RegistrationForm = lazy(() => import("../Components/RegistrationForm"));

const RegistrationFormPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <RegistrationForm />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};
export default RegistrationFormPage;
