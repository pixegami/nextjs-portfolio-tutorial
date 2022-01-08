import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import projectImage from "../public/youtube.jpg";

const SocialTracker: NextPage = () => {
  return (
    <div>
      <h1 className="text-xl text-indigo-600 mb-4 font-bold">
        Social Media Usage Tracker
      </h1>
      <Image src={projectImage} />
      <div className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div className="mt-6">
        <Link href="/">
          <a className="font-bold underline hover:text-indigo-600">Back</a>
        </Link>
      </div>
    </div>
  );
};

export default SocialTracker;
