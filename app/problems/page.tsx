import { Suspense, lazy } from "react"
import Loading from "../loading"
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";

const ProfileForm = lazy(() => import("@/components/custom/lc-form"))

export default async function Problems() {
  const {isAuthenticated} = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/auth0");
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 border border-white-100">
        <span style={{ display: "flex", alignItems: "center" }}>
          <Suspense fallback={<Loading />}>
            <ProfileForm />
          </Suspense>
        </span>
      </div>
    </div>
  );
}



