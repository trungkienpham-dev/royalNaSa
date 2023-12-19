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
            path: 'Gate',
            children: []
          },
          {
            name: 'mái',
            path: 'Roof',
            children: []
          },
          {
            name: 'lan can',
            path: 'Handrail',
            children: []
          },
          {
            name: 'cầu thang',
            path: 'Stair',
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
            path: 'Hydraulic',
            children: []
          },
          {
            name: 'xếp trượt',
            path: 'Sliding',
            children: []
          },
          {
            name: 'trượt quay',
            path: 'Rotating',
            children: []
          },
          {
            name: 'mở quay, mở lùa',
            path: 'Swing',
            children: []
          },
          {
            name: 'cửa nhôm xingfa',
            path: 'Xingfa',
            children: []
          },
          {
            name: 'cửa nhôm vát cạnh 55',
            path: '...',
            children: []
          }
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'Báo giá',
    path: 'quotation',
    children: []
  },
  {
    id: '5',
    name: 'Q&A',
    path: 'q&a',
    children: []
  },
  {
    id: '6',
    name: 'Liên hệ',
    path: 'contact',
    children: []
  }
]
