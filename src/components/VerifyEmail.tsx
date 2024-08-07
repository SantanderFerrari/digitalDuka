"use client";

import { trpc } from "@/trpc/client";
import { XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface VerifyEmailProps {
  token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
    token,
  });
  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2">
        <XCircle className="h-8 w-8 text-red-700" />
        <h3 className="font-semibold text-xl">Error verifying email</h3>
        <p className="text-sm text-muted-foreground text-gray-700">
          Please try again later or contact support.
        </p>
      </div>
    );
  }
  if (data?.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
          <Image src="/hippo-email-sent.png" fill alt="email was sent image" />
        </div>
        <h3 className="font-semibold text-xl text-center">Email Verified!</h3>
        <p className="mt-3 text-muted-foreground text-sm text-center ">
          You can now continue using your Digital Duka account.
        </p>
        <Link
          href={"/sign-in"}
          className={buttonVariants({ className: "mt-4" })}
        ></Link>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-2">

        <h3 className="font-semibold text-xl">Verifying email....</h3>
        <p className="text-sm text-muted-foreground text-gray-700">
          This will not take long
        </p>
      </div>
    );
  }
};

export default VerifyEmail;
