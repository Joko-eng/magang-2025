import type { Metadata } from 'next'
import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import { FadeIn } from '@/components/FadeIn'
import Wrapper from './wrapper'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Flexible and transparent pricing for Web3 and blockchain solutions.',
}

export default function Pricing() {
  return (
    <>
      <PageIntro eyebrow="Pricing" title="The latest articles and news">
        <p>
          At Mudapedia, we offer flexible and transparent pricing tailored to
          your needs. Whether you&apos;re a startup exploring Web3, a growing
          business scaling your online presence, or an enterprise looking for
          custom blockchain solutions, we have the right plan for you.
        </p>
      </PageIntro>

      <FadeIn>
        <Wrapper />
      </FadeIn>

      <ContactSection />
    </>
  )
}
