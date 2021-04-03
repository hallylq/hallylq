// https://github.com/rauenzi/BDPluginLibrary/blob/master/release/0PluginLibrary.plugin.js

(() =>
{
    const ids = ZeresPluginLibrary.WebpackModules.getByProps("getFriendIDs").getFriendIDs();
    const users = ZeresPluginLibrary.DiscordModules.UserStore.getUsers(ids);
    const ret = [];
    
    for (let u in users)
         ret.push(users[u].tag);

    return ret;
})()
