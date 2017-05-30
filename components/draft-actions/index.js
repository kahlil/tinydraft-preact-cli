import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class DraftActions extends Component {
	render() {
		return (
			<div class={style.draftActions}>
				<ul class="list-reset">
					<li class="inline-block">
						<Link href="/edit">edit</Link>
					</li>
					<li class="inline-block">
						<a>delete</a>
					</li>
					<li class="inline-block">
						<a>tweet</a>
					</li>
					<li class="inline-block">
						<a class={style.fav}>★</a>
					</li>
				</ul>
			</div>
		);
	}
}
