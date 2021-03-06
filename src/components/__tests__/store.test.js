import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("My Connected React-Redux Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      myState: "Jungle Art Print Unframed"
    });
  });

  it("should render with given state from Redux store", () => {});
});
