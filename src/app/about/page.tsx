import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'

import imageAuliaMuhammadIqbal from '@/images/team/aulia-muhammad-iqbal.jpg'
import imageRafifMuhammadMR from '@/images/team/rafif-muhammad-mr.jpg'
import imageGilangAristaRachman from '@/images/team/gilang-arista-rachman.jpg'
import imageTheoFillusJG from '@/images/team/theo-fillus-jg.jpg'
import imageRezaMaulana from '@/images/team/reza-maulana.jpg'
import imageFildzanuRidwan from '@/images/team/fildzanu-ridwan.jpg'
import imageMohDaffaFirdaus from '@/images/team/moh-daffa-firdaus.jpg'

import imageFeniEldiana from '@/images/team/feni-eldiana.jpg'
import imageFilfiaAntikaAndriana from '@/images/team/filfia-antika-andriana.jpg'
import imageJennyNurAlfianHandayani from '@/images/team/jenny-nur-alfian-handayani.jpg'

import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-indigo-800 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Innovate with Purpose, Grow with Passion."
        invert
      >
        <p>
          We are a team of forward thinkers, united by a shared vision to
          revolutionize the digital world.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Collaboration" invert>
            We thrive on teamwork and shared success, ensuring that every
            project benefits from diverse expertise.
          </GridListItem>
          <GridListItem title="Trust" invert>
            Flexibility is our foundation we focus on results, not rigid
            schedules.
          </GridListItem>
          <GridListItem title="Innovation" invert>
            We embrace change and push boundaries to create cutting edge Web3
            solutions.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Team',
    people: [
      {
        name: 'Aulia Muhammad Iqbal',
        role: 'Co-Founder / CEO',
        image: { src: imageAuliaMuhammadIqbal },
      },
      {
        name: 'Rafif Muhamamd M.R',
        role: 'Co-Founder / COO',
        image: { src: imageRafifMuhammadMR },
      },
      {
        name: 'Gilang Arista Rachman',
        role: 'Co-Founder / CTO',
        image: { src: imageGilangAristaRachman },
      },
      {
        name: 'Theo Fillus J.G',
        role: 'CFO',
        image: { src: imageTheoFillusJG },
      },
      {
        name: 'Reza Maulana',
        role: 'Co-Founder / CAO',
        image: { src: imageRezaMaulana },
      },
      {
        name: 'Fildzanu Ridwan',
        role: 'Co-Founder / Graphic Desainer',
        image: { src: imageFildzanuRidwan },
      },
      {
        name: 'Moh. Daffa Firdaus',
        role: 'Co-Founder / Social Media',
        image: { src: imageMohDaffaFirdaus },
      },
    ],
  },
  {
    title: 'Internship Program',
    people: [
      {
        name: 'Jenny Nur Alfian Handayani',
        role: 'Student Internship',
        image: { src: imageJennyNurAlfianHandayani },
      },
      {
        name: 'Filfia Antika Andriana',
        role: 'Student Internship',
        image: { src: imageFilfiaAntikaAndriana },
      },
      {
        name: 'Feni Eldiana',
        role: 'Student Internship',
        image: { src: imageFeniEldiana },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105 lg:h-80"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Collaboration is our strength">
        <p>
          At Mudapedia, we believe that true innovation comes from
          collaboration. By working together, we create cutting edge Web3
          solutions that put our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Mudapedia was founded by a team passionate about blockchain and
            digital transformation. We saw the need for a smarter, more
            efficient way to bridge businesses with decentralized technology.
            From the start, we've been committed to delivering impactful
            solutions that drive real change.
          </p>
          <p>
            We’re more than just a team we’re a community. We value creativity,
            dedication, and the power of shared knowledge. At Mudapedia, we
            don't just build projects we build the future, together.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="11+" label="Web projects completed" />
          <StatListItem value="5+" label="Clients served" />
          <StatListItem value="2+" label="Years of industry experience" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
