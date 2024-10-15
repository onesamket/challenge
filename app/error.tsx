"use client";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="flex flex-col min-h-[100vh]">
            <main className="flex-1 flex flex-col items-center justify-center w-full py-6">
                <div className="container flex flex-col items-center justify-center space-y-4">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-red-500 dark:text-red-400">
                            Oops, something went wrong!
                        </h1>
                        <p className="text-red-500 dark:text-red-400">
                            We are sorry, but an unexpected error occurred. Please try again later.
                        </p>
                    </div>
                    <Button onClick={() => reset()}>Try again</Button>
                </div>
            </main>
        </div>
    )
}