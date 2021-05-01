/***重写element-ui $message 解决消息多次弹出的问题  最新的会覆盖之前的**/   
import {
    Message
} from "element-ui";

let messageInstance = null;
const overrideMessage = (options) => {
    if (messageInstance) {
        messageInstance.close();
    }
    messageInstance = Message(options);
};
["error", "success", "info", "warning"].forEach(type => {
    overrideMessage[type] = options => {
        if (typeof options === "string") {
            options = {
                message: options
            };
        }
        options.type = type;
        return overrideMessage(options);
    };
});
export const message = overrideMessage;
