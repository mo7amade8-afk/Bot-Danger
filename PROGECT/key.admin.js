import adminControl from "../ADMIN/admin_control.js";

export default function key_admin(ctx) {
    const text = ctx.message.text;

    // ارسال الطلب الى admin_control
    adminControl(ctx, text);
}
