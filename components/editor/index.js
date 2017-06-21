import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import DraftActions from '../draft-actions';

export default class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = { text: '' };

		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log('save the draft!');
		global.hoodie.store.add(this.state)
			.then(res => console.log('the stuff was stored'))
		console.log(global.hoodie.store);
	}

	handleChange(event) {
    this.setState({ text: event.target.value });
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div class={style.editor}>
					<span class={style.closeDraft}>&times;</span>
					<button class={style.saveDraft} onClick={this.handleClick}>save</button>
					<textarea class={`${style.editorTextarea} p2`} value={this.state.text} onChange={this.handleChange}></textarea>
					<div class={style.characterCount}>0</div>
				</div>
			</form>
		);
	}
}
