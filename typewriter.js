const sentence = "Hi, and welcome to the show";

let delay = 0

for (let char in sentence) {
  setTimeout(() => {
  process.stdout.write(sentence[char]);
  if (char == sentence.length - 1) {
    process.stdout.write('\n');
  }
  }, delay);
  delay += 100;
};

