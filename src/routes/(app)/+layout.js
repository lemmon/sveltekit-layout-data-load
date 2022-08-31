export async function load({ data }) {
  console.log('⛱ (app) +layout', data)
  return {
    'app': true,
    ...data,
  }
}
