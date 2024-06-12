/*
 * A giant leap.
 */
console.log("hello world");
/*
 * Document Title
 */
var i = 0;
setInterval(function () {
    var pad = function (size) {
        var output = "";
        for (var i_1 = 0; i_1 < size; i_1++)
            output += "⠀";
        return output;
    };
    var title_sequences = [
        "Hello world, I am Fischer Oesterle™, and this is my website.",
        "You may be wondering who I am.",
        "Some people know me as a hacker.",
        "Others know me as a programmer.",
        "But I am neither of those things.",
        "Rather, I am an 𝙄𝙣𝙫𝙚𝙣𝙩𝙤𝙧™",
    ];
    var computed = "";
    for (var i_2 = 0; i_2 < title_sequences.length; i_2++) {
        var sequence = title_sequences[i_2];
        if (i_2 == 0)
            computed += "".concat(pad(35)).concat(sequence);
        else
            computed += "".concat(pad(20)).concat(sequence);
        if (i_2 == title_sequences.length - 1)
            computed += "".concat(pad(35));
    }
    i++;
    i = i % (computed.length - 30);
    document.title = computed.substring(i, i + 30);
}, 100);
