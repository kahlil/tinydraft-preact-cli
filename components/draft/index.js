import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import DraftActions from '../draft-actions';

export default class Draft extends Component {
	render() {
		return (
			<div class={style.draft}>
				<div class={style.innerContainer}>
					<div class={style.draftText}>
						{this.props.text}
					</div>
					<DraftActions/>
				</div>
			</div>
		);
	}
}
