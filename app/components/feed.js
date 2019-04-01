import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";

export default class FeedComponent extends Component {
	
	@tracked tweets=[
		{id:1,userName:"Yvone", description:"hola!"},
		{id:2,userName:"Yvone", description:"que tal"},
		{id:3,userName:"Yvone", description:"hola!"}
	];
	//typescript define què tipo de cosa es cada cosa, o proptypes
}
