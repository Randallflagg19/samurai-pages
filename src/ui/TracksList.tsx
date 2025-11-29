import { TrackItem } from "./TrackItem";
import { useTracks } from "../bll/useTracks";
import styles from "./TracksList.module.css";

type Props = {
  selectedTrackId: string | null;
  onTrackSelect: (trackId: string | null) => void;
};

export function TracksList({ selectedTrackId, onTrackSelect }: Props) {
  const { tracks, error } = useTracks();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tracks) {
    return <div>Loading...</div>;
  }

  if (tracks.length === 0) {
    return <div>No tracks found</div>;
  }

  const handleResetClick = () => {
    onTrackSelect?.(null);
  };

  const handleClick = (trackId: string) => {
    onTrackSelect?.(trackId);
  };

  return (
    <div>
      <button onClick={handleResetClick}>Reset</button>
      <ul className={styles.tracks}>
        {tracks.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              isSelected={track.id === selectedTrackId}
              onSelect={handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
}
