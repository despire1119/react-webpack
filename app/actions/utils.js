import cookie from 'react-cookie'

//登录
export function doLogin(userName,password){
	return dispatch=>{
		return fetch(`someUrl`,{credentials: 'same-origin'})
			.then(response => response.json())
			.then(json=>{
				if(json.result){
					cookie.save('authkey', json.token);
					cookie.save('nickName', json.nickname);
					browserHistory.push('/home');
				}
				console.dir(json);
			})
	}
}
