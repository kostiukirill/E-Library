export interface BookDataType {
    id: string;
    title: string;
    authors: string[];
    categories: string[];
    description: string;
    imageLinks?: {
        smallThumbnail?: string;
        thumbnail?: string;
    };
    publishedDate: string;
}

export interface StatePropsType {
    searchInputValue: string;
    selectGenres: string;
    selectSort: string;
    books: Array<BookDataType>;
    loaded: boolean;
    loading: boolean;
    error: string;
}
