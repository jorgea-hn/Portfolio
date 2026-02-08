import CardSkill from "./CardSkill"

import illustrator from "../assets/illustrator.png"
import photoshop from "../assets/photoshop.png"
import figma from "../assets/figma.png"
import canva from "../assets/canva.png"

import react from "../assets/react.png"
import python from "../assets/python.webp"
import javascript from "../assets/javascript.png"
import django from "../assets/django.png"

import pandas from "../assets/pandas.png"
import numpy from "../assets/numpy.png"
import matplotlib from "../assets/matplotlib.png"
import seaborn from "../assets/seaborn.png"
import powerbi from "../assets/powerbi.png"
import excel from "../assets/excel.webp"
import tableu from "../assets/tableu.webp"

import aws from "../assets/aws.png"
import oracle from "../assets/oracle.png"
import mysql from "../assets/mysql.webp"
import postgres from "../assets/postgres.webp"
import sqlite from "../assets/sqlite.png"
import mongodb from "../assets/mongodb.png"
import postman from "../assets/postman.webp"

interface Skill {
    images: string[];
    titles: string[];
}

const Skill: React.FC = () => {

    const skillUx: Skill[] = [
        {
            images: [illustrator, photoshop, figma, canva], 
            titles: ["Illustrator", "Photoshop", "Figma", "Canva"]
        }
    ]

    const skillWeb: Skill[] = [
        {
            images: [javascript, react, python, django], 
            titles: ["JavaScript", "React", "Python", "Django"] 
        }
    ]

    const skillData: Skill[] = [
        {
            images: [pandas, numpy, matplotlib, seaborn, powerbi, excel, tableu], 
            titles: ["Pandas", "Numpy", "Matplotlib", "Seaborn", "PowerBI", "Excel", "Tableu"] 
        }
    ]

    const skillExtra: Skill[] = [
        {
            images: [aws, oracle, mysql, postgres, sqlite, mongodb, postman], 
            titles: ["AWS", "Oracle", "Mysql", "Postgress", "SQLite", "Mongodb", "Postman" ] 
        }
    ]

    return (
        <div id="skill" className="bg-gray-200 min-h-screen flex flex-col ">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-center pt-16">Skill</h3>
            <div className="flex flex-wrap w-full md:w-full lg:w-2/5 md:px-8 mx-auto md:px-0 px-5">
                {skillUx.map((skill, index) => (
                    <CardSkill key={index} skill={skill} />
                ))}
            </div>

            <div className="flex flex-wrap justify-around">
                <div className="w-full md:w-full lg:w-2/5 md:px-8 flex justify-center lg:justify-start md:px-0 px-5">
                    {skillWeb.map((skill, index) => (
                        <CardSkill key={index} skill={skill} />
                    ))}
                </div>

                <div className="w-full md:w-full lg:w-2/5 md:px-8 flex justify-center lg:justify-start md:px-0 px-5">
                    {skillData.map((skill, index) => (
                        <CardSkill key={index} skill={skill} />
                    ))}
                </div>
            </div>

            <div className="flex flex-wrap w-full md:w-full lg:w-2/5 md:px-8 mx-auto md:px-0 px-5">
                {skillExtra.map((skill, index) => (
                    <CardSkill key={index} skill={skill} />
                ))}
            </div>


        </div>
    )
}

export default Skill