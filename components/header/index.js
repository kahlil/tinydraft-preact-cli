import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<div class={style.header}>
				<h1 class={style.h1}>
					<Link href="/">
						tinydraft
					</Link>
				</h1>
				<div class={`${style.draftsActions} table`}>
					<div class={`${style.tableCell} table-cell`}>
						<Link href="/new">
							new
						</Link>
					</div>
					<div class={style.tableCell}>
						<Link href="/faved">
							★
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
