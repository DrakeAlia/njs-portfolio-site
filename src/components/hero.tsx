"use client";

import Link from "next/link";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/constants";
import HomeScene from "@/scenes/home-screen";
import { domAnimation, LazyMotion, m } from "framer-motion";

import { cn } from "@/lib/utils";
import { GitHub, LinkedIn } from "@/components/icons";

import { buttonVariants } from "./ui/button";

const Hero = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
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
        className="my-14 flex items-center justify-between "
      >
        <div className="w-[37rem]">
          <m.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-4xl font-bold md:text-6xl"
          >
            Hello, I’m Drake Alia!
          </m.h1>
          <m.h2
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className=" my-1 text-2xl font-semibold text-primary md:text-4xl"
          >
            A Frontend Engineer
          </m.h2>
          <m.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mt-3 text-base text-muted-foreground md:text-xl"
          >
            Who hails from the vibrant and tech-forward Greater Seattle Area. I
            blend my expertise in Typescript, Next.js, React, and Tailwind CSS
            to craft engaging, responsive, and user-friendly web experiences.
            <br />
            <br />
            My approach to frontend engineering is akin to the art of cooking—a
            process where meticulous preparation, innovative use of ingredients,
            and an understanding of complex techniques come together to create
            something extraordinary.
          </m.p>
          <m.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mt-5 flex gap-5"
          >
            <Link
              arial-label="GitHub"
              href="https://github.com/DrakeAlia"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              <GitHub className="size-6" />
              <span className="sr-only">GitHub</span>
            </Link>

            <Link
              arial-label="LinkedIn"
              href="https://www.linkedin.com/in/drake-alia/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              <LinkedIn className="size-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              arial-label="Download Resume"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1YiHFXYnbhDaHWMv_-Atq5Ww9ybbrSgsg/view?usp=sharing"
              className={cn(
                buttonVariants({
                  variant: "outline",
                })
              )}
            >
              Resume
            </Link>
          </m.div>
        </div>
        <m.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className=" hidden h-[500px] items-center justify-center lg:flex"
        >
          <HomeScene />
        </m.div>
      </m.div>
        <p>
            3D Model by{" "}
            <Link
                target="_blank"
                href="https://www.craftz.dog/"
                rel="noopener noreferrer"
                className={cn(
                buttonVariants({
                    variant: "link",
                }),
                "p-0"
                )}
            >
                Takuya Matsuyama.
            </Link>
        </p>
    </LazyMotion>
  );
};

export default Hero;
