import Draft from '../../components/draft';

export default function DraftList({ drafts }) {
	const draftList = drafts
		.map(draft => <Draft key={draft._id} draft={draft} />);
	return (<div>{draftList}</div>);
}
