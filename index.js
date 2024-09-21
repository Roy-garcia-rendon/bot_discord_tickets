// Dependencias
const Discord = require('discord.js')

// Cliente

const Client = new Discord.Client({intents: 3276799});

const embed = {
    title: 'postulate para staff del servidor',
    description: 'porfavor ocupamos gente, el sv esta muriendo xd, borren el sv',
    color: 0x5865F2,
    image: {url: 'https://yt3.googleusercontent.com/CsahkFXLAx-S288NfFy9dra8sw2zYL1RqqQ-uVa95kS7u-27L_9kwmfnpeRIuCulWA862JNJoQ=s900-c-k-c0x00ffffff-no-rj'}
};

const menu = new Discord.ActionRowBuilder().addComponents(
    new Discord.StringSelectMenuBuilder()
         .setPlaceholder('Open an Support Ticket')
         .setMaxValues(1)
         .setMinValues(1)
         .setCustomId('ticket-create')
         .setOptions([{
        label: 'postulate',
        emoji: '👋',
        description: 'Open an Suppport Ticket',
        value: 'postulacion'
    }, {
        label: 'Reports',
        emoji: '⚠️',
        description: 'Open an report Ticket',
        value: 'report'
    }])
);

Client.on('ready', async (client) => {
    const ticketPanelChannelId = "id_canal"// id del canal
    client.channels.fetch(ticketPanelChannelId)
    .then(channel => channel.send({embeds: [embed], components: [menu]}))
});

Client.on('ready', async ( client ) => {
    console.log('Estoy Listo!')

   Client.user.setPresence({
    activities: [{ name: `postulación-staff`, type: Discord.ActivityType.Watching }],
    status: 'online',
    });
});

/// Evento Interaction Create

Client.on("interactionCreate", async (interaction) => {
    if(interaction.isChatInputCommand()) return;
    
    try {
        const execute = require(`./interactions/${interaction.customId}`);
        execute(interaction);
    }  catch (error) {
        console.log('error')
    }

});

// Registro
Client.login("")//coloca tu token del bot aqui
