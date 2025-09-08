import "../../styles/summaryFrame/SummaryItemContainer.css";

interface ISummaryItemContainerArgs {
  items: ISummaryItem[];
}

interface ISummaryItem {
  username: string;
  nickname?: string;
  guildName?: string;
  content: string;
}

export default function SummaryItemContainer(args: ISummaryItemContainerArgs) {
  return (
    <div className="summary_item_container">
      {args.items.map((item, index) => (
        <div key={index}>
          <p>{`username: ${item.username}`}</p>
          <p>{`content: ${item.content}`}</p>
        </div>
      ))}
    </div>
  );
}
