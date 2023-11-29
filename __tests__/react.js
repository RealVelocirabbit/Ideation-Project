import React from "react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../client/App.jsx";
import store from "../client/store.js";

import MainContainer from "../client/containers/MainContainer.jsx";
import Post from "../client/components/Post.jsx";
import JobContainer from "../client/containers/JobContainer.jsx";
import DisplayNotes from "../client/components/DisplayNotes.jsx";

// import regeneratorRuntime from 'regenerator-runtime';//??

describe("testing react components", () => {
  describe("testing delete post method", () => {
    const props = {
      _id: "65662246b68f162dffa80a77",
      company: "test company",
      title: "test title",
      status: "test status",
      salary: "100000",
      link: "www.codesmith.io",
    };

    beforeAll(() => {
      render(<Post {...props} />);
    });

    test("expect the ", () => {
      expect(
        text.getByText("65662246b68f162dffa80a77")
      ).toHaveTextContent("65662246b68f162dffa80a77");
    });
  });
});
