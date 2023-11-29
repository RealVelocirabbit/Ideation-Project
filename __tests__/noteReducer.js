import subject from "../client/reducers/noteReducer";

describe("MainContainer Reducer", () => {
  let state;

  beforeEach(() => {
    const initialState = {
      Interested: [],
      Applied: [],
      Interviewed: [],
      FollowedUp: [],
      Accepted: [],
      Rejected: [],
    };
  });
  describe("default state", () => {
    it("should return a default state when given an undefined input", () => {
      expect(subject(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe("unrecognized action types", () => {
    it("should return the original without any duplication", () => {
      const action = { type: "fhdaskjfadsh" };
      expect(subject(state, action)).toBe(state);
    });
  });

  describe("");
});
