"use client"

import { useRouter } from 'next/navigation';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const docs = [
    { title: "Introduction", href: "/docs", description: "Your starting point to explore and understand the platform with guides, API references, and community resources." },
    { title: "Upload Device Data", href: "/docs/upload-device-data", description: "Guide to uploading device data via API with examples and key requirements." },
    { title: "Generate API Keys", href: "/docs/generate-api-keys", description: "How to create and copy your API keys for accessing the platform." },
    { title: "Rate Limits", href: "/docs/rate-limits", description: "How to handle rate limiting on the Upload API" },
];

export default function HomePage() {
    const router = useRouter()

    function handleClick(href: string) {
        router.push(href);
    }

    return (
        <main className="flex flex-1 flex-col items-center p-6">
            <h1 className="mb-8 text-4xl font-bold">API Documentation</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
                {docs.map(({ title, href, description }) => (
                    <Card key={href} onClick={() => handleClick(href)} className='hover:cursor-pointer'>
                        <CardHeader>
                            <CardTitle>{title}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </main>
    );
}
