import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'vynrfzal',
    dataset: 'production',
  },
  deployment: {
    appId: 'k1b0xdeqdschugj0x7fg8mfa',
  },
  autoUpdates: true,
})
