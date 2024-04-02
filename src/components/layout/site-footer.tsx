"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { GitHub, LinkedIn } from "@/components/icons";

import { buttonVariants } from "../ui/button";

const SiteFooter = () => {
  return (
    <motion.footer
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
      className="my-10 w-full border-t bg-background"
    >
      <div className="container py-7">
        <div className="flex scroll-m-20 items-center justify-between gap-5">
          <div className="flex gap-5">
            <Link
              href="https://www.linkedin.com/in/drake-alia/"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants())}
            >
              <LinkedIn className="size-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
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
          </div>
        </div>
        <p className="text-balance text-center text-lg leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <Link
            href="https://www.github.com/drakealia"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: "link",
              }),
              "text-lg underline underline-offset-4 p-0"
            )}
          >
            DrakeAlia
          </Link>
          . The source code is available on{" "}
          <a
            href="https://github.com/DrakeAlia/njs-portfolio-site"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: "link",
              }),
              "text-lg underline underline-offset-4 p-0"
            )}
          >
            GitHub
          </a>
          .
        </p>
        <p className="text-balance text-center text-lg leading-loose text-muted-foreground md:text-left">
          3D Model by{" "}
          <Link
            href="https://www.craftz.dog/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "link",
              }),
              "text-lg underline underline-offset-4 p-0"
            )}
          >
            Takuya Matsuyama.
          </Link>
        </p>
      </div>
    </motion.footer>
  );
};

export default SiteFooter;
