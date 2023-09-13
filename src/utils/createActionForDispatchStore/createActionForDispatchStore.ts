export const createActionForDispatchStore = (booksFromApi: any[], type: string) => ({
    type: type,
    loading: false,
    loaded: true,
    error: '',
    books: booksFromApi.map((book) => {
      return {
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        categories: book.volumeInfo.categories,
        description: book.volumeInfo.description,
        imageLinks: book.volumeInfo.imageLinks
          ? {
              smallThumbnail: book.volumeInfo.imageLinks.smallThumbnail
                ? book.volumeInfo.imageLinks.smallThumbnail
                : undefined,
              thumbnail: book.volumeInfo.imageLinks.thumbnail
                ? book.volumeInfo.imageLinks.thumbnail
                : undefined,
            }
          : undefined,
        publishedDate: book.volumeInfo.publishedDate,
      };
    }),
  });