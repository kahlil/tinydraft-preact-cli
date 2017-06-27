import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { ACTIONS } from '../../actions';
import style from './style';

export default class DraftActions extends Component {
	render(props) {
		return (
			<div class={style.draftActions}>
				<ul class="list-reset">
					<li class="inline-block">
						<Link href="/edit">edit</Link>
					</li>
					<li class="inline-block">
						<a href="#" class="delete" data-action={ACTIONS.DELETE}>delete</a>
					</li>
					<li class="inline-block">
						<a class="tweet" data-action={ACTIONS.TWEET}>tweet</a>
					</li>
					<li class="inline-block">
						<a class={style.fav + ' fav'} data-action={ACTIONS.FAV}>★</a>
					</li>
				</ul>
			</div>
		);
	}
}
