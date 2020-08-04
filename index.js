
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("banco.json");
const db = low(adapter)
var express = require('express')
var app = express();

const Discord = require("discord.js");
const client = new Discord.Client();
const talkedRecently = new Set();

client.on("ready", () => {
  console.log(
    `---------------------------------\n BeeBox ON | Usuarios: ${client.users.size} \n---------------------------------`
  );
});

const activities_list = ["✏️ Dev By Hydex", "📦 bzzzzzz"];

client.on("ready", () => {
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    client.user.setActivity(activities_list[index]);
  }, 3000);
});

client.on("message", async message => {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


if (cmd == ".send") {


  message.delete()
 let ipkl =
      message.mentions.members.first() || message.guild.members.get(args[0]);

  let portkl = args.slice(1).join(" ") 
  
  let i3 = new Discord.RichEmbed()
   .setImage("https://i.pinimg.com/originals/75/71/d8/7571d8ec6cf8255d40badea4cd9259f3.gif")
   .setTitle("I'm sending your beemail")
   .setFooter("Receiver: " + ipkl.id)
    message.channel.send(i3)
  message.author.send("```"+"[BeeBox Terminal] You have successfully sent an beemail to " + ipkl.id + "\n\n Content: " + portkl +"```")
    let i2 = new Discord.RichEmbed()
   
      .setAuthor(`BeeMail Received`)
      .setDescription("```"+`${portkl}`+"```")
      .setFooter(`Sender: ${message.author.username}`)
     

  client.users.get(ipkl.id).send(i2);
  console.log(portkl)
}

});

client.login("NjgyOTUxMzc4MjMwMTgxOTI4.XlkeGQ.b9xu1kpZXTMDHtny7d4QsXqfhWg");
