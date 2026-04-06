import { BREAKPOINTS } from '@/utils/breakpoints'

export const useBreakpoint = () => {
  const isSP = useState('isSP', () => false)
  const isTablet = useState('isTablet', () => false)
  const initialized = useState('breakpoint:init', () => false)

  if (import.meta.client && !initialized.value) {
    const sp = window.matchMedia(`(max-width: ${BREAKPOINTS.sp}px)`)
    const tablet = window.matchMedia(`(max-width: ${BREAKPOINTS.tablet}px)`)

    const update = () => {
      isSP.value = sp.matches
      isTablet.value = tablet.matches
    }

    update()

    sp.addEventListener('change', update)
    tablet.addEventListener('change', update)

    initialized.value = true
  }

  return { isSP, isTablet }
}
