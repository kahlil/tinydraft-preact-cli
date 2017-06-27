import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import DraftActions from '../draft-actions';

export default class Draft extends Component {
	render({ draft }) {
		return (
			<div class={`${style.draft} draft`} data-draft-id={draft._id}>
				<div class={style.innerContainer}>
					<div class={style.draftText}>
						{draft.text}
					</div>
					<DraftActions draftId={draft._id} />
				</div>
			</div>
		);
	}
}
