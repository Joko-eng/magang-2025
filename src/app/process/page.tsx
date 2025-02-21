import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin by diving deep into our clients’ businesses to understand
          their{' '}
          <strong className="font-semibold text-neutral-950">
            visions, goals, and challenges.
          </strong>{' '}
          Through an interactive and research driven approach, we analyze market
          trends, competitor strategies, and the latest Web3 innovations. We
          don’t just listen we comprehend what is truly needed.
        </p>
        <p>
          Next, our team conducts in-depth analysis to identify{' '}
          <strong className="font-semibold text-neutral-950">
            growth potential and the best solutions.
          </strong>{' '}
          We connect every dot, ensuring that each step creates real impact for
          our clients.
        </p>
        <p>
          The result? A clear strategy, a well defined action plan, and a{' '}
          <strong className="font-semibold text-neutral-950">
            realistic budget no hidden fees,
          </strong>{' '}
          no unnecessary complexities. We focus on efficiency and tangible
          results.{' '}
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Proof Matters</TagListItem>
        <TagListItem>Data Wins</TagListItem>
        <TagListItem>Trust the Process</TagListItem>
        <TagListItem>Facts First</TagListItem>
        <TagListItem>Insight Driven</TagListItem>
        <TagListItem>Smart Moves</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          At Mudapedia, we turn ideas into reality with a clear roadmap and
          structured execution. Based on our discovery phase, we craft a
          strategic plan tailored to each project, ensuring efficiency and
          seamless development.
        </p>
        <p>
          Each client is paired with a dedicated manager, keeping communication
          smooth and progress transparent. Our team works diligently, utilizing
          the latest technologies and best practices to deliver high-quality
          solutions.
        </p>
        <p>
          We believe in agility, adapting to challenges while maintaining focus
          on our end goal: delivering a powerful and scalable product that
          exceeds expectations.
        </p>
      </div>

      <Blockquote
        author={{
          name: 'I Putu Indra W.S',
          role: 'Founder Digital Blockchain Indonesia',
        }}
        className="mt-12"
      >
        Mudapedia updates were so consistent and transparent, it felt like they
        were always one step ahead!
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Halfway through the{' '}
          <strong className="font-semibold text-neutral-950">Build</strong>{' '}
          phase, we fine-tune project requirements to ensure the best outcome.
          This often means extending timelines to perfect every detail, giving
          us the opportunity to refine the final product before launch.{' '}
        </p>
        <p>
          While leveraging{' '}
          <strong className="font-semibold text-neutral-950">pre-built</strong>{' '}
          components for efficiency, our real progress happens in the final
          stretch—where our team pushes the limits of innovation. Instead of
          just delivering standard solutions, we focus on creating engaging
          digital experiences that make an impact.
        </p>
        <p>
          At <strong className="font-semibold text-neutral-950">launch </strong>{' '}
          we guarantee that all essential features are fully functional.
          Additional enhancements and refinements are continuously rolled out,
          ensuring long-term performance and scalability. Our commitment doesn’t
          stop at delivery—we provide ongoing support to keep your platform
          evolving.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Every project undergoes rigorous testing to ensure top performance,
          with layers of quality checks to minimize issues before launch.
        </ListItem>
        <ListItem title="Infrastructure">
          We leverage high-performance cloud solutions, optimizing speed,
          security, and scalability for seamless digital experiences.
        </ListItem>
        <ListItem title="Support">
          Our commitment doesn’t end at launch—we provide continuous updates,
          security patches, and expert support to keep your platform at its
          best.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing Innovation and Reliability"
      >
        <p>
          At Mudapedia, we embrace the latest trends in Web3 and blockchain
          while ensuring that every solution remains practical, scalable, and
          secure. Our core values guide us in delivering impactful digital
          experiences.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Precision">
            Every project starts with a carefully structured plan, ensuring
            seamless integration of technology with your brand identity.
          </GridListItem>
          <GridListItem title="Efficiency">
            We optimize workflows to deliver results on time leveraging smart
            automation and ready to deploy solutions for faster execution.{' '}
          </GridListItem>
          <GridListItem title="Adaptability">
            Every business is unique. We tailor our solutions to fit your needs
            while maintaining scalability for future growth.
          </GridListItem>
          <GridListItem title="Transparency">
            We believe in clear communication and open processes, ensuring our
            clients stay informed every step of the way.
          </GridListItem>
          <GridListItem title="Commitment">
            Our long-term partnerships go beyond development we provide ongoing
            support and updates to keep your business ahead.
          </GridListItem>
          <GridListItem title="Innovation">
            The digital landscape is always evolving, and so are we. We
            continuously explore new technologies to bring you the best in Web3
            and blockchain solutions.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency, innovation, and maximizing resources to deliver the best Web3 solutions.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How We Work at Mudapedia">
        <p>
          We believe in efficiency, innovation, and maximizing resources to
          deliver the best Web3 solutions. Our structured approach ensures that
          every project is tailored to the unique needs of our clients.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
