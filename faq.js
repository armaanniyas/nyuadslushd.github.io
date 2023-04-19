function addQBlock(question, answer, i) {
    $("#allfaq").append( "<div class=\"foldable\"> <hr style=\"margin: 1em 0;\"> <div class=\"foldable-title\" id=\"t"+i+"\"><h1 class=\"section_subtitle\">" + question + "</h1></div><div class=\"foldable-body\" id=\"b"+i+"\"><p> " + answer +"</p></div><hr style=\"margin: 1em 0;\"></div>")
};

questions = ["What is Slush?","What is the NYUAD Slush’D event?","What is the Hult Prize?","What is the goal of this NYUAD Slush’D event?","How much does this event cost?","Who is NYUAD Slush’D aimed at?","How will you select your conference attendees?","How do you select the representative for the Hult Prize?","What if I’m not interested in entering the Hult Prize?","Can I enter with an existing team?","Is it cheating if I work on the Hult Prize prompt prior to the event?"
,"Where will the NYUAD Slush’D take place?"];


answers = [
"Slush is one of the leading startup conferences in the world, founded in 2008 to change the entrepreneurial mindset in the ecosystem and create the next generation of groundbreaking entrepreneurs. The Slush annual event in Helsinki, Finland is where startups, investors, corporations and policymakers from all over the world would gather to foster meaningful connections and provide follow-on funding. <br> Slush is the owner of the Slush’D events concept.",
"Slush’D events are independent entrepreneurship events led by local ecosystem players with the goal to foster local entrepreneurship agendas while tapping into the Slush global community. <br> NYUAD Slush’D is led by Violet Ventures at NYUAD, selected as one of the 6 Slush’D partnership teams for 2022 and was the only university-level partner amongst the cohort. <br> The specific bottlenecks NYUAD Slush’D aims to tackle are threefold: 1) many youth do not yet see entrepreneurship as a way to contribute social good to society 2) despite having disruptive and impact-driven students, talent is still largely driven to major corporations 3) our students lack the first steps on the brainstorming process behind venture building, especially for international students in this region.",
"The Hult Prize challenges young people to solve the world’s most pressing issues through social entrepreneurship. Every year, one team receives $1M USD in funding to make their idea a reality. NYUAD Slush’D serves as a ‘bootcamp’ to prepare teams for the NYUAD Hult Prize competition pitch on November 26th, 2022 where NYUAD’s representative will be chosen and sent to the regional summit in Dubai in March, 2022.",
"We are creating an event that aims to: <br> 1) Build startup design thinking toolkits so that students can lead ventures and enter competitions <br> 2) Prepare students to enter the Hult Prize Competition, a 1 million dollar social enterprise challenge, and select NYUAD's representative for the regional summit in Dubai in March 2023 3 weeks after the Slush’D event on November 26th, 2022 <br> 3) Introduce the idea that startups are a viable way to implement solutions to society’s problems and are a viable career path <br> 4) Educate our community about startup roadmaps in the UAE",
"This event is completely free to attend thanks to our amazing financial partners, StartAD, NYUAD and Playbook. ",
"NYUAD students, ranging from those who are curious about entrepreneurship to those who are serious about venture and/or want to commit to international competition. Note that Day 2 of the Slush’D event will prioritize those who are willing to invest time and effort into building a pitch for the Hult Prize or other competitions. ",
"We will select attendees based on their application, demonstrated potential to work towards the Hult Prize competition goal as well as their engagement with prior Violet Ventures events. ",
"The representative will be chosen by a panel of expert judges on the Hult Prize Competition pitch day on November 26th, 2022. ",
"That’s completely fine. While this event is intended as a ‘boot camp’ for the Hult Prize competition, the purpose of the event is to give educational tools on venture building. Hence, feel free to use this as an educational experience, and build these tools to lead to other competitions or personal ventures.",
"Yes, the application form will allow you to indicate preferences for a team that you would prefer to be working with. However, on Day 1 of our event, we will also have a team building and networking session where we aim to pair people with aligned values and visions.",
"Not at all. If you happen to look at the prompt, which is already available on their website, and already start working on it - that’s great! We, however, don’t want to set this as a requirement for all attendees to do so.",
"It will take place in the New York University Abu Dhabi Campus in StartAD Central, A6 building."
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

