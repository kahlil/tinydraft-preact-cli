import { h, Component } from 'preact';
// import { hoodie } from '../../init-hoodie';
import style from './style';
import Draft from '../../components/draft';
import Header from '../../components/header';

function DraftList({ drafts }) {
	console.log(drafts);
	return drafts.map(draft => <Draft key={draft._id} text={draft.text} />);
}

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			drafts: []
		};
	}

	componentDidMount() {
		global.hoodie.store.findAll()
			.then(docs => this.setState({ drafts: docs }));
	}

	render() {
		return (
			<div class={style.home}>
				<Header></Header>
				<div class={style.draftsContainer}>
					<DraftList drafts={this.state.drafts} />
					{this.state.drafts.length === 0 &&
						<div class={style.noDrafts}>
							No drafts yet.
						</div>
					}
				</div>
			</div>
		);
	}
}
