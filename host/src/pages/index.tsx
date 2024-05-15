import { Suspense, lazy } from "react";

const Remote1Button = lazy(() => import("remote1/Button"));

export default function HomePage() {
  return (
    <div>
      <Suspense>
        <Remote1Button />
      </Suspense>
    </div>
  );
}
