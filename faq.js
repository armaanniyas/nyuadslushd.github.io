function addQBlock(question, answer, i) {
    $("#allfaq").append( "<div class=\"foldable\"> <hr style=\"margin: 1em 0;\"> <div class=\"foldable-title\" id=\"t"+i+"\"><h1 class=\"section_subtitle\">" + question + "</h1></div><div class=\"foldable-body\" id=\"b"+i+"\"><p> " + answer +"</p></div><hr style=\"margin: 1em 0;\"></div>")
};

questions = ["What is Slush?","What is the NYUAD Slush’D event?", "What is the goal of this NYUAD Slush’D event?","How much does this event cost?","Who is NYUAD Slush’D aimed at?",
"Where will the NYUAD Slush’D take place?"];


answers = [
"Slush is one of the leading startup conferences in the world, founded in 2008 to change the entrepreneurial mindset in the ecosystem and create the next generation of groundbreaking entrepreneurs. The Slush annual event in Helsinki, Finland is where startups, investors, corporations and policymakers from all over the world would gather to foster meaningful connections and provide follow-on funding. <br> Slush is the owner of the Slush’D events concept.",
"Slush’D events are independent entrepreneurship events led by local ecosystem players and licensed by Slush with the goal to foster local entrepreneurship agendas while tapping into the Slush global community. NYUAD Slush’D is led by Violet Ventures at New York University Abu Dhabi. VV was selected in 2022 as one of the 6 global Slush’D organizing teams and was the only university-level partner in the cohort. VV was selected again in 2023 among 3000+ applicants and 13+ finalists to be the sole Slush’D in all of MENA. The specific bottlenecks NYUAD Slush’D aims to tackle are threefold: 1) many youth do not yet see entrepreneurship as a way to contribute social good to society 2) despite having disruptive and impact-driven students, talent is still largely driven to major corporations 3) our students lack the first steps on the brainstorming process behind venture building, especially for international students in this region.",
"NYUAD Slush’D 2023 under the theme MILLION DOLLAR MISTAKES aims at reiterating the concept of failure, risk-taking, and experimentation in entrepreneurship. Mistakes are at the heart of innovation and entrepreneurship and every founder needs to not only be ready for the realities of having one’s own business but also be equipped with the right tools and strategies to navigate failure and make it a strength to move forward.",
"This event is completely free for everyone thanks to our amazing sponsors: Khalifa Fund, NYUAD’s Career Development Center, and Business Finland.",
"All students from all majors and levels of interest in entrepreneurship have something to gain. If you are a freshman who is curious about potential career paths or an undergrad searching for internships and full-time offers, this is great exposure for you to meet people from 40+ companies. If you know you want to be a founder, this is your golden ticket to learn how to go from 0 to 1 and network with early-stage startups, meet angel investors and VCs, learn about ideation, market segmentation, and prototyping, and mingle with like-minded students who might be your next team! If you are an established student founder, this is your chance to take your startup to the next level by attending our exclusive founder/investor dinner, getting a booth at our networking session, meeting 8+ VCs and hearing from industry-leading entrepreneurs. Our event is also open to any professionals, employers, investors and more!  Register now!",
"At New York University Abu Dhabi, Saadiyat Island, A6 Building, Auditorium room, StartAD Central (Builder Room), Genesis Room (ABC Room, part C)"
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

