import React from "react";

import {
    Deck,
    Heading,
    Slide,
    Image,
    Text,
    Appear,
    BlockQuote,
    Quote,
    Cite,
    ListItem,
    List,
    Link
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

import createTheme from "spectacle/lib/themes/default";

const images = {
    pets: require("../assets/images/pets.PNG"),
    weCan: require("../assets/images/we-can.gif"),
    easy: require("../assets/images/easy.gif"),
    money: require("../assets/images/money.gif"),
    idiot: require("../assets/images/idiot.gif"),
    love: require("../assets/images/love.gif"),
    crazy: require("../assets/images/crazy.gif"),
    jeff: require("../assets/images/jeff_profile.jpg"),
    believe: require("../assets/images/believe.gif")
};

const theme = createTheme(
    {
        primary: "white",
        secondary: "#1F2022",
        tertiary: "#03A9FC",
        quaternary: "#CECECE"
    },
    {
        primary: "Montserrat",
        secondary: "Helvetica"
    }
);

export const Presentation = () => (
    <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        contentWidth="1200"
    >
        <Slide bgColor="primary">
            <Heading size={1} textColor="tertiary">
                What is Frontend?
            </Heading>
            <Heading size={6} textColor="secondary">
                Mihai Dinculescu - Senior Client-side Backend Developer
            </Heading>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="secondary">
                Why am I even asking such a silly question?
            </Heading>
            <Image src={images.weCan} width={800} />
            <Heading size={6} textColor="secondary">
                We all know the answer...
            </Heading>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="secondary">
                ...it's a web page, obviously!
            </Heading>
            <Image src={images.pets} width={700} />
        </Slide>
        {/* <Slide bgColor="primary">
            <Text textColor="secondary">
                &lt;awesome code slide here that doesn't work in pdf&gt;
            </Text>
        </Slide> */}
        <CodeSlide
            lang="jsx"
            bgColor="secondary"
            showLineNumbers="false"
            code={`
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family:
                Arial, Helvetica, sans-serif;
            margin: 0;
        }
    </style>
    <script>
        function displayDate() {
            var element =
                document.getElementById("demo");
            element.innerHTML = Date();
        }
    </script>
</head>
<body>
    <p>
        Click the button to display the date.
    </p>
    <button onclick="displayDate()">
        The time is?
    </button>
    <p id="demo"></p>
</body>
</html>
            `}
            ranges={[
                {
                    loc: [0, 100],
                    title: 'It\'s pretty easy to "code" one!'
                },
                { loc: [19, 28], note: "You write some HTML..." },
                { loc: [4, 11], note: "...add few styles..." },
                { loc: [11, 18], note: "...and maybe a tiny bit of JavaScript" }
            ]}
        />
        <Slide bgColor="secondary">
            <Image src={images.easy} width={700} />
        </Slide>
        <Slide bgColor="primary">
            <Heading size={1} textColor="tertiary">
                And the best part?
            </Heading>
            <br />
            <Appear>
                <div>
                    <Heading size={6} textColor="secondary">
                        It's not even code!
                    </Heading>
                </div>
            </Appear>
            <br />
            <Appear>
                <div>
                    <Heading size={6} textColor="secondary">
                        HTML and CSS are not programming languages, they are
                        silly markup!
                    </Heading>
                </div>
            </Appear>
            <br />
            <Appear>
                <div>
                    <Heading size={6} textColor="secondary">
                        And JavaScript? You don't really need that stupid
                        language. You can do it better in code behind, on the
                        server, using real programming languages!
                    </Heading>
                </div>
            </Appear>
        </Slide>
        <Slide bgColor="secondary">
            <Heading size={4} textColor="primary">
                No wonder everyone looks down on frontend developers!
            </Heading>
            <Text textColor="primary">(or maybe it was just me)</Text>
            <br />
            <Appear>
                <div>
                    <Text textColor="primary">
                        At least they don't demand the pay of real software
                        engineers!
                    </Text>
                    <Image src={images.money} />
                </div>
            </Appear>
        </Slide>
        <Slide bgColor="tertiary">
            <Heading size={1} textColor="primary">
                This was all true 15 years ago...
            </Heading>
            <Text textColor="primary">
                (when I was looking down on frontend developers)
            </Text>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={2} textColor="tertiary">
                ...but a lot has changed since then
            </Heading>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="tertiary">
                2006
            </Heading>
            <Heading size={1} textColor="secondary">
                jQuery
            </Heading>
            <br />
            <Appear>
                <div>
                    <Text textColor="secondary">
                        What was 1,000 lines of JavaScript, became 10,000 lines
                        of spaghetti
                    </Text>
                </div>
            </Appear>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="tertiary">
                2007
            </Heading>
            <BlockQuote>
                <Quote textColor="secondary">
                    Any application that can be written in JavaScript, will
                    eventually be written in JavaScript.
                </Quote>
                <Cite>
                    Jeff Atwood, Author, Entrepreneur, Cofounder of
                    StackOverflow
                </Cite>
            </BlockQuote>
        </Slide>
        <Slide bgColor="secondary">
            <Image src={images.idiot} width={600} />
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="tertiary">
                2010
            </Heading>
            <List style={{ marginLeft: "auto", marginRight: "auto" }}>
                <ListItem>Node.js (2009) & NPM</ListItem>
                <ListItem>Express.js (Server-side JS takes off)</ListItem>
                <ListItem>
                    Backbone.js & AngularJS (The advent of SPAs)
                </ListItem>
                <ListItem>Backbone.js</ListItem>
                <ListItem>Three.js</ListItem>
            </List>
            <Appear>
                <div>
                    <br />
                    <Text textColor="secondary">
                        What was 10,000 lines of spaghetti, became 100,000 lines
                        of festering spaghetti
                    </Text>
                </div>
            </Appear>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="tertiary">
                2011
            </Heading>
            <Heading size={1} textColor="secondary">
                D3.js
            </Heading>
            <br />
            <Appear>
                <div>
                    <Text textColor="secondary">
                        And charts and animations were never the same again...
                    </Text>
                </div>
            </Appear>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="tertiary">
                2012
            </Heading>
            <Heading size={1} textColor="secondary">
                TypeScript
            </Heading>
            <br />
            <Appear>
                <div>
                    <Text textColor="secondary">
                        And suddenly the un-manageable became sort of
                        manageable....
                    </Text>
                    <Text textColor="secondary">
                        (...or maybe we just got used to the pain)
                    </Text>
                </div>
            </Appear>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="tertiary">
                2013
            </Heading>
            <Heading size={1} textColor="secondary">
                React
            </Heading>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="tertiary">
                2015
            </Heading>
            <Heading size={1} textColor="secondary">
                Redux
            </Heading>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="tertiary">
                And everyone went crazy about them...
            </Heading>
            <Image src={images.love} width={800} />
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="secondary">
                But we'll come back to React and Redux later...
            </Heading>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="tertiary">
                2016
            </Heading>
            <Heading size={2} textColor="secondary">
                Apollo Server & Client
            </Heading>
            <br />
            <Appear>
                <div>
                    <Text textColor="secondary">
                        GraphQL APIs built and consumed 100% in JavaScript
                    </Text>
                </div>
            </Appear>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="tertiary">
                2017
            </Heading>
            <Heading size={1} textColor="secondary">
                WebAssembly
            </Heading>
            <br />
            <Appear>
                <div>
                    <Text textColor="secondary">
                        How do you optimize JavaScript? Just like you optimize
                        Python :D
                    </Text>
                </div>
            </Appear>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="tertiary">
                2018
            </Heading>
            <Heading size={1} textColor="secondary">
                TensorFlow.js
            </Heading>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="secondary">
                Just think about it...
            </Heading>
        </Slide>
        <Slide bgColor="secondary">
            <Image src={images.crazy} width={600} />
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="secondary">
                Maybe Jeff Atwood wasn't an idiot after all?
            </Heading>
            <Image src={images.jeff} width={500} />
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="secondary">
                Anyways, back to React and Redux...
            </Heading>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={6} textColor="tertiary">
                People loved React and Redux so much on the Web that they've
                created
            </Heading>
            <br />
            <Appear>
                <div>
                    <Text textColor="secondary">
                        react-dom-stream (server side rendering)
                    </Text>
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textColor="secondary">
                        React Native (Android & iOS)
                    </Text>
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textColor="secondary">
                        React Native Desktop (OSX)
                    </Text>
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textColor="secondary">React Native Windows</Text>
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textColor="secondary">react-blessed (terminals)</Text>
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textColor="secondary">react-pdf</Text>
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textColor="secondary">React Hardware (IoT)</Text>
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textColor="secondary">ReactAframe (VR)</Text>
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textColor="secondary">...</Text>
                </div>
            </Appear>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="tertiary">
                Frontend is what it has always been
            </Heading>
            <Appear>
                <div>
                    <Text textColor="secondary">
                        The presentation layer that the user interacts with
                    </Text>
                </div>
            </Appear>
            <br />
            <Appear>
                <div>
                    <Text textColor="secondary">
                        Technological advancements and constantly increasing
                        client demands have made frontend more powerful but also
                        more complex than ever.
                    </Text>
                </div>
            </Appear>
            <br />
            <Appear>
                <div>
                    <Text textColor="secondary">
                        In the modern applications the backend is closer to the
                        frontend. More often that not a sizable chunk of backend
                        is present on the client.
                    </Text>
                </div>
            </Appear>
            <br />
            <Appear>
                <div>
                    <Text textColor="secondary">
                        More and more different kinds of devices need a
                        presentation layer. They all come with their own
                        challenges.
                    </Text>
                </div>
            </Appear>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={2} textColor="tertiary">
                So what is frontend?
            </Heading>
            <br />
            <Appear>
                <div>
                    <Text textColor="secondary">
                        Web Apps (but not Pets.com - they went bankrupt)
                    </Text>
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textColor="secondary">Mobile Apps</Text>
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textColor="secondary">VR Experiences</Text>
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textColor="secondary">APIs (Hello Stephanie :D)</Text>
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textColor="secondary">
                        Explanations of Neural Network algorithms
                    </Text>
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textColor="secondary">
                        LEDs controlled by a Raspberry Pi
                    </Text>
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textColor="secondary">Terminals</Text>
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textColor="secondary">
                        This presentation (btw, it's built with React)
                    </Text>
                </div>
            </Appear>
            <Appear>
                <div>...and much more...</div>
            </Appear>
        </Slide>
        <Slide bgColor="primary">
            <Text textColor="secondary">
                In the past, we've used backend languages and libraries to
                produce presentation content. Now the trend is reversing.
            </Text>
            <br />
            <Appear>
                <div>
                    <Text textColor="secondary">
                        Node.js, JavaScript, TypeScript, React, Redux, etc. are
                        established technologies on the backend.
                    </Text>
                </div>
            </Appear>
            <br />
            <Appear>
                <div>
                    <Text textColor="secondary">
                        The Independence Carer and PwD apps that we're building
                        are not just presentation layers. They contain a lot of
                        logic on the client side for managing state, routes,
                        events and side-events, notifications, caching,
                        background jobs, etc.
                    </Text>
                </div>
            </Appear>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="secondary">
                Demo
            </Heading>
            <Link href="http://playground.tensorflow.org" target="_blank">
                <Heading size={6} textColor="tertiary">
                    Tensorflow.js
                </Heading>
            </Link>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="secondary">
                Demo
            </Heading>
            <Link href="https://world-draw.appspot.com" target="_blank">
                <Heading size={6} textColor="tertiary">
                    World Draw
                </Heading>
            </Link>
        </Slide>

        <Slide bgColor="primary">
            <Heading size={4} textColor="tertiary">
                There are three takeaways
            </Heading>
            <br />
            <Appear>
                <div>
                    <Text textColor="secondary">
                        React, Redux and TypeScript are the holy grail, for
                        now...
                    </Text>
                </div>
            </Appear>
            <br />
            <Appear>
                <div>
                    <Text textColor="secondary">
                        More things than ever are possible on the presentation
                        layer. Dare to dream!
                    </Text>
                </div>
            </Appear>
            <br />
            <Appear>
                <div>
                    <Text textColor="secondary">
                        Frontend projects are becoming more complex and costlier
                        to develop year by year. Please be careful what you
                        promise to the clients.
                    </Text>
                </div>
            </Appear>
        </Slide>
        <Slide bgColor="secondary">
            <Image src={images.believe} width={800} />
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="tertiary">
                Just look at the gaming industry. Video games are mostly
                frontend, aren't they?
            </Heading>
            <Text textColor="secondary">
                (No, not really. There's a lot of invisible tooling around them)
            </Text>
            <br />
            <Appear>
                <div>
                    <Heading size={4} textColor="secondary">
                        Doom 1993
                    </Heading>
                    <Text textColor=""></Text>
                    <Text textColor="secondary">
                        ~14 months of development, team of 7
                    </Text>
                </div>
            </Appear>
            <br />
            <Appear>
                <div>
                    <Heading size={4} textColor="secondary">
                        Doom 2016
                    </Heading>
                    <Text textColor="secondary">
                        ~8 years of development, ~90 million USD
                    </Text>
                </div>
            </Appear>
        </Slide>
        <Slide bgColor="primary">
            <Heading size={4} textColor="secondary">
                Demo
            </Heading>
            <Link
                href="https://flowingdata.com/2015/12/15/a-day-in-the-life-of-americans/"
                target="_blank"
            >
                <Heading size={6} textColor="tertiary">
                    A Day in the Life of Americans
                </Heading>
            </Link>
        </Slide>
        <Slide bgColor="tertiary">
            <Heading size={1} textColor="primary">
                fin
            </Heading>
        </Slide>
    </Deck>
);
