import { render, screen } from "@testing-library/react";
import ReactDOMServer from "react-dom/server";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import Products from "../Products";

const data: any = {
   
    image:
      "https://ik.imagekit.io/pimberly/5a8c13244d6da904d47144ba/93e15616/5d70e2f93d51575d590000b7.jpeg",
    brand: {
      id: "2000000000000020178",
      name: "Michael Belhadi",
      slug: "michael-belhadi"
    },
    title: "Jungle Art Print Unframed",
    id: "2000001000413620178",
    skus: [
      {
        description: "Jungle Art Print Unframed A4",
        id: "2100011000413620178",
        price: 30,
        stock: 10
      },
      {
        description: "Jungle Art Print Unframed A3",
        id: "2100021000413620178",
        price: 40,
        stock: 4
      },
      {
        description: "Jungle Art Print Unframed A2",
        id: "2100031000413620178",
        price: 50,
        stock: 10
      },
      {
        description: "Jungle Art Print Unframed A1",
        id: "2100041000413620178",
        price: 60,
        stock: 10
      },
      {
        description: "Jungle Art Print Unframed A0",
        id: "2100051000413620178",
        price: 120,
        stock: 10
      }
    ]

};

it("renders a product", () => {
  const component = render(
    <Provider store={store}>
      <Products {...(data as any)} />
    </Provider>
  );
  expect(component).toMatchSnapshot();
});
