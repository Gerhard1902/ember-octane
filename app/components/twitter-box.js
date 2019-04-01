import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object"

export default class TwitterBoxComponent extends Component {
	@tracked text;  //this.state.text
	@action handleChange (text)// everytime i tipe sth, this function is called
	{	
		//alert ("handleChage")
		//alert(text);// hay dos formas, regresa el target.value de text, imprime
		console.log(text);
		this.text= text;
	}
	@action handleSubmit (){ 
		let newText=this.text;
		if (this.args.onSubmit){  //sin parèntesis no ejecuta
		this.args.onSubmit(newText); //args=props
	}else
		alert("HandleS");
	}
}
