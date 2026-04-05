export const useIsSP = () => {
  const isSP = ref(false)

  const check = () => {
    isSP.value = window.matchMedia('(max-width: 768px)').matches
  }

  onMounted(() => {
    check()
    window.addEventListener('resize', check)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', check)
  })

  return { isSP }
}
