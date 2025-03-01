"use client";
import React, { useState } from "react";
import GithubIcon from "/public/github-icon.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };
        const response = await fetch(endpoint, options);
        const resData = await response.json();

        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        };
    };
    return (
        <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Hey! Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    {" "}
                    I'm always on the lookout for new opportunities and challenges. 
                    If you're interested in working with me, please feel free to reach out, 
                    and I'll get back to you as soon as I can.
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/martinspat26">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/martinspatricia26/"> 
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white mb-2 block text-sm font-medium">
                            Your email
                        </label>
                        <input 
                            name="email"
                            type="email" 
                            id="email" 
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="youremail@mail.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                            Subject
                        </label>
                        <input 
                            name="subject"
                            type="text" 
                            id="subject" 
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Send me a message"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
                            Message
                        </label>
                        <textarea 
                            name="message"
                            id="message" 
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Your message"
                            rows="5"
                        />
                    </div>
                    <button type="submit" className="bg-primary-500 hover:bg-primary-700 text-gray font-medium py-2.5 px-5 rounded-lg w-full">
                        Send Message
                    </button>
                    {
                        //if email submitted successfully, show success message
                        emailSubmitted && (
                            <p className="text-primary-500 mt-2">Email sent successfully!</p>
                        )
                    }
                </form>
            </div>
        </section>
    );
};


export default EmailSection;