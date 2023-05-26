export default eventHandler(async () => {
  const storage = useStorage('data')
  const pageVisits = (await storage.getItem('pageVisits')) as number
  const updatedPageVisits = pageVisits + 1
  await storage.setItem('pageVisits', updatedPageVisits)
  return {
    pageVisits: updatedPageVisits,
  }
})
