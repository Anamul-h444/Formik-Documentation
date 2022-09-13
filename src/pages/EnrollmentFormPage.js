import React, { Fragment, lazy, Suspense } from "react";
import MasterLayout from "../Components/MasterLayout";
import LazyLoader from "../Components/ShowLoader/LazyLoader";
const EnrollmentForm = lazy(() => import("../Components/EnrollmentForm"));

const EnrollmentFormPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <EnrollmentForm />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};
export default EnrollmentFormPage;