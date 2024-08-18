import { WechatyInterface } from "wechaty/impls";
import useMsgShare from "../../composables/useMsgShare";

const { getAllTopic } = useMsgShare();
const msgShare = async (
  topic: string,
  talkerMsg: string,
  bot: WechatyInterface
) => {
  const listenRoomList = await getAllTopic();
  const topicInfo = listenRoomList.find((item) =>
    item.listenTopic.includes(topic)
  );
  if (topicInfo) {
    for (const roomTopic of topicInfo.shareTopic) {
      const currentRoom = await bot.Room.find({ topic: roomTopic });
      if (currentRoom) {
        await currentRoom.say(talkerMsg);
        await delay(1000);
      } else {
        return;
      }
    }
  } else {
    return;
  }
};
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export { msgShare };
