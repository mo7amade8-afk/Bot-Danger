import sendImg from "./img.js";
import sendTxt from "./txt.js";
import auto from "./aut.js";

export default function admin_control(ctx, text) {

    switch (text) {

        case "/send_img":
            return sendImg(ctx);

        case "/send_text":
            return sendTxt(ctx);

        case "/auto":
            return auto(ctx);

        default:
            return ctx.reply("الأمر غير معروف.");
    }
}
