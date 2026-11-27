import enList from './en/list'
import enChip from './en/chip'
import jaList from './ja/list'
import jaChip from './ja/chip'

export default {
  en: {
    ...enList,
    ...enChip
  },
  ja: {
    ...jaList,
    ...jaChip
  }
}
