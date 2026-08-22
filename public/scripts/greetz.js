function updateGreeting() {
    const hour = new Date().getHours();
    const greeting = document.getElementById("greeting");
    if (hour >= 4 && hour < 12) {
        greeting.innerHTML = "<span class='h2' style='float: left; margin: -21px 4px -10px 0;'>g</span>ood morning";
    } else if (hour >= 12 && hour < 19) {
        greeting.innerHTML = "<span class='h2' style='float: left; margin: -21px 4px -10px 0;'>g</span>ood afternoon";
    } else {
        greeting.innerHTML = "<span class='h2' style='float: left; margin: -21px 4px -10px 0;'>g</span>ood evening";
    }
}
function updateFunTitle() {
    const titles = [
        "not actually a party",
        "lorem ipsum or something",
        "population: 1",
        "open 24 hours",
        "a realm of purple",
        "a soapbox of sorts",
        "come here often?",
        "make websites, not war",
        "make art, not war",
        "yet another web corner",
        "take a moment and relax",
        "i hope you like purple",
        "cringe culture is dead",
        "reclaim the internet",
        "powered by stackoverflow",
        "this site uses no cookies",
        "#1 webkit hater",
        "#1 safari hater",
        "a quiet corner of the internet",
        "a weird corner of the internet",
        "a purple corner of the internet",
        "200 ok",
        "internet participation award",
        "a web-browsing rest stop",
        "my home on the internet",
        "your home on the internet",
        "a shout into the void",
        "a cry into the dark",
        "dear internet stranger,",
        "@everyone",
        "greetings, traveller",
        "welcome, stranger",
        "howdy, surfer of the web",
        "hello, voyager",
        "one of the sites of all time",
        "independent webber",
        "$ cat intro.txt",
        "something in cyberspace",
        "your internet is working",
        "feature, not a bug",
        "scrapers begone",
        "beware of cat",
        "beware of hyena",
        "human generated",
        "i prompted my brain for this",
        "inspiration is an act of love",
        "lonely webmasters near you",
        "lonely furries near you",
        "lonely artists near you",
        "<span style='color: #f00'>f</span><span style='color: #fa0'>i</span><span style='color: #ff0'>l</span><span style='color: #0b0'>l</span><span style='color: #66f'>e</span><span style='color: #a0f'>d</span> <span style='color: #ff0'>w</span><span style='color: #fff'>i</span><span style='color: #a0f'>t</span><span style='color: #555'>h</span> <span style='color: #89f'>p</span><span style='color: #f88'>r</span><span style='color: #fff'>i</span><span style='color: #f88'>d</span><span style='color: #89f'>e</span>",
        "better than doomscrolling",
        "thanks for checking me out",
        "use code AIVI for 20% off",
        "commit and sync",
        "headpats accepted here",
        "artwork sold here",
        "covered in bite marks",
        "you're my favorite visitor btw",
        "all i got was this lousy title",
        "you going up or down?",
        "you a cop?",
        "you seem like a good one",
        "what are you lookin' at?"
    ];
    document.getElementById("funTitle").innerHTML = titles[titles.length - 1];
    // document.getElementById("funTitle").innerHTML = titles[Math.floor(Math.random() * titles.length)];
}