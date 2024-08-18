import { http } from "../axios";

export default () => {
  const getMsgReply = (keyWord: string, contact: string) => {
    return http.request<peopleReply>({
      url: "/peopleReply/getMsgReply",
      method: "GET",
      params: {
        keyWord,
        contact,
      },
    });
  };
  const getAllKeyWord = () => {
    return http.request<Array<string>>({
      url: "/peopleReply/getAllKeyWord",
      method: "GET",
    });
  };
  return { getMsgReply, getAllKeyWord };
};

interface peopleReply {
  id: number;
  planName: string;
  triggerWord: string;
  msgOne: string;
  msgTwo: string;
  msgThree: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}
