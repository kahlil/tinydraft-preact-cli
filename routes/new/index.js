import { h, Component } from 'preact';
import style from './style';
import Editor from '../../components/editor';
import Header from '../../components/header';

export default class New extends Component {
	render() {
		return (
			<div class={style.home}>
				<Header/>
				<div class={style.draftsContainer}>
					<Editor/>
				</div>
			</div>
		);
	}
}
