import type { Metadata } from "next";
import Link from "next/link";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/constants";

import { FramerDiv } from "@/components/framer";
import { Header } from "@/components/header";
import { Next, Prisma, React, Tailwind, Typescript } from "@/components/icons";

export const metadata: Metadata = {
  title: "About me",
  description:
    "I am a frontend engineer with experience in TypeScript, React, Next.js and Tailwind.",
};

const AboutPage = () => {
  return (
    <>
      <Header title="Who Am I?" page />
      <FramerDiv
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className=" mx-auto max-w-[75ch]"
      >
        <FramerDiv variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <p className="leading-7 md:text-lg [&:not(:first-child)]:mt-6">
            As an ambitious entry-level Frontend Engineer, I specialize in
            creating innovative and user-friendly web applications, with a solid
            foundation in Next.js, TypeScript, React, Tailwind CSS, and Prisma.
            <br />
            <br />
            My ultimate goal is to enrich the web with unique yet accessible
            digital products that users love and benefit from. I am keen on
            collaboration, believing that sharing insights and innovative
            approaches with peers leads to more impactful and meaningful
            technology solutions.
          </p>
        </FramerDiv>
        <FramerDiv
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="my-10 flex flex-col items-center justify-center"
        >
          <h3 className="text-3xl font-bold ">Experience</h3>
          <section className="my-5">
            <ol className="relative border-l-2">
              <li className="mb-10 ml-4">
                <div className="absolute left-[-0.43rem] mt-1.5 size-3 rounded-full border border-muted-foreground bg-muted-foreground" />
                <time className="mb-1 text-sm font-thin leading-none ">
                  December 2022 - Present
                </time>
                <h3 className="text-lg font-semibold">
                  Frontend Developer - Freelancing
                </h3>
                <h4 className="my-1 text-sm font-normal text-primary/80">
                  Greater Seattle Area - <span>Remote</span>
                </h4>
                <p className="mb-4 text-base font-normal text-muted-foreground">
                  As an entry-level Frontend Engineer, I am currently navigating
                  the diverse and challenging world of freelancing, providing
                  innovative web solutions to a variety of companies and
                  individuals. With a foundational expertise in HTML, CSS, and
                  JavaScript, I am passionately deepening my skills in
                  Typescript and Next.js, recognizing the power of these
                  technologies in crafting modern, scalable web applications.
                </p>
              </li>
            </ol>
          </section>
        </FramerDiv>
        <FramerDiv
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="flex flex-col items-center justify-center"
        >
          <h3 className="text-3xl font-bold ">My Stack</h3>
          <div className="my-7 flex flex-wrap items-center justify-center gap-5">
            <div className="flex flex-col items-center justify-center gap-y-1">
              <Next className="size-7" />
              <span>Nextjs</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1">
              <Typescript className="size-7" />
              <span>Typescript</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1">
              <React className="size-7" />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1">
              <Tailwind className="size-7" />
              <span>Tailwind</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-1">
              <Prisma className="size-7" />
              <span>Prisma</span>
            </div>
          </div>
        </FramerDiv>
      </FramerDiv>
    </>
  );
};

export default AboutPage;
