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
          <h6>{GetUsername(item)}</h6>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

function GetUsername(item: ISummaryItem): string {
  if (item.nickname && item.nickname !== "")
    return `${item.nickname}(${item.username})`;

  return item.username;
}
