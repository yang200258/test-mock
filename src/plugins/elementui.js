import Vue from 'vue'
import { Upload, Icon, Link, InputNumber, Switch, Tag, Dropdown, DropdownMenu, DropdownItem, Divider, ButtonGroup, Calendar, Steps, Step, BreadcrumbItem, Breadcrumb, Scrollbar, Tabs, TabPane, CheckboxGroup, Radio, TimePicker, RadioGroup, DatePicker, Dialog, Main, Loading, Container, Pagination, TableColumn, Table, Input, Form, FormItem, MessageBox, Message, Button, Checkbox, Menu, Submenu, MenuItem, Select, Option, Row, Col, Tree, Popover } from 'element-ui'
Vue.use(Input)
Vue.use(Upload)
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Menu);
Vue.use(Select);
Vue.use(Option);
Vue.use(Row);
Vue.use(Col);
Vue.use(Tree);
Vue.use(Popover)
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Table);
Vue.use(Main);
Vue.use(Pagination);
Vue.use(TableColumn);
Vue.use(Container);
Vue.use(Dialog);
Vue.use(DatePicker);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(TimePicker);
Vue.use(CheckboxGroup);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Scrollbar);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Calendar);
Vue.use(ButtonGroup);
Vue.use(Divider);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Loading.directive);
Vue.use(Tag)
Vue.use(Switch)
Vue.use(InputNumber)
Vue.use(Link)
Vue.use(Icon)
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$message = Message
    // Vue.prototype.$InfiniteScroll = InfiniteScroll
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$confirm = MessageBox.confirm;


export default Vue