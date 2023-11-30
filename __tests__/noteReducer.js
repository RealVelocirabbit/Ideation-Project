import reducer, { syncData, deletePost } from "../client/reducers/noteReducer";



describe("MainContainer Reducer", () => {
  let state;

  beforeEach(() => {
    state = {
      Interested: [],
      Applied: [],
      Interviewed: [],
      FollowedUp: [],
      Accepted: [],
      Rejected: [],
    };
  });
  
  describe('default state action not defined', () => {
    it('Should return a default state when given an undefined input', () => {
      // since we are exporting noteSlice.reducer when we import from that file without deconstructing we are importing the reducer already so we would not sat subject.reducer. to test default state we do this...
      const action = {};
      const newState = reducer(undefined, action); 
      console.log(newState);
      expect(newState).toEqual(state);
    });
    it("should return the original without any duplication", () => {
      const action = {type: "lasdjflskf"};
      const newState = reducer(state, action)
      expect(newState).toBe(state);
    });
  });

  describe("syncData", () => {
    const testNote = {
      company: "Codesmith",
      title: "King",
      salary: 10389,
      status: "Interested",
      link: "blah"
    };
    const data = {
      Interested: [testNote, testNote],
      Applied: [testNote],
      Interviewed: [testNote],
      FollowedUp: [testNote],
      Accepted: [testNote],
      Rejected: [testNote],
    };
    const action = syncData(data);
    // expect(syncData(data)).toEqual(state)
    it('state should not be strictly equal to returned state', () => {
      const initialState = state;
      const returnState = reducer(state, syncData(state));
      // console.log('are they equal: ', state === returnState);//false
      console.log('this is returnState', returnState);
      expect(returnState).not.toBe(initialState);
    })

    it("should mutate state properties to include passed in data", () => {
      const newState = reducer(state, action);
      expect(newState).toEqual(data);
    })
  /*******************************TESTS FOR EACH PROPERTY*******************************/
    it('include a Interested array not strictly equal to the original & toEqual data.Interested', () => {
      const initialInterested = state.Interested;
      const newData = data.Interested;
      const { Interested } = reducer(state, action);
      expect(Interested).not.toBe(initialInterested);
      expect(Interested).toEqual(newData);
    })
    it('include a Applied not strictly equal to the original & toEqual data.Applied', () => {
      const initialApplied = state.Applied
      const newData = data.Applied;
      const { Applied } = reducer(state, action);
      expect(Applied).not.toBe(initialApplied);
      expect(Applied).toEqual(newData);
    })
    it('include a Applied not strictly equal to the original & toEqual data.Applied', () => {
      const initialInterviewed = state.Interviewed;
      const newData = data.Interviewed;
      const { Interviewed } = reducer(state, action);
      expect(Interviewed).not.toBe(initialInterviewed);
      expect(Interviewed).toEqual(newData);
    })
    it('include a Applied not strictly equal to the original & toEqual data.Applied', () => {
      const initialFollowedUp = state.FollowedUp;
      const newData = data.FollowedUp;
      const { FollowedUp } = reducer(state, action);
      expect(FollowedUp).not.toBe(initialFollowedUp);
      expect(FollowedUp).toEqual(newData);
    })
    it('include a Applied not strictly equal to the original & toEqual data.Applied', () => {
      const initialAccepted = state.Accepted;
      const newData = data.Accepted;
      const { Accepted } = reducer(state, action);
      expect(Accepted).not.toBe(initialAccepted);
      expect(Accepted).toEqual(newData);
    })
    it('include a Applied not strictly equal to the original & toEqual data.Applied', () => {
      const initialRejected = state.Rejected
      const newData = data.Rejected;
      const { Rejected } = reducer(state, action);
      expect(Rejected).not.toBe(initialRejected);
      expect(Rejected).toEqual(newData);
    })
    /*******************************END TESTS FOR EACH PROPERTY*******************************/
  });
  describe('test deleteNote method', () => {
    let data;
   beforeEach(() => {
    data = {
      Interested: [],
      Applied: [],
      Interviewed: [],
      FollowedUp: [],
      Accepted: [],
      Rejected: [],
    };
   })
    it('state should not be strictly equal to returned state', () => {
      const initialState = state;
      const returnState = reducer(state, syncData(state));
      expect(returnState).not.toBe(initialState);
    })
    /*******************************TESTS FOR EACH PROPERTYS REMOVAL*******************************/
    // dispatch(deletePost({ _id: _id, status: status }));
    it('object in Interested array should be found by id and removed', () => {
      data.Interested.push({company: "Apple", link: "www.apple.com", salary: "9000", status: "Interested", title: "CEO", _v: 0, _id: "54321"}, {company: "Apple", link: "www.apple.com", salary: "9000", status: "Interested", title: "CEO", _v: 0, _id: "67890"},  {company: "Apple", link: "www.apple.com", salary: "9000", status: "Interested", title: "CEO", _v: 0, _id: "12345"});

      const shouldEqual = [{company: "Apple", link: "www.apple.com", salary: "9000", status: "Interested", title: "CEO", _v: 0, _id: "54321"}, {company: "Apple", link: "www.apple.com", salary: "9000", status: "Interested", title: "CEO", _v: 0, _id: "67890"}];

      const initialInterested = data.Interested;
      const actionData = { _id: "12345", status: "Interested"};
      const { Interested } = reducer(data, deletePost(actionData));
      expect( Interested ).not.toEqual(initialInterested);
      expect( Interested ).toEqual(shouldEqual);
    })
    /*******************************END TESTS FOR EACH PROPERTYS REMOVAL*******************************/
  })
});

    // need id, and a status, need selected status to have a corrisponding id.
    /*
    object order 
    {
      company: "Apple",
      link: "www.apple.com",
      salary: "9000",
      status: "aaaa",
      title: "CEO",
      _v: 0,
       _id: "12345"
      }
      {company: "Apple", link: "www.apple.com", salary: "9000", status: "CHANGETOSTATUS", title: "CEO", _v: 0, _id: "12345"}
    */ 
    /* 
    const statusArray = [
    'Interested',
    'Applied',
    'Interviewed',
    'FollowedUp',
    'Accepted',
    'Rejected',
  ]
  */