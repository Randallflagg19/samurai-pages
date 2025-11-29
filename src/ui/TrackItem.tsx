import clsx from "clsx";
import type { TrackListItemOutput } from "../api/api";
import styles from "./TracksList.module.css";

type Props = {
  track: TrackListItemOutput;
  onSelect: (trackId: string) => void;
  isSelected: boolean;
};

export function TrackItem({ track, onSelect, isSelected }: Props) {
  const handleClick = () => {
    onSelect?.(track.id);
  };

  const obj = {
    [styles.track]: true,
    [styles.selected]: isSelected,
  };

  const className = clsx(obj);

  return (
    <li
      className={className}
      key={track.id}
      style={{
        borderColor: isSelected ? "orange" : "#747bff",
      }}
    >
      <div onClick={handleClick}>{track.attributes.title}</div>
      <audio src={track.attributes.attachments[0].url} controls />
    </li>
  );
}

// 30
