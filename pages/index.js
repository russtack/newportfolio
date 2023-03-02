import Head from "next/head";
import { BsFillMoonStarsFill } from "../node_modules/react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import code from "../public/wrench1.jpg";
import design from "../public/front.png";
import consulting from "../public/consultant.jpg";
import dice from "../public/dice.png";
import pingpong from "../public/pingpong.png";
import yelp from "../public/yelp.png";
import takota from "../public/takota.png";
import shop from "../public/shop.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>RS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-lg font-burtons dark:text-white md:text-xl">
              DevelopedByRustam
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rustamsapayev/"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Rustam Sapayev
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-teal-600 md:text-xl max-w-lg mx-auto">
              I&apos;m a Web Developer based in Cincinnati, Ohio. I&apos;m
              passionate about creating intuitive, dynamic UX and interesting
              web applications. Independent problem-solver with meticulous
              attention to details. Consistently enthusiastic about engaging in
              ambitious projects alongside dynamic individuals.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3">
            <a href="https://twitter.com/rustamofficial">
              <AiFillTwitterCircle />
            </a>

            <a href="https://www.linkedin.com/in/rustamsapayev/">
              <AiFillLinkedin />
            </a>

            <AiFillYoutube />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div className="lg:flex gap-10 dark:text-white">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Front-end development
              </h3>
              <p className="py-2">
                My expertise lies in crafting responsive websites that
                seamlessly adapt to various devices and deliver swift,
                user-friendly experiences. I employ a range of technologies such
                as:
              </p>
              <ul className="dark:text-teal-500">
                <li>-HTML</li>
                <li>-CSS</li>
                <li>-Bootstrap</li>
                <li>-Bulma</li>
                <li>-Express.js</li>
                <li>-TailwindCSS</li>
                <li>-Wordpress</li>
                <li>-Photoshop</li>
                <li>-SASS</li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Back-end development
              </h3>
              <p className="py-2">
                I specialize in developing robust and scalable back-end
                solutions that enable seamless data management and processing,
                all while ensuring the highest standards of security and data
                integrity with:
              </p>
              <ul className="dark:text-teal-500">
                <li>-Node.js</li>
                <li>-MongoDB</li>
                <li>-Mongoose</li>
                <li>-Atlas</li>
                <li>-Heroku</li>
                <li>-Render</li>
                <li>-Git</li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
              <p className="py-2">
                Leveraging the expertise in both front-end and back-end
                technologies I provide end-to-end solutions that empower
                businesses to establish and maintain a strong online presence.
                <ul className="dark:text-teal-500">
                  <li>-Designing and developing responsive websites</li>
                  <li>-Optimizing back-end functionality</li>
                  <li>-Deploying and hosting applications</li>
                  <li>-Content creation</li>
                  <li></li>
                </ul>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-center text-4xl py-1 dark:text-teal-600">
              My Projects
            </h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 shadow-lg">
              <a href="https://yelpcamp-iyu0.onrender.com/">
                <Image
                  src={yelp}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>

              <div className="px-3 py-3 dark:text-teal-600">
                <p>
                  Camping grounds database with a complete CRUD functionality,
                  user authorization, picture upload, reviews, interactive maps,
                  etc. Bootcamp coursework.
                </p>
                <p className="pt-2">Technologies used:</p>
                <ul>
                  <li>-Node.js</li>
                  <li>-Express</li>
                  <li>-MongoDB</li>
                  <li>-Passport</li>
                  <li>-Cloudinary</li>
                  <li>-Bootstrap</li>
                  <li>-Mapbox</li>
                  <li>-Render</li>
                </ul>
              </div>
            </div>
            <div className="basis-1/3 flex-1 shadow-lg">
              <a href="https://takotatrucking.com/">
                <Image
                  src={takota}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>

              <div className="px-3 py-3 dark:text-teal-600">
                <p>
                  Project created for a logistics company based in Cincinnati,
                  Ohio.
                </p>
                <p className="pt-2">Technologies used:</p>
                <ul>
                  <li>-Wordpress</li>
                  <li>-Elementor</li>
                </ul>
              </div>
            </div>
            <div className="basis-1/3 flex-1 shadow-lg">
              <a href="https://shoppit.me/">
                <Image
                  src={shop}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>

              <div className="px-3 py-3 dark:text-teal-600">
                <p>E-commerce website.</p>
                <p className="pt-2">Technologies used:</p>
                <ul>
                  <li>-Wordpress</li>
                  <li>-Elementor</li>
                  <li>-Woocommerce</li>
                  <li>-Stripe</li>
                </ul>
              </div>
            </div>
            <div className="basis-1/3 flex-1 shadow-lg">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div className="px-3 py-3 dark:text-teal-600">
                <p>
                  Free classifieds website project for a small minority
                  community based in Greater Cincinnati area. Work in progress.
                </p>
                <p className="pt-2">Technologies used:</p>
                <ul>
                  <li>-Node.js</li>
                  <li>-Express</li>
                  <li>-MongoDB</li>
                  <li>-Mongoose</li>
                  <li>-Cloudinary</li>
                  <li>-Bootstrap</li>
                  <li>-Heroku</li>
                </ul>
              </div>
            </div>
            <div className="basis-1/3 flex-1 shadow-lg">
              <a href="http://dice.shoppit.me/">
                <Image
                  src={dice}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>

              <div className="px-3 py-3 dark:text-teal-600">
                <p>A simple dice rolling game for two players.</p>
                <p className="pt-2">Technologies used:</p>
                <ul>
                  <li>-JavaScript</li>
                  <li>-HTML</li>
                  <li>-CSS</li>
                </ul>
              </div>
            </div>
            <div className="basis-1/3 flex-1 shadow-lg">
              <a href="http://pingpong.shoppit.me/">
                <Image
                  src={pingpong}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>

              <div className="px-3 py-3 dark:text-teal-600">
                <p>
                  You guessed it! It helps to keep score in a pingpong game!
                </p>
                <p className="pt-2">Technologies used:</p>
                <ul>
                  <li>-JavaScript</li>
                  <li>-Bulma</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
