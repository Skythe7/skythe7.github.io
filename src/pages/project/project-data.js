import diresqImage from "./images/diresq.png";
import orgafilezer from "./images/orgafilezer.png"

const backtick = String.fromCharCode(96);

export const projects = [
  {
    id: 1,
    title: "DiresQ",
    video: "https://youtu.be/T0Udg9WgRYA?si=DWwdW7WwEIcrRvKE",
    img: diresqImage,
    imgAlt: "Screenshot of DiresQ interface",
    url: "https://github.com/Skythe7/DiresQ",
    asciiTitle: String.raw`______ _               _____
|  _  (_)             |  _  |
| | | |_ _ __ ___  ___| | | |
| | | | | '__/ _ \/ __| | | |
| |/ /| | | |  __/\__ \ \/' /
|___/ |_|_|  \___||___/\_/_${String.fromCharCode(92)}`,
    description: "DiresQ is a disaster app where people can report an ongoing or upcoming disaster. Volunteers later can look into DiresQ to help find victims of disaster and easily find information about location, time, and status. \n DiresQ are built for the Katy Youth Hacks 2026, STEMist Hacks IV, and Reverie Hacks 2026. This app ended up won the 3rd place in Software Development track for Reverie Hacks!",
  },
  {
    id: 2,
    title: "Sticky Memory",
    video: "",
    img: "",
    imgAlt: "",
    url: "https://github.com/Skythe7/Sticky-Memory",
    asciiTitle: String.raw` _____ _   _      _           ___  ___                                
/  ___| | (_)    | |          |  \/  |                                
\ ${backtick}--.| |_ _  ___| | ___   _  | .  . | ___ _ __ ___   ___  _ __ _   _ 
 ${backtick}--. \ __| |/ __| |/ / | | | | |\/| |/ _ \ '_ ${backtick} _ \ / _ \| '__| | | |
/\__/ / |_| | (__|   <| |_| | | |  | |  __/ | | | | | (_) | |  | |_| |
\____/ \__|_|\___|_|\_\\__, | \_|  |_/\___|_| |_| |_|\___/|_|   \__, |
                        __/ |                                    __/ |
                       |___/                                    |___/ `,
    description: "I have a pretty bad memory, memorizing things is not the thing I'm very good at. I keep forgeting stuff even if that's important like homework or exam. So I made a simple python program that tracks my memory (so like.. memory tracker). I use Sticky Memory as a startup for everytime I open up my terminal (because I open my terminal very frequently as a Linux user).",
  },
  {
    id: 3,
    title: "Algodex",
    video: "https://youtu.be/ss3nzUNTEkc?si=vcxtURQQeixn4y59",
    img: "https://github.com/Skythe7/algodex/raw/main/assets/homepage.png",
    imgAlt: "Screenshot of Algodex homepage",
    url: "https://github.com/Skythe7/algodex",
    asciiTitle: String.raw`  ___  _                 _           
 / _ \| |               | |          
/ /_\ \ | __ _  ___   __| | _____  __
|  _  | |/ _${backtick} |/ _ \ / _${backtick} |/ _ \ \/ /
| | | | | (_| | (_) | (_| |  __/>  < 
\_| |_/_|\__, |\___/ \__,_|\___/_/\_\
          __/ |                      
         |___/                       `,
    description: "Algodex was made for my final project of CS50W. One of my hobbies is playing rubiks cube, I'm not really good at it and still needs more practice on different types of algorithm. So I made this project to help me and others to practice some rubiks cube algorithm that are posted in the platform! It tracks your time progress while you practice your algorithm."
  },
  {
    id: 4,
    title: "OrgaFILEzer",
    video: "https://youtu.be/xi2f3LpEJuk?si=T4nK86S_b9iBrKSU",
    img: orgafilezer,
    imgAlt: "Screenshot of OrgaFILEzer CLI",
    url: "https://github.com/Skythe7/orgaFILEzer",
    asciiTitle: String.raw` _____                ______ _____ _      _____             
|  _  |               |  ___|_   _| |    |  ___|            
| | | |_ __ __ _  __ _| |_    | | | |    | |__ _______ _ __ 
| | | | '__/ _${backtick} |/ _${backtick} |  _|   | | | |    |  __|_  / _ \ '__|
\ \_/ / | | (_| | (_| | |    _| |_| |____| |___/ /  __/ |   
 \___/|_|  \__, |\__,_\_|    \___/\_____/\____/___\___|_|   
            __/ |                                           
           |___/                                             `,
    description: "OrgaFILEzer is a python program that organize and analyze your file system. This program is best for people who often have their file system full or messy. You can organize your folder, check zip files without extracting, or just analyze your folder and see what is up with it. OrgaFILEzer was made for my CS50P final project."
  },
  {
    id: 5,
    title: "Day By Day",
    video: "https://www.youtube.com/watch?v=MKU6NQCRR0Y",
    img: "https://github.com/Skythe7/day-by-day/raw/master/assets/day-by-day-homepage.png",
    imgAlt: "Screenshot of Day By Day interface",
    url: "https://github.com/Skythe7/day-by-day",
    asciiTitle: String.raw`______              _            ______            
|  _  \            | |           |  _  \           
| | | |__ _ _   _  | |__  _   _  | | | |__ _ _   _ 
| | | / _${backtick} | | | | | '_ \| | | | | | | / _${backtick} | | | |
| |/ / (_| | |_| | | |_) | |_| | | |/ / (_| | |_| |
|___/ \__,_|\__, | |_.__/ \__, | |___/ \__,_|\__, |
             __/ |         __/ |              __/ |
            |___/         |___/              |___/ `,
    description: "Day by Day is a journal app where you can write a journal everyday. But the catch is you are required to write the journal in the maximum of 10 words only. Why? Because for simplicity. This app encourage users to keep track of their life with short time because it only needs 10 words from your daily day. This app was made for my final project of CS50x and was inspired by StoryWorthy by Matthew Dicks."
  },
  {
    id: 6,
    title: "wall-i3",
    video: "",
    img: "https://camo.githubusercontent.com/15bda013a87cb7c86144993b66cfd4a448400f8eab5c27be4fa23f0200320402/68747470733a2f2f63646e2e696d61676575726c67656e657261746f722e636f6d2f75706c6f6164732f65386634653064612d663334352d346264312d613435642d6235373065386664633638322e676966",
    imgAlt: "Gif showcasing wall i3 with polybar",
    url: "https://github.com/Skythe7/wall-i3",
    asciiTitle: String.raw`               _ _   _  _____ 
              | | | (_)|____ |
__      ____ _| | |  _     / /
\ \ /\ / / _${backtick} | | | | |    \ \
 \ V  V / (_| | | | | |.___/ /
  \_/\_/ \__,_|_|_| |_|\____/ `,
    description: "This was made because I'm tired of re-rice my i3 just because I have a new wallpaper. This project is very simple, just changing pywal colors, update firefox's pywal. It's not that big of a project, but I just share it on my github incase someone needs it. Only for i3 or any window manager that uses nitrogen."
  },
];