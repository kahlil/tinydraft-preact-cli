import { h, Component } from 'preact';
import style from './style';
import Draft from '../../components/draft';
import Header from '../../components/header';

const draftsData = [
	{
		id: 1,
		text: 'bla bla'
	},
	{
		id: 2,
		text: 'blubb blubb'
	},
	{
		id: 3,
		text: 'für die gang'
	}
]

export default class Home extends Component {
	draftList = draftsData.map(d => <Draft key={d.id.toString()} text={d.text} />);

	render() {
		return (
			<div class={style.home}>
				<Header></Header>
				<div class={style.draftsContainer}>
					{this.draftList}
					{draftsData.length == 0 &&
						<div class={style.noDrafts}>
							No drafts yet.
						</div>
					}
				</div>
			</div>
		);
	}
}
