// I like to play a few mind games to cut back as many lines as possible.
// It may not be the most efficient solution, but it sure is pretty.

/*
 * A giant leap.
 * Done in 1 line.
 */

console.log("hello world");

/*
 * Document Title
 * Done in 5 lines.
 */

var i = 0;

setInterval(() => {
  const title =
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Hello world, I am Fischer Oesterle™, and this is my website.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀You may be wondering who I am.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Some people describe me as a hacker.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Others call me a programmer.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀But truly I am an 𝙄𝙣𝙫𝙚𝙣𝙩𝙤𝙧™⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀";

  i++;
  i = i % (title.length - 30);
  document.title = title.substring(i, i + 30);
}, 100);
