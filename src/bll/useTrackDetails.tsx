import { useState, useEffect } from "react";
import { type GetTrackDetailsOutputData, getTrack } from "../api/api";

export function useTrackDetails(trackId: string | null) {
  const [trackDetails, setTrackDetails] =
    useState<GetTrackDetailsOutputData | null>(null);

  useEffect(() => {
    if (!trackId) {
      setTrackDetails(null);
      return;
    }
    getTrack(trackId).then((data) => {
      setTrackDetails(data.data);
    });
  }, [trackId]);

  return { trackDetails };
}
