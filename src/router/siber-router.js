import * as Icon from '@ant-design/icons';
import Dashboard from '../components/Dashboard';
import TableBasic from '../components/TableBasic';
import FormBasic from '../components/FormBasic';
import Descriptions from '../components/Descriptions';


export default [
  {
    path: '/admin',
    redirect: '/admin/home',
    exact: true,
  },
  {
    path: "/admin/home",
    title: "Dashboard",
    icon: Icon.DashboardOutlined,
    component: Dashboard,
  },
  {
    path: "/admin/examples",
    title: "Examples",
    icon: Icon.BarsOutlined,
    routes: [
      {
        path: "/admin/examples/table-list", // 路由路径
        exact: true, // 严格匹配路由
        title: "Table",
        component: TableBasic,
      },
      {
        path: "/admin/examples/table-details",
        linkPath: "/admin/examples/table-list", // 将该侧栏和父级侧栏关联
        hidden: true, // 隐藏该项侧栏
        title: "Descriptions", // 侧栏标题
        component: Descriptions, // 显示内容
      },
      {
        path: "/admin/examples/form",
        title: "Form",
        component: FormBasic,
      },
    ]
  },
];