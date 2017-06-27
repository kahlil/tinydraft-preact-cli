import style from './style';

export default function NoDrafts({ drafts }) {
	if (drafts.length === 0) {
		return (
			<div class={style.noDrafts}>
				No drafts yet.
			</div>
		);
	}
}
