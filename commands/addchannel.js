exports.run = (client, message, args) => {
    let name = args[0];
    let reason = args.slice(1).join(" ");
    if(!message.member.hasPermission("MANAGE_CHANNELS") && client.user.hasPermission("MANAGE_CHANNELS"))
    {
    message.channel.send("Assurez d'avoir les permissions suffisante ou que le bot est les permissions suffisante")
    }
    else
    {
    
          message.channel.send("Succesfull")
          message.guild.createChannel(name, 'text')
  .then(channel => console.log(`Created new channel ${channel}`))
  .catch(console.error);
    }
    client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande addchannel du serveur" + message.guild.name)
    }