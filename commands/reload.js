exports.run = (client, message, args) => {
  client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande reload du serveur" + message.guild.name)
  if(message.author.id !== "295908783081914378")return;
  if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.reply(`The command ${args[0]} has been reloaded`);
};