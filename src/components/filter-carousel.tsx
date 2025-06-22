"use client";

import { cn } from "@/lib/utils";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselApi,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import React, {useEffect} from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface FilterCarouselProps {
    value: string;
    isLoading?: boolean;
    onSelect: (value: string | null) => void;
    data: {
        value: string;
        label: string;
    }[];
}

export const FilterCarousel = ({
    value,
    isLoading,
    onSelect,
    data,
}: FilterCarouselProps) => {
    const [api, setApi] = React.useState<CarouselApi | null>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        })
    }, [api]);

    return (
       <div className="relative w-full">
           <div
                className={cn(
                    "absolute left-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-transparent to-white pointer-events-none from-white to-transparent pointer-events-none",
                    current === 1 && "hidden"
                )}
           />

            <Carousel
                setApi={setApi}
                opts={{
                    align: "start",
                    dragFree: true,
                }}
                className="w-full px-12"
            >
              <CarouselContent className="-ml-3">
                  {!isLoading && (
                      <CarouselItem
                          onClick={() => onSelect?.(null)}
                          className="pl-3 basis-auto"
                      >
                          <Badge
                              variant={!value ? "default" : "secondary"}
                              className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap textsm"
                          >
                              All
                          </Badge>
                      </CarouselItem>
                  )}
                  {isLoading &&
                     Array.from({ length: 13 }).map((_, index) => (
                         <CarouselItem key={index} className="pl-3 basis-auto" >
                            <Skeleton className="rounded-lg px-3 py-1 h-full text-sm w-[100px] font-semibold" >
                             &nbsp;
                            </Skeleton>
                         </CarouselItem>
                     ))
                  }
                  {!isLoading && data.map((item) => (
                      <CarouselItem
                          key={item.value}
                          className="pl-3 basis-auto"
                          onClick={() => onSelect?.(item.value)}
                      >
                          <Badge
                            variant={value === item.value ? "default" : "secondary"}
                            className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap textsm"
                          >
                              {item.label}
                          </Badge>
                      </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 z-20" />
                <CarouselNext className="right-0 z-20" />
            </Carousel>

           <div
               className={cn(
                   "absolute right-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-transparent to-white pointer-events-none from-white to-transparent pointer-events-none",
                   current === count && "hidden"
               )}
           />
       </div>
    );
};
