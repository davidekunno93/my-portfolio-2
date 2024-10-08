import { Link } from 'react-router-dom';
import './views.css'
import { useContext, useEffect, useRef, useState } from 'react';
import { SectionRefs } from '../App';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import emailjs from '@emailjs/browser';
import MessageSentOverlay from '../components/Overlays/MessageSentOverlay';
import { DataContext } from '../context/DataProvider';

type homeProps = {
    refs: SectionRefs
    scrollToSection: Function
}

const Home = ({ refs, scrollToSection }: homeProps) => {
    // [imports]
    const { mobileMode, gIcon } = useContext(DataContext);

    // [helper functions]
    function wait(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms))
    };


    // [types code]
    type Projects = {
        [key: string]: Project
    };
    type mediaDetails = {
        title: string
        desc: string
        imgUrl?: string
        videoUrl?: string
        thumbnailUrl?: string
        googleIcon: boolean
        icon: string
    };
    type Project = {
        id: string
        projectName: string
        icon: string
        title: string
        color?: string
        titleStrokeWidth?: number
        titleStrokeColor?: string
        titleSize?: number | string
        lineHeight?: number | string
        storyText: string
        technologies: string[]
        githubLink: string
        websiteLink: string | null
        media: {
            [key: number]: mediaDetails
        }
    };
    type Dimensions = {
        fullWidth: number | null
        fullHeight: number | null
    }


    // [hero section]
    const [text] = useTypewriter({
        words: ["Web Developer", "Software Engineer", "Team Worker", "React Developer"],
        loop: false,
        delaySpeed: 2000,
    });


    // [projects section]
    const projects: Projects = {
        "routewise": {
            id: "routewise",
            projectName: "RouteWise",
            icon: "https://i.imgur.com/d2FMf3s.png",
            title: "Route%Wise",
            color: "#dcdcff",
            titleSize: "12vw",
            storyText: "I was alerted to a scholarship opportunity for a program, called Co.Lab, as a developer. I took an assessment and I was accepted into the program to join forces with Product roles and a Backend developer. We were chosen as one of the few teams to present our product at the end of the 3 month program, and have continued to work on it ever since. We have integrated Google APIs for maps and place search and developed a refined algorithm that sorts user places into an organized itinerary. On this project I am the sole Frontend Developer using React JS bringing the Designer's vision onto a functional web page. I also integrated Firebase for user management and I collaborate with the Backend Developer for various backend functionalities. On the Frontend I've incorporated several APIs to create a seamless user flow allowing users to search for places within the scope of their travel destination and created data structures so they can readily move places between itinerary and saved places and even find new places to visit in a suggested places panel.",
            technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
            githubLink: "https://github.com/davidekunno93/Routewise-FrontEnd",
            websiteLink: "https://www.routewise-travel.com/",
            media: {
                1: {
                    title: "Create Trip Demo",
                    desc: "Create an optimized, custom itinerary in a couple of minutes",
                    videoUrl: "https://i.imgur.com/lI1sfUg.mp4",
                    thumbnailUrl: "https://i.imgur.com/FG5TIOCh.png",
                    googleIcon: true,
                    icon: "play_arrow"
                },
                2: {
                    title: "Login",
                    desc: "Create a user account",
                    imgUrl: "https://i.imgur.com/EytK7km.png",
                    googleIcon: true,
                    icon: "person"
                },
                // 2: {
                //     title: "Create a trip",
                //     desc: "Select your trip destination and name your voyage",
                //     imgUrl: "https://i.imgur.com/o8oS32D.png",
                //     googleIcon: true,
                //     icon: "flight"
                // },
                3: {
                    title: "Add Places",
                    desc: "Search places on the interactive map and build your itinerary",
                    imgUrl: "https://i.imgur.com/Wre2n4Z.png",
                    googleIcon: true,
                    icon: "location_on"
                },
                4: {
                    title: "Customize Itinerary",
                    desc: "Drag 'n' drop places, add new places and finalize your itinerary",
                    imgUrl: "https://i.imgur.com/b5lVva4.png",
                    googleIcon: true,
                    icon: "map"
                },
            }
        },
        "gamertheory": {
            id: "gamertheory",
            projectName: "Gamer Theory E-commerce",
            icon: "https://i.imgur.com/ISdD0vL.png",
            title: "Gamer%Theory",
            color: "#ffeacb",
            titleSize: "10vw",
            lineHeight: "0.9",
            storyText: "In order to challenge my TypeScript and Web development skills I had the idea to develop an e-commerce website for video games and document my journey on LinkedIn. My goals were to create a simple, user-friendly website that has a modern, appealing design, emulates the user experience of a modern online store and to display my skills as a developer. I am currently working on the website and am excited to see what I can do with it!",
            technologies: ["HTML", "CSS", "TypeScript", "React", "Firebase"],
            githubLink: "https://github.com/davidekunno93/GamerTheoryWebsite.git",
            websiteLink: "https://gamer-theory-website.vercel.app/",
            media: {
                // 1: {
                //     title: "Home Page",
                //     desc: "Browse games of all genres for different consoles",
                //     imgUrl: "https://i.imgur.com/HwCyCLK.png",
                //     googleIcon: true,
                //     icon: "home"
                // },
                1: {
                    title: "User demo",
                    desc: "Browse games of all genres for different consoles",
                    videoUrl: "https://i.imgur.com/a7FwtuL.mp4",
                    thumbnailUrl: "https://i.imgur.com/HwCyCLKh.png",
                    googleIcon: true,
                    icon: "play_arrow"
                },
                2: {
                    title: "Select a platform",
                    desc: "Choose a platform to start browsing products",
                    imgUrl: "https://i.imgur.com/JQ7PTRB.png",
                    googleIcon: true,
                    icon: "power"
                },
                3: {
                    title: "Browse game products",
                    desc: "Filter and browse games by genre and platform or browse console products",
                    imgUrl: "https://i.imgur.com/4hGF5Q8.png",
                    googleIcon: true,
                    icon: "sports_esports"
                },
                4: {
                    title: "Product Details",
                    desc: "Explore details about the selected product and browse similar items",
                    imgUrl: "https://i.imgur.com/Drpjy63.png",
                    googleIcon: true,
                    icon: "map"
                },
            }
        },
        "things-to-do": {
            id: "things-to-do",
            projectName: "Things-To-Do Web App",
            icon: "https://i.imgur.com/p5VDkun.png",
            title: "Things%To-Do",
            color: "gainsboro",
            titleSize: 164,
            storyText: "I made this to-do list (with a twist) style application to be my own personal productivity companion. I often create lists of things to do on my phone and wanted a more organized platform which would be intuitive to my needs and improve my time management skills. My first goal was to make the user experience feel really smooth, intuitive and fun, and my second goal was to have lots of customizable task details without too much clutter. I designed the web app to have smooth animations and several editable task details that are hidden away until you click to expand them. Completed tasks can also be traded in for points in order to incentivize users to complete tasks daily.",
            technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase", "Python", "Flask", "Postgresql"],
            githubLink: "https://github.com/davidekunno93/things-to-do-app-frontend",
            websiteLink: "https://things-to-do-app-frontend-cvfo.vercel.app/",
            media: {
                1: {
                    title: "Task Creation Demo",
                    desc: "Create a task with the details you need, update them on the fly with the user-friendly interface",
                    videoUrl: "https://i.imgur.com/rYUFMXT.mp4",
                    thumbnailUrl: "https://i.imgur.com/oMT2a5gh.png",
                    googleIcon: true,
                    icon: "play_arrow"
                },
                2: {
                    title: "Login",
                    desc: "Create a user account",
                    imgUrl: "https://i.imgur.com/gt4DKMH.png",
                    googleIcon: true,
                    icon: "person"
                },
                // 2: {
                //     title: "Create tasks",
                //     desc: "Create tasks with details from deadlines to duration, add steps and notes too",
                //     imgUrl: "https://i.imgur.com/oMT2a5g.png",
                //     googleIcon: true,
                //     icon: "list"
                // },
                3: {
                    title: "Edit tasks",
                    desc: "Edit task details from the task box or task modal",
                    imgUrl: "https://i.imgur.com/TpV4Mto.png",
                    googleIcon: true,
                    icon: "edit"
                },
                4: {
                    title: "Complete tasks and trade them in for points",
                    desc: "Drag 'n' drop places, add new places and finalize your itinerary",
                    imgUrl: "https://i.imgur.com/985LyUj.png",
                    googleIcon: true,
                    icon: "done"
                },
            }
        },
        "research-app": {
            id: "research-app",
            projectName: "Research Visit Tracker App",
            icon: "https://i.imgur.com/HJAapYA.png",
            title: "Research%App",
            color: "#ceecd2",
            titleSize: 164,
            storyText: "I wanted to create a web application with TypeScript and this web app presented the perfect opportunity for me to do that. Working  as a Research Coordinator at Advanced Rheumatology of Houston I had to keep track of patient visits, and coordinate future visits within specific visit windows. The work of calculating these visit windows, updating visit data, and looking up study information can be quite tedious and grueling especially when data is in different places. This is where the Research Visit Tracker App comes in. Specifically tailored to the needs of my clinic, it contains several research studies conducted by the clinic so study information is more readily accessible, visit windows are auto-calculated as you use the web app for each specific study using previous visit data, and packaged in a modern looking database platform.",
            technologies: ["HTML", "CSS", "TypeScript", "React"],
            githubLink: "https://github.com/davidekunno93/research-app-frontend",
            websiteLink: null,
            media: {
                1: {
                    title: "Add new patients",
                    desc: "Define patient demographics before adding them to a study",
                    imgUrl: "https://i.imgur.com/76VgYIN.png",
                    googleIcon: true,
                    icon: "person_add"
                },
                2: {
                    title: "Visit windows auto-update",
                    desc: "Visit windows are automatically updated when pivotal visits are edited",
                    imgUrl: "https://i.imgur.com/niNkCj2.png",
                    googleIcon: true,
                    icon: "event"
                },
            }
        },
        "pokemon-app": {
            id: "pokemon-app",
            projectName: "Pokemon Battle X",
            icon: "https://i.imgur.com/Xy0cX0a.png",
            title: "Poke-%mon",
            titleSize: 164,
            storyText: "I wanted to create a web application with TypeScript and this web app presented the perfect opportunity for me to do that. Working  as Research Coordinator at Advanced Rheumatology of Houston I had to keep track of patient visits, and coordinate the future visits within specific visit windows. The work of calculating these visit windows, updating visit data, and looking up study information can be quite tedious and grueling especially when data is in different places. This is where the web application comes in. I created it specifically for my clinic's needs; it contains several research studies conducted by the clinic so study information is more readily accessible, visit windows are auto-calculated using study and previous visit data, and all of this is delivered on a smooth and aesthetic database platform.",
            technologies: ["HTML", "CSS", "Python", "Flask", "Jinja"],
            githubLink: "https://github.com/davidekunno93/Flask_Pokemon_Project",
            websiteLink: "https://pokemon-battle-k3vf.onrender.com/",
            media: {
                1: {
                    title: "Create a user",
                    desc: "Create an account and login as an authenticated user",
                    imgUrl: "https://i.imgur.com/60THHlZ.png",
                    googleIcon: true,
                    icon: "person"
                },
                2: {
                    title: "Search for new pokemon",
                    desc: "Use the pokedex or the dashboard roulette to find new pokemon",
                    imgUrl: "https://i.imgur.com/8pUi2Ue.png",
                    googleIcon: true,
                    icon: "search"
                },
                3: {
                    title: "Create your team",
                    desc: "Decide on 5 pokemon to represent your team",
                    imgUrl: "https://i.imgur.com/Qf3kZoO.png",
                    googleIcon: true,
                    icon: "groups"
                },
                4: {
                    title: "Battle other users",
                    desc: "Battle fellow users who have 5 pokemon and gain xp points for winning",
                    imgUrl: "https://i.imgur.com/KtqKI1z.png",
                    googleIcon: true,
                    icon: "swords"
                },
            }
        },
    };

    const [projectsScrollOffset, setProjectsScrollOffset] = useState<number>(0);
    const scrollProjects = (direction: string) => {
        const inner = document.getElementById('projects-inner');
        // console.log(inner?.clientWidth)
        // console.log(inner?.scrollWidth)

        if (direction === "right") {
            if (inner?.scrollWidth && inner.clientWidth) {
                let offsetDiff = inner.scrollWidth - (inner.clientWidth + projectsScrollOffset);
                console.log(offsetDiff)
                if (offsetDiff > 80) {
                    setProjectsScrollOffset(projectsScrollOffset + 80);
                } else {
                    setProjectsScrollOffset(projectsScrollOffset + offsetDiff);
                }
            }
        } else if (direction === "left") {
            if (projectsScrollOffset > 80) {
                setProjectsScrollOffset(projectsScrollOffset - 80);
            } else {
                setProjectsScrollOffset(0);
            }
        }

    };
    const [imgShuffleIndex, setImgShuffleIndex] = useState<number>(0);

    const [selectedProject, setSelectedProject] = useState<Project>(projects["routewise"]);
    const [phantomStoryDimensions, setPhantomStoryDimensions] = useState<Dimensions>({
        fullWidth: null,
        fullHeight: null,
    });
    const phantomRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        // on screen width change
        if (phantomRef.current) {
            const observer = new ResizeObserver((entries) => {
                setPhantomStoryDimensions({
                    fullWidth: entries[0].contentRect.width + 64,
                    fullHeight: entries[0].contentRect.height + 64,
                })
            })
            observer.observe(phantomRef.current);
        }
    }, []);
    const storyBoxRef = useRef<HTMLInputElement>(null);
    const storyBoxBtnRef = useRef<HTMLInputElement>(null);
    const storyBoxCloseBtnRef = useRef<HTMLInputElement>(null);
    const storyBoxContentRef = useRef<HTMLInputElement>(null);
    const storyBoxFunctions = {
        expandBox: function () {
            storyBoxBtnRef.current?.classList.add("pressed");
            storyBoxBtnRef.current?.classList.remove("onHover-dark");
            storyBoxRef.current?.classList.replace("collapsed", "expanded")

            wait(600).then(() => {
                if (storyBoxRef.current && phantomStoryDimensions.fullHeight) {
                    if (mobileMode) {
                        storyBoxRef.current.style.height = "260px";
                    } else {
                        storyBoxRef.current.style.height = phantomStoryDimensions.fullHeight.toString() + "px";
                    }
                    storyBoxRef.current?.classList.add("padded");
                }
                wait(400).then(() => {
                    storyBoxContentRef.current?.classList.replace("hidden", "shown");
                    storyBoxCloseBtnRef.current?.classList.remove("hidden");
                })
            });
        },
        collapseBox: function () {
            storyBoxContentRef.current?.classList.replace("shown", "hidden");
            storyBoxCloseBtnRef.current?.classList.add("hidden");
            if (storyBoxRef.current) {
                storyBoxRef.current.style.height = "44px";
            }
            storyBoxRef.current?.classList.remove("padded");

            wait(600).then(() => {
                storyBoxRef.current?.classList.replace("expanded", "collapsed");
                storyBoxBtnRef.current?.classList.remove("pressed");
                storyBoxBtnRef.current?.classList.add("onHover-dark");
            });
        },
        toggleBox: function () {
            if (storyBoxContentRef.current?.classList.contains("shown")) {
                storyBoxFunctions.collapseBox()
            } else if (storyBoxContentRef.current?.classList.contains("hidden")) {
                storyBoxFunctions.expandBox()
            };
        }
    }

    const projectShowcaseRef = useRef<HTMLInputElement>(null);
    const updateProject = (projectId: string) => {
        // hide project showcase
        if (selectedProject.id !== projectId) {

            if (projectShowcaseRef.current) {
                projectShowcaseRef.current.classList.add("hidden");
                storyBoxFunctions.collapseBox();
                wait(300).then(() => {
                    // set mobileMode img shuffler index to 0
                    setImgShuffleIndex(0)

                    // set video index playing to null
                    setVideoIndexPlaying(null);

                    // update projectState
                    setSelectedProject(projects[projectId]);
                    // add onload to showcase
                    projectShowcaseRef.current?.classList.add("onload");

                    wait(200).then(() => {
                        // remove hidden from showcase
                        projectShowcaseRef.current?.classList.remove("hidden");
                        projectShowcaseRef.current?.classList.remove("onload");

                    });
                });
            };
        };
    };
    // video feature code
    const videoRefs = useRef<HTMLVideoElement[] | null[]>([]);
    const [videoIndexPlaying, setVideoIndexPlaying] = useState<number | null>(null);
    const videoIsPlaying = (index: number) => {
        // if (!videoRefs.current[index]) return;
        // return !videoRefs.current[index].paused;
        return videoIndexPlaying === index;
    };
    const videoFunctions = {
        play: function (index: number) {
            if (!videoRefs.current[index]) return;
            videoRefs.current[index].play();
            setVideoIndexPlaying(index);
        },
        pause: function (index: number) {
            if (!videoRefs.current[index]) return;
            videoRefs.current[index].pause();
            if (videoIndexPlaying !== index) return;
            setVideoIndexPlaying(null);
        },
        toggle: function (index: number) {
            if (!videoRefs.current[index]) return;
            if (videoRefs.current[index].paused) {
                videoFunctions.play(index);
            } else {
                videoFunctions.pause(index);
            };
        },
    };
    const pauseUnselectedVideos = (e: any, index: number, numberOfChildren: number) => {
        if (e.target.checked) {
            for (let i = 0; i < numberOfChildren; i++) {
                if (i !== index) {
                    videoFunctions.pause(i);
                };
            };
        };
    };
    const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
    const [mobileVideoControls, setMobileVideoControls] = useState<any>({
        isPlaying: true,
    });
    useEffect(() => {
        setMobileVideoControls({ ...mobileVideoControls, isPlaying: false });
    }, [imgShuffleIndex])
    const mobileVideoFunctions = {
        play: function () {
            if (!mobileVideoRef.current) return;
            mobileVideoRef.current.play();
            setMobileVideoControls({ ...mobileVideoControls, isPlaying: true });
        },
        pause: function () {
            if (!mobileVideoRef.current) return;
            mobileVideoRef.current.pause();
            setMobileVideoControls({ ...mobileVideoControls, isPlaying: false });
        },
        toggle: function () {
            if (!mobileVideoRef.current) return;
            if (mobileVideoRef.current.paused) {
                mobileVideoRef.current.play();
                setMobileVideoControls({ ...mobileVideoControls, isPlaying: true });
            } else {
                mobileVideoRef.current.pause();
                setMobileVideoControls({ ...mobileVideoControls, isPlaying: false });
            };
        },
    };



    // [contact form]
    const contactFormRef = useRef<HTMLFormElement>(null);
    const sendEmail = (e: any) => {
        e.preventDefault();
        if (contactFormRef.current) {
            emailjs
                .sendForm('service_whvz2lp', 'template_mgey1wr', contactFormRef.current, {
                    publicKey: 'jztdvyE6Mt3hbXk94',
                })
                .then(
                    () => {
                        console.log('Succesfully sent message');
                        setMessageSentOverlayOpen(true);
                        resetContactForm();
                    },
                    (error) => {
                        console.log('Failed to send message', error);
                        alert("Message Failed. Please try again")
                        console.log('not working')
                    },
                )
        }
    }
    // const messageIsValid = (): boolean => {
    //     let isValid = true;

    //     // check name
    //     const nameInput: any = document.getElementById('name-input');
    //     if (!nameInput.value) {
    //         isValid = false;
    //         nameInput.classList.add("invalid");
    //     }

    //     // check email
    //     const emailInput: any = document.getElementById('email-input');
    //     if (!emailInput.value) {
    //         isValid = false;
    //         console.log("empty")
    //         emailInput.classList.add("invalid");
    //     }
    //     // check message
    //     const messageInput: any = document.getElementById('message-input');
    //     if (!messageInput.value) {
    //         isValid = false;
    //         messageInput.classList.add("invalid");
    //     }
    //     return isValid;
    // }

    const [messageSentOverlayOpen, setMessageSentOverlayOpen] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("");
    const resetContactForm = () => {
        const nameInput: any = document.getElementById('name-input');
        const emailInput: any = document.getElementById('email-input');
        const messageInput: any = document.getElementById('message-input');
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    };


    // on Play - update state to media index that is playing
    // on Pause - update mediaIndex state to null if current index is a match


    return (
        <>
            <MessageSentOverlay open={messageSentOverlayOpen} userName={userName} onClose={() => setMessageSentOverlayOpen(false)} />
            <div className="hero-section" data-mobileMode={mobileMode ? "true" : "false"}>
                <img src="https://i.imgur.com/g0ZSvBo.png" alt="" className="hero-img" />
                <div className="intro-area">
                    <p className="intro-heading font-tech gray-text"><span className="lightgreen-text">/</span> INTRODUCTION</p>
                    <div className="intro-name" data-mobileMode={mobileMode ? "true" : "false"}>
                        <p>I'm David, a </p>
                        <p style={{ color: 'rgb(87, 255, 205)' }}>{text}<span><Cursor /></span></p>
                    </div>
                    <p className="intro-summary">Based in Houston, TX, I'm an experienced React Developer passionate about creating amazing user experiences.</p>
                    <div onClick={() => scrollToSection(refs.techSectionRef)} className="big-action-btn mt-4">
                        <span className="material-symbols-outlined">arrow_downward_alt</span>
                    </div>
                </div>
                {!mobileMode &&
                    <div className="links-area">
                        <div className="about-me-link">
                            <p className="title">ABOUT ME</p>
                            <p className="body-text">Born and raised in London, now living in the US. I found Python during the COVID pandemic and the rest is history. I'm a Web Developer but thanks to consistent habits and enjoyment for this work I've exceled very quickly in this field...</p>
                            <div className="flx">
                                <div onClick={() => scrollToSection(refs.aboutMeSectionRef)} className="text-link">
                                    <p>LEARN MORE</p>
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                        <hr className='faded-line' />
                        <div className="my-work-link">
                            <p className="title">MY WORK</p>
                            <div className="project-boxes">
                                {Object.values(projects).map((project, index) => {
                                    return <div key={index} onClick={() => { scrollToSection(refs.projectsSectionRef); updateProject(project.id) }} className="project-box">
                                        <img src={project.icon} alt="" className="project-img" />
                                        <p className="project-title">{project.projectName}</p>
                                    </div>
                                })}

                            </div>
                            <div className="flx">
                                <div onClick={() => scrollToSection(refs.projectsSectionRef)} className="text-link">
                                    <p>BROWSE PORTFOLIO</p>
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                        <hr className='faded-line' />
                        <div className="follow-me-link">
                            <p className="title">FOLLOW ME</p>
                            <div className="icon-links">
                                <Link to='https://github.com/davidekunno93' target='_blank'><img src="https://i.imgur.com/A3c3kUB.png" alt="" className="github icon-link" /></Link>
                                <Link to='https://www.linkedin.com/in/davidekunno/' target='_blank'><img src="https://i.imgur.com/14o2J4P.png" alt="" className="linkedin icon-link" /></Link>
                                <Link to='https://www.instagram.com/davidekunno/?hl=env' target='_blank'><img src="https://i.imgur.com/lsL7FFK.png" alt="" className="instagram icon-link" /></Link>
                            </div>
                        </div>
                    </div>
                }
            </div>

            <div ref={refs.techSectionRef} className="tech-about-me-section" data-mobileMode={mobileMode ? "true" : "false"}>
                <div className="heading"><span className="lightgreen-text">/</span> TECHS</div>
                <div className="tech-area">

                    <div className="skills-list">
                        <div className="skill">
                            <p className="name">HTML</p>
                            <p className="description">2+ years experience</p>
                        </div>
                        <div className="skill">
                            <p className="name">CSS</p>
                            <p className="description">2+ years experience</p>
                        </div>
                        <div className="skill">
                            <p className="name">React</p>
                            <p className="description">2+ years experience</p>
                        </div>
                        <div className="skill">
                            <p className="name">JavaScript</p>
                            <p className="description">2+ years experience</p>
                        </div>
                        <div className="skill">
                            <p className="name">TypeScript</p>
                            <p className="description">2+ years experience</p>
                        </div>

                        <div className="skill-others">
                            {/* <p className="name">Others:</p> */}
                            <p className="description">...and Python, Firebase, Git, GitHub, SQL, Postgresql, Flask, VSCode, Jupyter Notebook</p>
                        </div>
                    </div>
                </div>

                <hr className="faded-line my-6" />

                <div className="heading"><span className="lightgreen-text">/</span> ABOUT ME</div>
                <div ref={refs.aboutMeSectionRef} className="about-me-area">

                    <div className="personal-info-part">
                        <p className="title">I've been developing websites since the early 2020s</p>
                        <p className="body-text">I found Python during the COVID pandemic and the rest is history. I'm a Web Developer but thanks to consistent habits and real enjoyment for this work I've exceled very quickly in this field. I have a passion for creating logical solutions and software development gives me the opportunity to do just that.</p>
                    </div>
                    <div className="experience-part">
                        <div className="xp-details">
                            <div className="xp-detail">
                                <div className="number">2+</div>
                                <div className="text">Years of <br />experience</div>
                            </div>
                            <div className="xp-detail">
                                <div className="number">10+</div>
                                <div className="text">Projects <br />worked on</div>
                            </div>
                        </div>
                        <p className="body-text">I've worked on several fun and challenging projects including a streaming service, travel social platform, meditation website etc. Though I've worked many projects independently, I prefer to collaborate with others on a team and have more stream-lined responsibilities and more creative input.</p>
                    </div>
                </div>
            </div>

            <div ref={refs.projectsSectionRef} className="projects-section" data-mobileMode={mobileMode ? "true" : "false"}>
                <div className="heading"><span className="lightgreen-text">/</span> PROJECTS</div>
                <div className="project-area">

                    <div className="carousel-container">
                        {mobileMode &&
                            <>
                                <div onClick={() => scrollProjects("left")} className="left-btn">
                                    <span className="material-symbols-outlined dark-text">
                                        arrow_back_ios
                                    </span>
                                </div>
                                <div onClick={() => scrollProjects("right")} className="right-btn">
                                    <span className="material-symbols-outlined dark-text">
                                        arrow_forward_ios
                                    </span>
                                </div>
                            </>
                        }
                        <div className="project-options-window">

                            {/* inner */}
                            <div id='projects-inner' className="project-options" style={{ transform: `translateX(-${projectsScrollOffset}px)` }}>

                                {Object.values(projects).map((project, index) => {
                                    return <>
                                        {index !== 0 && mobileMode &&
                                            <span className='divider mx-2 lightgreen-text'>/</span>
                                        }
                                        <div key={index} onClick={() => { updateProject(project.id) }} className="option">
                                            <p>{project.projectName}</p>
                                        </div>
                                    </>
                                })}

                            </div>
                        </div>
                    </div>
                    <div ref={projectShowcaseRef} className="project-showcase">
                        <div className="hero-space">
                            {mobileMode ?
                                <p className="title-inline">
                                    {selectedProject.projectName}
                                </p>
                                :
                                <div className="title">
                                    {selectedProject.title.split("%").map((str, index) => {
                                        return <p key={index} style={{ fontSize: selectedProject.titleSize ?? "", lineHeight: selectedProject.lineHeight ?? "", color: selectedProject.color ?? "", WebkitTextStrokeColor: selectedProject.titleStrokeColor ?? "", WebkitTextStrokeWidth: selectedProject.titleStrokeWidth ?? "" }}>
                                            {str}
                                        </p>
                                    })}
                                </div>
                            }

                            {mobileMode ?
                                <div className="image-shuffler">
                                    <div className="imgDiv">
                                        <div className="img-select">
                                            {Object.values(selectedProject.media).map((media, index) => {
                                                return <div key={index} onClick={() => setImgShuffleIndex(index)} className="option">
                                                    <span className='material-symbols-outlined'>{media.icon}</span>
                                                </div>
                                            })}

                                        </div>
                                        {selectedProject.media[imgShuffleIndex + 1].imgUrl &&
                                            <img src={selectedProject.media[imgShuffleIndex + 1].imgUrl} alt="" className="img" />
                                        }
                                        {selectedProject.media[imgShuffleIndex + 1].videoUrl &&
                                            <>
                                                {!mobileVideoControls.isPlaying &&
                                                    <div onClick={() => mobileVideoFunctions.play()} className="mobile-play-icon">
                                                        <span className={gIcon}>play_arrow</span>
                                                    </div>
                                                }
                                                <video
                                                    ref={mobileVideoRef}
                                                    src={selectedProject.media[imgShuffleIndex + 1].videoUrl}
                                                    onClick={() => mobileVideoFunctions.toggle()}
                                                    loop
                                                    muted
                                                    className="video"
                                                />
                                            </>
                                        }
                                    </div>
                                    <div className="caption">
                                        <p>{selectedProject.media[imgShuffleIndex + 1].title}</p>
                                    </div>
                                </div>
                                :
                                <div className="slider-wrapper">
                                    <div className="slider-container">

                                        {Object.values(selectedProject.media).map((media, index) => {
                                            const num = index + 1;
                                            return <>
                                                <input key={index} id={`c${num}`} type="radio" name='slide' onChange={e => pauseUnselectedVideos(e, index, Object.values(selectedProject.media).length)} defaultChecked={num === 1 ? true : false} />
                                                <label className='card' htmlFor={`c${num}`} style={{ backgroundImage: `url(${media.imgUrl})` }}>
                                                    {media.videoUrl &&
                                                        <>
                                                            <div onClick={() => videoFunctions.toggle(index)} className={`play-icon ${!videoIsPlaying(index) && "paused"}`}>
                                                                <span className={gIcon}>{videoIsPlaying(index) ? "pause" : "play_arrow"}</span>
                                                            </div>
                                                            <video
                                                                ref={e => videoRefs.current[index] = e}
                                                                src={media.videoUrl}
                                                                poster={media.thumbnailUrl ?? ""}
                                                                className='video'
                                                                loop
                                                                muted
                                                            />
                                                        </>
                                                    }
                                                    <div className="row">
                                                        <div className={`icon ${media.googleIcon && "material-symbols-outlined"}`}>{media.icon}</div>
                                                        <div className="description">
                                                            <h4>{media.title}</h4>
                                                            <p>{media.desc}</p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </>
                                        })}


                                    </div>
                                </div>

                            }
                        </div>
                        <div className="story">
                            <div ref={phantomRef} className="phantom-content">
                                {/* <p className="title">THE STORY</p> */}
                                <p className="text">{selectedProject.storyText}</p>
                            </div>
                            <div ref={storyBoxRef} className="story-box-expand collapsed">
                                {/* <div ref={storyBoxCloseBtnRef} onClick={() => storyBoxFunctions.collapseBox()} className="closeBtn hidden">
                                    <span className="material-symbols-outlined">close</span>
                                </div> */}
                                <div ref={storyBoxContentRef} className="content hidden">
                                    {/* <p className="title">THE STORY</p> */}
                                    <p className="text">{selectedProject.storyText}</p>
                                </div>
                            </div>
                            <p className="title">THE STORY</p>
                            <div className="body">
                                <p className="text">{selectedProject.storyText}</p>
                                <div ref={storyBoxBtnRef} onClick={() => storyBoxFunctions.toggleBox()} className="zoom-icon onHover-dark">
                                    <span className="material-symbols-outlined">search</span>
                                </div>
                            </div>
                        </div>
                        <div className="techs">
                            <p className="title">TECHNOLOGIES</p>
                            <div className='tech-names'>
                                {selectedProject.technologies.map((tech, index) => {
                                    return <p key={index} className="tech-name">{tech}</p>
                                })}

                            </div>
                        </div>
                        <div className="links">
                            <Link to={selectedProject.githubLink} target='_blank'><button className="btn-secondary">View Code</button></Link>
                            {selectedProject.websiteLink &&
                                <Link to={selectedProject.websiteLink} target='_blank'><button className="btn-primary h-100">View Website</button></Link>
                            }
                        </div>
                    </div>
                </div>

            </div>

            <div ref={refs.contactMeSectionRef} className="contact-me-section" data-mobileMode={mobileMode ? "true" : "false"}>
                <div className="heading"><span className="lightgreen-text">/</span> CONTACT ME</div>
                <div className="contact-me-area">
                    <div className="contact-statement">
                        <p className="title">Contact Me</p>
                        <p className="text">Send me a personal message directly to my email. Feel free to reach out with questions, feedback or requests.</p>
                    </div>

                    <form ref={contactFormRef} onSubmit={(e) => sendEmail(e)} className="contact-form">
                        <div className="inputBox">
                            <input id='name-input' name='user_name' onChange={(e: any) => setUserName(e.target.value)} className='input-primary w-100' type="text" required />
                            <label htmlFor="name-input" className='title'>NAME</label>
                        </div>
                        <div className="inputBox">
                            <input id='email-input' name='user_email' className='input-primary w-100' type="text" required />
                            <label htmlFor="email-input" className='title'>EMAIL</label>
                        </div>
                        <div className="inputBox">
                            <textarea name="message" id="message-input" rows={3} className="input-primary w-100" required></textarea>
                            <label htmlFor="message-input" className='title'>MESSAGE</label>
                        </div>
                        <div className="btn-holder">
                            <button className="btn-primary">Send Message</button>
                        </div>
                    </form>
                </div>
                <div className="personal-information">
                    <p>David Ekunno</p>
                    <div className="social-links">
                        <Link to='https://www.instagram.com/davidekunno/?hl=en' target='_blank'><img src="https://i.imgur.com/lsL7FFK.png" alt="" className="instagram social-link-img" /></Link>
                        <Link to='https://www.linkedin.com/in/davidekunno/' target='_blank'><img src="https://i.imgur.com/14o2J4P.png" alt="" className="linkedin social-link-img" /></Link>
                        <Link to='https://github.com/davidekunno93' target='_blank'><img src="https://i.imgur.com/A3c3kUB.png" alt="" className="github social-link-img" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;