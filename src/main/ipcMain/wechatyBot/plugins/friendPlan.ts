import { FriendshipInterface, WechatyInterface } from "wechaty/impls";
import useFriendPlan from "../../composables/useFriendPlan";

const { getplanInfo, getverifyMsgResult } = useFriendPlan();
const friendPlan = async (
  friendship: FriendshipInterface,
  bot: WechatyInterface
) => {
  const friendInfo = await getplanInfo(friendship.hello());
  if (friendInfo && friendship.type() === bot.Friendship.Type.Receive) {
    await friendship.accept();
    const friendContact = friendship.contact();
    if (friendInfo.callMsg) {
      await friendContact.say(friendInfo.callMsg);
    }
    await getverifyMsgResult(friendship.hello(), friendContact.payload?.name!);
  }
};
export { friendPlan };
