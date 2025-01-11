function addQBlock(question, answer, i) {
    $("#allfaq").append( "<div class=\"foldable\"> <hr style=\"margin: 1em 0;\"> <div class=\"foldable-title\" id=\"t"+i+"\"><h1 class=\"section_subtitle\">" + question + "</h1></div><div class=\"foldable-body\" id=\"b"+i+"\"><p> " + answer +"</p></div><hr style=\"margin: 1em 0;\"></div>")
};

questions = ["What is Slush?","What is the NYUAD Slush’D event?", "What is the goal of this NYUAD Slush’D event?","How much does this event cost?","Who is NYUAD Slush’D aimed at?",
"Where will the NYUAD Slush’D take place?"];


answers = [
"Slush is one of the leading startup conferences in the world, founded in 2008 to change the entrepreneurial mindset in the ecosystem and create the next generation of groundbreaking entrepreneurs. The Slush annual event in Helsinki, Finland is where startups, investors, corporations and policymakers from all over the world would gather to foster meaningful connections and provide follow-on funding. Slush is the owner of the Slush’D events concept.",
"Slush’D events are independent entrepreneurship events led by local ecosystem players and licensed by Slush with the goal to foster local entrepreneurship agendas while tapping into the Slush global community. NYUAD Slush’D is led by Violet Ventures at New York University Abu Dhabi. VV was selected in 2022 as one of the 6 global Slush’D organizing teams and was the only university-level partner in the cohort. VV was selected again in 2023 among 3000+ applicants and 13+ finalists to be the sole Slush’D in all of MENA. The specific bottlenecks NYUAD Slush’D aims to tackle are threefold: 1) many youth do not yet see entrepreneurship as a way to contribute social good to society 2) despite having disruptive and impact-driven students, talent is still largely driven to major corporations 3) our students lack the first steps on the brainstorming process behind venture building, especially for international students in this region.",
"NYUAD Slush'D 2025, under the theme 'Future of AI in MENA', explores the transformative role of artificial intelligence in shaping the region's innovation landscape. This year’s event emphasizes the importance of risk-taking, experimentation, and resilience in entrepreneurship, showcasing how AI can address critical challenges and drive sustainable growth. Through dynamic panel discussions, engaging workshops, and a hackathon focused on real-world applications of AI, the event equips participants with tools to navigate challenges and transform failures into opportunities. With contributions from industry leaders, researchers, and policymakers, Slush'D 2025 highlights MENA's potential as a global hub for AI-driven innovation and entrepreneurship​",
"This event is completely free for everyone thanks to our amazing sponsors: Nokia, NYUAD’s Career Development Center, and StartAD.",
"NYUAD Slush’D 2025 is designed for everyone—whether you’re just starting your journey or already shaping the future. If you’re a freshman curious about AI’s potential in career paths or an undergraduate seeking internships and full-time roles, this is your chance to connect with leaders from 40+ companies. If you dream of being a founder, this is your golden opportunity to learn how to turn your idea into reality—network with early-stage startups, meet VCs and angel investors, and dive deep into ideation, prototyping, and market strategies. Already a founder? Take your startup to new heights by joining our exclusive founder-investor dinner, showcasing your ideas in our networking session, and engaging directly with 8+ leading VCs. Open to students, professionals, investors, and AI enthusiasts—this is the platform to fuel innovation and shape the future of AI in MENA. Register now!",
"The A6 Building, New York University Abu Dhabi, Saadiyat Island."
];

$(document).ready(function() {
    for(i = 0; i < questions.length; i++) {
        addQBlock(questions[i], answers[i], i);
    }
    $(".foldable-body").toggleClass("hidden");

    $(".foldable").on("click",function() {
        $(this).find(".foldable-body").toggleClass("hidden");
        console.log("clicked");
    });
});

