import request from '@/config/axios'

// 分享内容分类 VO
export interface ShareCategoryVO {
  id: number // 分类编号
  name: number // 分类名称
  status: number // 状态
  sort: number // 排序
  picUrl: string // 分类展示图片
}

// 分享内容分类 API
export const ShareCategoryApi = {
  // 查询分享内容分类分页
  getShareCategoryPage: async (params: any) => {
    return await request.get({ url: `/kmap/share-category/page`, params })
  },

  // 查询分享内容分类详情
  getShareCategory: async (id: number) => {
    return await request.get({ url: `/kmap/share-category/get?id=` + id })
  },

  // 新增分享内容分类
  createShareCategory: async (data: ShareCategoryVO) => {
    return await request.post({ url: `/kmap/share-category/create`, data })
  },

  // 修改分享内容分类
  updateShareCategory: async (data: ShareCategoryVO) => {
    return await request.put({ url: `/kmap/share-category/update`, data })
  },

  // 删除分享内容分类
  deleteShareCategory: async (id: number) => {
    return await request.delete({ url: `/kmap/share-category/delete?id=` + id })
  },

  // 导出分享内容分类 Excel
  exportShareCategory: async (params) => {
    return await request.download({ url: `/kmap/share-category/export-excel`, params })
  },
}