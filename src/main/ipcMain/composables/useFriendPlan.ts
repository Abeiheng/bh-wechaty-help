import { http } from "../axios";

export default () => {
  const getplanInfo = (verifyMsg: string) => {
    return http.request<FriendModel>({
      url: "/friendPlan/getplanInfo",
      method: "GET",
      params: {
        verifyMsg,
      },
    });
  };
  const getverifyMsgResult = (verifyMsg: string, contact: string) => {
    return http.request<FriendModel>({
      url: "/friendPlan/getverifyMsgResult",
      method: "GET",
      params: {
        verifyMsg,
        contact,
      },
    });
  };
  return { getplanInfo, getverifyMsgResult };
};

interface FriendModel {
  id: number;
  planName: string;
  verifyMsg: string;
  callMsg: string;
  status: boolean;
}
