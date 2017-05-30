import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import DraftActions from '../draft-actions';

export default class Editor extends Component {
	render() {
		return (
			<div>
				<div class={style.editor}>
					<span class={style.closeDraft}>&times;</span>
					<button class={style.saveDraft}>save</button>
					<textarea class={`${style.editorTextarea} p2`}></textarea>
					<div class={style.characterCount}>0</div>
				</div>
			</div>
		);
	}
}
