import ImagesList from "@/components/ImagesList";

export default function Home() {
    return (
        <main className="relative overflow-hidden min-h-screen">
            <div className="mt-16 sm:mt-20 relative">
                <ImagesList />
            </div>
        </main>
    );
}

