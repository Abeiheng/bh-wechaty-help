import { http } from "../axios";

export default () => {
  const getMsgResult = (
    msgType: string,
    roomTopic: string,
    msgContact: string,
    msgContent: string
  ) => {
    return http.request<boolean>({
      url: "/blackWord/getMsgResult",
      method: "GET",
      params: {
        msgType,
        roomTopic,
        msgContact,
        msgContent,
      },
    });
  };
  return { getMsgResult };
};
