function addQBlock(question, answer, i) {
    $("#allfaq").append( "<div class=\"foldable\"> <hr style=\"margin: 1em 0;\"> <div class=\"foldable-title\" id=\"t"+i+"\"><h1 class=\"section_subtitle\">" + question + "</h1></div><div class=\"foldable-body\" id=\"b"+i+"\"><p> " + answer +"</p></div><hr style=\"margin: 1em 0;\"></div>")
};

questions= ['09:00: Keynote Speech', '10:00: Demo Showcase', '11:00: Panel Discussion', '12:00: Networking Activity', '13:00: Closing Ceremony', '14:00: Lunch Break', '15:00: Workshop: Design Thinking', '16:00: Breakout Session: Ideation']
answers=[
    'An inspiring talk by industry experts on the latest trends and innovations.',
    'A lively discussion among experts from various domains exploring innovative ideas and solutions.',
    'A hands-on workshop on utilizing design thinking principles to foster creativity and problem-solving.',
    'Small-group brainstorming session aimed at generating new ideas and concepts.',
    'Take a break, enjoy a delicious lunch, and network with fellow attendees.',
    'A talk by a renowned guest speaker highlighting groundbreaking innovations in the field of technology.',
    'Engage in interactive activities and connect with like-minded professionals.',
    'Discover and experience innovative products and prototypes through live demonstrations.',
    "Wrap-up event to celebrate the day's achievements and thank participants for their contributions."
]

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

