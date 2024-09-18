import { message } from "antd";

message.config({
    top: 100,
    duration: 2,
    maxCount: 3,
    rtl: true,
    prefixCls: 'my-message',
  });

function useMessage() {
    const [messageApi, contextHolder] = message.useMessage();
    
    const callErrorAlert = (content: string) => {
        messageApi.open({type: 'error', content});
    };

    return {contextHolder, callErrorAlert}
}

export {useMessage}