'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Team() {
    return (
        <section className="py-10 md:py-26">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <p className="py-4 text-center text-lg font-medium lg:text-xl">Tim Kami</p>
                    <h2 className="text-balance text-2xl font-semibold lg:text-2xl">Meet Our Team</h2>
                    <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="/">
                                <span>Semua</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="/">
                                <span>Tim</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="/">
                                <span>Magang</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}