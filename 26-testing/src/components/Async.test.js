import { render, screen } from "@testing-library/react";
import Async from "./Async";

// generally we don't want to send a request to our server for test,
// this will cause a lot of traffic
// and if we are POSTing to the server, our databse might be affected
// We can go wit the approach of not even sending a request
// so I test the behavior of my component if we received the data
describe("Async compenent test", () => {
  // test 1
  test("1: should render posts if request succeeds", async () => {
    //override the builtin function which we use to fetch the data
    window.fetch = jest.fn();

    window.fetch.mockResolvedValueOnce(
      new Response(
        JSON.stringify([
          {
            id: 1,
            title: "title",
            body: "some post body",
          },
        ])
      )
    );

    render(<Async />);

    // findAllByRole, will return a promise
    const allListItems = await screen.findAllByRole("listitem");

    expect(allListItems).not.toHaveLength(0);
  });
});
