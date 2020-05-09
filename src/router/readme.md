# 说明

## 配置项

- path 路由路径
- exact 是否严格匹配path
- title 侧栏项名称
- icon 侧栏项图标
- hidden 是否隐藏该侧栏项
- component 侧栏项对应路由页面(组件)
- linkPath 侧栏项关联的Path(主要用于详情等不在侧栏显示的二级页面)

## 路由传参

- params(刷新仍在)

```bash
<Route path='/path/:name' component={Path}/> // name是形参
<Link to="/path/2">跳转传参</Link> // 2是传递的实参
this.props.history.push({pathname:"/path/" + name}); // 编程式跳转传参
读取参数用:this.props.match.params.name
```

- query(刷新丢失)

```bash
<Route path='/query' component={Query}/>
<NavLink to={{ path :'/query', query:{name:'sunny'}}}>跳转传参</NavLink>
this.props.history.push({pathname:"/query",query:{name:'sunny'}}); // 编程式跳转
读取参数用: this.props.location.query.name
```

- state(刷新仍在)

```bash
<Route path='/sort' component={Sort}/>
<NavLink to={{path:'/sort ', state:{name :'sunny' }}}>跳转传参</NavLink> 
this.props.history.push({pathname:"/sort ",state:{name:'sunny'}}); // 编程式跳转
读取参数用: this.props.location.query.state
```

- search(刷新仍在)

```bash
<Route path='/web/departManange ' component={DepartManange}/>
<NavLink to="web/departManange?id=200">跳转传参</NavLink>
this.props.history.push({pathname:"/web/departManange", search: "id=2"});
读取参数用: this.props.location.search
```
