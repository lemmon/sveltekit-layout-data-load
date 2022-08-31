export async function load({ data }) {
  console.log('⛱ looking-glass +layout', data)
  return { ...data }
}
