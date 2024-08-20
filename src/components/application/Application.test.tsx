import { render, screen } from "@testing-library/react"
import { Application } from "./Application"


describe('Application', () => {
    test('renders correctly', () => {
        render(<Application/>)

        const pageHeading = screen.getByRole("heading", {
            level:1,
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole("heading", {
            level:2,
        });
        expect(sectionHeading).toBeInTheDocument();
        
        const paragraphElement = screen.getByText("All fields are mandatory");
        expect(paragraphElement).toBeInTheDocument();

        const titleElement = screen.getByTitle("title");
        expect(titleElement).toBeInTheDocument();

        const testIdElement = screen.getByTestId("custom-element");
        expect(testIdElement).toBeInTheDocument();


        const nameElement = screen.getByRole("textbox", {
            name: "Name",   
        })
        expect(nameElement).toBeInTheDocument();


        const nameElement2 = screen.getByLabelText("Name", {
            selector: "input"
        });
        expect(nameElement2).toBeInTheDocument();


        const nameElement3 = screen.getByPlaceholderText("Fullname");
        expect(nameElement3).toBeInTheDocument();

        const nameElement4 = screen.getByDisplayValue("Manojkumar");
        expect(nameElement4).toBeInTheDocument();


        const bioElement = screen.getByRole("textbox", {
            name: "Bio",
        })
        expect(bioElement).toBeInTheDocument();

        const imgElement = screen.getByAltText("person with PC");
        expect(imgElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox")
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox")
        expect(termsElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole("button")
        expect(submitButtonElement).toBeInTheDocument();
    });
});