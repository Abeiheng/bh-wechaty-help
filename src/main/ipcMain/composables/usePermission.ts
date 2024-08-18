import { http } from "../axios";

export default () => {
  const permissionStatus = (type: string) => {
    return http
      .request<boolean>({
        url: "/permission/getOnePermission",
        method: "GET",
        params: {
          type,
        },
      })
  };
  const getTopicType = (topic: string) => {
    return http.request<string | null>({
      url: "/public/getTopicType",
      method: "GET",
      params: {
        topic,
      },
    });
  };
  return { permissionStatus, getTopicType };
};