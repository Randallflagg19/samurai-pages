import { useTrackDetails } from "../bll/useTrackDetails";
import styles from "./TrackDetails.module.css";

type Props = {
  trackId: string | null;
};

export function TrackDetails({ trackId }: Props) {
  const { trackDetails } = useTrackDetails(trackId);

  return (
    <div className={styles.track}>
      <h2>Details</h2>
      {!trackDetails && !trackId && "Track is not  selected"}
      {!trackDetails && trackId && "Loading..."}
      {trackDetails && trackId && trackDetails.id !== trackId && "Loading..."}
      {trackDetails && (
        <div>
          <h3>{trackDetails.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{trackDetails.attributes.lyrics ?? "No lyrics"}</p>
        </div>
      )}
    </div>
  );
}

// 24 15
