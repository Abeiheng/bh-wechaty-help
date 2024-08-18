import { ContactInterface } from "wechaty/impls";
import usePeopleReply from "../../composables/usePeopleReply";
const { getMsgReply, getAllKeyWord } = usePeopleReply();
const peopleReply = async (talkerMsg: string, talker: ContactInterface) => {
  const keyWords = await getAllKeyWord();
  const exitKey = keyWords.filter((word) => talkerMsg.includes(word));
  if (exitKey.length) {
    const replyInfo = await getMsgReply(exitKey[0], talker.payload?.name!);
    if (replyInfo) {
      const messages = [
        replyInfo.msgOne,
        replyInfo.msgTwo,
        replyInfo.msgThree,
      ].filter(Boolean);
      for (const message of messages) {
        await talker.say(message);
        await delay(1000);
      }
    }
  }
};
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export { peopleReply };
