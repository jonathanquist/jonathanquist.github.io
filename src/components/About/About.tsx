"use client";

import {
  Button,
  Image,
  ImageComponent,
  ImageFallback,
  Separator,
} from "@/components/UI";
import Link from "next/link";
import { IconLink } from "../Icons";
import { aboutContent } from "./about.const";
import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="hidden">About me</h1>
      <h2 className="hidden">Photo</h2>
      <div className="flex items-center justify-between gap-28">
        <div className="relative h-auto w-3/5">
          <Image alt="Jonathan Quist" className="bg-transparent">
            <ImageComponent
              src="/images/jonathan-quist.jpg"
              alt="Jonathan Quist"
              className="h-auto max-h-[500px] w-full object-cover"
              width={0}
              height={0}
              loading="lazy"
              sizes="100vw"
            />
            <ImageFallback>No Image</ImageFallback>
          </Image>
        </div>
        <Separator
          orientation="vertical"
          className="my-32 h-auto self-stretch"
        />
        <div className="flex h-auto flex-1 items-center justify-center font-caviar text-3xl">
          This is me, <br />
          jonathan
        </div>
      </div>
      <h2 className="hidden">Text</h2>
      <div className="section mb-12 mt-14 space-y-12">
        {aboutContent.map((section, index) => (
          <React.Fragment key={index}>
            <div className="space-y-6">
              {section.title && <h3>{section.title}</h3>}
              <div className="space-y-4">
                {section.isQuote
                  ? section.contents.map((content, index) => (
                      <blockquote key={index}>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: section.contents[index],
                          }}
                        />
                      </blockquote>
                    ))
                  : section.contents.map((content, index) => (
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{
                          __html: section.contents[index],
                        }}
                      />
                    ))}
              </div>
            </div>
            <Separator className="w-20" />
          </React.Fragment>
        ))}
      </div>
      <h2 className="hidden">Resume</h2>
      <div>
        <Link href="/files/jonathan-quist_cv_en_2024.pdf" target="_blank">
          <Button>
            View Resume <IconLink className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
