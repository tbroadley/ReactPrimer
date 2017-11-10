import React, { Component } from 'react';


class NewCompForm extends Component {

  render() {
    const {
      extractCompNames,
      handleInputChange,
      handleSelectChange,
      handleSubmit,
      components
    } = this.props

    // Creates an option element in dropdown menu for each component name in state.
    const componentNames = extractCompNames(components)
    const parents = componentNames.map((parent, index) => {
      return <option key={index} value={parent}>
        {parent}
      </option>
    })

    return (
      <div>
      <p>Link vs LINK - Should these be different components?</p>
        <fieldset>
          <legend>Create a new component</legend>
          <form>
            Name:<br />
          <input
            type='text'
            name='name'
            onChange={handleInputChange}
            />
          <br />
          Parent:
          <br />
          <select
            name='parent'
            onChange={handleSelectChange}
            >
            <option value='-'>-</option>
            {parents}
          </select>
          <br />
          <br />
          <input
            type='submit'
            value='Add Component'
            onClick={handleSubmit}
            />
        </form>
      </fieldset>
    </div>
  );
}
}

export default NewCompForm;
