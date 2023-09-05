"use client";

import { gradient } from "$/util/gradient";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export type Skilltree = {
    skills: {
        id: number;
        name: string;
        value: number;
        myskillsId: string | null;
    }[];
} & {
    id: string;
    title: string;
};

export const Skilltree = ({ skill }: { skill: Skilltree }) => {
    return (
        <div>
            <h3 className="text-2xl md:text-4xl font-bold">{skill.title}</h3>
            <div className={"mt-2 xl:mt-8 flex flex-col gap-2"}>
                {skill.skills
                    .sort((a, b) => (a.value > b.value ? -1 : 1))
                    .map((s) => (
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: `${s.value}%`, opacity: 1 }}
                            key={s.id}
                            viewport={{ once: true }}
                            transition={{ ease: "easeInOut" }}
                            className={twMerge(
                                gradient,
                                `text-white p-2 rounded-md flex md:text-xl justify-between `
                            )}
                        >
                            <p>{s.name}</p>
                            <p>{s.value}</p>
                        </motion.div>
                    ))}
            </div>
        </div>
    );
};
