const labels = [

    "Strongly Disagree",
    "Disagree",
    "Unsure",
    "Agree",
    "Strongly Agree",
]

let score = {

    Fe: 0,
    Fi: 0,
    Si: 0,
    Se: 0,
    Ni: 0,
    Ne: 0,
    Ti: 0,
    Te: 0,

}

const questions = [

    { text: " Do you tend to have a direct attitude to raw sensory data and are less inclined for further extrapolations? ",
        p1: "Se",
        p2: "Si",
        n1: "Ni",
        n2: "Ne",
    },

    {
        text: `Do you have a more personal attitude towards sensory data, 
        evaluating it by your experiences and what should be? While also having anxiety for change and reclusive to newer
        possibilities that could damage the order?`,

        p1: "Si",
        p2: "Te",
        n1: "Ni",
        n2: "Ne",

    },

    {

        text : `In terms of your thinking, more-so connected to logical reasoning and rationality, are you 
        generally more inclined to think in how things can be generalized into groups for quicker understanding
        and you try to judge other based on this universal formula, instead of having a more personal logic that 
        is defined for your own self-navigation and rather a sort of skeptical and perhaps combative approach?`,

        p1: "Te",
        p2: "Ti",
        n1: "Fe",
        n2: "Fi",
    },

    {

        text: `Similar to the last question. Are you more-so reliant on your own evaluations of the world, tending to have a
        potentially controversial logical system that is more so based on deduction than induction? And are you more intellectually
        independant, while being not as reliant on achievements and external validation systems?`,

        p1: "Ti",
        p2: "Fi",
        n1: "Ni",
        n2: "Te",

    },

    {

        text : `Now in terms of emotionality. Do you tend to want others to follow a certain moral formula that was
        predefined as appropriate in reality? Do you want others to display their affection and hopes in you and otherwise
        you start heavily self-criticizing yourself?`,

        p1: "Fe",
        p2: "Fi",
        n1: "Ti",
        n2: "Te",
    },

    {

        text: `Similar to the last question but in the opposite way. Do you prioritize authenticity and prefer to have
        secretive moral values that you try to indirectly portray in your external work? Also, do you tend to 'feel' heavier towards
        smaller groups like underdogs rather than the collective?`,

        p1: "Fi",
        p2: "Ti",
        n1: "Te",
        n2: "Fe",
    },

    {

        text: `Now time for the intuitive/abstract function! In terms of your interpretations of things, do you tend to
        combine lots of sensory data points in a sort of 'whirlpool' to get a singular conclusion that you are more attached to? Instead of
        taking one data point and viewing what else it could imply without being too attached to these 'brainstorming' ideas.`,

        p1: "Ni",
        p2: "Ti",
        n1: "Te",
        n2: "Ne",
    },

    {

        text: `Now the opposite case. Do you tend to get a certain piece of inspiration that you brainstorm and create new ideas from?
        You don't feel too invested in these ideas but they sort of give you stimuli to think further about your other things, yet you
        can drop them when they start getting 'boring'.`,

        p1: "Ne",
        p2: "Se",
        n1: "Ni",
        n2: "Si",
    },

    {

        text: `You tend to prioritize setting mental roadmaps and future visions over the organizational aspect and implementation aspect`,

        p1: "Ni",
        p2: "Te",
        n1: "Si",
        n2: "Se",
    },

    {

        text: `You tend to set a vision and/or moral ideal for humanity and tend to resonate with others emotions on an abstract level. 
                You wish to implement this moral ideal with people that you have created connections with.`,

        p1: "Ni",
        p2: "Fe",
        n1: "Fi",
        n2: "Ti",
    },

    {
        text: `You tend to generate many possibilities and tend to latch on to them to generate even more, yet also can consolidate and logically analyze them.
        However, the possibilities themselves are more preferred over their 'sensibility'. You may have ethical considerations but believe that
        the logical evaluations of these bizarre thoughts are the more important part. `,

        p1: "Ne",
        p2: "Ti",
        n1: "Ni",
        n2: "Se",
    },

    {

        text: `You generate many possibilities, however, they are more inclined towards personal moral evaluations and how you can
        organize the world around you through structures for these emotions to have their personal playground.`,

        p1: "Ne",
        p2: "Fi",
        n1: "Te",
        n2: "Se",
    },

    {
        text: `You prefer the categorization and cohesion of ideas rather than their other potential associations, but you still have an
        innate quirkiness and love the unknown.`,

        p1: "Ti",
        p2: "Ne",
        n1: "Si",
        n2: "Ni",
    },

    {

        text: `You prefer to develop an internal structure of how to evaluate any given situation, rather than what is given 'obviously', yet you
        prefer to do this with the combination of data points all into one cohesive solution rather than chase after 'possibles' and try to weed out the correct answer.`,

        p1: "Ti",
        p2: "Se",
        n1: "Si",
        n2: "Ni",
    },

    {

        text: `You like to build future roadmaps, future plans for some possible organization of concepts. However, in positions of power
        you prefer to navigate the group as the head and tend to need concrete small achievements as supplements to your more grander vision.`,

        p1: "Te",
        p2: "Se",
        n1: "Ni",
        n2: "Fi",
    },

    {

        text: `You tend to have an externally-oriented organizational mind, yet prefer for the sensory world to remain in a state of 'preservation',
        and you act more as a guardian of this peace, rather than the more boiling type for change.`,

        p1: "Te",
        p2: "Si",
        n1: "Fe",
        n2: "Ti",
    },

    {
        text: `You have an attitude directed towards the preservation of group harmony and morality, this is your main function in groups. If
        said harmony is disrupted, you begin a sequence of self-criticism and harsh evaluation of yourself or others.`,

        p1: "Fe",
        p2: "Si",
        n1: "Ti",
        n2: "Fi",
    },

    {

        text: `You have an attitude directed towards group harmony, yet your mind is more-so thinking about the potential development of the
        collective group, and you are generally higher on risks rather than trusted and safe solutions. `,

        p1: "Fe",
        p2: "Ni",
        n1: "Se",
        n2: "Ti",
    },

    {
        text: `You have a set of personal moral evaluations that you wish to convey in a large amount of ways, through many mediums, yet
        can't quite reveal its complexity fully. `,

        p1: "Fi",
        p2: "Ne",
        n1: "Ni",
        n2: "Ti",
    },

    {

        text: `You prefer to express your personal values through mediums of concrete and sustainable worth, something 'visisble' and 'reachable'`,

        p1: "Fi",
        p2: "Se",
        n1: "Ni",
        n2: "Te",
    },

    {
        text: `You are a very direct person with life, you prefer evaluations based on what is in the present and is visible and tangible. You
        also prioritize your own logical cohesion on these objects, perhaps leading to a sort of mental rebellion that tries to push away the
        bs of people for facts.`,

        p1: "Se",
        p2: "Ti",
        n1: "Te",
        n2: "Si",
    },

    {
        text: `You share the same directness and love for direct evidence and visible facts from the senses. However, you have a more artistic
        inclination where you want to coordinate your personal emotions and fully intertwine them with the entirety of reality, while organizing
        the world as you do so.`,

        p1: "Se",
        p2: "Fi",
        n1: "Te",
        n2: "Ni",
    },

    {

        text: `You tend to store an analogous database of factual data which you evaluate the external happenings of the world by. New people
        are compared to the 'already verified' systems. You have a priority of setting people in place for the stability of society.`,

        p1: "Si",
        p2: "Te",
        n1: "Ni",
        n2: "Ne",
    },

    {
        text: `You have the same analogous database, but you are more oriented towards the preservation of how the group connects with each other
        on a more humane level rather than for efficiency and results. You have your own logical perspective that accompanies your integration with
        these verified systems.`,

        p1: "Si",
        p2: "Fe",
        n1: "Ti",
        n2: "Fi",
    },











]

let cur_question = 0;


function showQuestion() {

    const question = document.getElementById("question");
    const answers = document.getElementById("answer");

    const q = questions[cur_question];
    question.textContent = q.text;

    answers.innerHTML = "";

    labels.forEach((label, index)=> {

        const btn = document.createElement("button");

        btn.textContent = label;

        btn.onclick = () => {

            const value = index + 1;

            score[q.p1] += value;
            score[q.p2] += Math.max(1, value - 1)
            score[q.n1] += (7 - value);
            score[q.n2] += (6 - value);


            cur_question += 1;

            if (cur_question < questions.length) {
                showQuestion();
            } else {
                showResult();
            }

        }

        answers.appendChild(btn);


    })


}

function showResult(){

    document.getElementById("quiz").style.display = "none";

    // show result screen
    document.getElementById("result-screen").style.display = "block";

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    for (let key in score){
        const p = document.createElement("p");
        p.textContent = key + ": " + score[key];
        resultDiv.appendChild(p);
        
    }
}

showQuestion();