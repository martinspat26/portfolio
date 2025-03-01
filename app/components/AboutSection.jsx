"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';


const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>PHP Symfony</li>
                <li>Pimcore</li>
                <li>Docker, Laragon, XAMPP</li>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>Express</li>
                <li>JavaScript</li>
                <li>Twig, HTML, CSS</li>
                <li>React</li>
                <li>Gitlab, Github</li>
                <li>MariaDB, SQL</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>Bachelor Computer Engineering</li>
                <li>Universidade Autónoma de Lisboa, Portugal</li>
            </ul>
        )
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <ul className='list-disc pl-2'>
                <li>Javra Software, Portugal</li>
                <li>Coda. Tech, Germany </li>
            </ul>
        )
    },
    {
        title: 'Certifications',
        id: 'certifications',
        content: (
            <ul className='list-disc pl-2'>
                <li>Pimcore Junior</li>
                <li>Pimcore Senior</li>
            </ul>
        )
    }

]


const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition ] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
    return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/aboutme.png" width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left fle flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className='flex flex-row justify-start mt-8'>
                <TabButton 
                    selectTab={() => handleTabChange('skills')} 
                    active={tab === 'skills'}> 
                    {" "}
                    Skills{" "}
                </TabButton>
                <TabButton 
                    selectTab={() => handleTabChange('education')} 
                    active={tab === 'education'}>
                    {" "}
                    Education{" "}
                </TabButton>
                <TabButton 
                    selectTab={() => handleTabChange('experience')} 
                    active={tab === 'experience'}>
                    {" "}
                    Experience{" "}
                </TabButton>
                <TabButton 
                    selectTab={() => handleTabChange('certifications')} 
                    active={tab === 'certifications'}>
                    {" "}
                    Certifications{" "}
                </TabButton>
            </div>
            <div className='mt-8'>
                {isPending ? 'Loading...' : TAB_DATA.find((tabData) => tabData.id === tab).content}
            </div>
        </div>
        </div>
    </section>
    )
};


export default AboutSection;