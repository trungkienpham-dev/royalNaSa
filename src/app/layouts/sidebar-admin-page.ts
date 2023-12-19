import { NzPlacementType } from 'ng-zorro-antd/dropdown';

export interface MenuAdminItem {
  name: string;
  path: string;
  children: MenuAdminItem[];
  icon: string;
}

export const MENUADMINITEMS: MenuAdminItem[] = [
  {
    name: 'Danh mục sản phẩm',
    path: 'admin/category',
    children: [
      {
        name: 'sắt mỹ thuật',
        path: '/sat-my-thuat',
        children: [
          {
            name: 'cổng',
            path: 'gate',
            children: [],
            icon: ''
          },
          {
            name: 'mái',
            path: 'roof',
            children: [],
            icon: ''
          },
          {
            name: 'lan can',
            path: 'handrail',
            children: [],
            icon: ''
          },
          {
            name: 'cầu thang',
            path: 'stair',
            children: [],
            icon: ''
          }
        ],
        icon: ''
      },
      {
        name: 'nhôm kính',
        path: '/nhom-kinh',
        children: [
          {
            name: 'thuỷ lực',
            path: '',
            children: [],
            icon: ''
          },
          {
            name: 'xếp trượt',
            path: '',
            children: [],
            icon: ''
          },
          {
            name: 'trượt quay',
            path: '',
            children: [],
            icon: ''
          },
          {
            name: 'mở quay, mở lùa',
            path: '',
            children: [],
            icon: ''
          }
        ],
        icon: ''
      }
    ],
    icon: 'unordered-list'
  },
  {
    name: 'Thông tin đăng ký báo giá',
    path: 'admin/quotation',
    children: [],
    icon: 'unordered-list'
  },
  {
    name: 'Câu hỏi thường gặp',
    path: 'admin/Q&A',
    children: [],
    icon: ''
  }
]
