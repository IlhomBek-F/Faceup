import { message } from "antd";

function useMessage() {
    const [messageApi, contextHolder] = message.useMessage();

    const callErrorAlert = (content: string) => {
        messageApi.open({ type: 'error', content });
    };

    return { contextHolder, callErrorAlert }
}

export { useMessage }