"use client";

import { useFirestore, GalleryImage } from "@/hooks/useFirestore";
import { BlurImage } from "@/components/BlurImage";
import { useMemo, useState, useEffect } from "react";
import { ImageModal } from "@/components/ImageModal";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const getBentoSize = (index: number, totalItems: number): { cols: number; rows: number } => {
  const patterns = [
    { cols: 2, rows: 2 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 3, rows: 1 },
    { cols: 4, rows: 1 },
    { cols: 1, rows: 2 },
    { cols: 1, rows: 1 },
    { cols: 2, rows: 1 },

    { cols: 2, rows: 1 },
    { cols: 2, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },

    { cols: 3, rows: 2 },
    { cols: 1, rows: 1 },

    { cols: 1, rows: 1 },
    { cols: 1, rows: 1 },
    { cols: 2, rows: 2 },
  ];

  return patterns[index % patterns.length];
};

interface ImageWithSize extends GalleryImage {
  cols: number;
  rows: number;
}

export default function ImagesList() {
  const { documents, loading, error } = useFirestore("gallery");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gridCols, setGridCols] = useState(4);
  const [skeletonRowHeight, setSkeletonRowHeight] = useState(166.75);

  useEffect(() => {
    const updateGridAndRowHeight = () => {
      let newGridCols: number;
      if (window.innerWidth >= 768) {
        newGridCols = 4;
      } else if (window.innerWidth >= 640) {
        newGridCols = 3;
      } else {
        newGridCols = 2;
      }

      setGridCols(newGridCols);

      const containerWidth = 670;
      const padding = window.innerWidth >= 640 ? 48 : 32;
      const availableWidth = containerWidth - padding;
      const gapSize = 1;
      const gaps = newGridCols - 1;
      const baseColWidth = (availableWidth - gaps * gapSize) / newGridCols;
      setSkeletonRowHeight(Math.max(baseColWidth, 150));
    };

    updateGridAndRowHeight();
    window.addEventListener("resize", updateGridAndRowHeight);
    return () => window.removeEventListener("resize", updateGridAndRowHeight);
  }, []);

  const imagesWithSizes = useMemo(() => {
    const filtered = documents.filter((doc) => doc.imageURL);
    return filtered.map((image, index): ImageWithSize => ({
      ...image,
      ...getBentoSize(index, filtered.length),
    }));
  }, [documents]);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const getResponsiveColSpan = (originalCols: number) => {
    if (gridCols === 2) {
      return Math.min(originalCols, 2);
    } else if (gridCols === 3) {
      return Math.min(originalCols, 3);
    } else {
      return originalCols;
    }
  };


  const ImageSkeleton = ({ cols, rows }: { cols: number; rows: number }) => {
    return (
      <div
        className="relative overflow-hidden bg-neutral-200 dark:bg-neutral-800 animate-pulse w-full h-full"
        style={{
          gridColumn: `span ${cols}`,
          gridRow: `span ${rows}`,
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800" />
      </div>
    );
  };

  if (loading) {
    const skeletonCount = 12;
    const skeletonSizes = Array.from({ length: skeletonCount }, (_, i) => getBentoSize(i, skeletonCount));

    return (
      <div className="w-full max-w-[670px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
            gridAutoRows: `${skeletonRowHeight}px`,
            gridAutoFlow: "dense",
          }}
        >
          {skeletonSizes.map((size, index) => {
            const responsiveCols = getResponsiveColSpan(size.cols);
            return (
              <ImageSkeleton
                key={index}
                cols={responsiveCols}
                rows={size.rows}
              />
            );
          })}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-[670px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-center text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!imagesWithSizes || imagesWithSizes.length === 0) {
    return (
      <div className="w-full max-w-[670px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-center text-foreground">No images found in gallery.</div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-w-[670px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div
          className="grid gap-1"
          style={{
            gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
            gridAutoRows: "minmax(100px, auto)",
            gridAutoFlow: "dense",
          }}
        >
          {imagesWithSizes.map((image) => {
            const responsiveCols = getResponsiveColSpan(image.cols);
            const imageProps = srcset(image.imageURL, 670, image.rows, image.cols);

            return (
              <div
                key={image.id}
                className="relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                style={{
                  gridColumn: `span ${responsiveCols}`,
                  gridRow: `span ${image.rows}`,
                }}
                onClick={() => handleImageClick(image)}
              >
                <BlurImage
                  src={imageProps.src}
                  alt={image.uName || "Gallery image"}
                  width={670}
                  height={670}
                  className="w-full h-full object-cover"
                  lazy={true}
                />
              </div>
            );
          })}
        </div>
      </div>

      <ImageModal
        image={selectedImage}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
}

