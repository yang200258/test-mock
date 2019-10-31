import Mock from 'mockjs'
import login from './login'
import _ from 'lodash'

let data = _.concat(login)
data.forEach(function(res) {
    if (res.method == 'post') {
        Mock.mock(res.path, res.method, res.data)
    }
    if (res.method == 'get') {
        Mock.mock(RegExp(res.path + ".*"), res.method, () => {
            return Mock.mock(res.data)
        })
    }
})
export default Mock