import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
	/*@tracked tweets=[
		{id:1, user_name: "Yvone", description:"hola,hola", created_at:"ok"}
	];*/
	onSubmit(description){
		let tweets= this.tweets.slice();

		this.tweets =tweets.concat({
			id:Math.floor(Math.random()*100)+3,
			user_name:"Yvone",
			description:text,
			created_at:"2019-04-01"
		})
	}
}


