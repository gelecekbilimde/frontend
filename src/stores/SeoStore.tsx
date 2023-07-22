import { create } from 'zustand';

interface SimpleMetaData {
  title: string;
  description: string;
  author?: string;
}

interface DetailedMetaData {
  title: string;
  description: string;
  facebookTitle?: string;
  facebookDescription?: string;
  facebookType: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterCreator?: string;
  twitterCard: string;
}

interface AuthStore {
  metadata: DetailedMetaData;
  setMetaData: (metadata: DetailedMetaData | SimpleMetaData) => void;
}

const defaultMetaData: () => DetailedMetaData = () => {
  return {
    title: 'Gelecek Bilimde',
    description: 'Gelecek Bilimde',
    facebookTitle: 'Gelecek Bilimde',
    facebookDescription: 'Gelecek Bilimde',
    facebookType: 'website',
    twitterTitle: 'Gelecek Bilimde',
    twitterDescription: 'Gelecek Bilimde',
    twitterCreator: 'Gelecek Bilimde',
    twitterCard: 'summary',
  };
};

function isDetailedMetaData(metadata: DetailedMetaData | SimpleMetaData): metadata is DetailedMetaData {
  return (metadata as DetailedMetaData).facebookTitle !== undefined;
}

const useSeoStore = create<AuthStore>((set) => ({
  metadata: defaultMetaData(),
  setMetaData: (metadata: DetailedMetaData | SimpleMetaData) => {
    if (isDetailedMetaData(metadata)) {
      set({ metadata });
    } else {
      set({
        metadata: {
          ...metadata,
          facebookTitle: metadata.title,
          facebookDescription: metadata.description,
          facebookType: 'website',
          twitterTitle: metadata.title,
          twitterDescription: metadata.description,
          twitterCreator: metadata.author ?? 'Gelecek Bilimde',
          twitterCard: 'summary',
        },
      });
    }
  },
}));

export default useSeoStore;
