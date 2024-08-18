import {
  ContactInterface,
  MessageInterface,
  RoomInterface,
} from "wechaty/impls";
import useBlackWord from "../../composables/useBlackWord";
const QrCode = require("qrcode-reader");
const Jimp = require("jimp");
const { getMsgResult } = useBlackWord();
const blackWord = async (
  talkerMsg: string,
  room: RoomInterface,
  talker: ContactInterface,
  message: MessageInterface
) => {
  const phoneReg =
    /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
  const urlReg =
    /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/;
  const topic = await room.topic();
  //手机号检测
  if (phoneReg.test(talkerMsg)) {
    const result = await getMsgResult(
      "手机号",
      topic,
      talker.payload?.name!,
      talkerMsg
    );
    return result;
  }
  //链接检测
  if (urlReg.test(talkerMsg)) {
    const result = await getMsgResult(
      "链接",
      topic,
      talker.payload?.name!,
      talkerMsg
    );
    return result;
  }
  //二维码检测
  const messageType = message.type();
  if (messageType == 6) {
    const image = await message.toFileBox();
    const toBuffer = await image.toBuffer();
    return new Promise((resolve, reject) => {
      Jimp.read(toBuffer, (err: any, image: any) => {
        if (err) {
          resolve(false);
        }
        const qr = new QrCode();
        qr.callback = async (err:any, value:any) => {
          if (value) {
            const result = await getMsgResult(
              "二维码",
              topic,
              talker.payload?.name!,
              value.result
            );
            resolve(result);
          }
        };
        qr.decode(image.bitmap);
      });
    });
  }
};
export { blackWord };
