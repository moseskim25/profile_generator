const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (dish) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {

              console.log(`Hi my name is ${name}. My favourite activity is ${activity}. During my activity I like to listen to ${music}. My favourite meal of the day is ${meal} and my favourite dish is ${dish}. My favourite sport is ${sport}. My superpower? ${superpower}.`);

              rl.close();
            })
          })
        })
      })
    })
  })
});
