"use client";

import * as RadixDialog from "@radix-ui/react-dialog";
import { BlurImage } from "@/components/BlurImage";
import Image from "next/image";
import { GalleryImage } from "@/hooks/useFirestore";
import { cn } from "@/utils/cn";
import { X } from "lucide-react";

interface ImageModalProps {
  image: GalleryImage | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function formatTimestamp(timestamp: GalleryImage["timestamp"]): string {
  if (!timestamp) return "Unknown date";
  
  try {
    let date: Date;
    
    if (timestamp instanceof Date) {
      date = timestamp;
    } else if (typeof timestamp === "string") {
      date = new Date(timestamp);
    } else if (timestamp && typeof timestamp === "object" && "toDate" in timestamp) {
      // Firestore Timestamp
      date = (timestamp as any).toDate();
    } else if (timestamp && typeof timestamp === "object" && "seconds" in timestamp) {
      // Firestore Timestamp with seconds
      date = new Date((timestamp as any).seconds * 1000);
    } else {
      return "Invalid date";
    }
    
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  } catch (error) {
    return "Invalid date";
  }
}

export function ImageModal({ image, open, onOpenChange }: ImageModalProps) {
  if (!image) return null;

  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        {/* Dark blurred backdrop */}
        <RadixDialog.Overlay className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:fade-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out" />
        
        {/* Modal content */}
        <RadixDialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-[1000] w-[95vw] sm:w-[90vw] max-w-4xl max-h-[90vh] sm:max-h-[85vh]",
            "-translate-x-1/2 -translate-y-1/2",
            "focus:outline-none",
            "motion-safe:data-[state=open]:animate-in motion-safe:data-[state=open]:fade-in motion-safe:data-[state=open]:zoom-in-95",
            "motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out motion-safe:data-[state=closed]:zoom-out-95"
          )}
        >
          {/* Visually hidden title for accessibility */}
          <RadixDialog.Title className="sr-only">
            Image by {image.uName || "User"}
          </RadixDialog.Title>
          
          <div className="relative w-full h-full flex flex-col">
            {/* Close button */}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 rounded-full bg-black/50 backdrop-blur-sm p-1.5 sm:p-2 text-white hover:bg-black/70 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Image container - isolated from blur */}
            <div className="relative flex-1 flex items-center justify-center overflow-hidden bg-transparent px-2 sm:px-4" style={{ isolation: "isolate" }}>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={image.imageURL}
                  alt={image.uName || "Gallery image"}
                  width={1200}
                  height={800}
                  className="max-w-full max-w-[85vw] sm:max-w-[800px] max-h-[70vh] sm:max-h-[75vh] w-auto h-auto object-contain"
                  quality={90}
                  priority
                  unoptimized={false}
                />
              </div>
            </div>

            {/* Details overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 sm:p-6 pt-10 sm:pt-12">
              <div className="flex items-center gap-3 sm:gap-4">
                {/* User photo */}
                {image.uPhoto && (
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-white/20 flex-shrink-0">
                    <Image
                      src={image.uPhoto}
                      alt={image.uName}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* User info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-base sm:text-lg truncate">
                    {image.uName}
                  </p>
                  <p className="text-xs sm:text-sm text-white/70 truncate">
                    {image.uEmail}
                  </p>
                  <p className="text-[10px] sm:text-xs text-white/60 mt-0.5 sm:mt-1">
                    Uploaded {formatTimestamp(image.timestamp)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}

