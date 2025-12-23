"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { gradient } from "$/util/gradient";

export type Skilltree = {
	skillCategory: string;
	skills: string[];
};

export const Skilltree = ({ skillTree }: { skillTree: Skilltree }) => {
	return (
		<div>
			<h3 className="text-2xl md:text-4xl font-bold">
				{skillTree.skillCategory}
			</h3>
			<div className={"mt-2 xl:mt-8 flex flex-col gap-2"}>
				{skillTree.skills.map((skill) => (
					<motion.div
						initial={{ width: 0, opacity: 0 }}
						whileInView={{ width: `100%`, opacity: 1 }}
						key={skill}
						viewport={{ once: true }}
						transition={{ ease: "easeInOut" }}
						className={twMerge(
							gradient,
							`text-white p-2 rounded-md flex md:text-xl justify-between `,
						)}
					>
						<p>{skill}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};
