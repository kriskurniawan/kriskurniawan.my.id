import Link from 'next/link'

import { TbCoffee } from 'react-icons/tb'

export default function Introduction() {
  return (
    <section className="bg-cover bg-no-repeat space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-sora">
          <h1>Hi, I&apos;m Hendri</h1> <div className="ml-1 animate-waving-hand">👋</div>
        </div>
      </div>

      <div className="space-y-4">
        <ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
          <li>Software Engineer</li>
          <li>
            Based in Manokwari <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300">
          Dedicated Software Engineer with expertise in both backend and frontend, adept in PHP & JavaScript, eager to contribute to the Between team with a commitment to crafting scalable and engaging web solutions.
        </p>
      </div>
    </section>
  )
}
