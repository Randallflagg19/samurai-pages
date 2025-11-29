import { useState } from "react";

export function useTrackSelection() {
  const [trackId, setTrackId] = useState<string | null>(null);

  const handleTrackSelect = (id: string | null) => {
    setTrackId(id);
  };

  return { trackId, handleTrackSelect };
}
