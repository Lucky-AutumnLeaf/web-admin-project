import type { MenuResultType } from '@/types/user'

export const getBreadcrumbLabels = (
  path: string,
  menuList: MenuResultType[]
): string[] => {
  for (const item of menuList) {
    if (item.key === path) {
      return [item.label]
    }
    if (item.children) {
      const labels = getBreadcrumbLabels(path, item.children)
      if (labels.length > 0) {
        return [item.label, ...labels]
      }
    }
  }
  return []
}
