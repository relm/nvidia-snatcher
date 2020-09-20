import webhook from 'webhook-discord';
import {Config} from '../config';

const Hook = new webhook.Webhook(Config.notifications.discord.webHookUrl);

export function sendDiscordMessage(text: string) {

    const msg = new webhook.MessageBuilder()
    .setName("Navi")
    .setColor("#aabbcc")
    .setTitle(text)
    .setTime();

    if(validateUrl(text)) {
        msg.setText('In-stock!');
        msg.setURL(text);
    }

    Hook.send(msg);
}

function validateUrl(str: string)
{
    if (str.indexOf("http://") == 0 || str.indexOf("https://") == 0) {
        return true;
    }

    return false;
}