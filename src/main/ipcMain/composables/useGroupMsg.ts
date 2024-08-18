import { http } from '../axios'

export default () => {
  const getShareById = (id: number) => {
    return http.request<groupShare>({
      url: `/groupShare/getShareById/${id}`,
      method: 'GET',
    })
  }
  return { getShareById }
}
interface groupShare {
  id: number;
  planName: string;
  sendRoom: string;
  gapNum: number;
  msgOne: string;
  msgTwo: string;
  msgThree: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
}