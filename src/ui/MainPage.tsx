import { TrackDetails } from "./TrackDetails";
import { TracksList } from "./TracksList";
import { useTrackSelection } from "../bll/useTrackSelection";

export function MainPage() {
  const { trackId, handleTrackSelect } = useTrackSelection();

  return (
    <div>
      <div style={{ display: "flex", gap: "40px" }}>
        <TracksList
          selectedTrackId={trackId}
          onTrackSelect={handleTrackSelect}
        />
        <TrackDetails trackId={trackId} />
      </div>
    </div>
  );
}

// 15
