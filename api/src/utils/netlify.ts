import Axios from 'axios'
import { debounce } from 'lodash'

// How often can this API trigger a frontend rebuild on Netlify
const DEBOUNCE_TIMEOUT = 5 * 60 * 1000

const netlifyWebHookCall = async () => {
  if (process.env.NETLIFY_BUILD_HOOK) {
    try {
      const res = await Axios.post(process.env.NETLIFY_BUILD_HOOK, {})
    } catch (e) {
      throw new Error('Error getting Netlify to rebuild the static site...')
    }
  }
}

export const netlifyBuild = debounce(netlifyWebHookCall, DEBOUNCE_TIMEOUT, {
  trailing: true,
  maxWait: DEBOUNCE_TIMEOUT,
})
