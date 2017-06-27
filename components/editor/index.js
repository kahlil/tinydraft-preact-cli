import { bind } from 'decko';
import { h, Component } from 'preact';
import { Router } from 'preact-router';
import style from './style';
import DraftActions from '../draft-actions';
import { hoodie } from '../../hoodie';

const { store } = hoodie;

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
		if (!this.state._id) {
			store.add(this.state).then(doc => this.setState(doc));
		} else {
			store.update(this.state);
		}
		Router.route('/');
	}

	handleChange(event) {
    this.setState({ text: event.target.value });
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div class={style.editor}>
					<span class={style.closeDraft}>&times;</span>
					<button class={style.saveDraft}>save</button>
					<textarea class={`${style.editorTextarea} p2`} value={this.state.text} onChange={this.handleChange}></textarea>
					<div class={style.characterCount}>0</div>
				</div>
			</form>
		);
	}
}
