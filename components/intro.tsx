"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import helmetless_pic from "@/app/helmetless2-Photoroom.png";

export default function Intro() {
	const { ref } = useSectionInView("Home");
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	return (
		<section
			ref={ref}
			id="home"
			className="mb-28 text-center sm:mb-0 scroll-mt-20 md:scroll-mt-15 mt-0"
		>
			<div className="flex flex-col md:flex-row md:-mt-10 sm:text-start md:ml-[5%]">
				<motion.div
					className="font-serif w-full sm:w-[50%] sm:pl-[15%] mt-[10%] sm:mt-0 sm:pr-[5%] justify-center self-center"
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
				>
					<h1 className="text-xl font-bold sm:text-3xl">Hello!</h1>
					<h3 className="mt-4 text-l font-normal sm:text-2xl">
						I'm Vignesh, a full-stack Software/Machine Learning engineer based
						in the United States.
					</h3>
				</motion.div>

				<motion.div
					className="w-full sm:w-[50%] sm:-ml-[10%] flex justify-center"
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: "tween",
						duration: 0.3,
					}}
				>
					<Image
						src={helmetless_pic}
						alt="Vignesh"
						width={500}
						className="-mt-8 sm:mt-0"
					/>
				</motion.div>
			</div>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
					onClick={() => {
						setActiveSection("Contact");
						setTimeOfLastClick(Date.now());
					}}
				>
					Contact me here{" "}
					<BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>

				<a
					className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
					href="/CV.pdf"
					download
				>
					Download CV{" "}
					<HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
				</a>

				<a
					className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://linkedin.com"
					target="_blank"
				>
					<BsLinkedin />
				</a>

				<a
					className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://github.com"
					target="_blank"
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
}
