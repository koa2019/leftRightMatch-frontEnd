import { IImage } from "./IImage";


    export const images: IImage[] =[
    {
        id: 0,
        alt: require("Elizabeth Warren"),
        src: require("/images/elizabeth-warren_red_profile.png"),
        src1: require("/images/elizabeth-warren_blue.png"),
        src2: require("/images/ElizabethWarren-Headshot-870x580.png"), 
        headImg: require("/images/elizabethWarren-cutout_1024x1024.png"),
        banner: require("../images/elizabeth-warren-banner4.png")
    },
    {
        id: 1,
        alt: "Bernie Sanders",
        src: require("../images/Bernie-Sanders-circle-16.png"),
        src1: require("../images/berbie_blue_profile1.jpg"),
        headImg: require("../images/berie-sanders-cutout.png"),
        banner: require("../images/bernie-banner1.png")
    },
    {
        id: 2,
        alt: "Joe Biden",
        src: require("../images/joe-biden_blue_profile.png"),
        headImg: require("../images/joe-biden-cutout.png"),
        banner: require("../images/joe-biden-banner.png")
    },
    {
        id: 3,
        alt: "Donald Trump",
        src: require("../images/trump-profile.png"),
        src1: require("../images/trump-red-profile.png"),
        headImg: require("../images/trump-cutout.png"),
        banner: require("../images/trump-banner1.png")
    },
    {
        id: 4,
        alt: "Unknown Candidate",
        src: require("../images/UnknownProfile.png"),
        banner: require("../images/2020-democrats-illustration.jpg")
        
    }
    
]