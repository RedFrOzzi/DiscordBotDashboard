import { useQuery } from "@tanstack/react-query";
import "../../styles/summaryFrame/SummaryMainFrame.css";
import { getLastActionsURL, serverBaseURL } from "../../utils/ServerUrls";
import LoadingCircle from "../../svg/LoadingCircle";
import SummaryItemContainer from "./SummaryItemContainer";

export default function SummaryMainFrame() {
  const loadLastActionsQuery = useQuery({
    queryKey: ["loadLastActionsQuery"],
    queryFn: FetchData,
    enabled: false,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <div id="summary_main_frame">
      <h3>Последние действия</h3>
      <div
        id="summary_list_container"
        style={{
          justifyContent: loadLastActionsQuery.isFetching ? "center" : "start",
        }}
      >
        {loadLastActionsQuery.isFetching ? (
          <LoadingCircle width="64px" heigth="64px" />
        ) : (
          <SummaryItemContainer
            items={[
              { username: "Poopa", content: "poop" },
              {
                username: "Loopa",
                content:
                  "dfsndfnsdu isdbfh bhfhsdbh bbs dfhb jhbsdbfh jhdb fjhbshfbdbf  jhsdbfhbsdfbyeb jshdbfhbsdfbhsbk sbhdfhb evbfk sdvb jhbsdf bsdfbhwe uh bhjbf ",
              },
              { username: "Loopa", content: "loop" },
            ]}
          />
        )}
      </div>
      <button
        id="refresh_summary_button"
        onClick={() => loadLastActionsQuery.refetch()}
      >
        Обновить
      </button>
    </div>
  );
}

async function FetchData(): Promise<any[]> {
  console.log("start");
  await new Promise((res) => setTimeout(res, 3000));
  //   const response = await fetch(serverBaseURL + getLastActionsURL);
  const response = new Response();
  console.log("end");
  return await response.json();
}
