export const Application = () => {
    return (
      <>
      <h1>Page Heading</h1>
      <h2>Secion Heading</h2>
      <p>All fields are mandatory</p>
      <span title="title"></span>
      <div data-testid="custom-element">Custom HTML element</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Fullname"
              value="Manojkumar"
              onChange={() => {}}
            />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              id="bio"
            />
          </div>
          <div>
            <img src="" alt="person with PC" />
            <label htmlFor="job-location">Name</label>
            <select id="job-location">
              <option value="">Select a country</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>
            </select>
          </div>
          <div>
            <label>
              <input type="checkbox" id="terms" /> I agree to the terms and
              conditions
            </label>
          </div>
          <button>Submit</button>
        </form>
      </>
    )
  }