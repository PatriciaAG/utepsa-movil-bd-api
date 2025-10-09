export interface GoogleBook {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        description?: string;
        imageLinks?: {thumbnail: string;};
        publishedDate?: string;
    };
}
