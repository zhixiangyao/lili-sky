export default function warning(condition: any, message: string) {
  if (process.env.NODE_ENV !== 'production' && console) {
    if (condition) {
      console.error(`Warning: ${message}`)
    }
  }
}
