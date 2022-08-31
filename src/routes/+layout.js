export async function load({ data }) {
  console.log('👋 ROOT +layout', data)
  return {
    user: 'User'
  }
}
