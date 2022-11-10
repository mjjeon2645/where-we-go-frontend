import BlogReviewStore from './BlogReveiwStore';

const context = describe;

describe('BlogReviewStore', () => {
  let blogReviewStore;

  beforeEach(() => {
    blogReviewStore = new BlogReviewStore();
  });

  context('A user clicks a blog review tap about place id 4', () => {
    it('loads blog reviews related the place id 4', () => {
      // TODO
      blogReviewStore.fetchBlogReviews(4);
    });
  });
});
