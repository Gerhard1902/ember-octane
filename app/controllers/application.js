import Controller from '@ember/controller';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';

export default class ApplicationController extends Controller {
	@tracked tweets=[
		{id:1, user_name: "Yvone", description:"hola,hola", created_at:"ok"}
	];
	@action onSubmit(my_desc){
		//let tweets= this.tweets.slice();


		let x= this.store.createRecord("draft-tweet",{
		//this.tweets =tweets.concat({
			//id:Math.floor(Math.random()*100)+3,
			avatar:"https://img.wonderhowto.com/img/26/46/63686855758540/0/secure-your-identity-become-anonymous-online-2019.1280x600.jpg",
			user_name:"Doomsday",
			description:my_desc,
			created_at:"2019-04-01"
		});
		x.save();



	}
}


