import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object"

export default class TwitterBoxComponent extends Component {
	@tracked text;  //this.state.text
	@tracked error;
	@action
	onInput(value){
		this.error=false;
		this.text=value;
	}
	@action handleChange (text)// everytime i tipe sth, this function is called
	{	
		//alert ("handleChage")
		//alert(text);// hay dos formas, regresa el target.value de text, imprime
		console.log(text);
		this.text= text;
	}
	@action async handleSubmit (){ 
		let newText=this.text;
		if (this.args.onSubmit){  //sin parèntesis no ejecuta
		let req= await  this.args.onSubmit(newText); //args=props    se va y queremos que luego regrese
		this.error=req.error;
		this.text= "";
	}else
		alert("HandleS");
	}
}
