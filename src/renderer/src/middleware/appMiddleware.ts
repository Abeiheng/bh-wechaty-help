import useUserStore from '@renderer/store/useUserStore'

export default async () => {
  await Promise.all([
    useUserStore().getCurrentUser()
  ])
}
