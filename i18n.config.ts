import messages from './src/lang/messages'

export default defineI18nConfig(() => ({
  legacy: false,
  lazy: true,
  messages
}))
