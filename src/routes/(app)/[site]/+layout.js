export async function load({ data }) {
  console.log('⛱ [site] +layout', data)
  return { ...data }
}
