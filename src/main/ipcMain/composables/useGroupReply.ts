import { http } from "../axios";

export default () => {
  const getAllTopicKey = () => {
    return http.request<TopicKey>({
      url: "/groupReply/getAllTopicKey",
      method: "GET",
    });
  };
  const getMsgReply = (keyWord: string, topic: string, contact: string) => {
    return http.request<MsgReply>({
      url: "/groupReply/getMsgReply",
      method: "GET",
      params: {
        keyWord,
        topic,
        contact,
      },
    });
  };
  return { getAllTopicKey, getMsgReply };
};

interface TopicKey {
  topicList: Array<string>;
  keyWordList: Array<string>;
}
interface MsgReply {
  id: number;
  planName: string;
  listenRoom: string;
  triggerWord: string;
  msgOne: string;
  msgTwo: string;
  msgThree: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}
