import axios from 'axios';

//封装好的get和post接口，调用方法情况action文件
const instance = axios.create({
    baseURL: '/train', //设置默认api路径
    timeout: 5000, //设置超时时间

    headers: {
    		'content-Type':'application/x-www-form-urlencoded',
    		"Access-Control-Allow-Origin":"*",
    		"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    		'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT'
    	}
});

export default instance;