const tmi = require('tmi.js'),
    {channel, username, password} = require('./settings.json');

const options = {
    options: {debug:true},
    connection:{
        reconnect:true,
        secure:true,
    },
    identity :{
        username,
        password
    },
    channels:['Fonaztie']
};

const client = new tmi.Client(options);
client.connect().catch(console.error);
client.on('connected',() => {
    console.log('FonaztieBot się połączył!');
    
});

client.on('message', (channel,user,message, self) =>{
    if(self) return;

    if(message == 'roztell'){
        client.say(channel, `Aktywowałeś potężnego bota, destukcja nastąpi za 15 sekund! monkaS`);
    }
});
