"use client";

import { useState } from "react";

import { cn } from "@/utils/cn";
import Image from "next/image";

type BlurImageProps = {
  className?: string;
  lazy?: boolean;
} & React.ComponentPropsWithoutRef<typeof Image>;

export function BlurImage({
  alt,
  src,
  className,
  lazy = true,
  ...props
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      className={cn("duration-700" , isLoading && "blur-md", className)}
      src={src}
      alt={alt}
      loading={lazy ? "lazy" : undefined}
      priority={!lazy}
      width={1920}
      height={1080}
      quality={100}
      onLoad={() => setIsLoading(false)}
      {...props}
    />
  );
}
