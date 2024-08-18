import { http } from "../axios";

export default () => {
  const getAllTopic = () => {
    return http.request<listenTopic[]>({
      url: "/msgShare/getAllTopic",
      method: "GET",
    });
  };
  return { getAllTopic };
};
interface listenTopic {
  listenTopic: Array<string>;
  shareTopic: Array<string>;
}
