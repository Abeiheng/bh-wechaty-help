import { RoomInterface } from "wechaty/impls";
import useGroupReply from "../../composables/useGroupReply";

const { getAllTopicKey, getMsgReply } = useGroupReply();
const groupReply = async (
  keyWord: string,
  topic: string,
  contact: string,
  room: RoomInterface
) => {
  const topicKey = await getAllTopicKey();
  if (
    topicKey.topicList.includes(topic) &&
    topicKey.keyWordList.includes(keyWord)
  ) {
    const msgReply = await getMsgReply(keyWord, topic, contact);
    if (msgReply) {
      const messages = [
        msgReply.msgOne,
        msgReply.msgTwo,
        msgReply.msgThree,
      ].filter(Boolean);
      for (const message of messages) {
        await room.say(message);
        await delay(1000);
      }
    }
  }
  return;
};
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export { groupReply };
