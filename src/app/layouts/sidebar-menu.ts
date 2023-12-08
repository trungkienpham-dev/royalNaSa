export interface MenuItem {
  id: string;
  name: string;
  path: string;
  children: any[];
}

export const MENUITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Trang chủ',
    path: '/',
    children: []
  },
  {
    id: '2',
    name: 'Giới thiệu',
    path: 'introduce',
    children: []
  },
  {
    id: '3',
    name: 'Danh mục sản phẩm',
    path: 'category',
    children: [
      {
        name: 'sắt mỹ thuật',
        path: '/sat-my-thuat',
        children: [
          {
            name: 'cổng',
            path: 'gate',
            children: []
          },
          {
            name: 'mái',
            path: 'roof',
            children: []
          },
          {
            name: 'lan can',
            path: 'handrail',
            children: []
          },
          {
            name: 'cầu thang',
            path: 'stair',
            children: []
          }
        ]
      },
      {
        name: 'nhôm kính',
        path: '/nhom-kinh',
        children: [
          {
            name: 'thuỷ lực',
            path: 'hydraulic',
            children: []
          },
          {
            name: 'xếp trượt',
            path: 'sliding',
            children: []
          },
          {
            name: 'trượt quay',
            path: 'rotating',
            children: []
          },
          {
            name: 'mở quay, mở lùa',
            path: 'swing',
            children: []
          }
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'Liên hệ',
    path: 'contact',
    children: []
  }
]

/**
 * {id: 1, label: 'p', parent: number|null, children: [ 2,3,4 ]}
 *  {id: 3, label: 'i1', parent: 1, children: null}
 *  {id: 2, label: 'i2', parent: 1, children: null}
 *  {id: 4, label: 'i3', parent: 1, children: []}
 *
 *
 *
 * /data/4 -> []
 *
 *
 *
 * /v1/api/<entitiy>
 * > GET | DELETE | UPDATE | CREATE
 *
 *
 * /v1/api/article/:id
 * CREATE: { id: 1, content: any }
 * GET: { id, content:any, created_at, updated_at }
 * UPDATE: { id, content:<any> }
 * DELETE: { id, content:<any> }
 * */
