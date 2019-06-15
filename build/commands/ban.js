"use strict";
var Subiex = require('../bot.js');
Subiex.registerCommand('ban', 'moderator', function (message, bot) {
    var mention = message.mentions.users.first();
    var banPerms = message.guild.member(bot.user).hasPermission('BAN_MEMBERS');
    if (!mention) {
        return 'Please mention a user, that you would like to ban.';
    }
    else {
        if (!banPerms) {
            return "Subiex doesn't have enough permissions to ban any user.";
        }
        else {
            var bannable = message.guild.member(mention).bannable;
            if (!bannable) {
                return mention + " isn't bannable.";
            }
            else {
                message.guild.ban(mention);
                return mention + ' has been banned.';
            }
        }
    }
}, [], 'Ban a user from the server', '<mention>');