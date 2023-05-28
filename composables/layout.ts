import type { Ref } from 'vue'

export const useDrawer = () => useState<boolean>('drawer', () => false)
