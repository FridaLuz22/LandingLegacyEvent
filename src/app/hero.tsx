"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { Countdown } from "@/components";

function Hero() {
  return (
    <div className="relative min-h-[62vh] w-full bg-[url('/image/legacy_mob.jpeg')] bg-contain bg-no-repeat md:bg-[url('/image/legacy_w.png')] md:bg-cover md:min-h-screen bg-black">
    {/* <div className="absolute inset-0 h-full w-full bg-gray-900/60" /> */}
    </div>
  );
}

export default Hero;
