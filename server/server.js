const http = require('http');	//服务器模块

// TODO read data from user.json or import mongoDB
const userList = [
	{
		"username": '123456',
		"password": 'hayden9653'
	}
]

class resData {
	constructor(code,message,data){
		this.code = code
		this.message = message
		this.data = data 
	}
}

let httpServer =  http.createServer((req,res)=>{
	let params = undefined;
	req.on('data',data => { 
		params = JSON.parse(data)
		userList.map(({username, password})=>{
			if(username===params.username && password===params.password){
				const responseText = JSON.stringify(new resData(1, "登录成功", {}))
				console.log("成功响应");
				res.write(responseText)
				res.end()
			}
		})
			const responseText = JSON.stringify(new resData(0, "登录失败,账号或密码错误", {}))
			console.log('失败响应');
			res.writeHead(200, {
				'Content-Type': 'application/json;charset=UTF-8'
			});
			res.write(responseText)
			res.end()
	})
})

httpServer.listen(5000);
console.log("服务启动啦")

