/*
 * A giant leap.
 */

console.log("hello world");

/*
 * Document Title
 */

var i = 0;

setInterval(() => {
  const pad = (size: number) => {
    let output = "";
    for (let i = 0; i < size; i++) output += "⠀";
    return output;
  };

  const title_sequences = [
    "Hello world, I am Fischer Oesterle™, and this is my website.",
    "You may be wondering who I am.",
    "Some people know me as a hacker.",
    "Others know me as a programmer.",
    "But I am neither of those things.",
    "Rather, I am an 𝙄𝙣𝙫𝙚𝙣𝙩𝙤𝙧™",
  ];

  let computed = "";
  for (let i = 0; i < title_sequences.length; i++) {
    const sequence = title_sequences[i];
    if (i == 0) computed += `${pad(35)}${sequence}`;
    else computed += `${pad(20)}${sequence}`;

    if (i == title_sequences.length - 1) computed += `${pad(35)}`;
  }

  i++;
  i = i % (computed.length - 30);
  document.title = computed.substring(i, i + 30);
}, 100);
