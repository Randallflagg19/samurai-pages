export type GetTrackDetailsOutputData = {
  id: string;
  attributes: {
    title: string;
    lyrics: string | null;
  };
};

export type GetTrackDetailsOutput = {
  data: GetTrackDetailsOutputData;
};

export type AttachmentDto = {
  url: string;
};

export type TrackListItemOutputAttributesDto = {
  title: string;
  attachments: AttachmentDto[];
};

export type TrackListItemOutput = {
  id: string;
  attributes: TrackListItemOutputAttributesDto;
};

export const getTrack = async (
  trackId: string
): Promise<GetTrackDetailsOutput> => {
  const response = await fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`,
    {
      headers: {
        // "api-key": "fc236a71-a8d3-4764-970a-f09dc0718018",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch track: ${response.status}`);
  }

  const json = await response.json();
  return json;

  throw new Error("Invalid response structure");
};

export const getTracks = async (): Promise<Array<TrackListItemOutput>> => {
  const response = await fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks",
    {
      headers: {
        // "api-key": "fc236a71-a8d3-4764-970a-f09dc0718018",
      },
    }
  );
  const json = await response.json();
  return json.data;
};
