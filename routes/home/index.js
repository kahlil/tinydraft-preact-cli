import { h, Component } from 'preact';
import { hoodie } from '../../hoodie';
import { ACTIONS } from '../../actions';
import DraftList from '../../components/draft-list';
import NoDrafts from '../../components/no-drafts';
import Header from '../../components/header';
import style from './style';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { drafts: null };
		hoodie.store.on('remove', doc => {
			this.setDraftlist();
		});
		// Bind eventhanlder methods to this.
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		const action = this.getAction(e);
		switch (action.type) {
			case ACTIONS.DELETE:
				hoodie.store.remove(action.payload)
					.then(x => console.log(x))
					.catch(err => console.error(err));
				console.log('delete draft with id', action.payload);
				break;
			case ACTIONS.TWEET:
				console.log('tweet draft with id', action.payload);
				break;
			case ACTIONS.FAV:
				console.log('fav draft with id', action.payload);
				break;
			default:
				console.log('return state as is');
				break;
		}
	}

	getAction(e) {
		return {
			type: e.target.dataset.action,
			payload: e.target.closest('.draft').dataset.draftId
		}
	}

	setDraftlist() {
		hoodie.store
			.findAll()
			.then(docs => this.setState({ drafts: docs }));
	}

	componentDidMount() {
		this.setDraftlist()
	}

	render(props, { drafts }) {
		return (
			<div class={style.home} onClick={this.handleClick} >
				<Header></Header>
					{drafts !== null &&
						<div class={style.draftsContainer}>
							<DraftList drafts={drafts} />
							<NoDrafts drafts={drafts} />
						</div>
					}
			</div>
		);
	}
}
