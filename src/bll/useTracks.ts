import { useState, useEffect } from "react";
import { type TrackListItemOutput, getTracks } from "../api/api";

export function useTracks() {
  const [tracks, setTracks] = useState<Array<TrackListItemOutput> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTracks()
      .then((data) => {
        setTracks(data);
        setError(null);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Failed to load tracks");
        setTracks([]);
      });
  }, []);

  return { tracks, error };
}
