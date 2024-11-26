var quotes = ['Be yourself; everyone else is already taken.', 'Be the change that you wish to see in the world.', 'If you tell the truth, you do not have to remember anything.',
              'It is better to be hated for what you are than to be loved for what you are not.', 'I have not failed. I have just found 10,000 ways that will not work.', 'It is never too late to be what you might have been.', 'We cannot solve problems with the kind of thinking we employed when we came up with them.', 
              'When you change your thoughts, remember to also change your world.', 'Success is not final; failure is not fatal: It is the courage to continue that counts.', 'Success usually comes to those who are too busy to be looking for it.'
]

function quoteIdx() {
    var quoteIndex = Math.random();
    quoteIndex *= 10;
    quoteIndex = Math.floor(quoteIndex);
    return quoteIndex;
}

function generateQuote(){
    var index = quoteIdx();
    document.getElementById("quote").innerHTML = quotes[index];
}



