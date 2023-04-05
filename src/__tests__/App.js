import React from 'react'
import { fireEvent, render as rtlRender,screen } from '@testing-library/react'
import SearchField from './containers/SearchField'
import App from './App'
import { Provider } from 'react-redux'
import store from './Redux/store'

const render = component => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>
  )

describe("test the App component",()=>{
  test("searchComponent render or not",()=>{
    render(<App/>)
    const childElement = screen.queryByPlaceholderText("search hotel")
    expect(childElement).toBeTruthy();
  })
  test("logo render or not",()=>{
    render(<App/>)
    const logoElement = screen.queryByTestId("logo")
    expect(logoElement).toBeTruthy();
  })
})

describe("test the Seach Component",()=>{
  test("render the searchComponent with 1 button", async()=>{
    render(<SearchField/>)
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  })
   
  test("input should have type text",()=>{
    render(<SearchField/>)
    const input = screen.queryByPlaceholderText("search hotel");
    expect(input).toHaveAttribute("type","text")
  })
  test("input field if not empty",()=>{
    render(<SearchField/>)
    const input = screen.queryByPlaceholderText("search hotel");
    const loction = screen.queryByTestId("location");
    const hotel = screen.queryByTestId("hotel");
    fireEvent.change(input,{
      target:{value:"abcd"}
    });
expect(loction).toBeInTheDocument();
expect(hotel).toBeInTheDocument();
  })
  test("input field empty",()=>{
    render(<SearchField/>)
    const input = screen.queryByPlaceholderText("search hotel");
    const loction = screen.queryByTestId("locLi");
    const hotel = screen.queryByTestId("HolLi");
    fireEvent.change(input,{
      target:{value:""}
    });
expect(loction).not.toBeInTheDocument();
expect(hotel).not.toBeInTheDocument();
  })

})

