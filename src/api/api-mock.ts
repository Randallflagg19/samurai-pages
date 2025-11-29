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
  const promise = Promise.resolve({
    data: {
      id: trackId,
      attributes: {
        title: "Track 1",
        lyrics: "Lyrics 1",
      },
    },
  });
  return promise;
};

export const getTracks = async (): Promise<Array<TrackListItemOutput>> => {
  const promise = Promise.resolve([
    {
      id: "1",
      attributes: {
        title: "Track 1",
        attachments: [{ url: "https://example.com/audio.mp3" }],
      },
    },
  ]);
  return promise;
};
