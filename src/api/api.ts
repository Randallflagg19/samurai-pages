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

const prepareHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  if (!apiKey) return undefined;
  return { "api-key": apiKey };
};

export const getTrack = async (
  trackId: string
): Promise<GetTrackDetailsOutput> => {
  const response = await fetch(
    `https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`,
    {
      headers: prepareHeaders(),
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
        "api-key": import.meta.env.VITE_API_KEY,
      },
    }
  );
  const json = await response.json();
  return json.data;
};
