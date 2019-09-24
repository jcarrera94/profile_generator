const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {}

rl.question(`what's your name?`, (ans) => {
  profile.name = ans;
  rl.question('fam, what do you like doing?', (ans) => {
    profile.fave_activity = ans;
    rl.question('what do you like listening to while you do that?', (ans) => {
      profile.fave_music = ans;
      rl.question(`what's your favourite meal?`, (ans) => {
        profile.fave_meal = ans;
        rl.question(`what's your favourite food to eat in that meal?`, (ans) => {
          profile.fave_dish = ans;
          rl.question('okay but for realz, what\'s your favourite sport?', (ans) => {
            profile.fave_sport = ans;
            rl.question(`what's your super power tho?`, (ans) => {
              profile.superPower = ans;

              console.log(`${profile.name} loves listening to ${profile.fave_music} while he/she does ${profile.fave_activity}. ${profile.name}'s favourite meal is ${profile.fave_meal} and he/she loves having ${profile.fave_dish} for it. His/her favourite sport is ${profile.fave_sport} and his/her superpower is ${profile.superPower}.`);

              rl.close();
            });
          });
        });
      });
    });
  });


});

