# bh-wechaty-help

## 项目介绍

北恒微信助手，解放您的双手，多种方案可同时运行，亲测稳定运行24小时不掉线。

- [x] 好友申请
- [x] 个人回复
- [x] 群聊回复
- [x] 消息转发
- [x] 屏蔽检测
- [x] 群发消息
- [x] 日志列表

此项目基于 **Wechaty** 以及 **Electron** 进行编写：<https://wechaty.gitbook.io/wechaty/v/zh/>


## 使用说明

> 直接体验

点击[立即下载体验](https://github.com/Abeiheng/bh-wechaty-help/releases)，下载程序，即可直接使用，如有不懂的地方可以提交issues，或者联系绿泡泡:bhsr922，备注来意。

> 自行部署

本github仅提供了electron源码，如需自行部署联系绿泡泡:bhsr922，发你后端接口源码，仅供娱乐。



## 功能说明

> 好友申请

可自定义用户申请的备注内容，当用户验证备注与你设置的一样时，自动通过好友申请，并且可以发送一段打招呼语，多种方案可以同时进行，如果方案一样，排序高者优先。

> 个人回复

可自定义私聊关键词，当关键词与您设定的一样时，自动触发回复，多种方案可以同时进行，如果方案一样，排序高者优先。

> 群聊回复

可自定义群聊发送内容的关键词，当群里内容有与您关键词设定的一样时，自动触发回复，多种方案可以同时进行，如果方案一样，排序高者优先。(禁止与消息转发群聊套娃使用，否则会触发死循环导致账号被封禁，正常使用无任何风险。)

> 消息转发

可自定义主群聊与副群聊，当主群聊有消息会自动转发到副群聊里，多种方案可以同时进行，如果方案一样，排序高者优先。(禁止与群聊回复套娃使用，否则会触发死循环导致账号被封禁，正常使用无任何风险。)

> 屏蔽检测

可自定义群聊屏蔽条件，当有群聊内容触发，会自动记录在日志列表了，如果方案一样，排序高者优先。目前支持功能比较少，大家如果有更好的想法可以给我说。

> 群发消息

可自定义群聊与发送内容，每次最多定义3条，设置完成之后点击方案列表绿色的小图标进行启动。


## star 趋势图

![Stargazers over time](https://starchart.cc/Abeiheng/bh-wechaty-help.svg)


## 贡献代码

若您有好的想法，发现一些 **BUG** 并修复了，欢迎提交 **Pull Request** 参与开源贡献
发起 pull request 请求，提交到 master 分支，等待作者合并


## 声明

- 本项目涉及的数据由使用的个人或组织自行填写，本项目不对数据内容负责，包括但不限于数据的真实性、准确性、合法性。使用本项目所造成的一切后果，与本项目的所有贡献者无关，由使用的个人或组织完全承担。
- 本项目中涉及的第三方硬件、软件等，与本项目没有任何直接或间接的关系。本项目仅对部署和使用过程进行客观描述，不代表支持使用任何第三方硬件、软件。使用任何第三方硬件、软件，所造成的一切后果由使用的个人或组织承担，与本项目无关。
- 本项目中所有内容只供学习和研究使用，不得将本项目中任何内容用于违反国家/地区/组织等的法律法规或相关规定的其他用途。
- 所有基于本项目源代码，进行的任何修改，为其他个人或组织的自发行为，与本项目没有任何直接或间接的关系，所造成的一切后果亦与本项目无关。
- 所有直接或间接使用本项目的个人和组织，应24小时内完成学习和研究，并及时删除本项目中的所有内容。如对本项目的功能有需求，应自行开发相关功能。
- 本项目保留随时对免责声明进行补充或更改的权利，直接或间接使用本项目内容的个人或组织，视为接受本项目的特别声明。


## 演示图

| 北恒微信助手                                                    |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![3141723947182 .pic](https://img.picgo.net/2024/08/18/3141723947182_.picb4c9d219115bc945.jpg) | ![3131723947165 .pic](https://img.picgo.net/2024/08/18/3131723947165_.pic9ed23653304662c8.jpg) |
|                                                              |                                                              |
| ![3121723947154 .pic](https://img.picgo.net/2024/08/18/3121723947154_.pic2f9e272bd06f36d0.jpg) | ![3111723947148 .pic](https://img.picgo.net/2024/08/18/3111723947148_.pica4598c5024a97b39.jpg) |
|                                                              |                                                              |
| ![3101723947141 .pic](https://img.picgo.net/2024/08/18/3101723947141_.pic0ba23e40e0db917a.jpg) | ![3091723947133 .pic](https://img.picgo.net/2024/08/18/3091723947133_.pic6a79898438e15d1e.jpg) |
|                                                              |                                                              |
| ![3081723947124 .pic](https://img.picgo.net/2024/08/18/3081723947124_.pic612b93a07b04205c.jpg) | ![3071723947102 .pic](https://img.picgo.net/2024/08/18/3071723947102_.pic6e8f37129de2736d.png) |