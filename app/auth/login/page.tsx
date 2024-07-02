import LoginForm from "@/app/_components/ui/login-form";
import { Metadata } from "next";

export const metadata:Metadata={
    title:"login | Githr dashboard"
}
export default function LoginPage(){
    return(
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[600px] flex-col space-y-2.5 p-4 md:-mt-32">
                <LoginForm/>
            </div>
        </main>
    )
}